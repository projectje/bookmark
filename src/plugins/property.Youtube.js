import globalHooks from '@/util/hook';
/**
 * term: 'youtube'
 */
globalHooks.addFilter('bookmark.property', 'bookmark/property', (propertiesHtml, language, properties) =>
{
    if (!(properties && properties.youtube && properties.youtube != ''))
    {
        if (properties.title)
        {
            properties.youtube = encodeURI(properties.title)
        }
        else
        {
            return propertiesHtml
        }
    }
    const icon = `<img src='./img/youtube.png'>`;
    const link = `https://www.youtube.com/results?search_query=${properties.youtube}`;

    return propertiesHtml + `<a href='${link}'>${icon}</a><br />`;
}, 10);
