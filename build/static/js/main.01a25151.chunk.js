(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports={nav:"Navbar_nav__ltNdz",item:"Navbar_item__yKd0V",active:"Navbar_active__1n4_D"}},151:function(e,t,n){},152:function(e,t,n){},22:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__7mByN",dialogsItem:"Dialogs_dialogsItem__B40io",dialog:"Dialogs_dialog__cwZS3",messages:"Dialogs_messages__14pQm",message:"Dialogs_message__-t_Ke",active:"Dialogs_active__1FT58",wrapperForMessage:"Dialogs_wrapperForMessage__QPlcd",wrapperForTextarea:"Dialogs_wrapperForTextarea__1fsYx"}},275:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(58),i=n.n(r),o=(n(151),n(16)),c=n(17),u=n(19),l=n(18),d=(n(152),n(13)),j=n.n(d),p=n(11),b=n(0),f=function(e){return Object(b.jsxs)("nav",{className:j.a.nav,children:[Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/profile",activeClassName:j.a.active,children:"Profile"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/dialogs",activeClassName:j.a.active,children:"Messages"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/news",activeClassName:j.a.active,children:"News"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/music",activeClassName:j.a.active,children:"Music"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/settings",activeClassName:j.a.active,children:"Settings"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/users",activeClassName:j.a.active,children:"Users"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(p.b,{to:"/login",activeClassName:j.a.active,children:"Login"})})]})},h=n(10),g=n(39),O=n(5),m="ADD-MESSAGE",x={messagesData:[{id:1,message:"Hi"},{id:2,message:"Hey"},{id:3,message:"Ho"}],dialogsData:[{id:1,name:"Dima"},{id:2,name:"Pasha"},{id:3,name:"Sergey"}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n={id:4,message:t.newMessageText};return Object(O.a)(Object(O.a)({},e),{},{messagesData:[].concat(Object(g.a)(e.messagesData),[n])});default:return e}},w=n(22),P=n.n(w),_=function(e){return Object(b.jsx)("div",{className:P.a.dialog,children:Object(b.jsx)(p.b,{activeClassName:P.a.active,to:"/dialogs/"+e.id,children:e.name})})},A=function(e){return Object(b.jsx)("div",{className:P.a.message,children:e.message})},S=n(116),C=n(117),M=n(86),y=n(32),N=n.n(y),F=function(e){var t=e.input,n=e.meta,s=Object(M.a)(e,["input","meta"]),a=n.touched&&n.error;return Object(b.jsxs)("div",{className:N.a.formControl+" "+(a?N.a.error:""),children:[Object(b.jsx)("div",{children:Object(b.jsx)("textarea",Object(O.a)(Object(O.a)({},t),s))}),a&&Object(b.jsx)("span",{children:n.error})]})},T=function(e){var t=e.input,n=e.meta,s=Object(M.a)(e,["input","meta"]),a=n.touched&&n.error;return Object(b.jsxs)("div",{className:N.a.formControl+" "+(a?N.a.error:""),children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",Object(O.a)(Object(O.a)({},t),s))}),a&&Object(b.jsx)("span",{children:n.error})]})},I=function(e){if(!e)return"Field is required"},E=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},D=E(50),k=Object(C.a)({form:"dialogAddMessageForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,className:P.a.wrapperForTextarea,children:[Object(b.jsx)(S.a,{component:F,name:"newMessageText",placeholder:"Enter your message",validate:[I,D]}),Object(b.jsx)("button",{children:" Send Message"})]})})),z=function(e){var t=e.dialogsData.map((function(e){return Object(b.jsx)(_,{name:e.name,id:e.id},e.id)})),n=e.messagesData.map((function(e){return Object(b.jsx)(A,{message:e.message},e.id)}));return e.isAuth?Object(b.jsxs)("div",{className:P.a.dialogs,children:[Object(b.jsxs)("div",{className:P.a.wrapperForMessage,children:[Object(b.jsx)("div",{className:P.a.dialogsItem,children:t}),Object(b.jsx)("div",{className:P.a.messages,children:n})]}),Object(b.jsx)(k,{onSubmit:function(t){e.addMessage(t.newMessageText)}})]}):Object(b.jsx)(h.a,{to:"/login"})},U=n(9),L=function(e){return{isAuth:e.auth.isAuth}},R=function(e){var t=function(t){Object(u.a)(s,t);var n=Object(l.a)(s);function s(){return Object(o.a)(this,s),n.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return void 0===this.props.isAuth?null:this.props.isAuth?Object(b.jsx)(e,Object(O.a)({},this.props)):Object(b.jsx)(h.a,{to:"/login"})}}]),s}(a.a.Component);return Object(U.b)(L)(t)},G=n(8),B=Object(G.d)(Object(U.b)((function(e){return{dialogsData:e.messagesPage.dialogsData,messagesData:e.messagesPage.messagesData,newMessageText:e.messagesPage.newMessageText}}),(function(e){return{addMessage:function(t){e(function(e){return{type:m,newMessageText:e}}(t))}}})),R)(z),H=n(120),K=n.n(H).a.create({withCredentials:!0,headers:{"API-KEY":"d288c1a7-7477-4d25-ad13-eb66c2aaf9c9"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),Q=function(e,t){return K.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},W=function(e){return K.delete("follow/".concat(e)).then((function(e){return e.data}))},V=function(e){return K.post("follow/".concat(e)).then((function(e){return e.data}))},q=function(e){return console.warn("Deprecated  method. PLease use ProfileAPI"),J.getProfile(e)},J={getProfile:function(e){return K.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return K.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return K.put("profile/status",{status:e}).then((function(e){return e.data}))}},X=function(){return K.get("auth/me").then((function(e){return e.data}))},Y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return K.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},Z=function(){return K.delete("auth/login").then((function(e){return e.data}))},$="FOLLOW",ee="UNFOLLOW",te="SET_USERS",ne="SET_CURRENT_PAGE",se="SET_USERS_TOTAL_COUNT",ae="TOGGLE_IS_FETCHING",re="TOGGLE_IS_FOLLOWING_PROGRESS",ie={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},oe=function(e){return{type:ne,currentPage:e}},ce=function(e){return{type:ae,isFetching:e}},ue=function(e,t){return{type:re,isFetching:e,userId:t}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{followed:!0}):e}))});case ee:return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{followed:!1}):e}))});case te:return Object(O.a)(Object(O.a)({},e),{},{users:t.users});case ne:return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.currentPage});case se:return Object(O.a)(Object(O.a)({},e),{},{totalUsersCount:t.totalCount});case ae:return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case re:return Object(O.a)(Object(O.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(g.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},de=n(40),je=n.n(de),pe=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);return Object(b.jsxs)("div",{className:je.a.wrapper,children:[Object(b.jsx)("div",{children:n.map((function(t){return Object(b.jsx)("span",{className:e.currentPage===t&&je.a.selectedPage,onClick:function(n){e.onPageChanged(t)},children:t},t.id)}))}),e.users.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(p.b,{to:"profile/"+t.id,children:Object(b.jsx)("img",{className:je.a.usersPhoto,src:null!=t.photos.small?t.photos.small:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8CAgEwMDDt7e38/Pz5+fn29vbr6+sfHx6Li4tmZmbNzc3y8vK+vr6xsbHe3t6AgICmpqbW1taTk5Ojo6M5OTnExMRaWlri4uIvLy9BQUFPT08MDAslJSRzc3NGRkaampoZGRm4uLhNTU0bGxpvb2+Dg4NYWFcR8E26AAAFOklEQVR4nO2diX6iQAyHOx5437dWq3a3vv8bbi11sSowmQSS2HxPkP8PmJwTXl4MwzAMwzAMwzAMwzAMwzAMwzB+Id3qFw1uO+iJOqPWpumueH0bTnvVGrdhJHTnw5lLYbvrq3+evfYhTd43m36d28hwaqNmjryYVpXb0kD6XvJijRqf4+DdX6BzzTm3vWBGEH1nhtwWA9lBBTq3VvWmtuECnVspOnCCBDo363Ib7sswTKBzb9yWewLwErfsuG33Yhku0Lket/U+LDAKmxG3+fn0MAKd++C2P58/OIVOfLJxRAqUH9uk5oLeCA9tOmiBbsqtIZtgZ59Q4daQSbTFK3QDbhVZjAkEuj23iixaFApP3Cqy2FAoPAjOomoUAkV/iAMahSNuHekg8qZrBIc1exqFgo+awOrFLU25/YwKjUInVyGRQCc3DaZSKNZdRFQKO9xK0qhSKRRbj+o+vUKSzOJMn1tJGmQKxYZtz6+wQaVQ7Hf4/Gfp8yski2nG3EJSoVK45BaSyiuRQrllb3xJP0Zu9vT8GfCERuE7t450wGNCjxHczUf2fy+0uHWkgxpSSBAblpLVvOU6fKpim+RW/l8KgSu5pTYid7HgVpEFyWEquG1BlAPLzZ0+iVYECsXWg79ADbXFHLg1ZEPQX9twa8iGoNwmOKI5U8cnwZIjmjOgWxYP4VaQBzqBanMryAM9jiH8M3zB19skh90xHziBa27785njFE647c+njlMo3VecQeWIFbmFxATUa6rgMsJnfuF3NfYxsvOKCwF3Dy9suW33AxF9C5/T/0/4OLuWC4jTUIHiY9ILwdNfYqe97gi8V6IgYrsQmGDITysSggpSB7nN7XuCLngpCLqvCLlaoiEkTQh4iHtum4GswQold5weAQ7d9twWgwFOnmw1HaQxwJ6+2LHgDEB3EQWP0KRTg2TCcmf1sgB4DF3OPsE72Z/pcvYJdd9UWEMJ8TGeTlHwfcNc/FrCKg/Sb/x6bTNuMxH4JfuSr6fn4ZlE6agDP8L3MD1yGxqMb71G9JxXJr6haVNfYhFT8y5+69t8GeO/M0pRpfQaSOlbY3r4Er0BFGoMTefAQUwtjbULHfj0V0XTcXOE1xK/NCr5GseYZVET8eWMwSTs8SW8S17TPphQjHmf17SLrH8vJ9itlz9FCmvp41/OexZyXtdxAfJi2kcBT7Ixpfn2UkXyesluHz/Wnc9wzFROrc2JLjbnM9szuMnGhGKRpz+Lkt/WOcHtHzD70o6daES1lw3KsJQcqzvBzI9iWRQ+GFYn2cGKYV3oBxkRLU3AMSvuOY6odpdgORXzPXaoNpdQsKM/V6PS3Lsn1IOM6HX59Kwp+zk1kk0C5OzJBEZcHj6PE1FIvpRyhN6zJUmSq+WG2DBeKZIOSU7ini3ebUjzEreg21bBt0NKA7lVimiPfKHgegEkPzsoGsywCtGi/ILBrOzhtt2T8JRRRDroQfDPdyK5wcwNoYcN0c8cSmAVFqB6D8AKIGy3lMCcMJWwEdUTt9kQQiJwsu3cpRCyL1N+RHrNa4BC2VnTHfACI9n68ZKAX0oh2idbGvB/CSO2W/AALtko+wzh6wqIVgKXCHS1DcEPRUsGulRDS+KUAP0dtLqDBrr6pVbUmFOBwI4ast9vlQhsjprs51QlAotq9B2l0JKbjjLiT1YghXpKNFeAFOpzhw6oUKE7BG5Hkd5Tewgou1Do8IEuX13udMYU/kDqfEkmIIVqejLXgBRuVhV1HPSsXTQMwzAMwzAMwzAMwzAMwzAM43fyD2WtXFN/XS1+AAAAAElFTkSuQmCC",alt:"avatar"})})}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})}),Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.status}),Object(b.jsx)("div",{children:"u.location.country"}),Object(b.jsx)("div",{children:"u.location.city"})]},t.id)}))]})},be=n.p+"static/media/a2dc9668f2cf170fe3efeb263128b0e7.89906e12.gif",fe=function(e){return Object(b.jsx)("img",{className:je.a.preloader,src:be,alt:"preloader"})},he=function(e){return e.usersPage.users},ge=function(e){return e.usersPage.pageSize},Oe=function(e){return e.usersPage.totalUsersCount},me=function(e){return e.usersPage.currentPage},xe=function(e){return e.usersPage.isFetching},ve=function(e){return e.usersPage.followingInProgress},we=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(fe,{}):null,Object(b.jsx)(pe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),Pe=Object(G.d)(Object(U.b)((function(e){return{users:he(e),pageSize:ge(e),totalUsersCount:Oe(e),currentPage:me(e),isFetching:xe(e),followingInProgress:ve(e)}}),{follow:function(e){return function(t){t(ue(!0,e)),V(e).then((function(n){0===n.resultCode&&t(function(e){return{type:$,userId:e}}(e)),t(ue(!1,e))}))}},unfollow:function(e){return function(t){t(ue(!0,e)),W(e).then((function(n){0===n.resultCode&&t(function(e){return{type:ee,userId:e}}(e)),t(ue(!1,e))}))}},setCurrentPage:oe,toggleFollowingProgress:ue,requestUsers:function(e,t){return function(n){n(ce(!0)),n(oe(e)),Q(e,t).then((function(e){var t,s;n(ce(!1)),n((t=e.items,{type:te,users:t})),n((s=e.totalCount,{type:se,totalCount:s}))}))}}}))(we),_e=n(82),Ae=n.n(_e),Se=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.handleFocus=function(e){e.target.select()},e.statusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[!this.state.editMode&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"no status"})}),this.state.editMode&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{onChange:this.statusChange,onFocus:this.handleFocus,autoFocus:!0,onBlur:this.deactivateEditMode,value:this.state.status})})]})}}]),n}(a.a.Component),Ce=function(e){return e.profile?Object(b.jsx)("div",{className:Ae.a.wrapper,children:Object(b.jsxs)("div",{className:Ae.a.description,children:[Object(b.jsx)("img",{src:e.profile.photos.large}),Object(b.jsx)("div",{children:e.profile.fullName}),Object(b.jsx)("div",{children:e.profile.aboutMe}),Object(b.jsx)("div",{children:e.profile.contacts.facebook}),Object(b.jsx)("div",{children:e.profile.contacts.vk}),Object(b.jsx)(Se,{status:e.status,updateStatus:e.updateStatus})]})}):Object(b.jsx)(fe,{})},Me="ADD-POST",ye="SET_USER_PROFILE",Ne="SET_STATUS",Fe={postsData:[{id:1,message:"post1",like:10},{id:2,message:"post2",like:11},{id:3,message:"post3",like:12}],profile:null,status:""},Te=function(e){return{type:Ne,status:e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me:var n={id:5,message:t.newPostText,like:15};return Object(O.a)(Object(O.a)({},e),{},{postsData:[].concat(Object(g.a)(e.postsData),[n])});case ye:return Object(O.a)(Object(O.a)({},e),{},{profile:t.profile});case Ne:return Object(O.a)(Object(O.a)({},e),{},{status:t.status});default:return e}},Ee=n(41),De=n.n(Ee),ke=n(83),ze=n.n(ke),Ue=function(e){return Object(b.jsxs)("div",{className:ze.a.item,children:[Object(b.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Conor_McGregor_2018.jpg"}),Object(b.jsxs)("div",{className:ze.a.likesAndMessage,children:[e.message,Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:" Likes "})," - ",e.like]})]})]})},Le=E(10),Re=Object(C.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,className:De.a.posts,children:[Object(b.jsx)("div",{children:Object(b.jsx)(S.a,{component:F,name:"newPostText",placeholder:"Enter your message",validate:[I,Le],className:De.a.textarea})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:De.a.button,children:"Add Post"})})]})})),Ge=function(e){var t=e.postsData.map((function(e){return Object(b.jsx)(Ue,{message:e.message,like:e.like},e.id)}));return Object(b.jsxs)("div",{className:De.a.wrapper,children:[Object(b.jsx)("h3",{className:De.a.myPost,children:"My posts"}),Object(b.jsx)(Re,{onSubmit:function(t){e.addPost(t.newPostText)}}),t]})},Be=Object(U.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:Me,newPostText:e}}(t))}}}))(Ge),He=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Ce,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(b.jsx)(Be,{})]})},Ke=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(b.jsx)(He,Object(O.a)(Object(O.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(a.a.Component),Qe=Object(G.d)(Object(U.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfile:function(e){return function(t){q(e).then((function(e){t({type:ye,profile:e})}))}},getStatus:function(e){return function(t){J.getStatus(e).then((function(e){t(Te(e))}))}},updateStatus:function(e){return function(t){J.updateStatus(e).then((function(n){0===n.resultCode&&t(Te(e))}))}}}),h.f,R)(Ke),We=n(84),Ve=n.n(We),qe=function(e){return Object(b.jsxs)("header",{className:Ve.a.header,children:[Object(b.jsx)("img",{src:"https://i.ibb.co/RNJ320j/telegram-logo-circle-icon-134012.png",alt:"logo"}),Object(b.jsx)("div",{className:Ve.a.login,children:e.isAuth?Object(b.jsxs)("div",{children:[e.login," - ",Object(b.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(b.jsx)(p.b,{to:"/login",children:"Login"})})]})},Je=n(34),Xe="SET_USER_DATA",Ye={userId:null,email:null,login:null,isAuth:!1},Ze=function(e,t,n,s){return{type:Xe,data:{userId:e,email:t,login:n,isAuth:s}}},$e=function(){return function(e){return X().then((function(t){if(0===t.resultCode){var n=t.data,s=n.id,a=n.email,r=n.login;e(Ze(s,a,r,!0))}}))}},et=function(){return function(e){Z().then((function(t){0===t.resultCode&&e(Ze(null,null,null,!1))}))}},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xe:return Object(O.a)(Object(O.a)({},e),t.data);default:return e}},nt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsx)(qe,Object(O.a)({},this.props))}}]),n}(a.a.Component),st=Object(U.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:et})(nt),at=Object(C.a)({form:"login"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(S.a,{placeholder:"Email",name:"email",component:T,validate:[I]})}),Object(b.jsx)("div",{children:Object(b.jsx)(S.a,{type:"password",placeholder:"Password",name:"password",component:T,validate:[I]})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(S.a,{type:"checkbox",name:"rememberMe",component:"input"}),"Remember me"]}),e.error&&Object(b.jsxs)("div",{className:N.a.formSummaryError,children:[" ",e.error]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})})),rt=Object(U.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(s){Y(e,t,n).then((function(e){if(0===e.resultCode)s($e());else{var t=e.messages.length>0?e.messages[0]:"Some error";s(Object(Je.a)("login",{_error:t}))}}))}},logout:et})((function(e){return e.isAuth?Object(b.jsx)(h.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(at,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),it="INITIALIZED_SUCCESS",ot={initialized:!1},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case it:return{initialized:!0};default:return e}},ut=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"appWrapper",children:[Object(b.jsx)(st,{}),Object(b.jsxs)("div",{className:"contentNavWrapper",children:[Object(b.jsx)(f,{}),Object(b.jsxs)("div",{className:"appWrapperContent",children:[Object(b.jsx)(h.b,{path:"/profile/:userId?",render:function(){return Object(b.jsx)(Qe,{})}}),Object(b.jsx)(h.b,{path:"/dialogs",render:function(){return Object(b.jsx)(B,{})}}),Object(b.jsx)(h.b,{path:"/users",render:function(){return Object(b.jsx)(Pe,{})}}),Object(b.jsx)(h.b,{path:"/login",render:function(){return Object(b.jsx)(rt,{})}}),Object(b.jsx)(h.b,{path:"/news"}),Object(b.jsx)(h.b,{path:"/music"}),Object(b.jsx)(h.b,{path:"/settings"})]})]})]}):Object(b.jsx)(fe,{})}}]),n}(a.a.Component),lt=Object(G.d)(h.f,Object(U.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e($e());Promise.all([t]).then((function(){e({type:it})}))}}}))(ut),dt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,276)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))},jt={},pt=n(121),bt=n(118),ft=Object(G.c)({profilePage:Ie,messagesPage:v,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt;return e},usersPage:le,auth:tt,form:bt.a,app:ct}),ht=Object(G.e)(ft,Object(G.a)(pt.a));window.store=ht;var gt=ht;i.a.render(Object(b.jsx)(p.a,{children:Object(b.jsx)(U.a,{store:gt,children:Object(b.jsx)(lt,{})})}),document.getElementById("root")),dt()},32:function(e,t,n){e.exports={formControl:"FormControls_formControl__2oYBR",error:"FormControls_error__206VO",formSummaryError:"FormControls_formSummaryError__1WM47"}},40:function(e,t,n){e.exports={usersPhoto:"users_usersPhoto__3liDa",wrapper:"users_wrapper__36Z22",selectedPage:"users_selectedPage__1q_0F",preloader:"users_preloader__1kE8p"}},41:function(e,t,n){e.exports={posts:"MyPosts_posts__3h2I9",textarea:"MyPosts_textarea__3UrQM",button:"MyPosts_button__2M1xn",wrapper:"MyPosts_wrapper__CACXw",myPost:"MyPosts_myPost__1FXR6"}},82:function(e,t,n){e.exports={img:"ProfileInfo_img__1tdta",wrapper:"ProfileInfo_wrapper__3j5wR",description:"ProfileInfo_description__pomnQ"}},83:function(e,t,n){e.exports={item:"Post_item__3UFjI",likesAndMessage:"Post_likesAndMessage__-iqab"}},84:function(e,t,n){e.exports={header:"Header_header__2uQ72",login:"Header_login__22AUk"}}},[[275,1,2]]]);
//# sourceMappingURL=main.01a25151.chunk.js.map