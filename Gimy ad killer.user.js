// ==UserScript==
// @name         Gimy ad killer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove ad bar / next chapter key trigger block
// @author       taiker
// @include      https://v.gimy.tv/play/*
// @include      https://gimy.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(document).find('*').off('keyup keydown keypressed');
    $("div").remove(".playadbox");
    $("div .box-main-content").children(":first").remove();
    // Your code here...
})();