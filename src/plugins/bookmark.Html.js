import globalHooks from '@/util/hook';

/*
 * edje render of a bookmark
 */
globalHooks.addFilter('bookmark.html', 'edje/bookmarkhtml', (bookmarkhtml, language, subCategoryData) =>
    `${bookmarkhtml.favicon} ` +
    `<a href="${bookmarkhtml.uri}" ` +
    `data-tippy-arrow="true" ` +
    `data-tippy-content="${bookmarkhtml.properties}">${bookmarkhtml.title}</a>` +
    `<br>`, 10);
