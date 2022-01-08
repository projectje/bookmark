import globalHooks from '@/util/hook';
import '@/plugins';

/*
 *  Handles Category Data
 */
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
        //favicon: globalHooks.applyFilters('bookmark.favicon', subcategorydata.domain, subcategorydata) || '',
        favicon: globalHooks.applyFilters('bookmark.favicon', subcategorydata.url, subcategorydata) || '',
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
    bookmarks.forEach(function (subcategorydata) {
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

export function addBookmarks(categorydata) {
    let categoryHtml = category(categorydata);
    let subcategoryHtml = subcat(categorydata.bookmarks, categorydata.section);
    document.getElementById('main_container').insertAdjacentHTML("beforeend", categoryHtml  + subcategoryHtml);
}
