import globalHooks from '@/util/hook';

/*
 * Display of subcategory title and subtitle
 * todo: language dependent
 */
globalHooks.addFilter('bookmark.subcategory', 'subcategory/title', (title, language, c) => {
    if (title) {
        let prefix = (c.subcategory_link) ? `<a href="${c.subcategory_link}">` : '';
        let postfix = (c.subcategory_link) ? `</a>` : '';
        return `${prefix}<h4>${title}</h4>${postfix}`;
    } else {
       return title;
    }
}, 10);