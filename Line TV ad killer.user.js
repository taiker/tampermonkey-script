// ==UserScript==
// @name         Line TV ad killer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove ad bar/video
// @author       taiker
// @include        https://www.linetv.tw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    $(window).load( function(){
        var garbage = ["player_ima-ad-container","ima-ad-container","adunitContainer","adsbygoogle","w-2/5"];
        garbage.forEach(remove_elements);
        function remove_elements(value) {
            var a = document.getElementsByClassName(value);
            while (a.length > 0)
                a[0].remove();
        }
        $("div").remove("#player_ima-ad-container");
    } );

})();