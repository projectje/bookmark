import globalHooks from '@/util/hook';
/**
 * term: 'youtube'
 */
globalHooks.addFilter('bookmark.property', 'bookmark/property', (propertiesHtml, language, properties) => {
    if (!(properties && properties.youtube && properties.youtube != ''))
    {
        if (properties.domain) {
            properties.youtube = properties.domain.split(".")[0]
        }
        else {
            return propertiesHtml
        }
    }
    const icon = `<img src='./img/youtube.png'>`;
    const link = `https://www.youtube.com/${properties.youtube}`;

    return propertiesHtml + `<a href='${link}'>${icon}</a><br />`;
},  10);
