import globalHooks from '@/util/hook';
/**
 * term: 'wikipedia'
 * renders a wikipedia icon with the a link to wikipedia of the given value
 * example: new Wikipedia('example', 'en')
 */
globalHooks.addFilter('bookmark.property', 'bookmark/property', (propertiesHtml, language, properties) => {
    if (!(properties && properties.wikipedia && properties.wikipedia != ''))
    {
        if (properties.domain) {
            properties.wikipedia = properties.domain.split(".")[0]
        }
        else {
            return propertiesHtml
        }
    }
    const icon = `<img src='./img/wikipedia.png'>`;

    var link = "";
    if (language == 'en') {
        link = `https://en.wikipedia.org/wiki/${properties.wikipedia}`;
    } else {
        link = `https://en.wikipedia.org/wiki/${properties.wikipedia}`;
    }

    return propertiesHtml + `<a href='${link}'>${icon}</a><br />`;

},  10);
