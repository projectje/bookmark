import globalHooks from '@/util/hook';
/**
 * term: 'api'
 */
globalHooks.addFilter('bookmark.property', 'bookmark/property', (propertiesHtml, language, properties) => {
    if (!(properties && properties.api && properties.api != ''))
    {
        return propertiesHtml;
    }
    const icon = `<img src='./img/api.png'>`;
    return propertiesHtml + `<a style='padding-left:2px;padding-right:1px;margin-left:2px;margin-right:4px;' href='${properties.api}'}'>${icon}</a><br />`;
},  10);
