
(function(window,undefined) {
    var jquery = function(selector) {
        return new jquery.prototype.inti(selector)
    }
    jquery.prototype = {
        constructor: jquery,
        inti : function(selector) {
            //前后的空去掉  
            selector = jquery.trim(selector)
            //null false之类
            if(!selector) {
                return this
                //字符串
            }else if(jquery.isString(selector)) {
                //代码片段
                if (jquery.isCode(selector)) {
                    var temp = document.createElement('div')
                    temp.innerHTML = selector
                    var arr = []
                    arr.push.apply(this,temp.children)
                    // return this
                }else {
                    //选择器
                    var res = document.querySelectorAll(selector)
                    var arr = []
                    arr.push.apply(this, res)
                    // return this
                }
                //数组
            }else if(jquery.isArray(selector)) {
                // //真数组
                // if(({}).toString.apply(selector) === '[object Array]') {
                //     ([]).push.apply(this,selector)
                // }else{
                //     //伪数组    
                //     var arr = ([]).slice.apply(selector);
                //     for(var i = 0; i < arr.length; i++) {
                //         this[i] = arr[i]
                //     }
                //     return this
                // }
                var arr = [].slice.apply(selector)
                var arr2 = [].push.apply(this,arr)
                // return this
            }else {
                this[0] = selector
                this.length = 1
            }
            return this
        }
    }
    jquery.extend = jquery.prototype.extend = function(obj) {
        for(var key in obj) {
            this[key] = obj[key]
        }
    }
    jquery.extend({
        isString : function(str) {
        return typeof str === 'string'
        },
        isCode : function(str) {
            return str.charAt(0) === "<" && str.charAt(str.length-1) === '>' && str.length > 2
        },
        trim : function(str) {
            if(!jquery.isString(str)) {
                return str
            }
            if(str.trim) {
                return str.trim()
            }else {
                return str.replace(/^\s+|\s+$/g,'')
            }
        },
        isObject : function(sel) {
            return typeof sel === 'object'
        },
        isWindow : function(sel) {
            return sel == window
        },
        isArray : function(arr) {
            return jquery.isObject(arr) && length in arr && !jquery.isWindow(arr)
        },
        ready : function(fn) {
            if(document.readyState == 'complete') {
                fn()
          }else if(document.addEventListener) {
              document.addEventListener('DOMContentLoaded',function() {
                  fn()
              })
          }else {
              document.attachEvent('onreadystatechange',function() {
                  if(document.readyState == 'complete') {
                      fn()
                  }
              })
          }
        },
    })
    
    jquery.prototype.inti.prototype = jquery.prototype
    window.$ = window.jquery = jquery
})(window)

