import { readFavorites } from '@/util/readFavorite'
import globalHooks from '@/util/hook';
import '@/plugins';

function category(categorydata) {
    let categoryTitleHtml = categorydata.title;
    return globalHooks.applyFilters('bookmark.category', categoryTitleHtml, 'en', categorydata);
}

/*
 *   handles Bookmarks in a SubCategory Data
 */
function bookmark(subcategorydata) {
    globalHooks.doAction('bookmark.before_output');

    let bookmarkhtml = {
        title: globalHooks.applyFilters('bookmark.title', subcategorydata.title, 'en', subcategorydata) || '',
        uri: globalHooks.applyFilters('bookmark.uri',subcategorydata.url, 'en', subcategorydata) || '',
        favicon: globalHooks.applyFilters('bookmark.favicon', subcategorydata.domain, subcategorydata) || '',
        properties: globalHooks.applyFilters('bookmark.property', "", 'en', subcategorydata) || '',
    }
    let combined_html =  globalHooks.applyFilters('bookmark.html', bookmarkhtml, 'en', subcategorydata) || ''

    globalHooks.doAction('bookmark.after_output');

    return combined_html;
}

/*
 * Handles all subcategories in a category
 */
function subcat(bookmarks, categoryslug) {
    globalHooks.doAction('subcategory.before_output');
    var html = '';
    //console.log( bookmarks);
    bookmarks.forEach(function (subcategorydata) {
        //console.log( subcategorydata.title);
        //console.log( subcategorydata);
        html += `<div id="${categoryslug}" class="grid-item col-xs-8"><div class="grid-item-content">` +
            globalHooks.applyFilters('bookmark.subcategory', subcategorydata.title, 'en', subcategorydata) + `<p>`;
        subcategorydata.bookmarks.forEach(function (bookmarkdata) {
            html += bookmark(bookmarkdata);
        });
        html += '</p></div></div>';
    });
    let masonry_sizer = '<div class="grid-sizer col-xs-12"></div>';
    html = '<div class="grid" id="' + categoryslug + '">' + html + masonry_sizer + '</div>'
    return html;
}

export function addFavorites() {
    var categorydata = {title: 'Favorites', section: 'favorites', bookmarks: []};
    var bookmarks = readFavorites();
    const maxBookmarksPerSubcategory = 10
    const maxSubCategories = 5

    if (!bookmarks || bookmarks.length < maxBookmarksPerSubcategory) { return;}

    let amountAvailable = Math.floor(bookmarks.length/maxBookmarksPerSubcategory);
    let amountToDisplay = (amountAvailable > maxSubCategories) ? maxSubCategories : amountAvailable;
    let amountInTitle =  amountToDisplay * maxBookmarksPerSubcategory;
    categorydata.title = 'Your ' + amountInTitle + ' favorites';

    var currentStart = 0;
    for (let j=0; j<amountToDisplay; j++) {
        var currentStart = j*maxBookmarksPerSubcategory;
        if (bookmarks[currentStart + maxBookmarksPerSubcategory]) {
            var tempsub = [];
            for(let i=currentStart; i < currentStart+maxBookmarksPerSubcategory; i++) {
                if (bookmarks[i][1].length > 2) { tempsub.push(JSON.parse(bookmarks[i][1]));}
            }
            let title = (currentStart+1) + ' - ' + (currentStart+maxBookmarksPerSubcategory);
            let subcategory_temp = { title: title, bookmarks: tempsub};
            categorydata.bookmarks.push(subcategory_temp);
        }
    }

    let categoryHtml = category(categorydata);
    let subcategoryHtml = subcat(categorydata.bookmarks, categorydata.section);
    document.getElementById('main_container').insertAdjacentHTML("beforeend", categoryHtml  + subcategoryHtml);
}