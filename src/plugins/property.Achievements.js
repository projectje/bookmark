import globalHooks from '@/util/hook';
/**
 * term: 'achievements' (via trueachievements.com)
 */
globalHooks.addFilter('bookmark.property', 'bookmark/property', (propertiesHtml, language, properties) => {
    if (!(properties && properties.achievements && properties.achievements != ''))
    {
        return propertiesHtml;
    }
    let link = `https://www.trueachievements.com/game/${properties.achievements}/achievements?gamerid=592174`
    return propertiesHtml + `<a href='${link}'>🥇</a><br />`;
},  7);
