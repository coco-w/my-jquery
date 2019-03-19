(function(window,undefined) {
    var jquery = function(selector) {
        return new jquery.prototype.inti(selector)
    }
    jquery.prototype = {
        constructor: jquery,
        inti : function(selector) {
            selector = jquery.trim(selector)
            if(!selector) {
                return this
            }else if(jquery.isString(selector)) {
                if (jquery.isCode(selector)) {
                    var temp = document.createElement('div')
                    temp.innerHTML = selector
                    var arr = []
                    arr.push.apply(this,temp.children)
                    return this
                }
            }
        }
    }
    jquery.isString = function(str) {
        return typeof str === 'string'
    }
    jquery.isCode = function(str) {
        return str.charAt(0) === "<" && str.charAt(str.length-1) === '>' && str.length > 2
    }
    jquery.trim = function(str) {
        if(str.trim) {
            return str.trim()
        }else {
            return str.replace(/^\s+|\s+$/g,'')
        }
    }
    jquery.prototype.inti.prototype = jquery.prototype
    window.$ = window.jquery = jquery
})(window)

