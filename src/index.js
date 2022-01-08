import $ from "jquery"
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@/assets/icon';
import '@/assets/css/style.css';
import jQueryBridget from 'jquery-bridget';
import Masonry from 'masonry-layout';
import 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale.css';
import { delegate } from 'tippy.js';
import data from '@/assets/data';
//
// Blocks / Templates
//
import { addBookmarks } from '@/templates/bookmark';
import { addFavorites } from '@/templates/favorite';

//
// Block 1 contains the favorites of the user
//
addFavorites();

//
// Block 2 contains all the bookmarks
//
data.forEach(category => {addBookmarks(category);});

//
// Masonry layout for all the blocks of bookmarks on the page
//
jQueryBridget('masonry', Masonry, $);
$('.grid').masonry({ itemSelector: '.grid-item', columnWidth: '.grid-sizer', percentPosition: true });

//
// Tippy to provide a popover for all the properties of the bookmark
//
delegate('#main_container', {target: '[data-tippy-content]', allowHTML: true, interactive: true, placement: 'right', theme: 'light', zIndex: 16777271});
