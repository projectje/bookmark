# bookmark
Serverless bookmarks management

Little JavaScript project where you maintain bookmarks in the folder
data and then build the project to read if from local filesystem in
a web browser (or xcopy to a webhost / usb stick).

- Principle: no server-side code, should run from file:// dir
- Principle: 3 layer deep hierarchy max since we follow representation

## Structure Level 1: Category Level 1

On the highest level we have the main category description. Such as "Forums".

Data:

- the level 1 category always carries a title meaninful for consumer readers such as "Spend Money Online"
- the level 1 category can contain an icon to represent it
- the level 1 category can have taxonomy properties e.g. sometimes carries subtitles e.g. indicating the wikipedia category path "Technology & Applied Sciences > [ACM] > Applied Computing > E-Commerce", This can be a link. It will require some creativity to make a meaningful grouping with casual users in mind

API:

- the system should be able to provide a list of level 1's
- the system should be able to provide a list of level 1's that the user accessed last
- the system should be able to provide a list of level 1's based on a query on a taxonomy propery e.g. all science category's.

UI:

- The system should provide a way to quickly jump to a level 1 category e.g. search / pulldown
- The system should show latest accessed category level 1's on top
- The system should provide the user an option list to select category level 1's he wants to see on top / favorite
- by default categories such as social, news, weather, shops and such should be on top since these are clicked the most


## Structure Level 2: Category Level 2

Every Level 1 topic has certain generic categories such as "meta" with the classification, "discuss" with the community places of the topic or
"news" with news on the topic". These should be added as default and belong to Category Level 1 representation.

The bookmarks are grouped by a certain category. This category itself also has properties as above and need to be represented on screen as such.

## Structure Level 3: Category Level 2 Content: Bookmarks

- One bookmark has
  - a name and
  - a URI that represents a set of URL's. E.g. facebook.com represent a lot of pages that are under that domain.
  - One bookmark URI has one favicon determined based on the URL choosen to represent the set of URI's, this does not mean that URI's deeper in the url have the same favicon. E.g. a facebook game has its own favicon.
  - One bookmark can have different URI's based on locality
  - One bookmark can be present in countless taxonomies, such as:
    - multiple UDC categories
    - multiple Wikipedia categories
    - multiple Wikipedia portals
    - NASDQ token
    - Twitter page(s)
    - Wikipedia page(s)
    - Reddit forum page(s)
    - Dewey entry
    - Alexa ranking
    - The IMDB url
    - The IDMB ranking
      - Each one of these is also subject to locality
      - the taxonomy can consist of single hierarchy tags, a hierarchical placement (e.g. wikipedia click from portal as startpoint path), are often enumerations (e.g. all twitter links) and sometimes queryables (e.g. current value on stockmarket)
      - Each one of these is defined within a certain domain to be applicable, these domains are also a taxonomy
      - The sets of these are subject to rankings, sorting and such
  - Each Bookmark can be a provider of API: e.g. all of these taxonomies are owned by a provider e.g. the NASDAQ manages the NASDAQ symobl and wikipedia manages the category, so the Bookmark URI Nasdaq provides some form of API to know what the symbol is for Slack.
  - each of these is subject to change
  - Some URI's provide domain provider like services such as facebook or wordpress.com which gives unique names for all kinds of sites which carry their own favicon and are in a certain domain

This boils down to:

- Out of the set of bookmark URI's there are some bookmark URI's
who provide some sort of taxonomy for other bookmark URI's. So it is a method belonging to a certain bookmark URI, which can be implemented as a hook during representation. This can be simple such as an icon or complex such as multiple API calls.

However:

To simplify the representation we choose one hierarchical category for rendering the content initially on screen. This will be based on the wikipedia pages you follow for one specific path when you start from the main portals screen of wikipedia up until the wikipedia page belonging to the URI.

## Structure Relations

When there is a link within a category level 2 topic that is extended to its own Category Level 1 then link functionality should be present to go to that category level 1 by linkage.
This does not require additonal specifications since it is implemented by just being a link. So there will be a property on each level which is "link" (enumeration).

## Properties Scoping

A property belongs in a certain scope e.g.:

- IMDB ranking is only useful when the link is a movie/tv-show
- NASDAQ symnol is only useful when the link is a company

However only be adding this property the "type" of something becomes clear: the more properties, the more we can determine the type of something. So this is chicken egg.

To make this more pragmatic, the list of properties than can be applied is a propery of a level 1, 2 or 3 object. This has as default a set of default properties such as wikipedia uri and
can extend depending on the topic.


## Settings

User settings should be exportable, so that the user can save it and copy and paste the settings on another system / when clearing the cache.


## .INI compatibility

Dragging a URL from the browser to the desktop on most environments produce a URI file which is in INI format. To make it possible to sync back and forth between browsers the system should allow to sync. Which means that hierarchical representations need to be flattened for the INI format.

The system should be able to import URL files

The system should be able to export URL files

## Favicon

A favion is a representation of a certain bookmark URI. In most cases the Google favicon provider provides a favicon. This will need to be cached. A reverse domain name (com.slac.png) is the handiest. This may be during build or seperately.

Google does not provide favicons in a lot of cases e.g. on deeper domains such as facebook games or on redirects or 404's. So the system will need multiple favicon providers and null checks.

For the UI the icon may be put in a sprite and handled.

## User: Most clicked Cache on top 1

In most cases the set of links the user clicks the most is handy to
place on top. This requires a mechanism to know which links are clicked the most by that user. And since this is 100% client-side this will require client-side storage.

## Use: Users favorite categories on top 2

The user should have the ability to indicate which categories he/she wants to see on top. This requires client-side storage.

## User: Eternal Scrolling on top 3

Under there the user should be able to scroll forever to empower the user and discover new interesting topics.

## User: no affiliate links / etc

There should be no affiliate links, paid links or any form of
commercial links

## User: additional informational blocks

Aside from bookmark only blocks. Information on a category such as a diagram or a live news feed are optional.

## Users: link to other collections

A dedicated level 1 category for other likewise collections enables a community with each user having its own interesting collection and possibly in time specialized collections e.g. "biology".

A way to import or export a set or subset in a user's own collection would at this stage be helpful e.g. via a little icon representation on the UI. This can be extended to a longer list
of additional requirements such as attribution to the the owner.

## Content

The content should include all top lists: all company symbols,
all Alexa top 100.000 entries, all favorite movies and so on. This includes all taxonomy properties so this can only be achieved with a group effort and/or automatic import and manual validation procedures.

## Todo

This was a time-boxed effort just enough to see my bookmarks in
a webpage. Feel free to implement one of the following and ping me:

* resolve this: https://stackoverflow.com/questions/62405564/tippy-js-z-index-not-working-with-interactivity?noredirect=1#comment110369370_62405564 , made a workaround
by placing a BR behind the property icon so that it does not overlap