require('../scss/main.scss')

// import InstantClick from 'instantclick2';
// InstantClick.on('change', function() {
//   if (typeof ga !== 'undefined') ga('send', 'pageview', location.pathname + location.search);
// });
// InstantClick.init();

import WebFontLoader from 'webfontloader';
WebFontLoader.load({
  google: {
    families: ['Overpass:400,600,800']
  }
  // active: function() {
  //   // sessionStorage.fonts = true
  //   document.documentElement.classList.add('wf-active')
  // }
});

import scriptLoader from 'promise-script-loader';
window['scriptLoader'] = scriptLoader;

function initHeader() {
  const header = document.querySelector('.alex-header')
  const headerNav = document.querySelector('.alex-header__nav')

  header.style.top = `-${header.offsetHeight - headerNav.offsetHeight}px`
  header.style.position = "sticky"
}
window.addEventListener('load', initHeader)
