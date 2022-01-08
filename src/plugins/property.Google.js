import globalHooks from '@/util/hook';
/**
 * term: 'google'
 * todo: make this also language dependent
 */
globalHooks.addFilter('bookmark.property', 'bookmark/property', (propertiesHtml, language, properties) => {
    if (!(properties && properties.google && properties.google != ''))
    {
        if (properties.title) {
            properties.google = encodeURI(properties.title)
        }
        else {
            return propertiesHtml
        }
    }
    const icon = `<img src='./img/google.png'>`;
    var link = '';
    if (language='en') {
       link = `https://www.google.com/search?q=${properties.google}&hl=en&gl=en`;
    }
    else
    {
       link = `https://www.google.com/search?q=${properties.google}&hl=en&gl=en`;
    }

    return propertiesHtml + `<a href='${link}'>${icon}</a><br />`;
},  10);