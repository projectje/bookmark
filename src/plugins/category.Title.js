import globalHooks from '@/util/hook';

/*
 * Display of category title and subtitle
 * todo: language dependent
 */
globalHooks.addFilter('bookmark.category', 'category/title', (title, language, c) => {
    var titleHtml = (title) ? `<h2>${title}</h2>` : '';

    if (c.subtitle) {
        let prefix = (c.subtitle_link) ? `<a href="${c.subtitle_link}">` : '';
        let postfix = (c.subtitle_link) ? `</a>` : '';
        titleHtml += `${prefix}<h3>${c.subtitle}</h3>${postfix}`;
    }
    return titleHtml;
}, 10);