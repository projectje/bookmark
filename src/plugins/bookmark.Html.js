import globalHooks from '@/util/hook';

function json(context) {
    return JSON.stringify(context).replace(/"/g, "'");
}

/*
 * edje render of a bookmark
 */
globalHooks.addFilter('bookmark.html', 'edje/bookmarkhtml', (bookmarkhtml, language, subCategoryData) =>
    `${bookmarkhtml.favicon} ` +
    `<a href="${bookmarkhtml.uri}" ` +
    `onclick="w(${json(subCategoryData)})" ` +
    `data-tippy-arrow="true" ` +
    `data-tippy-content="${bookmarkhtml.properties}">${bookmarkhtml.title}</a>` +
    `<br>`, 10);
