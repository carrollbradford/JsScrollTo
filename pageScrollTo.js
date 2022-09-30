/**
Released under MIT and CC (https://creativecommons.org/licenses/by/4.0/) licenses
Copyright 2022 Carroll Bradford Inc. [https://dogood.carrollbradford.io/]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// @todo replace with a non-jquery version

(function (window, $, undefined) {
    'use strict';

    return (window.pageScrollTo = function ($target, $speed, $offset, $callback) {
        var def = $.Deferred();
        var $this = typeof $target === 'object' ? $target : $($target);
        var sTo = $this.offset();
        var speed = isNaN($speed) ? 500 : $speed;
        var offset = isNaN($offset) ? '-100' : $offset;
        sTo = sTo.top + offset;
        sTo = parseInt(sTo);

        var $page = $('html, body');

        $page.clearQueue().stop();

        $page.animate(
            { scrollTop: sTo },
            {
                duration: parseInt(speed),
                complete: function () {
                    if (typeof $callback === 'function') {
                        $callback();
                    }
                    def.resolve();
                },
            },
        );

        return def.promise();
    });

    /* define the app/namespace here or object + jquery instance */
})(window, jQuery);
