(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){e.exports={nav:"Navbar_nav__ltNdz",item:"Navbar_item__yKd0V",active:"Navbar_active__1n4_D"}},158:function(e,t,n){},159:function(e,t,n){},20:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__7mByN",dialogsItem:"Dialogs_dialogsItem__B40io",dialog:"Dialogs_dialog__cwZS3",messages:"Dialogs_messages__14pQm",message:"Dialogs_message__-t_Ke",active:"Dialogs_active__1FT58",wrapperForMessage:"Dialogs_wrapperForMessage__QPlcd",wrapperForTextarea:"Dialogs_wrapperForTextarea__1fsYx"}},283:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(63),i=n.n(a),c=(n(158),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,284)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),a(e),i(e)}))}),o=n(23),u=n(24),l=n(26),d=n(25),j=(n(159),n(14)),p=n.n(j),f=n(12),b=n(0),g=function(e){return Object(b.jsxs)("nav",{className:p.a.nav,children:[Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.b,{to:"/profile",activeClassName:p.a.active,children:"Profile"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.b,{to:"/dialogs",activeClassName:p.a.active,children:"Messages"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.b,{to:"/news",activeClassName:p.a.active,children:"News"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.b,{to:"/music",activeClassName:p.a.active,children:"Music"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.b,{to:"/settings",activeClassName:p.a.active,children:"Settings"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.b,{to:"/users",activeClassName:p.a.active,children:"Users"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.b,{to:"/login",activeClassName:p.a.active,children:"Login"})})]})},h=n(10),O=n(42),m=n(5),x="ADD-MESSAGE",v={messagesData:[{id:1,message:"Hi"},{id:2,message:"Hey"},{id:3,message:"Ho"}],dialogsData:[{id:1,name:"Dima"},{id:2,name:"Pasha"},{id:3,name:"Sergey"}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var n={id:4,message:t.newMessageText};return Object(m.a)(Object(m.a)({},e),{},{messagesData:[].concat(Object(O.a)(e.messagesData),[n])});default:return e}},P=n(20),_=n.n(P),S=function(e){return Object(b.jsx)("div",{className:_.a.dialog,children:Object(b.jsx)(f.b,{activeClassName:_.a.active,to:"/dialogs/"+e.id,children:e.name})})},A=function(e){return Object(b.jsx)("div",{className:_.a.message,children:e.message})},C=n(122),y=n(123),N=n(54),M=n(36),E=n.n(M),T=function(e){var t=e.input,n=e.meta,r=n.touched,s=n.error,a=Object(N.a)(e,["input","meta"]),i=r&&s;return Object(b.jsxs)("div",{className:E.a.formControl+" "+(i?E.a.error:""),children:[Object(b.jsx)("div",{children:Object(b.jsx)("textarea",Object(m.a)(Object(m.a)({},t),a))}),i&&Object(b.jsx)("span",{children:s})]})},k=function(e){var t=e.input,n=e.meta,r=n.touched,s=n.error,a=Object(N.a)(e,["input","meta"]),i=r&&s;return Object(b.jsxs)("div",{className:E.a.formControl+" "+(i?E.a.error:""),children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",Object(m.a)(Object(m.a)({},t),a))}),i&&Object(b.jsx)("span",{children:s})]})},I=function(e,t,n,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(b.jsxs)("div",{children:[Object(b.jsx)(C.a,Object(m.a)({placeholder:e,name:t,component:r,validate:n},s))," ",a]})},D=function(e){if(!e)return"Field is required"},F=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},z=F(50),U=Object(y.a)({form:"dialogAddMessageForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,className:_.a.wrapperForTextarea,children:[Object(b.jsx)(C.a,{component:T,name:"newMessageText",placeholder:"Enter your message",validate:[D,z]}),Object(b.jsx)("button",{children:" Send Message"})]})})),L=function(e){var t=e.dialogsData.map((function(e){return Object(b.jsx)(S,{name:e.name,id:e.id},e.id)})),n=e.messagesData.map((function(e){return Object(b.jsx)(A,{message:e.message},e.id)}));return e.isAuth?Object(b.jsxs)("div",{className:_.a.dialogs,children:[Object(b.jsxs)("div",{className:_.a.wrapperForMessage,children:[Object(b.jsx)("div",{className:_.a.dialogsItem,children:t}),Object(b.jsx)("div",{className:_.a.messages,children:n})]}),Object(b.jsx)(U,{onSubmit:function(t){e.addMessage(t.newMessageText)}})]}):Object(b.jsx)(h.a,{to:"/login"})},R=n(11),G=function(e){return{isAuth:e.auth.isAuth}},B=function(e){var t=function(t){Object(l.a)(r,t);var n=Object(d.a)(r);function r(){return Object(o.a)(this,r),n.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return void 0===this.props.isAuth?null:this.props.isAuth?Object(b.jsx)(e,Object(m.a)({},this.props)):Object(b.jsx)(h.a,{to:"/login"})}}]),r}(s.a.Component);return Object(R.b)(G)(t)},H=n(8),Q=Object(H.d)(Object(R.b)((function(e){return{dialogsData:e.messagesPage.dialogsData,messagesData:e.messagesPage.messagesData,newMessageText:e.messagesPage.newMessageText}}),(function(e){return{addMessage:function(t){e(function(e){return{type:x,newMessageText:e}}(t))}}})),B)(L),K=n(9),V=n.n(K),W=n(17),q=n(126),J=n.n(q).a.create({withCredentials:!0,headers:{"API-KEY":"d288c1a7-7477-4d25-ad13-eb66c2aaf9c9"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),X={getUsers:function(e,t){return J.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return J.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return J.post("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Deprecated  method. PLease use ProfileAPI"),Y.getProfile(e)}},Y={getProfile:function(e){return J.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return J.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return J.put("profile/status",{status:e}).then((function(e){return e.data}))}},Z=function(){return J.get("auth/me").then((function(e){return e.data}))},$=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return J.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},ee=function(){return J.delete("auth/login").then((function(e){return e.data}))},te=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(m.a)(Object(m.a)({},e),r):e}))},ne="FOLLOW",re="UNFOLLOW",se="SET_USERS",ae="SET_CURRENT_PAGE",ie="SET_USERS_TOTAL_COUNT",ce="TOGGLE_IS_FETCHING",oe="TOGGLE_IS_FOLLOWING_PROGRESS",ue={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},le=function(e){return{type:ne,userId:e}},de=function(e){return{type:re,userId:e}},je=function(e){return{type:ae,currentPage:e}},pe=function(e){return{type:ce,isFetching:e}},fe=function(e,t){return{type:oe,isFetching:e,userId:t}},be=function(){var e=Object(W.a)(V.a.mark((function e(t,n,r,s){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(fe(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(s(n)),t(fe(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(m.a)(Object(m.a)({},e),{},{users:te(e.users,t.userId,"id",{followed:!0})});case re:return Object(m.a)(Object(m.a)({},e),{},{users:te(e.users,t.userId,"id",{followed:!1})});case se:return Object(m.a)(Object(m.a)({},e),{},{users:t.users});case ae:return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case ie:return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.totalCount});case ce:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});case oe:return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},he=n(35),Oe=n.n(he),me=n(53),xe=n(68),ve=n.n(xe),we=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(" "+s);var a=Math.ceil(t/10),i=Object(r.useState)(1),c=Object(me.a)(i,2),o=c[0],u=c[1],l=10*(o-1)+1,d=10*o;return Object(b.jsxs)("div",{children:[o>1&&Object(b.jsx)("button",{className:ve.a.button,onClick:function(){u(o-1)},children:"PREV"}),n.filter((function(e){return e>=l&&e<=d})).map((function(t){return Object(b.jsx)("span",{className:e.currentPage===t&&ve.a.selectedPage,onClick:function(n){e.onPageChanged(t)},children:t},t.id)})),a>o&&Object(b.jsx)("button",{className:ve.a.button,onClick:function(){u(o+1)},children:"NEXT"})]})},Pe=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,s=e.follow;return Object(b.jsx)("div",{className:Oe.a.wrapper,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(f.b,{to:"/profile/"+t.id,children:Object(b.jsx)("img",{className:Oe.a.usersPhoto,src:null!=t.photos.small?t.photos.small:"data:image/png;base64,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",alt:"avatar"})})}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Follow"})}),Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.status}),Object(b.jsx)("div",{children:"user.location.country"}),Object(b.jsx)("div",{children:"user.location.city"})]})})},_e=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,a=e.users,i=Object(N.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users"]);return Object(b.jsxs)("div",{className:Oe.a.wrapper,children:[Object(b.jsx)(we,{currentPage:r,totalUsersCount:t,pageSize:n,onPageChanged:s}),a.map((function(e){return Object(b.jsx)(Pe,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},e.id)}))]})},Se=n.p+"static/media/a2dc9668f2cf170fe3efeb263128b0e7.89906e12.gif",Ae=function(e){return Object(b.jsx)("img",{className:Oe.a.preloader,src:Se,alt:"preloader"})},Ce=n(127),ye=Object(Ce.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ne=function(e){return e.usersPage.pageSize},Me=function(e){return e.usersPage.totalUsersCount},Ee=function(e){return e.usersPage.currentPage},Te=function(e){return e.usersPage.isFetching},ke=function(e){return e.usersPage.followingInProgress},Ie=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(Ae,{}):null,Object(b.jsx)(_e,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),De=Object(H.d)(Object(R.b)((function(e){return{users:ye(e),pageSize:Ne(e),totalUsersCount:Me(e),currentPage:Ee(e),isFetching:Te(e),followingInProgress:ke(e)}}),{follow:function(e){return function(){var t=Object(W.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:be(n,e,X.follow.bind(e),le);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(W.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:be(n,e,X.unfollow.bind(e),de);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:je,toggleFollowingProgress:fe,requestUsers:function(e,t){return function(){var n=Object(W.a)(V.a.mark((function n(r){var s;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(pe(!0)),r(je(e)),n.next=4,X.getUsers(e,t);case 4:s=n.sent,r(pe(!1)),r((i=s.items,{type:se,users:i})),r((a=s.totalCount,{type:ie,totalCount:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ie),Fe=n(89),ze=n.n(Fe),Ue=function(e){var t=Object(r.useState)(!1),n=Object(me.a)(t,2),s=n[0],a=n[1],i=Object(r.useState)(e.status),c=Object(me.a)(i,2),o=c[0],u=c[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(b.jsxs)("div",{children:[!s&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){a(!0)},children:e.status||"no status"})}),s&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{autoFocus:!0,onFocus:function(e){e.target.select()},onBlur:function(){a(!1),e.updateStatus(o)},onChange:function(e){u(e.currentTarget.value)},value:o})})]})},Le=function(e){var t=e.profile,n=e.status,r=e.updateStatus;return t?Object(b.jsx)("div",{className:ze.a.wrapper,children:Object(b.jsxs)("div",{className:ze.a.description,children:[Object(b.jsx)("img",{src:t.photos.large}),Object(b.jsx)("div",{children:t.fullName}),Object(b.jsx)("div",{children:t.aboutMe}),Object(b.jsx)("div",{children:t.contacts.facebook}),Object(b.jsx)("div",{children:t.contacts.vk}),Object(b.jsx)(Ue,{status:n,updateStatus:r})]})}):Object(b.jsx)(Ae,{})},Re="ADD-POST",Ge="SET_USER_PROFILE",Be="SET_STATUS",He="DELETE_POST",Qe={postsData:[{id:1,message:"post1",like:10},{id:2,message:"post2",like:11},{id:3,message:"post3",like:12}],profile:null,status:""},Ke=function(e){return{type:Be,status:e}},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:var n={id:5,message:t.newPostText,like:15};return Object(m.a)(Object(m.a)({},e),{},{postsData:[].concat(Object(O.a)(e.postsData),[n])});case Ge:return Object(m.a)(Object(m.a)({},e),{},{profile:t.profile});case Be:return Object(m.a)(Object(m.a)({},e),{},{status:t.status});case He:return Object(m.a)(Object(m.a)({},e),{},{postsData:Qe.postsData.filter((function(e){return e.id!=t.postId}))});default:return e}},We=n(43),qe=n.n(We),Je=n(90),Xe=n.n(Je),Ye=function(e){return Object(b.jsxs)("div",{className:Xe.a.item,children:[Object(b.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Conor_McGregor_2018.jpg"}),Object(b.jsxs)("div",{className:Xe.a.likesAndMessage,children:[e.message,Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:" Likes "})," - ",e.like]})]})]})},Ze=F(10),$e=s.a.memo((function(e){console.log("render");var t=e.postsData.map((function(e){return Object(b.jsx)(Ye,{message:e.message,like:e.like},e.id)}));return Object(b.jsxs)("div",{className:qe.a.wrapper,children:[Object(b.jsx)("h3",{className:qe.a.myPost,children:"My posts"}),Object(b.jsx)(et,{onSubmit:function(t){e.addPost(t.newPostText)}}),t]})})),et=Object(y.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,className:qe.a.posts,children:[Object(b.jsx)("div",{children:Object(b.jsx)(C.a,{component:T,name:"newPostText",placeholder:"Enter your message",validate:[D,Ze],className:qe.a.textarea})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:qe.a.button,children:"Add Post"})})]})})),tt=$e,nt=Object(R.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:Re,newPostText:e}}(t))}}}))(tt),rt=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Le,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(b.jsx)(nt,{})]})},st=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(b.jsx)(rt,Object(m.a)(Object(m.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(s.a.Component),at=Object(H.d)(Object(R.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfile:function(e){return function(){var t=Object(W.a)(V.a.mark((function t(n){var r;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.getProfile(e);case 2:r=t.sent,n({type:Ge,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(W.a)(V.a.mark((function t(n){var r;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.getStatus(e);case 2:r=t.sent,n(Ke(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(W.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.updateStatus(e);case 2:0===t.sent.resultCode&&n(Ke(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),h.f,B)(st),it=n(91),ct=n.n(it),ot=function(e){return Object(b.jsxs)("header",{className:ct.a.header,children:[Object(b.jsx)("img",{src:"https://i.ibb.co/RNJ320j/telegram-logo-circle-icon-134012.png",alt:"logo"}),Object(b.jsx)("div",{className:ct.a.login,children:e.isAuth?Object(b.jsxs)("div",{children:[e.login," - ",Object(b.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(b.jsx)(f.b,{to:"/login",children:"Login"})})]})},ut=n(33),lt="social-network/auth/SET_USER_DATA",dt={userId:null,email:null,login:null,isAuth:!1},jt=function(e,t,n,r){return{type:lt,data:{userId:e,email:t,login:n,isAuth:r}}},pt=function(){return function(){var e=Object(W.a)(V.a.mark((function e(t){var n,r,s,a,i;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,a=r.email,i=r.login,t(jt(s,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ft=function(){return function(){var e=Object(W.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:0===e.sent.resultCode&&t(jt(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case lt:return Object(m.a)(Object(m.a)({},e),t.data);default:return e}},gt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)(ot,Object(m.a)({},this.props))}}]),n}(s.a.Component),ht=Object(R.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:ft})(gt),Ot=Object(y.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(b.jsxs)("form",{onSubmit:t,children:[I("Email","email",[D],k),I("Password","password",[D],k,{type:"password"}),I(null,"rememberMe",[],k,{type:"checkbox"},"remember me"),n&&Object(b.jsxs)("div",{className:E.a.formSummaryError,children:[" ",n]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})})),mt=Object(R.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(W.a)(V.a.mark((function r(s){var a,i;return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,$(e,t,n);case 2:0===(a=r.sent).resultCode?s(pt()):(i=a.messages.length>0?a.messages[0]:"Some error",s(Object(ut.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},logout:ft})((function(e){return e.isAuth?Object(b.jsx)(h.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(Ot,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),xt="INITIALIZED_SUCCESS",vt={initialized:!1},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xt:return{initialized:!0};default:return e}},Pt={},_t=n(128),St=n(124),At=Object(H.c)({profilePage:Ve,messagesPage:w,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt;return e},usersPage:ge,auth:bt,form:St.a,app:wt}),Ct=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d,yt=Object(H.e)(At,Ct(Object(H.a)(_t.a)));window.__store__=yt;var Nt=yt,Mt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"appWrapper",children:[Object(b.jsx)(ht,{}),Object(b.jsxs)("div",{className:"contentNavWrapper",children:[Object(b.jsx)(g,{}),Object(b.jsxs)("div",{className:"appWrapperContent",children:[Object(b.jsx)(h.b,{path:"/profile",render:function(){return Object(b.jsx)(at,{})}}),Object(b.jsx)(h.b,{path:"/dialogs",render:function(){return Object(b.jsx)(Q,{})}}),Object(b.jsx)(h.b,{path:"/users",render:function(){return Object(b.jsx)(De,{})}}),Object(b.jsx)(h.b,{path:"/login",render:function(){return Object(b.jsx)(mt,{})}}),Object(b.jsx)(h.b,{path:"/news"}),Object(b.jsx)(h.b,{path:"/music"}),Object(b.jsx)(h.b,{path:"/settings"})]})]})]}):Object(b.jsx)(Ae,{})}}]),n}(s.a.Component),Et=Object(H.d)(h.f,Object(R.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(pt());Promise.all([t]).then((function(){e({type:xt})}))}}}))(Mt),Tt=function(e){return Object(b.jsx)(f.a,{children:Object(b.jsx)(R.a,{store:Nt,children:Object(b.jsx)(Et,{})})})};i.a.render(Object(b.jsx)(Tt,{}),document.getElementById("root")),c()},35:function(e,t,n){e.exports={usersPhoto:"users_usersPhoto__3liDa",wrapper:"users_wrapper__36Z22",preloader:"users_preloader__1kE8p"}},36:function(e,t,n){e.exports={formControl:"FormControls_formControl__2oYBR",error:"FormControls_error__206VO",formSummaryError:"FormControls_formSummaryError__1WM47"}},43:function(e,t,n){e.exports={posts:"MyPosts_posts__3h2I9",textarea:"MyPosts_textarea__3UrQM",button:"MyPosts_button__2M1xn",wrapper:"MyPosts_wrapper__CACXw",myPost:"MyPosts_myPost__1FXR6"}},68:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2LeQY",button:"Paginator_button__30CyG"}},89:function(e,t,n){e.exports={img:"ProfileInfo_img__1tdta",wrapper:"ProfileInfo_wrapper__3j5wR",description:"ProfileInfo_description__pomnQ"}},90:function(e,t,n){e.exports={item:"Post_item__3UFjI",likesAndMessage:"Post_likesAndMessage__-iqab"}},91:function(e,t,n){e.exports={header:"Header_header__2uQ72",login:"Header_login__22AUk"}}},[[283,1,2]]]);
//# sourceMappingURL=main.2db68da4.chunk.js.map