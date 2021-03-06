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
import { addBookmarks } from '@/app/bookmark';
import { addFavorites } from '@/app/favorite';

addFavorites();
data.forEach(category => {addBookmarks(category);});

jQueryBridget('masonry', Masonry, $);
$('.grid').masonry({ itemSelector: '.grid-item', columnWidth: '.grid-sizer', percentPosition: true });

delegate('#main_container', {target: '[data-tippy-content]', allowHTML: true, interactive: true, placement: 'right', theme: 'light', zIndex: 16777271});
