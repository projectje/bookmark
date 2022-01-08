import globalHooks from '@/util/hook';

/*
 * we also need preferred language if we want to make a choice on term to display
 */
globalHooks.addFilter('bookmark.title', 'bookmark/title', (title, language, bookmark) => {
        let term = title || '';
        let uri = bookmark && bookmark.uri || '';
        return (term) ? term : uri;
}, 10);