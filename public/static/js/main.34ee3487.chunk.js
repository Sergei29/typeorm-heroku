(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},29:function(e,n,t){e.exports=t(39)},34:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(3),a=t.n(r),c=t(19),o=t.n(c),l=t(7),s="",i=t(20),u=t.n(i),d=(t(34),t(15)),p=t(16),m=t.n(p),b=t(12);function f(){var e=Object(d.a)(["\n    mutation AddPost($subject: String!, $content: String!) {\n  addPost(subject: $subject, content: $content)\n}\n    "]);return f=function(){return e},e}function g(){var e=Object(d.a)(["\n    query Posts {\n  posts {\n    subject\n    content\n  }\n}\n    "]);return g=function(){return e},e}var h=m()(g());m()(f());var E=function(){var e,n=b.c(h,e),t=n.data;n.loading,n.error;return t?a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.tsx")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),a.a.createElement("ul",null,t.posts.map((function(e){return a.a.createElement("li",null,e.subject,", ",e.content)}))))):a.a.createElement("div",null,"loading...")},v=t(10),j=t(27),w=t(26),k=t(28),x=t(8),A=t(6),N=new j.a({}),P=new x.a((function(e,n){return new A.a((function(t){var r;return Promise.resolve(e).then((function(e){var n=s;n&&e.setContext({headers:{authorization:"bearer ".concat(n)}})})).then((function(){r=n(e).subscribe({next:t.next.bind(t),error:t.error.bind(t),complete:t.complete.bind(t)})})).catch(t.error.bind(t)),function(){r&&r.unsubscribe()}}))})),$=new v.a({link:x.a.from([Object(k.a)((function(e){var n=e.graphQLErrors,t=e.networkError;console.log(n),console.log(t)})),P,new w.a({uri:"/graphql",credentials:"include"})]),cache:N});o.a.render(a.a.createElement(l.a,{client:$},a.a.createElement(E,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.34ee3487.chunk.js.map