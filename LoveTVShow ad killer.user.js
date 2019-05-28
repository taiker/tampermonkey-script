// ==UserScript==
// @name         LoveTVShow ad killer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       taiker
// @include        http://*.lovetvshow.info/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const removeElements = (elms) => elms.forEach(el => el.remove());
    // Use like:
    removeElements( document.querySelectorAll(".sitemaji_banner") );

})();