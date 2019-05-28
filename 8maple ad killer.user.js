// ==UserScript==
// @name         8maple ad killer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove ad
// @author       taiker
// @match        http://8maple.ru/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('#yytf').css('display', 'none');
    document.getElementById('yytf').style.display='none'
    // Your code here...
})();