(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[678],{9575:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/total",function(){return s(3929)}])},3929:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var n=s(5893),a=s(7294),r=(s(6936),s(4051)),o=s.n(r),c=s(9669),l=s.n(c),i=s(2920),u=s(1163);function d(e,t,s,n,a,r,o){try{var c=e[r](o),l=c.value}catch(i){return void s(i)}c.done?t(l):Promise.resolve(l).then(n,a)}function p(e){return function(){var t=this,s=arguments;return new Promise((function(n,a){var r=e.apply(t,s);function o(e){d(r,n,a,o,c,"next",e)}function c(e){d(r,n,a,o,c,"throw",e)}o(void 0)}))}}var h=function(){var e=(0,a.useRef)(),t=((0,u.useRouter)(),(0,a.useState)(0)),s=t[0],r=t[1],c=(0,a.useState)(0),d=c[0],h=c[1];function f(){return(f=p(o().mark((function e(){var t,s,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),e.next=4,l().post("api/totalUser",{token:t});case 4:s=e.sent,n=s.data,console.log(n,"response data!!!!!!!"),console.log(n.data.data.totalUserCount,"total user from response"),r(n.data.data.totalUserCount),h(n.data.data.todayUserCount),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function m(){return(m=p(o().mark((function t(s){var n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.preventDefault(),n=e.current.value,a={date:n},console.log(a,"data here"),x(a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=p(o().mark((function e(t){var s,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,"from send"),e.prev=1,s=localStorage.getItem("token"),e.next=5,l().post("api/totalUser",{token:s,data:t});case 5:n=e.sent,a=n.data,console.log(a,"2 nd"),g("Data Get Successfully"),console.log(a.data.data.totalUserCount,"total user from response"),r(a.data.data.totalUserCount),h(a.data.data.todayUserCount),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),j("Please Check Email or Password"),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}(0,a.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]);var g=function(e){i.Am.success(e,{position:"top-right",autoClose:6e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},j=function(e){i.Am.error(e,{position:"top-right",autoClose:6e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return(0,n.jsxs)("div",{children:[(0,n.jsx)("section",{className:"profile-sec pb-0",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row justify-content-center",children:[(0,n.jsx)(i.Ix,{position:"top-right",autoClose:6e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,n.jsxs)("form",{className:"input-sec",children:[(0,n.jsx)("div",{className:"line profile-line"}),(0,n.jsx)("h3",{className:"heading-text pink-text mt-2",children:"TOTAL USER"}),(0,n.jsxs)("div",{className:"name-sec",style:{margin:"20px 0"},children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("h6",{className:"item-text",children:"No of total User:"})}),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("p",{children:s})})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("h6",{className:"item-text",children:"No of User of Today:"})}),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("p",{children:d})})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("h6",{className:"item-text",children:"date to sort:"})}),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("input",{ref:e,className:"textinput",type:"date",name:"date",placeholder:"select date",required:!0})})]})]}),(0,n.jsx)("a",{href:"funds-page.html",className:"btn btn-round btn-warning w-100 ",style:{marginTop:"20px",marginBottom:"20px"},type:"button",onClick:function(e){return m.apply(this,arguments)},children:"CONTINUE"})]})]})})}),(0,n.jsx)("script",{src:"js/bootstrap.bundle.js"})]})},f=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(h,{})})}}},function(e){e.O(0,[455,936,774,888,179],(function(){return t=9575,e(e.s=t);var t}));var t=e.O();_N_E=t}]);