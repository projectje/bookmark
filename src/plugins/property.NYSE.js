import globalHooks from '@/util/hook';
/**
 * term: 'nyse'
 */
globalHooks.addFilter('bookmark.property', 'bookmark/property', (propertiesHtml, language, properties) => {
    if (!(properties && properties.nyse && properties.nyse != ''))
    {
        return propertiesHtml;
    }
    let displaystyle = 'padding-left:2px;padding-right:1px;margin-left:2px;margin-right:4px;font-size:12px;background:#75CDF0;color:#fff';
    let link = `https://www.nyse.com/quote/XNYS:${properties.nyse}`
    return propertiesHtml + `<a style='${displaystyle}' href='${link}'>${properties.nyse}</a><br />`;
},  7);
