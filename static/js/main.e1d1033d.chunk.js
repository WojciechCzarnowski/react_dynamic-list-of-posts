(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(6),n=s.n(c),a=s(3),i=s(4),o=s(2),r=s.n(o),l=s(1),j=(s(12),s(13),s(14),s(0)),u=function(e){var t=e.posts,s=e.postSelectId,c=e.onPostSelect;return Object(j.jsxs)("div",{className:"PostsList",children:[Object(j.jsx)("h2",{children:"Posts:"}),Object(j.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){return Object(j.jsxs)("li",{className:"PostsList__item",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"[User #".concat(e.userId,"]:")}),e.title]}),e.id!==s?Object(j.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(e.id)},children:"Open"}):Object(j.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(0)},children:"Close"})]},e.id)}))})]})},b=(s(16),function(){return Object(j.jsxs)("form",{className:"NewCommentForm",children:[Object(j.jsx)("div",{className:"form-field",children:Object(j.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input"})}),Object(j.jsx)("div",{className:"form-field",children:Object(j.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input"})}),Object(j.jsx)("div",{className:"form-field",children:Object(j.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input"})}),Object(j.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),d=(s(17),function(){return Object(j.jsxs)("div",{className:"PostDetails",children:[Object(j.jsx)("h2",{children:"Post details:"}),Object(j.jsx)("section",{className:"PostDetails__post",children:Object(j.jsx)("p",{children:"sunt aut facere repellat provident occaecati excepturi optio"})}),Object(j.jsxs)("section",{className:"PostDetails__comments",children:[Object(j.jsx)("button",{type:"button",className:"button",children:"Hide 2 comments"}),Object(j.jsxs)("ul",{className:"PostDetails__list",children:[Object(j.jsxs)("li",{className:"PostDetails__list-item",children:[Object(j.jsx)("button",{type:"button",className:"PostDetails__remove-button button",children:"X"}),Object(j.jsx)("p",{children:"My first comment"})]}),Object(j.jsxs)("li",{className:"PostDetails__list-item",children:[Object(j.jsx)("button",{type:"button",className:"PostDetails__remove-button button",children:"X"}),Object(j.jsx)("p",{children:"sad sds dfsadf asdf asdf"})]})]})]}),Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(j.jsx)(b,{})})})]})}),m="https://mate.academy/students-api",p=function(){var e=Object(a.a)(r.a.mark((function e(t){var s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=0===t?"/posts":"/posts?userId=".concat(t),e.next=3,fetch("".concat(m).concat(s));case 3:return c=e.sent,e.abrupt("return",c.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.useState)(0),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(l.useState)([]),o=Object(i.a)(n,2),b=o[0],m=o[1],h=Object(l.useState)(0),O=Object(i.a)(h,2),x=O[0],f=O[1];Object(l.useEffect)((function(){Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(s);case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})))()}),[s]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App__header",children:Object(j.jsxs)("label",{children:["Select a user: \xa0",Object(j.jsxs)("select",{className:"App__user-selector",onChange:function(e){return c(Number(e.target.value))},children:[Object(j.jsx)("option",{value:"0",children:"All users"}),Object(j.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(j.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(j.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(j.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(j.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(j.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(j.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(j.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(j.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(j.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(j.jsxs)("main",{className:"App__main",children:[Object(j.jsx)("div",{className:"App__sidebar",children:Object(j.jsx)(u,{posts:b,postSelectId:x,onPostSelect:function(e){f(e)}})}),Object(j.jsx)("div",{className:"App__content",children:Object(j.jsx)(d,{})})]})]})};n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.e1d1033d.chunk.js.map