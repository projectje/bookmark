import globalHooks from '@/util/hook';
/**
 * term: 'playstore'
 */
globalHooks.addFilter('bookmark.property', 'bookmark/property', (propertiesHtml, language, properties) => {
    if (!(properties && properties.playstore && properties.playstore != ''))
    {
        return propertiesHtml
    }
    const icon = `<img src='./img/playstore.png'>`;
    const link = `https://play.google.com/store/apps/details?id=${properties.playstore}`;

    return propertiesHtml + `<a href='${link}'>${icon}</a><br />`;
},  10);
