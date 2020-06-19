import globalHooks from '@/util/hook';
/**
 * term: 'facebook'
 */
globalHooks.addFilter('bookmark.property', 'bookmark/property', (propertiesHtml, language, properties) => {
    if (!(properties && properties.facebook && properties.facebook != ''))
    {
        if (properties.domain) {
            properties.facebook = properties.domain.split(".")[0]
        }
        else {
            return propertiesHtml
        }
    }
    const icon = `<img src='./img/facebook.png'>`;
    const link = `https://www.facebook.com/${properties.facebook}`;

    return propertiesHtml + `<a href='${link}'>${icon}</a><br />`;
},  10);
