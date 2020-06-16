const propertyProviderList = {
    providers:
    [
        {
            property_term: 'description',
            nouri: true
        },

        {
            property_term: 'wikipedia',
            icon: true,
            uri: 'https://en.wikipedia.org/wiki/{1}'
        },

        {
            property_term: 'api',
            displaystyle: 'padding-left:2px;padding-right:1px;margin-left:2px;margin-right:4px;',
            icon: true,
        },

        {
            property_term: 'facebook',
            icon: true,
            uri: 'https://www.facebook.com/{1}'
        },

        {
            property_term: 'twitter',
            icon: true,
            uri: 'https://www.twitter.com/{1}'
        },

        {
            property_term: 'youtube',
            icon: true,
            uri: 'https://www.youtube.com/{1}'
        },

        {
            property_term: 'reddit',
            icon: true,
            uri: 'https://www.reddit.com/{1}'
        },

        {
            property_term: 'playstore',
            icon: true,
            uri: 'https://play.google.com/store/apps/details?id={1}'
        },

        {
            property_term: 'news',
            displayname:  '📰',
        },

        {
            property_term: 'nasdaq',
            displaystyle: 'padding-left:2px;padding-right:1px;margin-left:2px;margin-right:4px;font-size:12px;background:#0090BA;color:#fff',
            uri: 'https://www.nasdaq.com/market-activity/stocks/{1}'
        },
        {
            property_term: 'achievements',
            displayname:  '🥇',
            uri: 'https://www.trueachievements.com/game/{1}/achievements?gamerid=592174'
        },
        {
            property_term: 'nyse',
            displaystyle: 'padding-left:2px;padding-right:1px;margin-left:2px;margin-right:4px;font-size:12px;background:#75CDF0;color:#fff',
            uri: 'https://www.nyse.com/quote/XNYS:{1}'
        }
    ]
}

export default propertyProviderList;