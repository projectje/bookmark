import globalHooks from '@/util/hook';

/*
 * we also need preferred language if we want to make a choice on term to display
 */
globalHooks.addFilter('filter.bookmark.link', 'bookmark/Tippylink', (url, language, bookmark) =>
        `<a href="${url}" data-tippy-arrow="true" data-tippy-content="${bookmark.properties}"  >${bookmark.title}</a>`, 10);