import globalHooks from '@/util/hook';
/**
 * term: 'twitter'
 */
globalHooks.addFilter('bookmark.property', 'bookmark/property', (propertiesHtml, language, properties) => {
    if (!(properties && properties.twitter && properties.twitter != ''))
    {
        if (properties.domain) {
            properties.twitter = properties.domain.split(".")[0]
        }
        else {
            return propertiesHtml
        }
    }
    const icon = `<img src='./img/twitter.png'>`;
    const link = `https://www.twitter.com/${properties.twitter}`;

    return propertiesHtml + `<a href='${link}'>${icon}</a><br />`;
},  10);
