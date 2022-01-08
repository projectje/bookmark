![Tasty](https://raw.githubusercontent.com/projectje/bookmark/master/social_preview.jpg)

# bookmark

Have a static page for displaying your bookmarks (an example is on https://ed.je).

- Assets/Data : contains your json files containing your bookmarks. You can generate these json files with any additional tooling or edit them manually. It's pretty straightforward to generate these files from e.g. exporting them from your browser or generating them from a directory of .url or .md files.

Then build:

## build

run ```npm run build``` to build the solution. Then copy the contents
of \dist to whereever.

## bookmarks
Bookmarks are placed in json files in ```/assets/data``` , either
edit these json files manually or generate them from e.g.
.url files or a browser export.

# Templates

```/app/*.js``` contains 2 templates. One for the bookmarks and one for the favorites that appear once a user has clicked enough bookmarks. The templates can be seen as blocks that appear on the screen. So you can add more templates here or change the existing ones.

## properties

In the current templates I use properties:

Each url can have properties such as the reddit forum, the twitter
account, the stock symbol etc. Each property is a plugin inside
```plugins/property.*.js``` you add your own properties there or
edit existing ones. They render as popovers by default.

# Plugins

## plugin: bookmark Html

```/plugins/bookmark.Html.js``` renders 1 bookmark: feel free  to adjust this to how you want to render one bookmark on your own site.

## plugin: bookmark Title
```/plugins/bookmark.Title.js``` renders the title of the bookmark or if it has not title
the url, feel free to adjust this to how you want to render titles of bookmarks on your site.

# plugin: subcategory Title
```/plugins/subcategory.Title.js``` renders the subcategory title (a block of bookmarks)

## plugin: category Title
```/plugins/category.Title.js``` renders the category title (a title above a set of blocks of bookmarks)

## plugin: GoogleFavicon

renders favicons from Google so that you do not have to supply icons yourself for the bookmarks.
(then disable Favicon plugin).

## plugin: Favicon

Run ```npm run icons``` to download the favicons for all urls
in all data files in the ```/assets/data``` folder if you want to serve each icon statically.
(then disable GoogleFavicon plugin).

## plugin: Youtube

```/plugins/property.Youtube.js``` generates a property linking to a YouTube site following `https://www.youtube.com/results?search_query=${properties.youtube}` based on the title of the bookmark.

## plugin: Wikipedia

```/plugins/property.Wikipedia.js``` generates a property linking to the corresponding Wikipedia site of the bookmark based on the domain of the bookmark.

## plugin: Twitter
```/plugins/property.Twitter.js``` renders the twitter account of the bookmark based on the domain of the bookmark.

## plugin: Reddit
```/plugins/property.Reddit.js``` renders the reddit forum of the bookmark based on
the domain

## plugin: PlayStore
```/plugins/property.Playstore.js``` renders the playstore link if the property playstore
has been added to the bookmark data.

## plugin: NYSE
```/plugins/property.NYSE.js``` renders the NYSE symbol if the property nyse has
been set for a bookmark in the data

## plugin: Nasdaq
```/plugins/property.Nasaq.js``` renders the Nasdaq symbol if the nasdaq property has been
set in the bookmark data

## plugin: Google
```/plugins/property.Google.js``` renders the Google Search link based on the title.

## plugin: Facebook
```/plugins/property.Facebook.js``` renders the Facebook link for a bookmark

## plugin: Api
```/plugins/property.Api.js``` renders the API for a bookmark

## plugin: Achievements
```/plugins/property.Achievements.js``` renders the achievements site for a game bookmark





# using

- https://github.com/WordPress/gutenberg : for the hooks and plugins
- https://github.com/desandro/jquery-bridget : for the masonry in default site
- https://github.com/atomiks/tippyjs: for the popovers