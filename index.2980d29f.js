var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired3aa;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired3aa=n),n("bUb57"),n("bPyuM"),n("gZ6M0"),n("fA1we"),n("75VGX");var a=n("gZ6M0"),l=n("fA1we"),r=n("iQIUW");const s=document.querySelector(".backdrop");let i,c,d,u=localStorage.getItem("user")?(0,a.getUserFromLS)():[],m=!0;function _(e){u=localStorage.getItem("user")?(0,a.getUserFromLS)():[],(0,l.getBooksId)(e).then((t=>{if(!t)return void r.Notify.failure("Sorry, an error has occurred");i=e,c=t;const o=document.querySelector(".js-modal-body");o.innerHTML="",o.insertAdjacentHTML("beforeend",function({author:e,book_image:t,title:o,description:n,buy_links:a}){t||(t="../images/book_plug.jpg");n||(n="There is no description");let l,r,s;return a.forEach((e=>{"Amazon"===e.name&&(l=e.url),"Apple Books"===e.name&&(r=e.url),"Bookshop"===e.name&&(s=e.url)})),`<div class="modal__body">\n      <img src="${t}" alt="${o}" class="modal__img">\n      <div class="modal__box">\n      <h2 class="modal__title">${o}</h2>\n      <h3 class="modal__subtitle">${e}</h3>\n      <p class="modal__text">${n}</p>\n      <ul class="modal__social-list">\n          <li class="modal__social-amazon">\n            <a class="modal__link-social-amazon" href="${l}" target="_blank"></a>\n          </li>\n          <li class="modal__social-open-book">\n          <a\n          class="modal__link-social-open-book"\n          href="${r}"\n          target="_blank"\n          ></a>\n          </li>\n          <li class="modal__social-book-shop">\n          <a\n          class="modal__link-social-book-shop"\n          href="${s}"\n          target="_blank"\n          ></a>\n          </li>\n          </ul>\n          </div>\n          </div>`}(t));m&&o.insertAdjacentHTML("afterend",'<div class = "js-btn-container"></div>'),d=document.querySelector(".js-btn-container"),d.innerHTML=function(e){return(0,a.isUserSet)()?-1===u.booksArr.indexOf(e)?'<button class="modal__button">add to shopping list</button>':'<button class="modal__button-remove">\n          remove from the shopping list\n          </button>':'<p class="modal__congratulation">\n            Sign in to add the book to your shopping list.\n            </p>'}(e),function(){s.classList.add("is-block"),document.body.classList.add("disable-scroll"),document.addEventListener("keydown",g);const e=document.querySelector(".backdrop");function t(o){o.target.classList.contains("backdrop")&&(p(),e.removeEventListener("click",t))}e.addEventListener("click",t)}();const n=document.querySelector(".modal__button");n&&n.addEventListener("click",b);const l=document.querySelector(".modal__button-remove");l&&l.addEventListener("click",f);document.querySelector(".js-close").addEventListener("click",p)}))}function g(e){"Escape"===e.code&&(p(),document.removeEventListener("keydown",g))}function p(){m=!1,s.classList.remove("is-block"),document.body.classList.remove("disable-scroll")}function b(){u.booksArr.push(i),u.bookDataArr.push(c),(0,a.setUserInLS)(u),(0,a.updateUserDatabase)(u),d.innerHTML='<div class="button__wrapper-remove">\n  <button class="modal__button-remove">\n  remove from the shopping list\n  </button>\n  </div>\n  <p class="modal__congratulation">\n  Сongratulations! You have added the book to the shopping list. To\n  delete, press the button “Remove from the shopping list”.\n  </p>';document.querySelector(".modal__button-remove").addEventListener("click",f)}function f(){u.booksArr.splice(u.booksArr.indexOf(i),1),u.bookDataArr.splice(u.bookDataArr.indexOf(c),1),(0,a.setUserInLS)(u),(0,a.updateUserDatabase)(u),d.innerHTML='<div class="button__wrapper-remove">\n  <button class="modal__button">add to shopping list</button>\n  </div>\n  <p class="modal__congratulation">\n  Сongratulations! You have removed the book from the shopping list. To\n  add, press the button “Add to shopping list”.\n  </p>';document.querySelector(".modal__button").addEventListener("click",b)}l=n("fA1we"),r=n("iQIUW");const k=document.querySelector(".filter__list");let y=document.querySelector(".filter__item--active");const v=document.querySelector(".js-gallery-best-books"),h=document.querySelector(".gallery-title"),L=document.querySelector(".filter__item");let S="ALL CATEGORIES";(0,l.getCategoryList)();function $(e){_(e.currentTarget.id)}(0,l.getCategoryList)().then((e=>{e.length?k.insertAdjacentHTML("beforeend",e.map((e=>`<li class="filter__item" data-mark-active="${e.list_name}">${e.list_name}</li>`)).join("")):r.Notify.failure("Oops something going wrong.")})),L.addEventListener("click",(e=>{"All categories"!==e.target.textContent||location.reload()})),k.addEventListener("click",(e=>{e.target.outerText.toLowerCase()!==S.toLowerCase()&&(S=e.target.outerText,function(){const e=document.querySelector(`[data-mark-active="${S}"]`),t=document.querySelector(".filter__item--active");t&&t.classList.remove("filter__item--active");y.classList.remove("filter__item--active"),e.classList.add("filter__item--active"),y=e}(),"All categories"!==e.target.textContent?function(){const e=y.innerHTML;console.log(e),(0,l.getBooksCategory)(e).then((t=>{t.length?(h.innerHTML=e,v.innerHTML=function(e){return e.map((({_id:e,book_image:t,title:o,author:n})=>{t||(t="../images/book_plug.jpg");return`<li id="${e}" class="books-gallery__card">\n     <div class="card-container">\n     <img class="books-gallery__card-img" src="${t}" alt="${o}" loading="lazy">\n     <div class="port-overlay"><p>quick view</p></div>\n     </div>\n     <h2 class="books-gallery__card-title">${o}</h2>\n     <p class="books-gallery__card-author">${n}</p>\n     </li>`})).join("")}(t),function(){let e=y.innerHTML.split(" "),t=e.pop(),o=e.join(" ");h.innerHTML=`${o} <span class="books-gallery__title-accent">${t}</span>`}(),document.querySelectorAll(".books-gallery__card").forEach((e=>{e.addEventListener("click",$)}))):r.Notify.failure(`Sorry, there are no ${e} books. Please choose another category.`)}))}():location.reload())}));l=n("fA1we"),r=n("iQIUW");const T=document.querySelector(".js-gallery-best-books"),A=document.querySelector(".gallery-title");function q(e){_(e.currentTarget.id)}(0,l.getTopBooks)().then((e=>{if(!e.length)return void r.Notify.failure("Sorry, there are no best sellers books. Please choose a category.");A.insertAdjacentHTML("beforeend",'Best Sellers <span class="gallery-title-span">Books</span>'),T.insertAdjacentHTML("beforeend",function(e){const t=[];return e.forEach(((o,n)=>{const a=e[n].books,l=[];a.forEach((({_id:e,book_image:t,title:o,author:n})=>{t||(t="../images/book_plug.jpg");const a=`<li id="${e}" class = "book-cards">\n              <div class = "card-container">\n                <img src="${t}" alt="${o}" loading="lazy">\n                  <div class="port-overlay">\n                    <p>quick view</p>\n                  </div>\n              </div>\n                <h2>${o}</h2>\n                <p>${n}</p>\n                </li>`;l.push(a)}));const r=`<button type="button" id="${e[n].list_name}" class="book-class-more">\n        see more\n      </button>`;t.push(`<li class = "category-block">\n            <p class = "gallery-category-title">${e[n].list_name}</p>\n            <ul class = "category-block-list">${l.join("")}</ul>\n            ${r}\n            </li>`)})),t.join("")}(e));document.querySelectorAll(".book-cards").forEach((e=>{e.addEventListener("click",q)}))}));const E=document.querySelector(".books-gallery");let j="ALL CATEGORIES";E.addEventListener("click",(function(e){"button"===e.target.localName&&(j=e.target.getAttribute("id"),(0,l.getBooksCategory)(j).then((e=>{e.length?(A.innerHTML=j,T.innerHTML=function(e){return e.map((({_id:e,book_image:t,title:o,author:n})=>(t||(t="../images/book_plug.jpg"),`<li id="${e}" class="books-gallery__card">\n        <div class="card-container">\n        <img class="books-gallery__card-img" src="${t}" alt="${o}" loading="lazy">\n        <div class="port-overlay"><p>quick view</p></div>\n        </div>\n        <h2 class="books-gallery__card-title">${o}</h2>\n        <p class="books-gallery__card-author">${n}</p>\n        </li>`))).join("")}(e),function(){A.innerHTML;let e=j.split(" "),t=e.pop(),o=e.join(" ");A.innerHTML=`${o} <span class="books-gallery__title-accent">${t}</span>`}(),document.querySelectorAll(".books-gallery__card").forEach((e=>{e.addEventListener("click",q)}))):r.Notify.failure(`Sorry, there are no ${j} books. Please choose another category.`)})),function(e){const t=document.querySelectorAll(".filter__item");document.querySelector(".filter__item--active").classList.remove("filter__item--active");const o=[...t].find((({textContent:t})=>t===e));console.log(o),o.classList.add("filter__item--active")}(j))})),n("dmQj5"),n("epHO8"),n("2nhTy");
//# sourceMappingURL=index.2980d29f.js.map
