import globalHooks from '@/util/hook';
/**
 * term: 'reddit'
 */
globalHooks.addFilter('bookmark.property', 'bookmark/property', (propertiesHtml, language, properties) => {
    if (!(properties && properties.reddit && properties.reddit != ''))
    {
        if (properties.domain) {
            properties.reddit = properties.domain.split(".")[0]
        }
        else {
            return propertiesHtml
        }
    }
    const icon = `<img src='./img/reddit.png'>`;
    const link = `https://www.reddit.com/r/${properties.reddit}`;

    return propertiesHtml + `<a href='${link}'>${icon}</a><br />`;
},  10);
