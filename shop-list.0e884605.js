function n(n,e,o,s){Object.defineProperty(n,e,{get:o,set:s,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},t={},i=o.parcelRequired3aa;null==i&&((i=function(n){if(n in s)return s[n].exports;if(n in t){var e=t[n];delete t[n];var o={id:n,exports:{}};return s[n]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){t[n]=e},o.parcelRequired3aa=i),i.register("kyEFX",(function(e,o){var s,t;n(e.exports,"register",(function(){return s}),(function(n){return s=n})),n(e.exports,"resolve",(function(){return t}),(function(n){return t=n}));var i={};s=function(n){for(var e=Object.keys(n),o=0;o<e.length;o++)i[e[o]]=n[e[o]]},t=function(n){var e=i[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),i("kyEFX").register(JSON.parse('{"cYJPg":"shop-list.0e884605.js","5EBN1":"amazon-shop-1x.d33dc585.png","gpYer":"amazon-shop-2x.01f59d3f.png","57kdw":"apple-shop-1x.aeb5cfd2.png","7J0mh":"apple-shop-2x.df06fe16.png","9D8Wc":"bookshop-1x.d3877644.png","eYjm2":"bookshop-2x.bc4a3396.png","37BJJ":"symbol-defs.c191696b.svg","fY5NC":"shop-list.fc10fffe.css","8y6Oc":"shop-list.1e243e52.js"}')),i("f1MkY"),i("bPyuM"),i("gZ6M0"),i("fA1we"),i("75VGX");var r,a=i("gZ6M0");r=new URL(i("kyEFX").resolve("5EBN1"),import.meta.url).toString();var l;l=new URL(i("kyEFX").resolve("gpYer"),import.meta.url).toString();var p;p=new URL(i("kyEFX").resolve("57kdw"),import.meta.url).toString();var c;c=new URL(i("kyEFX").resolve("7J0mh"),import.meta.url).toString();var g;g=new URL(i("kyEFX").resolve("9D8Wc"),import.meta.url).toString();var h;h=new URL(i("kyEFX").resolve("eYjm2"),import.meta.url).toString();var _;_=new URL(i("kyEFX").resolve("37BJJ"),import.meta.url).toString();const d={navlinks:document.querySelectorAll(".active"),shoppingListEl:document.querySelector(".shopping__cards"),notificationContainerEl:document.querySelector(".shopping__storage"),shoppingHeadingEl:document.querySelector(".shopping__heading"),jsGuard:document.querySelector(".js-guard"),logoTrashPath:new URL(_)};let u=localStorage.getItem("user")?(0,a.getUserFromLS)():[],m=u.booksArr,b=[...u.bookDataArr];math.Ceil(b.length/5);function f(n){if(!n.target.closest(".shopping__btn").classList.contains("shopping__btn"))return;const e=n.target.closest(".shopping__btn").dataset.id.trim(),o=m.findIndex((n=>n===e));m.splice(o,1),b.splice(o,1),u.booksArr=m,u.bookDataArr=b,(0,a.setUserInLS)(u),(0,a.updateUserDatabase)(u),v(b,1)}function v(n,o){const s=5*(o-1),t=s+5;let i=n.slice(s,t),a=Math.ceil(b.length/5);[...Array(a)].map(((n,e)=>e));if(i.length){d.notificationContainerEl.classList.remove("empty-js"),d.shoppingHeadingEl.style.marginBottom="",removeEventListener("click",f);const n=b.map((({_id:n,book_image:o,author:s,book_image_width:t,book_image_height:i,title:a,list_name:_,description:u,buy_links:[m,b,,,f]})=>`<li class="shopping__card" data-id="${n}">\n    <div class="shopping__block">\n      <div class="shopping__thumb">\n        <img src="${o}" alt="${_}" class="shopping__book-img" width="${t}" height="${i}"/>\n      </div>\n      <div class="shopping__wrap">\n          <h2 class="shopping__title">${a}</h2>\n          <p class="shopping__category">${_}</p>\n          <p class="shopping__book-description">${u||"Empty description"}</p>\n        <div class="shopping__wrap-shops">\n          <p class="shopping__book-author">${s}</p>\n          <ul class="shopping__shops">\n            <li class="shopping__shop">\n              <a href="${m.url}" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon-book site">\n                <img \n                srcset="${e(r)} 1x, ${e(l)} 2x"\n                src="${e(r)}"\n                alt="${m.name}"\n                class="shopping__shop-img"\n                width="48"\n                height="15"/>\n              </a>\n            </li>\n            <li class="shopping__shop">\n              <a href="${b.url}" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-book site">\n               <img \n               srcset="${e(p)} 1x, ${e(c)} 2x"\n               src="${e(p)}"\n               alt="${b.name}"\n               class="shopping__shop-img"\n               width="28"\n               height="27"/>\n              </a>\n            </li>\n            <li class="shopping__shop">\n              <a href="${f.url}" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Book-shop site">\n               <img\n                srcset="${e(g)} 1x, ${e(h)} 2x"\n                src="${e(g)}"\n                alt="${f.name}"\n                class="shopping__shop-img"\n                width="32"\n                height="30"/>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <button type="button" class="shopping__btn" aria-label="Delete the book from shopping list" data-id="${n}">\n      <svg class="shopping__btn-icon" width="18" height="18">\n       <use href="${d.logoTrashPath}#icon-trash"></use>\n      </svg>\n    </button>\n  </li>`)).join("").concat("");d.shoppingListEl.innerHTML=n,d.shoppingListEl.addEventListener("click",f)}else d.shoppingListEl.innerHTML="",d.notificationContainerEl.classList.add("empty-js"),d.shoppingListEl.classList.add("empty-js")}v(b,1),i("dmQj5"),i("epHO8"),i("2nhTy");
//# sourceMappingURL=shop-list.0e884605.js.map
