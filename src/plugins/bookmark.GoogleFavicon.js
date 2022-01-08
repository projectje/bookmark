import globalHooks from '@/util/hook';

/*
 * description: shows a google favicon based on the domain given
 */

/*
commented out to give priority to local icons, comment local icons and uncomment this to use google icons

globalHooks.addFilter('bookmark.favicon', 'bookmark/googlefavicon', (domain) => {
        if (domain)
        {
                return `<img src="https://s2.googleusercontent.com/s2/favicons?domain=${domain}">`;
        }
        else
        {
                return domain;
        }
}, 10);

*/