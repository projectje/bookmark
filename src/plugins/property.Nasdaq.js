import globalHooks from '@/util/hook';
/**
 * term: 'nasdaq'
 */
globalHooks.addFilter('bookmark.property', 'bookmark/property', (propertiesHtml, language, properties) => {
    if (!(properties && properties.nasdaq && properties.nasdaq != ''))
    {
        return propertiesHtml;
    }
    let displaystyle = 'padding-left:2px;padding-right:1px;margin-left:2px;margin-right:4px;font-size:12px;background:#0090BA;color:#fff';
    let link = `https://www.nasdaq.com/market-activity/stocks/${properties.nasdaq}`
    return propertiesHtml + `<a style='${displaystyle}' href='${link}'>${properties.nasdaq}</a><br />`;
},  7);
