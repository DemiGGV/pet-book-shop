var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired3aa;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,n.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){t[e]=o},e.parcelRequired3aa=n),n("bUb57"),n("bPyuM"),n("gZ6M0"),n("fA1we"),n("4PVUM"),n("75VGX");var l=n("gZ6M0"),a=n("fA1we"),s=n("iQIUW"),r=n("5uEKZ");const i=document.querySelector(".backdrop"),c=JSON.parse(localStorage.getItem("user-shop-list"))||[];let d,u,m,_,g;console.log(l.user),localStorage.getItem("user")&&(d=(0,l.getUserFromLS)()),u=(0,r.loadLS)("books")?(0,r.loadLS)("books"):[];let p=!0;function b(e){(0,a.getBooksId)(e).then((o=>{if(!o)return void s.Notify.failure("Sorry, an error has occurred");m=e,_=o;const t=document.querySelector(".js-modal-body");t.innerHTML="",t.insertAdjacentHTML("beforeend",function({author:e,book_image:o,title:t,description:n,buy_links:l}){o||(o="../images/book_plug.jpg");n||(n="There is no description");let a,s,r;return l.forEach((e=>{"Amazon"===e.name&&(a=e.url),"Apple Books"===e.name&&(s=e.url),"Bookshop"===e.name&&(r=e.url)})),`<div class="modal__body">\n      <img src="${o}" alt="${t}" class="modal__img">\n      <div class="modal__box">\n      <h2 class="modal__title">${t}</h2>\n      <h3 class="modal__subtitle">${e}</h3>\n      <p class="modal__text">${n}</p>\n      <ul class="modal__social-list">\n          <li class="modal__social-amazon">\n            <a class="modal__link-social-amazon" href="${a}" target="_blank"></a>\n          </li>\n          <li class="modal__social-open-book">\n          <a\n          class="modal__link-social-open-book"\n          href="${s}"\n          target="_blank"\n          ></a>\n          </li>\n          <li class="modal__social-book-shop">\n          <a\n          class="modal__link-social-book-shop"\n          href="${r}"\n          target="_blank"\n          ></a>\n          </li>\n          </ul>\n          </div>\n          </div>`}(o));p&&t.insertAdjacentHTML("afterend",'<div class = "js-btn-container"></div>'),g=document.querySelector(".js-btn-container"),g.innerHTML=function(e){return(0,l.isUserSet)()?-1===u.indexOf(e)?'<button class="modal__button">add to shopping list</button>':'<button class="modal__button-remove">\n          remove from the shopping list\n          </button>':'<p class="modal__congratulation">\n            Sign in to add the book to your shopping list.\n            </p>'}(e),function(){i.classList.add("is-block"),document.body.classList.add("disable-scroll"),document.addEventListener("keydown",f);const e=document.querySelector(".backdrop");function o(t){t.target.classList.contains("backdrop")&&(k(),e.removeEventListener("click",o))}e.addEventListener("click",o)}();const n=document.querySelector(".modal__button");n&&n.addEventListener("click",y);const a=document.querySelector(".modal__button-remove");a&&a.addEventListener("click",v);document.querySelector(".js-close").addEventListener("click",k)}))}function f(e){"Escape"===e.code&&(k(),document.removeEventListener("keydown",f))}function k(){p=!1,i.classList.remove("is-block"),document.body.classList.remove("disable-scroll")}function y(){d.booksArr.push(m),(0,l.setUserInLS)(d),(0,l.updateUserDatabase)(d),u.push(m),(0,r.saveLS)("books",u),c.push(_),localStorage.setItem("user-shop-list",JSON.stringify(c)),g.innerHTML='<div class="button__wrapper-remove">\n  <button class="modal__button-remove">\n  remove from the shopping list\n  </button>\n  </div>\n  <p class="modal__congratulation">\n  Сongratulations! You have added the book to the shopping list. To\n  delete, press the button “Remove from the shopping list”.\n  </p>';document.querySelector(".modal__button-remove").addEventListener("click",v)}function v(){d.booksArr.splice(d.booksArr.indexOf(m),1),(0,l.setUserInLS)(d),(0,l.updateUserDatabase)(d),u.splice(d.booksArr.indexOf(m),1),(0,r.saveLS)("books",u),g.innerHTML='<div class="button__wrapper-remove">\n  <button class="modal__button">add to shopping list</button>\n  </div>\n  <p class="modal__congratulation">\n  Сongratulations! You have removed the book from the shopping list. To\n  add, press the button “Add to shopping list”.\n  </p>';document.querySelector(".modal__button").addEventListener("click",y)}a=n("fA1we"),s=n("iQIUW");const h=document.querySelector(".filter__list");let L=document.querySelector(".filter__item--active");const S=document.querySelector(".js-gallery-best-books"),$=document.querySelector(".gallery-title"),T=document.querySelector(".filter__item");let q="ALL CATEGORIES";(0,a.getCategoryList)();function E(e){b(e.currentTarget.id)}(0,a.getCategoryList)().then((e=>{e.length?h.insertAdjacentHTML("beforeend",e.map((e=>`<li class="filter__item" data-mark-active="${e.list_name}">${e.list_name}</li>`)).join("")):s.Notify.failure("Oops something going wrong.")})),T.addEventListener("click",(e=>{"All categories"!==e.target.textContent||location.reload()})),h.addEventListener("click",(e=>{e.target.outerText.toLowerCase()!==q.toLowerCase()&&(q=e.target.outerText,function(){const e=document.querySelector(`[data-mark-active="${q}"]`),o=document.querySelector(".filter__item--active");o&&o.classList.remove("filter__item--active");L.classList.remove("filter__item--active"),e.classList.add("filter__item--active"),L=e}(),"All categories"!==e.target.textContent?function(){const e=L.innerHTML;console.log(e),(0,a.getBooksCategory)(e).then((o=>{o.length?($.innerHTML=e,S.innerHTML=function(e){return e.map((({_id:e,book_image:o,title:t,author:n})=>{o||(o="../images/book_plug.jpg");return`<li id="${e}" class="books-gallery__card">\n     <div class="card-container">\n     <img class="books-gallery__card-img" src="${o}" alt="${t}" loading="lazy">\n     <div class="port-overlay"><p>quick view</p></div>\n     </div>\n     <h2 class="books-gallery__card-title">${t}</h2>\n     <p class="books-gallery__card-author">${n}</p>\n     </li>`})).join("")}(o),function(){let e=L.innerHTML.split(" "),o=e.pop(),t=e.join(" ");$.innerHTML=`${t} <span class="books-gallery__title-accent">${o}</span>`}(),document.querySelectorAll(".books-gallery__card").forEach((e=>{e.addEventListener("click",E)}))):s.Notify.failure(`Sorry, there are no ${e} books. Please choose another category.`)}))}():location.reload())})),console.log(L);a=n("fA1we"),s=n("iQIUW");const A=document.querySelector(".js-gallery-best-books"),j=document.querySelector(".gallery-title");function M(e){b(e.currentTarget.id)}(0,a.getTopBooks)().then((e=>{if(!e.length)return void s.Notify.failure("Sorry, there are no best sellers books. Please choose a category.");j.insertAdjacentHTML("beforeend",'Best Sellers <span class="gallery-title-span">Books</span>'),A.insertAdjacentHTML("beforeend",function(e){const o=[];return e.forEach(((t,n)=>{const l=e[n].books,a=[];l.forEach((({_id:e,book_image:o,title:t,author:n})=>{o||(o="../images/book_plug.jpg");const l=`<li id="${e}" class = "book-cards">\n              <div class = "card-container">\n                <img src="${o}" alt="${t}" loading="lazy">\n                  <div class="port-overlay">\n                    <p>quick view</p>\n                  </div>\n              </div>\n                <h2>${t}</h2>\n                <p>${n}</p>\n                </li>`;a.push(l)}));const s=`<button type="button" id="${e[n].list_name}" class="book-class-more">\n        see more\n      </button>`;o.push(`<li class = "category-block">\n            <p class = "gallery-category-title">${e[n].list_name}</p>\n            <ul class = "category-block-list">${a.join("")}</ul>\n            ${s}\n            </li>`)})),o.join("")}(e));document.querySelectorAll(".book-cards").forEach((e=>{e.addEventListener("click",M)}))}));const w=document.querySelector(".books-gallery");let H="ALL CATEGORIES";w.addEventListener("click",(function(e){"button"===e.target.localName&&(H=e.target.getAttribute("id"),(0,a.getBooksCategory)(H).then((e=>{e.length?(j.innerHTML=H,A.innerHTML=function(e){return e.map((({_id:e,book_image:o,title:t,author:n})=>(o||(o="../images/book_plug.jpg"),`<li id="${e}" class="books-gallery__card">\n        <div class="card-container">\n        <img class="books-gallery__card-img" src="${o}" alt="${t}" loading="lazy">\n        <div class="port-overlay"><p>quick view</p></div>\n        </div>\n        <h2 class="books-gallery__card-title">${t}</h2>\n        <p class="books-gallery__card-author">${n}</p>\n        </li>`))).join("")}(e),function(){j.innerHTML;let e=H.split(" "),o=e.pop(),t=e.join(" ");j.innerHTML=`${t} <span class="books-gallery__title-accent">${o}</span>`}(),document.querySelectorAll(".books-gallery__card").forEach((e=>{e.addEventListener("click",M)}))):s.Notify.failure(`Sorry, there are no ${H} books. Please choose another category.`)})),function(e){const o=document.querySelectorAll(".filter__item");document.querySelector(".filter__item--active").classList.remove("filter__item--active");const t=[...o].find((({textContent:o})=>o===e));console.log(t),t.classList.add("filter__item--active")}(H))})),n("dmQj5"),n("epHO8"),n("2nhTy");
//# sourceMappingURL=index.e66447b7.js.map
