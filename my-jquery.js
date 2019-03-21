
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
                //funciton
            }else if(jquery.isFunction(selector)){
                jquery.isReady(selector)
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
        },
        jquery: '1.1.0',
        length: 0,
        selector: '',
        push: [].push,
        sort: [].sort,
        splice: [].splice,
        toArray: function() {
            return [].slice.apply(this)
        },
        get: function(num) {
            if(arguments.length == 0) {
                return this.toArray()
            }else if(num >= 0) {
                return this[num]
            }else if(num < 0) {
                return this[this.length + num]
            }
        },
        eq: function(num) {
            if(arguments.length == 0) {
                return new jquery()
            }else{
                return jquery(this.get(num))
            }
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        each: function(callback) {
            return jquery.each(this, callback)
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
        isFunction : function(sel) {
            return typeof sel === 'function'
        },
        isReady : function(fn) {
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
        each: function(obj, callback) {
            if(jquery.isArray(obj)) {
                for (var i = 0; i < obj.length; i++) {
                    var res = callback.call(obj[i], i, obj[i])
                    if(res == true) {
                        continue
                    }else if(res == false) {
                        break
                    }
                }
            }else if(jquery.isObject(obj)) {
                for (var key in obj) {
                    var res = callback.call(obj[key], key, obj[key])
                }
            }
            return obj
        },
        map: function(obj, callback) {
            var res = []
            if(jquery.isArray(obj)) {
                for (var i = 0; i < obj.length; i++) {
                    var temp = callback(i, obj[i])
                    if(temp) {
                        res.push(temp)
                    }
                }
            }else if(jquery.isObject(obj)) {
                for (var key in obj) {
                    var temp = callback(key, ojb[key])
                    if(temp) {
                        res.push(temp)
                    }
                }
            }
            return res
        }
    })
    jquery.prototype.extend({
        empty: function() {
            this.each(function(key, value) {
                value.innerHTML = ''
            })
            return this
        }
    })
    
    jquery.prototype.inti.prototype = jquery.prototype
    window.$ = window.jquery = jquery
})(window)

