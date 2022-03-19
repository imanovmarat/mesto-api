(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),c=a.n(r),i=a(7),l=(a(29),a(23)),s=a(1),u=a(2);function p(e){var t=e.onLoginUser,a=o.a.useState(""),n=Object(s.a)(a,2),r=n[0],c=n[1],i=o.a.useState(""),l=Object(s.a)(i,2),u=l[0],p=l[1];return o.a.createElement("section",{className:"content__container"},o.a.createElement("form",{className:"content__form",id:"login",onSubmit:function(e){e.preventDefault(),t({email:r,password:u})}},o.a.createElement("h1",{className:"content__title"},"\u0412\u0445\u043e\u0434"),o.a.createElement("input",{className:"content__input",type:"email",name:"email",placeholder:"Email",onChange:function(e){c(e.target.value)},value:r}),o.a.createElement("input",{className:"content__input",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){p(e.target.value)},value:u})),o.a.createElement("button",{className:"content__submit-button",type:"submit",form:"login"},"\u0412\u043e\u0439\u0442\u0438"))}function m(e){var t=e.onRegisterUser,a=o.a.useState(""),n=Object(s.a)(a,2),r=n[0],c=n[1],l=o.a.useState(""),u=Object(s.a)(l,2),p=u[0],m=u[1];return o.a.createElement("section",{className:"content__container"},o.a.createElement("form",{className:"content__form",id:"register",onSubmit:function(e){e.preventDefault(),t({email:r,password:p})}},o.a.createElement("h1",{className:"content__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("input",{className:"content__input",type:"email",placeholder:"Email",onChange:function(e){c(e.target.value)},value:r,required:!0}),o.a.createElement("input",{className:"content__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){m(e.target.value)},value:p,required:!0})),o.a.createElement("div",{className:"content__buttons-wrapper"},o.a.createElement("button",{className:"content__submit-button",type:"submit",form:"register"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),o.a.createElement(i.b,{to:"/login",className:"content__login-button"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438")))}var _=a.p+"static/media/logo.2e17206c.svg";var d=function(e){var t=e.loggedIn,a=e.email,n=e.onClickSignOut;return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header__container"},o.a.createElement(i.b,{to:"/",className:"header__link"},o.a.createElement("img",{src:_,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043c\u0435\u0441\u0442\u0430 \u0420\u043e\u0441\u0441\u0438\u0438",className:"header__logo"})),o.a.createElement(u.b,{exact:!0,path:"/"},t&&o.a.createElement("div",null,o.a.createElement("span",{className:"header__email"},a),o.a.createElement(i.b,{to:"/login",onClick:n,className:"header__login header__login_color_gray"},"\u0412\u044b\u0439\u0442\u0438"))),o.a.createElement(u.b,{path:"/login"},o.a.createElement(i.b,{to:"/register",className:"header__login"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),o.a.createElement(u.b,{path:"/register"},o.a.createElement(i.b,{to:"/login",className:"header__login"},"\u0412\u043e\u0439\u0442\u0438"))))},f=o.a.createContext();var h=function(e){var t=e.data,a=e.onClick,n=e.onCardLike,r=e.onCardDelete,c=o.a.useContext(f),i=t.owner===c._id,l=t.likes.some((function(e){return e===c._id})),s="place__like ".concat(l&&"place__like_active");return o.a.createElement("figure",{className:"place"},i&&o.a.createElement("button",{className:"place__remove",onClick:function(){r(t)}}),o.a.createElement("img",{src:t.link,alt:t.name,className:"place__image",onClick:function(){a(t)}}),o.a.createElement("figcaption",{className:"place__container"},o.a.createElement("h2",{className:"place__title"},t.name),o.a.createElement("div",{className:"place__like-container"},o.a.createElement("button",{className:s,onClick:function(){n(t)},type:"button"}),o.a.createElement("span",{className:"place__like-counter"},t.likes.length))))};var g=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,r=e.onCardClick,c=e.cards,i=e.onCardLike,l=e.onCardDelete,s=o.a.useContext(f);return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"profile"},o.a.createElement("div",{onClick:t,className:"profile__avatar-container"},o.a.createElement("img",{src:s.avatar,alt:s.name,className:"profile__avatar"}),o.a.createElement("div",{className:"profile__upgrade-avatar-icon"})),o.a.createElement("div",{className:"profile__name-container"},o.a.createElement("h1",{className:"profile__name"},s.name),o.a.createElement("button",{className:"profile__button profile__button_type_edit",onClick:a,type:"button"})),o.a.createElement("p",{className:"profile__position"},s.about),o.a.createElement("button",{className:"profile__button profile__button_type_add",onClick:n,type:"button"})),o.a.createElement("section",{className:"places"},c.map((function(e){return o.a.createElement(h,{data:e,key:e._id,onClick:r,onCardLike:i,onCardDelete:l})}))))};var E=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};function v(e){var t=e.onClose,a=e.isOpen,n=e.status;return o.a.createElement("section",{className:"popup ".concat(a&&"popup_opened")},o.a.createElement("div",{className:"popup__container popup__container_size_small"},o.a.createElement("button",{className:"popup__button popup__button_type_close",onClick:t,type:"button"}),n?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"popup__icon popup__icon_type_success"}),o.a.createElement("p",{className:"popup__message"},"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!")):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"popup__icon popup__icon_type_fail"}),o.a.createElement("p",{className:"popup__message"},"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."))))}var b=function(e){var t=e.children,a=e.formName,n=e.buttonName,r=e.isOpen,c=e.onClose,i=e.onSubmit;return o.a.createElement("section",{className:"popup popup_type_".concat(a," ").concat(r&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&c()}},o.a.createElement("form",{className:"popup__container popup__container_size_small",name:a,onSubmit:i,noValidate:!0},o.a.createElement("button",{className:"popup__button popup__button_type_close",onClick:c,type:"button"}),t,o.a.createElement("button",{className:"popup__button popup__button_type_submit",type:"submit"},n)))};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useContext(f),c=o.a.useState(""),i=Object(s.a)(c,2),l=i[0],u=i[1],p=o.a.useState(""),m=Object(s.a)(p,2),_=m[0],d=m[1];return o.a.useEffect((function(){u(r.name),d(r.about)}),[r]),o.a.createElement(b,{formName:"edit-profile",buttonName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:l,about:_})}},o.a.createElement("fieldset",{className:"popup__box"},o.a.createElement("legend",{className:"popup__heading"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{className:"popup__input popup__input_field_first",onChange:function(e){u(e.target.value)},value:l||"",type:"text",id:"name-input",name:"name-input",minLength:"2",maxLength:"40",required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"name-input-error"})),o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{className:"popup__input popup__input_field_second",onChange:function(e){d(e.target.value)},value:_||"",type:"text",id:"position-input",name:"position-input",minLength:"2",maxLength:"200",required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"position-input-error"}))))};var k=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef();return o.a.useEffect((function(){r.current.value=""}),[t]),o.a.createElement(b,{formName:"update-avatar",buttonName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})}},o.a.createElement("fieldset",{className:"popup__box"},o.a.createElement("legend",{className:"popup__heading"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"),o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{className:"popup__input popup__input_field_second",ref:r,type:"url",id:"update-avatar-input",name:"update-avatar-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"update-avatar-input-error"}))))};var C=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,r=o.a.useState(""),c=Object(s.a)(r,2),i=c[0],l=c[1],u=o.a.useState(""),p=Object(s.a)(u,2),m=p[0],_=p[1];return o.a.useEffect((function(){l(""),_("")}),[t]),o.a.createElement(b,{formName:"add-card",buttonName:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,link:m})}},o.a.createElement("fieldset",{className:"popup__box"},o.a.createElement("legend",{className:"popup__heading"},"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"),o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{className:"popup__input popup__input_field_first",type:"text",id:"card-name-input",value:i,onChange:function(e){l(e.target.value)},name:"card-name-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"card-name-input-error"})),o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{className:"popup__input popup__input_field_second",type:"url",id:"card-image-input",value:m,onChange:function(e){_(e.target.value)},name:"card-image-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"card-image-input-error"}))))};var j=function(e){var t=e.card,a=e.onClose;return o.a.createElement("section",{className:"popup popup_type_full-img ".concat(t&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&a()}},o.a.createElement("figure",{className:"popup__container popup__container_size_large"},o.a.createElement("button",{className:"popup__button popup__button_type_close",onClick:a,type:"button"}),o.a.createElement("img",{src:t&&t.link,alt:t&&t.name,className:"popup__image"}),o.a.createElement("figcaption",{className:"popup__image-caption"},t&&t.name)))},O=a(4),y=a(21),S=a(22),w=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(y.a)(this,e),this._baseUrl=a,this._headers=n}return Object(S.a)(e,[{key:"upgradeAvatar",value:function(e,t){var a=e.avatar,n=t.token;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(n)}),body:JSON.stringify({avatar:a})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 upgradeAvatar")}))}},{key:"changeLikeCardStatus",value:function(e,t,a){var n=a.token;return t?fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(n)})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 changeLikeCardStatus")})):fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(n)})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 changeLikeCardStatus")}))}},{key:"removeCard",value:function(e,t){var a=t.token;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(a)})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 removeCard")}))}},{key:"addNewCard",value:function(e,t){var a=e.name,n=e.link,o=t.token;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(o)}),body:JSON.stringify({name:a,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 addNewCard")}))}},{key:"setUserInfo",value:function(e,t){var a=e.name,n=e.about,o=t.token;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(o)}),body:JSON.stringify({name:a,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 setUserInfo")}))}},{key:"getAppInfo",value:function(e){var t=e.token;return Promise.all([this.getUserInfo({token:t}),this.getInitialCards({token:t})])}},{key:"getInitialCards",value:function(e){var t=e.token;return fetch("".concat(this._baseUrl,"/cards"),{headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(t)})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 getInitialCards")}))}},{key:"getUserInfo",value:function(e){var t=e.token;return fetch("".concat(this._baseUrl,"/users/me"),{headers:Object(O.a)(Object(O.a)({},this._headers),{},{authorization:"Bearer ".concat(t)})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 getUserInfo")}))}}]),e}())({baseUrl:"https://mesto-vercel.vercel.app/api",headers:{"Content-Type":"application/json"}}),U=a(24),I=function(e){var t=e.component,a=Object(U.a)(e,["component"]);return o.a.createElement(u.b,null,(function(){return a.loggedIn?o.a.createElement(t,a):o.a.createElement(u.a,{to:"/login"})}))},P="https://mesto-vercel.vercel.app/api";var L=function(){var e=o.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(s.a)(r,2),i=c[0],_=c[1],h=o.a.useState(!1),O=Object(s.a)(h,2),y=O[0],S=O[1],U=o.a.useState(!1),L=Object(s.a)(U,2),A=L[0],T=L[1],x=o.a.useState(!1),z=Object(s.a)(x,2),B=z[0],D=z[1],q=o.a.useState(!0),J=Object(s.a)(q,2),R=J[0],F=J[1],H=o.a.useState(void 0),M=Object(s.a)(H,2),W=M[0],G=M[1],V=o.a.useState({}),$=Object(s.a)(V,2),K=$[0],Q=$[1],X=o.a.useState([]),Y=Object(s.a)(X,2),Z=Y[0],ee=Y[1],te=o.a.useState(""),ae=Object(s.a)(te,2),ne=ae[0],oe=ae[1],re=Object(u.g)();function ce(e){var t=e.token;w.getInitialCards({token:t}).then((function(e){ee(e)})).catch((function(e){return console.log("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})),w.getUserInfo({token:t}).then((function(e){Q(e)})).catch((function(e){return console.log("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}function ie(){D(!0)}function le(){_(!1),S(!1),T(!1),D(!1),G(void 0)}return o.a.useEffect((function(){var e=localStorage.getItem("token");e&&function(e){var t=e.token;return fetch("".concat(P,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441 \u0442\u043e\u043a\u0435\u043d\u043e\u043c ")})).then((function(e){return e}))}({token:e}).then((function(t){oe(t.email),n(!0),ce({token:e}),re.push("/")}))}),[]),o.a.useEffect((function(){function e(e){"Escape"===e.key&&le()}return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),o.a.createElement(f.Provider,{value:K},o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"page__container"},o.a.createElement(d,{loggedIn:a,email:ne,onClickSignOut:function(){localStorage.removeItem("token"),n(!1),ee([]),Q({})}}),o.a.createElement("main",{className:"content"},o.a.createElement(u.d,null,o.a.createElement(u.b,{path:"/login"},o.a.createElement(p,{onLoginUser:function(e){var t=e.email,a=e.password;(function(e){var t=e.email,a=e.password;return fetch("".concat(P,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:a})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e ")})).then((function(e){return e}))})({email:t,password:a}).then((function(e){localStorage.setItem("token",e.token),oe(t),n(!0),ce(e),re.push("/")})).catch((function(e){return console.log(e)}))}})),o.a.createElement(u.b,{path:"/register"},o.a.createElement(m,{onRegisterUser:function(e){(function(e){var t=e.email,a=e.password;return fetch("".concat(P,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:a})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e ")})).then((function(e){return e}))})({email:e.email,password:e.password}).then((function(e){F(!0),ie(),re.push("/login")})).catch((function(e){F(!1),ie()}))}})),o.a.createElement(I,{path:"/",loggedIn:a,component:g,onEditAvatar:function(){_(!0)},onEditProfile:function(){S(!0)},onAddPlace:function(){T(!0)},onCardClick:function(e){G(e)},cards:Z,onCardLike:function(e){var t=localStorage.getItem("token"),a=e.likes.some((function(e){return e===K._id}));w.changeLikeCardStatus(e._id,a,{token:t}).then((function(t){var a=Z.map((function(a){return a._id===e._id?t:a}));ee(a)})).catch((function(e){return console.log("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){var t=localStorage.getItem("token");w.removeCard(e._id,{token:t}).then((function(t){var a=Z.filter((function(t){return t._id!==e._id&&t}));ee(a)})).catch((function(e){return console.log("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}))),a&&o.a.createElement(E,null),o.a.createElement(v,{status:R,isOpen:B,onClose:le}),o.a.createElement(j,{card:W,onClose:le}),o.a.createElement(N,{isOpen:y,onClose:le,onUpdateUser:function(e){var t=localStorage.getItem("token");w.setUserInfo(e,{token:t}).then((function(e){Q(e),le()})).catch((function(e){return console.log("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),o.a.createElement(k,{isOpen:i,onClose:le,onUpdateAvatar:function(e){var t=localStorage.getItem("token");w.upgradeAvatar(e,{token:t}).then((function(e){Q(e),Q(e),le()})).catch((function(e){return console.log("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),o.a.createElement(C,{isOpen:A,onClose:le,onAddPlace:function(e){var t=localStorage.getItem("token");w.addNewCard(e,{token:t}).then((function(e){ee([e].concat(Object(l.a)(Z))),le()})).catch((function(e){return console.log("\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),o.a.createElement(b,{formName:"confirm",buttonName:"\u0414\u0430",onClose:le},o.a.createElement("div",{className:"popup__heading"},"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,null,o.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.7599dcd7.chunk.js.map