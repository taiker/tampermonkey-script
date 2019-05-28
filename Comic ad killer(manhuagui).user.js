// ==UserScript==
// @name         Comic ad killer(manhuagui)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove ad bar
// @author       taiker
// @match        https://tw.manhuagui.com/comic/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var garbage = ["ra-980","gg_950","ra-4x1","gg_980"];
    garbage.forEach(remove_elements);
    function remove_elements(value) {
        var a = document.getElementsByClassName(value);
        while (a.length > 0)
            a[0].remove();
    }

})();