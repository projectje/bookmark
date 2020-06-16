# bookmark
Serverless bookmarks management

Little JavaScript project where you maintain bookmarks in the folder
data and then build the project to read if from local filesystem in
a web browser (or xcopy to a webhost / usb stick).

Principles: no server-side code, should run from file:// dir

## Bookmarks

Although every URI exists out of countless properties and can thus
be placed in countless hierarchical taxonomies, we stick with one
hierarchy, as closely as possible to the wikipedia portal structure.
This makes it easy to verify in Wikipedia if the link is somewhat
in the same category.

With every link properties can be defined which render in a
certain way e.g. with the NASDAQ the symbol appears and when clicking
it you go to the NASDAQ site or with REddit to the reddit thread
on that topic, etc.. undoubtly there are infinite properties.

Many years later we may write a serverbackend where every uri
can be processed in many different taxonomies for every
property.

Naming of the data files determines loading order on screen e.g.
placing 0 before it place it at top.

## Todo

This was a time-boxed effort just enough to see my bookmarks in
a webpage. Feel free to implement one of the following and ping me:

* Implement Eternal Scrolling up/down dynamic loading since it will break very soon if the content is too much
* Pre-Cache Google favicons by reverse domain name, then parse in webpack or download favicons probably put them 100x100 in sprites.
* Pre-Import INI files dragged from browsers into corresponding json
 files then delete INI file ('.URL')
* Content should then be much further updated: e.g. all top 100
  companies in all sectors, the Alexa top 10.000 sites, the major
  persons and topics in each category + all properties of each of these
  sites
* Add Alexa Ranking property
* Add more blocks than only bookmarks such as pictures or textual
  information or links to interesting blogs
* maybe add webpack webserver for hot reload
* resolve this: https://stackoverflow.com/questions/62405564/tippy-js-z-index-not-working-with-interactivity?noredirect=1#comment110369370_62405564 , made a workaround
by placing a BR behind the property icon so that it does not overlap
