// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var span1 = document.querySelector('#span1');
var style = document.querySelector('#style');
var string = "\n/** \u4F60\u597D\uFF0C\u6211\u662F\u5C0F\u5F20\n\u4E0B\u9762\u5C06\u7ED9\u5927\u5BB6\u753B\u4E00\u4E2A\u592A\u6781\u56FE\n\u9996\u5148\u8FD9\u8FB9\u4E00\u4E2Adiv**/\n#div1 {\n    border: 1px solid red;\n    width: 200px;\n    height:200px;\n}\n/** \u9700\u8981\u5148\u628A\u5916\u56F4\u7684\u26AA\u753B\u51FA\u6765\u7684\u54C8 **/\n#div1 {\n    border-radius: 50%;\n    border:none;\n    box-shadow: 0 0 3px rgba(0,0,0,0.3);\n}\n/**\u4F17\u6240\u5468\u77E5\uFF0C\u592A\u6781\u662F\u5206\u4E3A\u4E24\u7EA7\u7684\uFF0C\u56E0\u6B64\u5148\u628A\u989C\u8272\u8FDB\u884C\u533A\u5206**/\n#div1 {\n    background: rgb(0,0,0);\n    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/** \u9634\u9633\u662F\u6709\u4E24\u4E2A\u98CE\u706B\u8F6E\u4E00\u6837\u7684 **/\n#div1::before {\n    content: '';\n    display:block;\n    border:1px solid red;\n    height:100px;\n    width:100px;\n    top:0;\n    left:50%;\n    transform:translate(-50px);\n    border-radius:50%;\n    border:none;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after {\n    content: '';\n    display:block;\n    border:1px solid red;\n    height:100px;\n    width:100px;\n    bottom:0;\n    left:50%;\n    transform:translate(-50px);\n    border-radius:50%;\n    border:none;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 24%, rgba(255,255,255,1) 24%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n";
var string2 = '';
var n = -1;
span1.innerHTML = string.substring(0, n); // let step = ()=>{
//     setTimeout(() => {
//         if(n <= string.length - 1){
//             n = n + 1;
//             span1.innerHTML = string.substring(0,n);
//             step()
//         }
//     }, 500);
// }

function step() {
  setTimeout(function () {
    n = n + 1;

    if (string[n] === '\n') {
      string2 += '<br/>';
    } else if (string[n] === ' ') {
      string2 += '&nbsp;';
    } else {
      string2 += string[n];
    }

    span1.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0., 9999);
    span1.scrollTo(0, 9999);

    if (n < string.length - 1) {
      step();
    }
  }, 10);
}

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.3c536775.js.map