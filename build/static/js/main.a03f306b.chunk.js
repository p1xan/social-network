(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,s,a){e.exports={posts:"MyPosts_posts__3h2I9",textarea:"MyPosts_textarea__3UrQM",button:"MyPosts_button__2M1xn",wrapper:"MyPosts_wrapper__CACXw",myPost:"MyPosts_myPost__1FXR6"}},13:function(e,s,a){e.exports={img:"ProfileInfo_img__1tdta",wrapper:"ProfileInfo_wrapper__3j5wR",description:"ProfileInfo_description__pomnQ"}},18:function(e,s,a){e.exports={item:"Post_item__3UFjI",likesAndMessage:"Post_likesAndMessage__-iqab"}},21:function(e,s,a){e.exports={header:"Header_header__2uQ72"}},27:function(e,s,a){},28:function(e,s,a){},35:function(e,s,a){"use strict";a.r(s);var t=a(1),i=a.n(t),n=a(20),c=a.n(n),o=(a(27),a(28),a(21)),r=a.n(o),d=a(0),l=function(){return Object(d.jsx)("header",{className:r.a.header,children:Object(d.jsx)("img",{src:"https://i.ibb.co/RNJ320j/telegram-logo-circle-icon-134012.png"})})},j=a(4),m=a.n(j),g=a(7),p=function(e){return Object(d.jsxs)("nav",{className:m.a.nav,children:[Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(g.b,{to:"/profile",activeClassName:m.a.active,children:"Profile"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(g.b,{to:"/dialogs",activeClassName:m.a.active,children:"Messages"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(g.b,{to:"news",activeClassName:m.a.active,children:"News"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(g.b,{to:"music",activeClassName:m.a.active,children:"Music"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(g.b,{to:"settings",activeClassName:m.a.active,children:"Settings"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(g.b,{to:"friends",activeClassName:m.a.active,children:"Friends"})})]})},x=a(11),b=a.n(x),u=a(18),h=a.n(u),f=function(e){return Object(d.jsxs)("div",{className:h.a.item,children:[Object(d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Conor_McGregor_2018.jpg"}),Object(d.jsxs)("div",{className:h.a.likesAndMessage,children:[e.message,Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:" Likes "})," - ",e.like]})]})]})},_=function(e){var s=e.postsData.map((function(e){return Object(d.jsx)(f,{message:e.message,like:e.like})})),a=i.a.createRef();return Object(d.jsxs)("div",{className:b.a.wrapper,children:[Object(d.jsx)("h3",{className:b.a.myPost,children:"My posts"}),Object(d.jsxs)("div",{className:b.a.posts,children:[Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{onChange:function(){var s=a.current.value;e.updateNewPostText(s)},value:e.newPostText,ref:a,className:b.a.textarea})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){e.addPost()},className:b.a.button,children:"Add Post"})})]}),s]})},v=a(13),O=a.n(v),N=function(e){return Object(d.jsxs)("div",{className:O.a.wrapper,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:O.a.img,src:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"})}),Object(d.jsx)("div",{className:O.a.description,children:"Description"})]})},P=function(){},w={profilePage:{postsData:[{id:1,message:"post1",like:10},{id:2,message:"post2",like:11},{id:3,message:"post3",like:12}],newPostText:"hello react-js!"},messagesPage:{messagesData:[{id:1,message:"Hi"},{id:2,message:"Hey"},{id:3,message:"Ho"}],dialogsData:[{id:1,name:"Dima"},{id:2,name:"Pasha"},{id:3,name:"Sergey"}],newMessageText:"hello Dima"},sidebar:{friends:[{id:1,name:"Dima"},{id:2,name:"Pasha"},{id:3,name:"Sergey"}]}},M=function(){var e={id:5,message:w.profilePage.newPostText,like:15};w.profilePage.postsData.push(e),w.profilePage.newPostText="",P(w)},T=function(e){w.profilePage.newPostText=e,P(w)},D=function(){var e={id:4,message:w.messagesPage.newMessageText};w.messagesPage.messagesData.push(e),w.messagesPage.newMessageText="",P(w)},k=function(e){w.messagesPage.newMessageText=e,P(w)},y=w,C=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(N,{}),Object(d.jsx)(_,{addPost:e.addPost,postsData:e.postsData.postsData,newPostText:e.postsData.newPostText,updateNewPostText:e.updateNewPostText})]})},I=a(9),F=a.n(I),R=function(e){return Object(d.jsx)("div",{className:F.a.dialog,children:Object(d.jsx)(g.b,{activeClassName:F.a.active,to:"/dialogs/"+e.id,children:e.name})})},S=function(e){return Object(d.jsx)("div",{className:F.a.message,children:e.message})},A=function(e){var s=e.state.dialogsData.map((function(e){return Object(d.jsx)(R,{name:e.name,id:e.id})})),a=e.state.messagesData.map((function(e){return Object(d.jsx)(S,{message:e.message})})),t=i.a.createRef();return Object(d.jsxs)("div",{className:F.a.dialogs,children:[Object(d.jsx)("div",{className:F.a.dialogsItem,children:s}),Object(d.jsx)("div",{className:F.a.messages,children:a}),Object(d.jsx)("textarea",{onChange:function(){var s=t.current.value;e.updateNewMessageText(s)},ref:t,value:e.newMessageText}),Object(d.jsx)("button",{onClick:function(){e.addMessage()},children:" Send Message"})]})},J=a(2),Q=function(e){return Object(d.jsxs)("div",{className:"appWrapper",children:[Object(d.jsx)(l,{}),Object(d.jsxs)("div",{className:"contentNavWrapper",children:[Object(d.jsx)(p,{sidebar:e.state.sidebar}),Object(d.jsxs)("div",{className:"appWrapperContent",children:[Object(d.jsx)(J.a,{path:"/profile",render:function(){return Object(d.jsx)(C,{postsData:e.state.profilePage,addPost:e.addPost,updateNewPostText:e.updateNewPostText})}}),Object(d.jsx)(J.a,{path:"/dialogs",render:function(){return Object(d.jsx)(A,{state:e.state.messagesPage,addMessage:e.addMessage,updateNewMessageText:e.updateNewMessageText,newMessageText:e.state.messagesPage.newMessageText})}}),Object(d.jsx)(J.a,{path:"/news"}),Object(d.jsx)(J.a,{path:"/music"}),Object(d.jsx)(J.a,{path:"/settings"})]})]})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(s){var a=s.getCLS,t=s.getFID,i=s.getFCP,n=s.getLCP,c=s.getTTFB;a(e),t(e),i(e),n(e),c(e)}))},H=function(e){c.a.render(Object(d.jsx)(g.a,{children:Object(d.jsx)(Q,{state:e,addPost:M,updateNewPostText:T,addMessage:D,updateNewMessageText:k})}),document.getElementById("root"))};H(y),P=H,B()},4:function(e,s,a){e.exports={nav:"Navbar_nav__ltNdz",item:"Navbar_item__yKd0V",active:"Navbar_active__1n4_D"}},9:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__7mByN",dialogsItem:"Dialogs_dialogsItem__B40io",dialog:"Dialogs_dialog__cwZS3",messages:"Dialogs_messages__14pQm",message:"Dialogs_message__-t_Ke",active:"Dialogs_active__1FT58"}}},[[35,1,2]]]);
//# sourceMappingURL=main.a03f306b.chunk.js.map