!function(){function n(n,e,o,t){Object.defineProperty(n,e,{get:o,set:t,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},a=o.parcelRequired3aa;null==a&&((a=function(n){if(n in t)return t[n].exports;if(n in s){var e=s[n];delete s[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){s[n]=e},o.parcelRequired3aa=a),a.register("iE7OH",(function(e,o){var t,s;n(e.exports,"register",(function(){return t}),(function(n){return t=n})),n(e.exports,"resolve",(function(){return s}),(function(n){return s=n}));var a={};t=function(n){for(var e=Object.keys(n),o=0;o<e.length;o++)a[e[o]]=n[e[o]]},s=function(n){var e=a[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),a.register("aNJCr",(function(e,o){var t;n(e.exports,"getBundleURL",(function(){return t}),(function(n){return t=n}));var s={};function a(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(n){var e=s[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return a(n[2])}return"/"}(),s[n]=e),e}})),a("iE7OH").register(JSON.parse('{"ljo6a":"shop-list.8699d182.js","85Y7O":"amazon-shop-1x.d33dc585.png","jw74O":"amazon-shop-2x.01f59d3f.png","j0S7s":"apple-shop-1x.aeb5cfd2.png","4zNsm":"apple-shop-2x.df06fe16.png","7wvI0":"bookshop-1x.d3877644.png","1GuMW":"bookshop-2x.bc4a3396.png","f8sQi":"symbol-defs.c191696b.svg","fY5NC":"shop-list.b8c7a30b.css","f6nBd":"shop-list.0f1253c3.js"}')),a("8zv7o"),a("do8zY"),a("cfOGF"),a("lw1f2"),a("18VO4");var r,i=a("1t1Wn"),c=a("cfOGF");r=a("aNJCr").getBundleURL("ljo6a")+a("iE7OH").resolve("85Y7O");var l;l=a("aNJCr").getBundleURL("ljo6a")+a("iE7OH").resolve("jw74O");var p;p=a("aNJCr").getBundleURL("ljo6a")+a("iE7OH").resolve("j0S7s");var h;h=a("aNJCr").getBundleURL("ljo6a")+a("iE7OH").resolve("4zNsm");var g;g=a("aNJCr").getBundleURL("ljo6a")+a("iE7OH").resolve("7wvI0");var u;u=a("aNJCr").getBundleURL("ljo6a")+a("iE7OH").resolve("1GuMW");var _;_=a("aNJCr").getBundleURL("ljo6a")+a("iE7OH").resolve("f8sQi");var d={navlinks:document.querySelectorAll(".active"),shoppingListEl:document.querySelector(".shopping__cards"),notificationContainerEl:document.querySelector(".shopping__storage"),shoppingHeadingEl:document.querySelector(".shopping__heading"),jsGuard:document.querySelector(".js-guard"),logoTrashPath:new URL(_)},f=localStorage.getItem("user")?(0,c.getUserFromLS)():[],b=f.booksArr,v=f.bookDataArr;function m(n,o){var t=5*(o-1),s=t+5;if(n.slice(t,s).length){d.notificationContainerEl.classList.remove("empty-js"),d.shoppingHeadingEl.style.marginBottom="",removeEventListener("click",E);var a=v.map((function(n){var o=n._id,t=n.book_image,s=n.author,a=n.book_image_width,c=n.book_image_height,_=n.title,f=n.list_name,b=n.description,v=e(i)(n.buy_links,5),m=v[0],E=v[1],H=v[4];return'<li class="shopping__card" data-id="'.concat(o,'">\n  <div class="shopping__block">\n    <div class="shopping__thumb">\n      <img src="').concat(t,'" alt="').concat(f,'" class="shopping__book-img" width="').concat(a,'" height="').concat(c,'"/>\n    </div>\n    <div class="shopping__wrap">\n      <h2 class="shopping__title">').concat(_,'</h2>\n      <p class="shopping__category">').concat(f,'</p>\n      <p class="shopping__book-description">').concat(b||"Empty description",'</p>\n      <div class="shopping__wrap-shops">\n        <p class="shopping__book-author">').concat(s,'</p>\n        <ul class="shopping__shops">\n          <li class="shopping__shop">\n            <a href="').concat(m.url,'" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon-book site">\n              <img \n              srcset="').concat(e(r)," 1x, ").concat(e(l),' 2x"\n              src="').concat(e(r),'"\n              alt="').concat(m.name,'"\n              class="shopping__shop-img"\n              width="48"\n              height="15"/>\n            </a>\n          </li>\n          <li class="shopping__shop">\n            <a href="').concat(E.url,'" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-book site">\n             <img \n             srcset="').concat(e(p)," 1x, ").concat(e(h),' 2x"\n             src="').concat(e(p),'"\n             alt="').concat(E.name,'"\n             class="shopping__shop-img"\n             width="28"\n             height="27"/>\n            </a>\n          </li>\n          <li class="shopping__shop">\n            <a href="').concat(H.url,'" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Book-shop site">\n             <img\n             srcset="').concat(e(g)," 1x, ").concat(e(u),' 2x"\n             src="').concat(e(g),'"\n             alt="').concat(H.name,'"\n             class="shopping__shop-img"\n             width="32"\n             height="30"/>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <button type="button" class="shopping__btn" aria-label="Delete the book from shopping list" data-id="').concat(o,'">\n    <svg class="shopping__btn-icon" width="18" height="18">\n      <use href="').concat(d.logoTrashPath,'#icon-trash"></use>\n    </svg>\n  </button>\n  </li>')})).join("");d.shoppingListEl.innerHTML=a,d.shoppingListEl.addEventListener("click",E)}else d.shoppingListEl.innerHTML="",d.notificationContainerEl.classList.add("empty-js")}function E(n){if(n.target.closest(".shopping__btn").classList.contains("shopping__btn")){var e=n.target.closest(".shopping__btn").dataset.id.trim(),o=b.findIndex((function(n){return n===e}));b.splice(o,1),v.splice(o,1),f.booksArr=b,f.bookDataArr=v,(0,c.setUserInLS)(f),(0,c.updateUserDatabase)(f),m(v,1)}}m(v,1),a("925RR"),a("7hKzD"),a("jcFG7")}();
//# sourceMappingURL=shop-list.8699d182.js.map
