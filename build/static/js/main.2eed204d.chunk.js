(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__7mByN",dialogsItem:"Dialogs_dialogsItem__B40io",dialog:"Dialogs_dialog__cwZS3",messages:"Dialogs_messages__14pQm",message:"Dialogs_message__-t_Ke",active:"Dialogs_active__1FT58",wrapperForMessage:"Dialogs_wrapperForMessage__QPlcd",wrapperForTextarea:"Dialogs_wrapperForTextarea__1fsYx"}},15:function(e,t,s){e.exports={posts:"MyPosts_posts__3h2I9",textarea:"MyPosts_textarea__3UrQM",button:"MyPosts_button__2M1xn",wrapper:"MyPosts_wrapper__CACXw",myPost:"MyPosts_myPost__1FXR6"}},19:function(e,t,s){e.exports={img:"ProfileInfo_img__1tdta",wrapper:"ProfileInfo_wrapper__3j5wR",description:"ProfileInfo_description__pomnQ"}},24:function(e,t,s){e.exports={item:"Post_item__3UFjI",likesAndMessage:"Post_likesAndMessage__-iqab"}},26:function(e,t,s){e.exports={header:"Header_header__2uQ72"}},27:function(e,t,s){e.exports={usersPhoto:"users_usersPhoto__3liDa"}},32:function(e,t,s){},33:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(17),c=s.n(i),r=(s(32),s(33),s(26)),o=s.n(r),l=s(1),d=function(){return Object(l.jsx)("header",{className:o.a.header,children:Object(l.jsx)("img",{src:"https://i.ibb.co/RNJ320j/telegram-logo-circle-icon-134012.png"})})},j=s(6),u=s.n(j),b=s(9),m=function(e){return Object(l.jsxs)("nav",{className:u.a.nav,children:[Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(b.b,{to:"/profile",activeClassName:u.a.active,children:"Profile"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(b.b,{to:"/dialogs",activeClassName:u.a.active,children:"Messages"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(b.b,{to:"news",activeClassName:u.a.active,children:"News"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(b.b,{to:"music",activeClassName:u.a.active,children:"Music"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(b.b,{to:"settings",activeClassName:u.a.active,children:"Settings"})}),Object(l.jsx)("div",{className:u.a.item,children:Object(l.jsx)(b.b,{to:"friends",activeClassName:u.a.active,children:"Friends"})})]})},g=s(19),p=s.n(g),x=function(e){return Object(l.jsxs)("div",{className:p.a.wrapper,children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:p.a.img,src:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"})}),Object(l.jsx)("div",{className:p.a.description,children:"Description"})]})},f=s(13),O=s(4),h="ADD-POST",v="UPDATE-NEW-POST-TEXT",_={postsData:[{id:1,message:"post1",like:10},{id:2,message:"post2",like:11},{id:3,message:"post3",like:12}],newPostText:"hello react-js!"},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var s={id:5,message:e.newPostText,like:15};return Object(O.a)(Object(O.a)({},e),{},{postsData:[].concat(Object(f.a)(e.postsData),[s]),newPostText:""});case v:return Object(O.a)(Object(O.a)({},e),{},{newPostText:t.newText});default:return e}},N=s(15),P=s.n(N),D=s(24),T=s.n(D),y=function(e){return Object(l.jsxs)("div",{className:T.a.item,children:[Object(l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Conor_McGregor_2018.jpg"}),Object(l.jsxs)("div",{className:T.a.likesAndMessage,children:[e.message,Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:" Likes "})," - ",e.like]})]})]})},M=function(e){var t=e.postsData.map((function(e){return Object(l.jsx)(y,{message:e.message,like:e.like},e.id)})),s=n.a.createRef();return Object(l.jsxs)("div",{className:P.a.wrapper,children:[Object(l.jsx)("h3",{className:P.a.myPost,children:"My posts"}),Object(l.jsxs)("div",{className:P.a.posts,children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{onChange:function(){var t=s.current.value;e.updateNewPostText(t)},value:e.newPostText,ref:s,className:P.a.textarea})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){e.addPost()},className:P.a.button,children:"Add Post"})})]}),t]})},k=s(12),C=Object(k.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:h})},updateNewPostText:function(t){e(function(e){return{type:v,newText:e}}(t))}}}))(M),F=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)(x,{}),Object(l.jsx)(C,{})]})},S=s(3),U="ADD-MESSAGE",E="UPDATE-NEW-MESSAGE-TEXT",I={messagesData:[{id:1,message:"Hi"},{id:2,message:"Hey"},{id:3,message:"Ho"}],dialogsData:[{id:1,name:"Dima"},{id:2,name:"Pasha"},{id:3,name:"Sergey"}],newMessageText:"hello Dima"},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:var s={id:4,message:e.newMessageText};return Object(O.a)(Object(O.a)({},e),{},{messagesData:[].concat(Object(f.a)(e.messagesData),[s]),newMessageText:""});case E:return Object(O.a)(Object(O.a)({},e),{},{newMessageText:t.newText});default:return e}},R=s(11),L=s.n(R),W=function(e){return Object(l.jsx)("div",{className:L.a.dialog,children:Object(l.jsx)(b.b,{activeClassName:L.a.active,to:"/dialogs/"+e.id,children:e.name})})},Q=function(e){return Object(l.jsx)("div",{className:L.a.message,children:e.message})},B=function(e){var t=e.dialogsData.map((function(e){return Object(l.jsx)(W,{name:e.name,id:e.id},e.id)})),s=e.messagesData.map((function(e){return Object(l.jsx)(Q,{message:e.message},e.id)})),a=n.a.createRef();return Object(l.jsxs)("div",{className:L.a.dialogs,children:[Object(l.jsxs)("div",{className:L.a.wrapperForMessage,children:[Object(l.jsx)("div",{className:L.a.dialogsItem,children:t}),Object(l.jsx)("div",{className:L.a.messages,children:s})]}),Object(l.jsxs)("div",{className:L.a.wrapperForTextarea,children:[Object(l.jsx)("textarea",{onChange:function(){var t=a.current.value;e.updateNewMessageText(t)},ref:a,value:e.newMessageText}),Object(l.jsx)("button",{onClick:function(){e.addMessage()},children:" Send Message"})]})]})},G=Object(k.b)((function(e){return{dialogsData:e.messagesPage.dialogsData,messagesData:e.messagesPage.messagesData,newMessageText:e.messagesPage.newMessageText}}),(function(e){return{addMessage:function(){e({type:U})},updateNewMessageText:function(t){e(function(e){return{type:E,newText:e}}(t))}}}))(B),J=s(27),H=s.n(J),K=function(e){return 0===e.users.length&&e.setUsers([{id:1,photoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Conor_McGregor_2018.jpg/525px-Conor_McGregor_2018.jpg",followed:!1,fullName:"Pasha",status:"lol",location:{city:"Minsk",country:"Belarus"}},{id:2,photoUrl:"https://upload.wikimedia.org/wikipedia/commons/1/13/Nate_Diaz_Oct_2019.jpg",followed:!0,fullName:"Sergey",status:"lol",location:{city:"Moscow",country:"Russia"}},{id:3,photoUrl:"https://fighttime.ru/images/fightbase/fighters/31239.jpg",followed:!1,fullName:"Andrew",status:"lol",location:{city:"Kiev",country:"Ukraine"}}]),Object(l.jsx)("div",{children:e.users.map((function(t){return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:H.a.usersPhoto,src:t.photoUrl,alt:"avatar"}),Object(l.jsx)("div",{children:t.followed?Object(l.jsx)("button",{onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(l.jsx)("button",{onClick:function(){e.follow(t.id)},children:"Follow"})}),Object(l.jsx)("div",{children:t.fullName}),Object(l.jsx)("div",{children:t.status}),Object(l.jsx)("div",{children:t.location.country}),Object(l.jsx)("div",{children:t.location.city})]},t.id)}))})},X="FOLLOW",q="UNFOLLOW",z="SET_USERS",V={users:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{followed:!0}):e}))});case q:return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{followed:!1}):e}))});case z:return Object(O.a)(Object(O.a)({},e),{},{users:[].concat(Object(f.a)(e.users),Object(f.a)(t.users))});default:return e}},Z=Object(k.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(t){e(function(e){return{type:X,userId:e}}(t))},unfollow:function(t){e(function(e){return{type:q,userId:e}}(t))},setUsers:function(t){e(function(e){return{type:z,users:e}}(t))}}}))(K),$=function(e){return Object(l.jsxs)("div",{className:"appWrapper",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("div",{className:"contentNavWrapper",children:[Object(l.jsx)(m,{}),Object(l.jsxs)("div",{className:"appWrapperContent",children:[Object(l.jsx)(S.a,{path:"/profile",render:function(){return Object(l.jsx)(F,{})}}),Object(l.jsx)(S.a,{path:"/dialogs",render:function(){return Object(l.jsx)(G,{})}}),Object(l.jsx)(S.a,{path:"/users",render:function(){return Object(l.jsx)(Z,{})}}),Object(l.jsx)(S.a,{path:"/news"}),Object(l.jsx)(S.a,{path:"/music"}),Object(l.jsx)(S.a,{path:"/settings"})]})]})]})},ee=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))},te=s(25),se={},ae=Object(te.a)({profilePage:w,messagesPage:A,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se;return e},usersPage:Y}),ne=Object(te.b)(ae);c.a.render(Object(l.jsx)(b.a,{children:Object(l.jsx)(k.a,{store:ne,children:Object(l.jsx)($,{})})}),document.getElementById("root")),ee()},6:function(e,t,s){e.exports={nav:"Navbar_nav__ltNdz",item:"Navbar_item__yKd0V",active:"Navbar_active__1n4_D"}}},[[40,1,2]]]);
//# sourceMappingURL=main.2eed204d.chunk.js.map