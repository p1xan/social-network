(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__7mByN",dialogsItem:"Dialogs_dialogsItem__B40io",dialog:"Dialogs_dialog__cwZS3",messages:"Dialogs_messages__14pQm",message:"Dialogs_message__-t_Ke",active:"Dialogs_active__1FT58"}},13:function(e,s,t){e.exports={posts:"MyPosts_posts__3h2I9",textarea:"MyPosts_textarea__3UrQM",button:"MyPosts_button__2M1xn",wrapper:"MyPosts_wrapper__CACXw",myPost:"MyPosts_myPost__1FXR6"}},17:function(e,s,t){e.exports={img:"ProfileInfo_img__1tdta",wrapper:"ProfileInfo_wrapper__3j5wR",description:"ProfileInfo_description__pomnQ"}},22:function(e,s,t){e.exports={item:"Post_item__3UFjI",likesAndMessage:"Post_likesAndMessage__-iqab"}},24:function(e,s,t){e.exports={header:"Header_header__2uQ72"}},29:function(e,s,t){},30:function(e,s,t){},37:function(e,s,t){"use strict";t.r(s);var a=t(0),n=t.n(a),i=t(15),c=t.n(i),r=(t(29),t(30),t(24)),o=t.n(r),d=t(1),l=function(){return Object(d.jsx)("header",{className:o.a.header,children:Object(d.jsx)("img",{src:"https://i.ibb.co/RNJ320j/telegram-logo-circle-icon-134012.png"})})},j=t(5),m=t.n(j),g=t(8),u=function(e){return Object(d.jsxs)("nav",{className:m.a.nav,children:[Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(g.b,{to:"/profile",activeClassName:m.a.active,children:"Profile"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(g.b,{to:"/dialogs",activeClassName:m.a.active,children:"Messages"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(g.b,{to:"news",activeClassName:m.a.active,children:"News"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(g.b,{to:"music",activeClassName:m.a.active,children:"Music"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(g.b,{to:"settings",activeClassName:m.a.active,children:"Settings"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(g.b,{to:"friends",activeClassName:m.a.active,children:"Friends"})})]})},x=t(17),b=t.n(x),p=function(e){return Object(d.jsxs)("div",{className:b.a.wrapper,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:b.a.img,src:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"})}),Object(d.jsx)("div",{className:b.a.description,children:"Description"})]})},h="ADD-POST",f="UPDATE-NEW-POST-TEXT",v={postsData:[{id:1,message:"post1",like:10},{id:2,message:"post2",like:11},{id:3,message:"post3",like:12}],newPostText:"hello react-js!"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case h:var t={id:5,message:e.newPostText,like:15};return e.postsData.push(t),e.newPostText="",e;case f:return e.newPostText=s.newText,e;default:return e}},_=t(13),N=t.n(_),w=t(22),P=t.n(w),T=function(e){return Object(d.jsxs)("div",{className:P.a.item,children:[Object(d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Conor_McGregor_2018.jpg"}),Object(d.jsxs)("div",{className:P.a.likesAndMessage,children:[e.message,Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:" Likes "})," - ",e.like]})]})]})},D=function(e){var s=e.postsData.map((function(e){return Object(d.jsx)(T,{message:e.message,like:e.like})})),t=n.a.createRef();return Object(d.jsxs)("div",{className:N.a.wrapper,children:[Object(d.jsx)("h3",{className:N.a.myPost,children:"My posts"}),Object(d.jsxs)("div",{className:N.a.posts,children:[Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{onChange:function(){var s=t.current.value;e.updateNewPostText(s)},value:e.newPostText,ref:t,className:N.a.textarea})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){e.addPost()},className:N.a.button,children:"Add Post"})})]}),s]})},M=t(12),y=Object(M.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:h})},updateNewPostText:function(s){e(function(e){return{type:f,newText:e}}(s))}}}))(D),k=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{}),Object(d.jsx)(y,{})]})},C=t(3),E="ADD-MESSAGE",S="UPDATE-NEW-MESSAGE-TEXT",A={messagesData:[{id:1,message:"Hi"},{id:2,message:"Hey"},{id:3,message:"Ho"}],dialogsData:[{id:1,name:"Dima"},{id:2,name:"Pasha"},{id:3,name:"Sergey"}],newMessageText:"hello Dima"},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case E:var t={id:4,message:e.newMessageText};return e.messagesData.push(t),e.newMessageText="",e;case S:return e.newMessageText=s.newText,e;default:return e}},F=t(10),R=t.n(F),J=function(e){return Object(d.jsx)("div",{className:R.a.dialog,children:Object(d.jsx)(g.b,{activeClassName:R.a.active,to:"/dialogs/"+e.id,children:e.name})})},Q=function(e){return Object(d.jsx)("div",{className:R.a.message,children:e.message})},U=function(e){var s=e.dialogsData.map((function(e){return Object(d.jsx)(J,{name:e.name,id:e.id})})),t=e.messagesData.map((function(e){return Object(d.jsx)(Q,{message:e.message})})),a=n.a.createRef();return Object(d.jsxs)("div",{className:R.a.dialogs,children:[Object(d.jsx)("div",{className:R.a.dialogsItem,children:s}),Object(d.jsx)("div",{className:R.a.messages,children:t}),Object(d.jsx)("textarea",{onChange:function(){var s=a.current.value;e.updateNewMessageText(s)},ref:a,value:e.newMessageText}),Object(d.jsx)("button",{onClick:function(){e.addMessage()},children:" Send Message"})]})},W=Object(M.b)((function(e){return{dialogsData:e.messagesPage.dialogsData,messagesData:e.messagesPage.messagesData,newMessageText:e.messagesPage.newMessageText}}),(function(e){return{addMessage:function(){e({type:E})},updateNewMessageText:function(s){e(function(e){return{type:S,newText:e}}(s))}}}))(U),B=function(e){return Object(d.jsxs)("div",{className:"appWrapper",children:[Object(d.jsx)(l,{}),Object(d.jsxs)("div",{className:"contentNavWrapper",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"appWrapperContent",children:[Object(d.jsx)(C.a,{path:"/profile",render:function(){return Object(d.jsx)(k,{})}}),Object(d.jsx)(C.a,{path:"/dialogs",render:function(){return Object(d.jsx)(W,{})}}),Object(d.jsx)(C.a,{path:"/news"}),Object(d.jsx)(C.a,{path:"/music"}),Object(d.jsx)(C.a,{path:"/settings"})]})]})]})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(s){var t=s.getCLS,a=s.getFID,n=s.getFCP,i=s.getLCP,c=s.getTTFB;t(e),a(e),n(e),i(e),c(e)}))},X=t(23),G={},K=Object(X.a)({profilePage:O,messagesPage:I,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G;return e}}),L=Object(X.b)(K),q=function(e){c.a.render(Object(d.jsx)(g.a,{children:Object(d.jsx)(M.a,{store:L,children:Object(d.jsx)(B,{})})}),document.getElementById("root"))};q(L.getState()),L.subscribe((function(){q()})),H()},5:function(e,s,t){e.exports={nav:"Navbar_nav__ltNdz",item:"Navbar_item__yKd0V",active:"Navbar_active__1n4_D"}}},[[37,1,2]]]);
//# sourceMappingURL=main.668ef3b4.chunk.js.map