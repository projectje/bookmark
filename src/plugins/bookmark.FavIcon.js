import globalHooks from '@/util/hook';

/*
 * description: shows a google favicon based on the domain given
 */
globalHooks.addFilter('bookmark.favicon', 'bookmark/favicon', (domain) =>
{
    if (domain)
    {
        // for this we need the full domain passed not only the partial
        // so not wikipedia.org but nl.wikipedia.org
        if (domain && domain.split("/").length > 1) {
        return `<img src="` + './img/' + domain.split("/")[2].split('.').reverse().join('/') + "/favicon.png" + `">`;
        }
    }
    else
    {
        return domain;
    }
}, 10);