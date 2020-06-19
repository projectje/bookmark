import globalHooks from '@/util/hook';

/*
 * description: shows a google favicon based on the domain given
 */
globalHooks.addFilter('bookmark.favicon', 'bookmark/googlefavicon', (domain) =>
        `<img src="https://s2.googleusercontent.com/s2/favicons?domain=${domain}">`, 10);