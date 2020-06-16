import propertyProviderList from '@/module/properties';
import '@/assets/icon';
import '@/assets/data';

function handleproperty(uri, token, displayname, displaystyle) {
    return `<a href='${uri.replace(new RegExp("\\{1\\}","g"),token)}' style='${displaystyle}'>${displayname}</a><br />`;
}

function handleProperties(bookmark) {
    var html = '';

    propertyProviderList.providers.forEach(function (p) {
        if (bookmark[p.property_term]) {
            var displayname = '';
            var uri = '';
            var token = bookmark[p.property_term];
            var displaystyle = '';
            if (p.icon) {
                displayname = `<img src='./img/${p.property_term}.png'>`;
            } else {
                displayname = (p.displayname) ? p.displayname : token;
            }

            if (p.displaystyle) {
                displaystyle = p.displaystyle;
            }

            if (p.nouri) {
                html += token
            } else {
                uri = (p.uri) ? p.uri : bookmark[p.property_term];

                html += handleproperty(uri, token, displayname, displaystyle);
            }
        }
    });
    return html;
}

function handleTitle(collection) {

    return (collection.title) ? `<h2>${collection.title}</h2>` : '';
}

function handleSubTitle(collection) {
    var html = '';
    if (collection.subtitle) {
        var prefix = (collection.subtitle_link) ? `<a href="${collection.subtitle_link}">` : '';
        var postfix = (collection.subtitle_link) ? `</a>` : '';
        html += `${prefix}<h3>${collection.subtitle}</h3>${postfix}`;
    }
    return html;
}

function handleBookmarks(collection)
{
    var html = '';
    collection.bookmarks.forEach(function (b) {
        html += `<div id="${collection.section}" class="grid-item col-xs-8"><div class="grid-item-content"><h4>${b.title}</h4><p>`;
        b.bookmarks.forEach(function (c) {
            html += `<img src="https://s2.googleusercontent.com/s2/favicons?domain=${c.domain}"> <a href="${c.url}" data-tippy-arrow="true" data-tippy-content="${handleProperties(c)}"  >${c.title}</a><br /> `;
            //html += '<span style="z-index:10; display: inline-block;height:5px;padding-bottom:0em;padding-top:0em">' + handleProperties(c) + '</span><br />';
            //html += '<span style="z-index:10; display: inline-block;height:5px;padding-bottom:0em;padding-top:0em" data-tippy-arrow="true" data-tippy-content="test">T</span><br />';
            //html += `<span class="tippy allowHTML" style="z-index:10; display: inline-block;height:5px;padding-bottom:0em;padding-top:0em" data-tippy-arrow="true" data-tippy-content="${handleProperties(c)}">T</span><br />`;
        });
        html += '</p></div></div>';
    });
    return html;
}


export function addBookmarks(collection) {
    var ref = document.getElementById('main_container').insertAdjacentHTML("beforeend", handleTitle(collection) + handleSubTitle(collection) +
        '<div class="grid" id="' + collection.section + '">' + handleBookmarks(collection)  + '<div class="grid-sizer col-xs-12"></div></div>');
    return ref;
}
