(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__7mByN",dialogsItem:"Dialogs_dialogsItem__B40io",dialog:"Dialogs_dialog__cwZS3",messages:"Dialogs_messages__14pQm",message:"Dialogs_message__-t_Ke",active:"Dialogs_active__1FT58",wrapperForMessage:"Dialogs_wrapperForMessage__QPlcd",wrapperForTextarea:"Dialogs_wrapperForTextarea__1fsYx"}},20:function(e,t,s){e.exports={usersPhoto:"users_usersPhoto__3liDa",wrapper:"users_wrapper__36Z22",selectedPage:"users_selectedPage__1q_0F",preloader:"users_preloader__1kE8p"}},21:function(e,t,s){e.exports={posts:"MyPosts_posts__3h2I9",textarea:"MyPosts_textarea__3UrQM",button:"MyPosts_button__2M1xn",wrapper:"MyPosts_wrapper__CACXw",myPost:"MyPosts_myPost__1FXR6"}},25:function(e,t,s){e.exports={img:"ProfileInfo_img__1tdta",wrapper:"ProfileInfo_wrapper__3j5wR",description:"ProfileInfo_description__pomnQ"}},31:function(e,t,s){e.exports={item:"Post_item__3UFjI",likesAndMessage:"Post_likesAndMessage__-iqab"}},32:function(e,t,s){e.exports={header:"Header_header__2uQ72",login:"Header_login__22AUk"}},46:function(e,t,s){},47:function(e,t,s){},7:function(e,t,s){e.exports={nav:"Navbar_nav__ltNdz",item:"Navbar_item__yKd0V",active:"Navbar_active__1n4_D"}},72:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(23),i=s.n(r),o=(s(46),s(47),s(7)),c=s.n(o),l=s(5),u=s(0),d=function(e){return Object(u.jsxs)("nav",{className:c.a.nav,children:[Object(u.jsx)("div",{className:c.a.item,children:Object(u.jsx)(l.b,{to:"/profile",activeClassName:c.a.active,children:"Profile"})}),Object(u.jsx)("div",{className:c.a.item,children:Object(u.jsx)(l.b,{to:"/dialogs",activeClassName:c.a.active,children:"Messages"})}),Object(u.jsx)("div",{className:c.a.item,children:Object(u.jsx)(l.b,{to:"/news",activeClassName:c.a.active,children:"News"})}),Object(u.jsx)("div",{className:c.a.item,children:Object(u.jsx)(l.b,{to:"/music",activeClassName:c.a.active,children:"Music"})}),Object(u.jsx)("div",{className:c.a.item,children:Object(u.jsx)(l.b,{to:"/settings",activeClassName:c.a.active,children:"Settings"})}),Object(u.jsx)("div",{className:c.a.item,children:Object(u.jsx)(l.b,{to:"/users",activeClassName:c.a.active,children:"Users"})})]})},g=s(4),j=s(17),p=s(2),b="ADD-MESSAGE",f="UPDATE-NEW-MESSAGE-TEXT",h={messagesData:[{id:1,message:"Hi"},{id:2,message:"Hey"},{id:3,message:"Ho"}],dialogsData:[{id:1,name:"Dima"},{id:2,name:"Pasha"},{id:3,name:"Sergey"}],newMessageText:"hello Dima"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var s={id:4,message:e.newMessageText};return Object(p.a)(Object(p.a)({},e),{},{messagesData:[].concat(Object(j.a)(e.messagesData),[s]),newMessageText:""});case f:return Object(p.a)(Object(p.a)({},e),{},{newMessageText:t.newText});default:return e}},m=s(13),x=s.n(m),w=function(e){return Object(u.jsx)("div",{className:x.a.dialog,children:Object(u.jsx)(l.b,{activeClassName:x.a.active,to:"/dialogs/"+e.id,children:e.name})})},v=function(e){return Object(u.jsx)("div",{className:x.a.message,children:e.message})},P=function(e){var t=e.dialogsData.map((function(e){return Object(u.jsx)(w,{name:e.name,id:e.id},e.id)})),s=e.messagesData.map((function(e){return Object(u.jsx)(v,{message:e.message},e.id)})),a=n.a.createRef();return Object(u.jsxs)("div",{className:x.a.dialogs,children:[Object(u.jsxs)("div",{className:x.a.wrapperForMessage,children:[Object(u.jsx)("div",{className:x.a.dialogsItem,children:t}),Object(u.jsx)("div",{className:x.a.messages,children:s})]}),Object(u.jsxs)("div",{className:x.a.wrapperForTextarea,children:[Object(u.jsx)("textarea",{onChange:function(){var t=a.current.value;e.updateNewMessageText(t)},ref:a,value:e.newMessageText}),Object(u.jsx)("button",{onClick:function(){e.addMessage()},children:" Send Message"})]})]})},_=s(11),A=Object(_.b)((function(e){return{dialogsData:e.messagesPage.dialogsData,messagesData:e.messagesPage.messagesData,newMessageText:e.messagesPage.newMessageText}}),(function(e){return{addMessage:function(){e({type:b})},updateNewMessageText:function(t){e(function(e){return{type:f,newText:e}}(t))}}}))(P),T=s(15),N=s(16),C=s(19),M=s(18),F="FOLLOW",I="UNFOLLOW",S="SET_USERS",y="SET_CURRENT_PAGE",D="SET_USERS_TOTAL_COUNT",E="TOGGLE_IS_FETCHING",k="TOGGLE_IS_FOLLOWING_PROGRESS",U={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(p.a)(Object(p.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(p.a)(Object(p.a)({},e),{},{followed:!0}):e}))});case I:return Object(p.a)(Object(p.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(p.a)(Object(p.a)({},e),{},{followed:!1}):e}))});case S:return Object(p.a)(Object(p.a)({},e),{},{users:t.users});case y:return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.currentPage});case D:return Object(p.a)(Object(p.a)({},e),{},{totalUsersCount:t.totalCount});case E:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case k:return Object(p.a)(Object(p.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(j.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},R=s(20),L=s.n(R),G=s(28),B=s.n(G).a.create({withCredentials:!0,headers:{"API-KEY":"5ef544a3-f9f0-42e5-96f2-1621636d3144"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),H=function(e,t){return B.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},K=function(e){return B.delete("follow/".concat(e)).then((function(e){return e.data}))},Q=function(e){return B.post("follow/".concat(e)).then((function(e){return e.data}))},W=function(e){return B.get("profile/".concat(e)).then((function(e){return e.data}))},J=function(){return B.get("auth/me").then((function(e){return e.data}))},V=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],a=1;a<=t;a++)s.push(a);return Object(u.jsxs)("div",{className:L.a.wrapper,children:[Object(u.jsx)("div",{children:s.map((function(t){return Object(u.jsx)("span",{className:e.currentPage===t&&L.a.selectedPage,onClick:function(s){e.onPageChanged(t)},children:t},t.id)}))}),e.users.map((function(t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{to:"profile/"+t.id,children:Object(u.jsx)("img",{className:L.a.usersPhoto,src:null!=t.photos.small?t.photos.small:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8CAgEwMDDt7e38/Pz5+fn29vbr6+sfHx6Li4tmZmbNzc3y8vK+vr6xsbHe3t6AgICmpqbW1taTk5Ojo6M5OTnExMRaWlri4uIvLy9BQUFPT08MDAslJSRzc3NGRkaampoZGRm4uLhNTU0bGxpvb2+Dg4NYWFcR8E26AAAFOklEQVR4nO2diX6iQAyHOx5437dWq3a3vv8bbi11sSowmQSS2HxPkP8PmJwTXl4MwzAMwzAMwzAMwzAMwzAMwzB+Id3qFw1uO+iJOqPWpumueH0bTnvVGrdhJHTnw5lLYbvrq3+evfYhTd43m36d28hwaqNmjryYVpXb0kD6XvJijRqf4+DdX6BzzTm3vWBGEH1nhtwWA9lBBTq3VvWmtuECnVspOnCCBDo363Ib7sswTKBzb9yWewLwErfsuG33Yhku0Lket/U+LDAKmxG3+fn0MAKd++C2P58/OIVOfLJxRAqUH9uk5oLeCA9tOmiBbsqtIZtgZ59Q4daQSbTFK3QDbhVZjAkEuj23iixaFApP3Cqy2FAoPAjOomoUAkV/iAMahSNuHekg8qZrBIc1exqFgo+awOrFLU25/YwKjUInVyGRQCc3DaZSKNZdRFQKO9xK0qhSKRRbj+o+vUKSzOJMn1tJGmQKxYZtz6+wQaVQ7Hf4/Gfp8yski2nG3EJSoVK45BaSyiuRQrllb3xJP0Zu9vT8GfCERuE7t450wGNCjxHczUf2fy+0uHWkgxpSSBAblpLVvOU6fKpim+RW/l8KgSu5pTYid7HgVpEFyWEquG1BlAPLzZ0+iVYECsXWg79ADbXFHLg1ZEPQX9twa8iGoNwmOKI5U8cnwZIjmjOgWxYP4VaQBzqBanMryAM9jiH8M3zB19skh90xHziBa27785njFE647c+njlMo3VecQeWIFbmFxATUa6rgMsJnfuF3NfYxsvOKCwF3Dy9suW33AxF9C5/T/0/4OLuWC4jTUIHiY9ILwdNfYqe97gi8V6IgYrsQmGDITysSggpSB7nN7XuCLngpCLqvCLlaoiEkTQh4iHtum4GswQold5weAQ7d9twWgwFOnmw1HaQxwJ6+2LHgDEB3EQWP0KRTg2TCcmf1sgB4DF3OPsE72Z/pcvYJdd9UWEMJ8TGeTlHwfcNc/FrCKg/Sb/x6bTNuMxH4JfuSr6fn4ZlE6agDP8L3MD1yGxqMb71G9JxXJr6haVNfYhFT8y5+69t8GeO/M0pRpfQaSOlbY3r4Er0BFGoMTefAQUwtjbULHfj0V0XTcXOE1xK/NCr5GseYZVET8eWMwSTs8SW8S17TPphQjHmf17SLrH8vJ9itlz9FCmvp41/OexZyXtdxAfJi2kcBT7Ixpfn2UkXyesluHz/Wnc9wzFROrc2JLjbnM9szuMnGhGKRpz+Lkt/WOcHtHzD70o6daES1lw3KsJQcqzvBzI9iWRQ+GFYn2cGKYV3oBxkRLU3AMSvuOY6odpdgORXzPXaoNpdQsKM/V6PS3Lsn1IOM6HX59Kwp+zk1kk0C5OzJBEZcHj6PE1FIvpRyhN6zJUmSq+WG2DBeKZIOSU7ini3ebUjzEreg21bBt0NKA7lVimiPfKHgegEkPzsoGsywCtGi/ILBrOzhtt2T8JRRRDroQfDPdyK5wcwNoYcN0c8cSmAVFqB6D8AKIGy3lMCcMJWwEdUTt9kQQiJwsu3cpRCyL1N+RHrNa4BC2VnTHfACI9n68ZKAX0oh2idbGvB/CSO2W/AALtko+wzh6wqIVgKXCHS1DcEPRUsGulRDS+KUAP0dtLqDBrr6pVbUmFOBwI4ast9vlQhsjprs51QlAotq9B2l0JKbjjLiT1YghXpKNFeAFOpzhw6oUKE7BG5Hkd5Tewgou1Do8IEuX13udMYU/kDqfEkmIIVqejLXgBRuVhV1HPSsXTQMwzAMwzAMwzAMwzAMwzAM43fyD2WtXFN/XS1+AAAAAElFTkSuQmCC",alt:"avatar"})})}),Object(u.jsx)("div",{children:t.followed?Object(u.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.toggleFollowingProgress(!0,t.id),K(t.id).then((function(s){0===s.resultCode&&e.unfollow(t.id),e.toggleFollowingProgress(!1,t.id)})),e.unfollow(t.id)},children:"Unfollow"}):Object(u.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.toggleFollowingProgress(!0,t.id),Q(t.id).then((function(s){0===s.resultCode&&e.follow(t.id),e.toggleFollowingProgress(!1,t.id)}))},children:"Follow"})}),Object(u.jsx)("div",{children:t.name}),Object(u.jsx)("div",{children:t.status}),Object(u.jsx)("div",{children:"u.location.country"}),Object(u.jsx)("div",{children:"u.location.city"})]},t.id)}))]})},q=s.p+"static/media/a2dc9668f2cf170fe3efeb263128b0e7.89906e12.gif",X=function(e){return Object(u.jsx)("img",{className:L.a.preloader,src:q,alt:"preloader"})},Y=function(e){Object(C.a)(s,e);var t=Object(M.a)(s);function s(){var e;Object(T.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.toggleIsFetching(!0),H(t,e.props.pageSize).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.items)}))},e}return Object(N.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),H(this.props.currentPage,this.props.pageSize).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.items),e.props.setUsersTotalCount(t.totalCount)}))}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[this.props.isFetching?Object(u.jsx)(X,{}):null,Object(u.jsx)(V,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),s}(n.a.Component),Z=Object(_.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return{type:F,userId:e}},unfollow:function(e){return{type:I,userId:e}},setUsers:function(e){return{type:S,users:e}},setCurrentPage:function(e){return{type:y,currentPage:e}},setUsersTotalCount:function(e){return{type:D,totalCount:e}},toggleIsFetching:function(e){return{type:E,isFetching:e}},toggleFollowingProgress:function(e,t){return{type:k,isFetching:e,userId:t}}})(Y),$=s(25),ee=s.n($),te=function(e){return e.profile?Object(u.jsxs)("div",{className:ee.a.wrapper,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:ee.a.img,src:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"})}),Object(u.jsxs)("div",{className:ee.a.description,children:[Object(u.jsx)("img",{src:e.profile.photos.large}),Object(u.jsx)("div",{children:e.profile.fullName}),Object(u.jsx)("div",{children:e.profile.aboutMe}),Object(u.jsx)("div",{children:e.profile.contacts.facebook}),Object(u.jsx)("div",{children:e.profile.contacts.vk})]})]}):Object(u.jsx)(X,{})},se="ADD-POST",ae="UPDATE-NEW-POST-TEXT",ne="SET_USER_PROFILE",re={postsData:[{id:1,message:"post1",like:10},{id:2,message:"post2",like:11},{id:3,message:"post3",like:12}],newPostText:"hello react-js!",profile:null},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:var s={id:5,message:e.newPostText,like:15};return Object(p.a)(Object(p.a)({},e),{},{postsData:[].concat(Object(j.a)(e.postsData),[s]),newPostText:""});case ae:return Object(p.a)(Object(p.a)({},e),{},{newPostText:t.newText});case ne:return Object(p.a)(Object(p.a)({},e),{},{profile:t.profile});default:return e}},oe=s(21),ce=s.n(oe),le=s(31),ue=s.n(le),de=function(e){return Object(u.jsxs)("div",{className:ue.a.item,children:[Object(u.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Conor_McGregor_2018.jpg"}),Object(u.jsxs)("div",{className:ue.a.likesAndMessage,children:[e.message,Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:" Likes "})," - ",e.like]})]})]})},ge=function(e){var t=e.postsData.map((function(e){return Object(u.jsx)(de,{message:e.message,like:e.like},e.id)})),s=n.a.createRef();return Object(u.jsxs)("div",{className:ce.a.wrapper,children:[Object(u.jsx)("h3",{className:ce.a.myPost,children:"My posts"}),Object(u.jsxs)("div",{className:ce.a.posts,children:[Object(u.jsx)("div",{children:Object(u.jsx)("textarea",{onChange:function(){var t=s.current.value;e.updateNewPostText(t)},value:e.newPostText,ref:s,className:ce.a.textarea})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){e.addPost()},className:ce.a.button,children:"Add Post"})})]}),t]})},je=Object(_.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:se})},updateNewPostText:function(t){e(function(e){return{type:ae,newText:e}}(t))}}}))(ge),pe=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(te,{profile:e.profile}),Object(u.jsx)(je,{})]})},be=function(e){Object(C.a)(s,e);var t=Object(M.a)(s);function s(){return Object(T.a)(this,s),t.apply(this,arguments)}return Object(N.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;t||(t=2),W(t).then((function(t){e.props.setUserProfile(t)}))}},{key:"render",value:function(){return Object(u.jsx)(pe,Object(p.a)(Object(p.a)({},this.props),{},{profile:this.props.profile}))}}]),s}(n.a.Component),fe=Object(g.e)(be),he=Object(_.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfile:function(e){return{type:ne,profile:e}}})(fe),Oe=s(32),me=s.n(Oe),xe=function(e){return Object(u.jsxs)("header",{className:me.a.header,children:[Object(u.jsx)("img",{src:"https://i.ibb.co/RNJ320j/telegram-logo-circle-icon-134012.png",alt:"logo"}),Object(u.jsx)("div",{className:me.a.login,children:e.isAuth?e.login:Object(u.jsx)(l.b,{to:"/login",children:"Login"})})]})},we="SET_USER_DATA",ve={userId:null,email:null,login:null,isAuth:!1},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(p.a)(Object(p.a)(Object(p.a)({},e),t.data),{},{isAuth:!0});default:return e}},_e=function(e){Object(C.a)(s,e);var t=Object(M.a)(s);function s(){return Object(T.a)(this,s),t.apply(this,arguments)}return Object(N.a)(s,[{key:"componentDidMount",value:function(){var e=this;J().then((function(t){if(0===t.resultCode){var s=t.data,a=s.id,n=s.email,r=s.login;e.props.setAuthUserData(a,n,r)}}))}},{key:"render",value:function(){return Object(u.jsx)(xe,Object(p.a)({},this.props))}}]),s}(n.a.Component),Ae=Object(_.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:function(e,t,s){return{type:we,data:{userId:e,email:t,login:s}}}})(_e),Te=function(e){return Object(u.jsxs)("div",{className:"appWrapper",children:[Object(u.jsx)(Ae,{}),Object(u.jsxs)("div",{className:"contentNavWrapper",children:[Object(u.jsx)(d,{}),Object(u.jsxs)("div",{className:"appWrapperContent",children:[Object(u.jsx)(g.a,{path:"/profile/:userId?",render:function(){return Object(u.jsx)(he,{})}}),Object(u.jsx)(g.a,{path:"/dialogs",render:function(){return Object(u.jsx)(A,{})}}),Object(u.jsx)(g.a,{path:"/users",render:function(){return Object(u.jsx)(Z,{})}}),Object(u.jsx)(g.a,{path:"/news"}),Object(u.jsx)(g.a,{path:"/music"}),Object(u.jsx)(g.a,{path:"/settings"})]})]})]})},Ne=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,73)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),r(e),i(e)}))},Ce=s(33),Me={},Fe=Object(Ce.a)({profilePage:ie,messagesPage:O,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return e},usersPage:z,auth:Pe}),Ie=Object(Ce.b)(Fe);window.store=Ie;var Se=Ie;i.a.render(Object(u.jsx)(l.a,{children:Object(u.jsx)(_.a,{store:Se,children:Object(u.jsx)(Te,{})})}),document.getElementById("root")),Ne()}},[[72,1,2]]]);
//# sourceMappingURL=main.f7940a72.chunk.js.map