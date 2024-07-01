(function(){"use strict";var e={833:function(e,t,o){var n=o(5130),a=o(6768);const r={id:"app"};function i(e,t,o,n,i,s){const l=(0,a.g2)("Navbar"),u=(0,a.g2)("Home"),c=(0,a.g2)("About"),d=(0,a.g2)("Resume"),m=(0,a.g2)("Projects"),f=(0,a.g2)("Testimonials"),v=(0,a.g2)("Contact"),p=(0,a.g2)("Footer");return(0,a.uX)(),(0,a.CE)("div",r,[(0,a.bF)(l),(0,a.Lk)("main",null,[(0,a.bF)(u),(0,a.bF)(c),(0,a.bF)(d),(0,a.bF)(m),(0,a.bF)(f),(0,a.bF)(v)]),(0,a.bF)(p)])}const s=(0,a.Fv)('<a href="#home" data-v-30b109b0>Home</a><a href="#about" data-v-30b109b0>About</a><a href="#resume" data-v-30b109b0>Resume</a><a href="#projects" data-v-30b109b0>Projects</a><a href="#testimonials" data-v-30b109b0>Testimonials</a><a href="#contact" data-v-30b109b0>Contact</a>',6),l=[s];function u(e,t,o,n,r,i){return(0,a.uX)(),(0,a.CE)("nav",null,l)}var c={name:"NavbarComp"},d=o(1241);const m=(0,d.A)(c,[["render",u],["__scopeId","data-v-30b109b0"]]);var f=m,v=o(4232);function p(e,t,o,n,r,i){return(0,a.uX)(),(0,a.CE)("footer",null,[(0,a.Lk)("p",null,"© "+(0,v.v_)(r.currentYear)+" Your Name. All rights reserved.",1)])}var h={name:"FooterComp",data(){return{currentYear:(new Date).getFullYear()}}};const b=(0,d.A)(h,[["render",p],["__scopeId","data-v-06585f32"]]);var k=b;const g=(0,a.Fv)('<section id="home" class="home" data-v-147054e2><h1 data-v-147054e2>Welcome to My Portfolio</h1><img src="/public/img/icons/zak1.jpg" alt="Professional Photo" loading="lazy" data-v-147054e2></section><div class="container" data-v-147054e2><div class="row" data-v-147054e2><img src="/public/img/icons/zak1.jpg" alt="portfolio" data-v-147054e2></div></div>',2);function L(e,t,o,n,a,r){return g}var y={name:"HomeView"};const _=(0,d.A)(y,[["render",L],["__scopeId","data-v-147054e2"]]);var j=_,C=o(3520);const E=e=>((0,a.Qi)("data-v-9b470f5e"),e=e(),(0,a.jt)(),e),w={id:"resume",class:"resume"},A=E((()=>(0,a.Lk)("h2",null,"Resume",-1))),F=E((()=>(0,a.Lk)("h3",null,"Education",-1))),S=E((()=>(0,a.Lk)("h3",null,"Skills",-1)));function I(e,t,o,n,r,i){return(0,a.uX)(),(0,a.CE)("section",w,[A,F,(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.education,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e.Id},(0,v.v_)(e.schoolName)+" ("+(0,v.v_)(e.Year)+") ",1)))),128))]),S,(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.skills,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e.Id},(0,v.v_)(e.skillName)+" - "+(0,v.v_)(e.Level),1)))),128))])])}var P=o(782),T={name:"ResumeView",computed:{...(0,P.aH)(["education","skills"])},created(){this.$store.dispatch("fetchEducation"),this.$store.dispatch("fetchSkills")}};const X=(0,d.A)(T,[["render",I],["__scopeId","data-v-9b470f5e"]]);var O=X;const N=e=>((0,a.Qi)("data-v-4c0fa9dc"),e=e(),(0,a.jt)(),e),x={id:"projects",class:"projects"},V=N((()=>(0,a.Lk)("h2",null,"Projects",-1))),Y={class:"card-container"};function D(e,t,o,n,r,i){const s=(0,a.g2)("Card");return(0,a.uX)(),(0,a.CE)("section",x,[V,(0,a.Lk)("div",Y,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.projects,(e=>((0,a.uX)(),(0,a.Wv)(s,{key:e.id},{default:(0,a.k6)((()=>[(0,a.Lk)("h3",null,(0,v.v_)(e.title),1),(0,a.Lk)("p",null,(0,v.v_)(e.description),1)])),_:2},1024)))),128))])])}var H={name:"ProjectsView",data(){return{projects:[{id:1,title:"Project 1",description:"Description of project 1"},{id:2,title:"Project 2",description:"Description of project 2"}]}}};const K=(0,d.A)(H,[["render",D],["__scopeId","data-v-4c0fa9dc"]]);var M=K;const R=e=>((0,a.Qi)("data-v-489c62dc"),e=e(),(0,a.jt)(),e),Q={id:"testimonials",class:"testimonials"},U=R((()=>(0,a.Lk)("h2",null,"Testimonials",-1))),$={class:"card-container"};function q(e,t,o,n,r,i){const s=(0,a.g2)("Card");return(0,a.uX)(),(0,a.CE)("section",Q,[U,(0,a.Lk)("div",$,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.testimonials,(e=>((0,a.uX)(),(0,a.Wv)(s,{key:e.id},{default:(0,a.k6)((()=>[(0,a.Lk)("p",null,(0,v.v_)(e.text),1),(0,a.Lk)("p",null,[(0,a.Lk)("strong",null,(0,v.v_)(e.author),1)])])),_:2},1024)))),128))])])}const z={class:"card"};function J(e,t,o,n,r,i){return(0,a.uX)(),(0,a.CE)("div",z,[(0,a.RG)(e.$slots,"default",{},void 0,!0)])}var W={name:"CardComp"};const G=(0,d.A)(W,[["render",J],["__scopeId","data-v-6e8bd5f6"]]);var B=G,Z={name:"TestimonialsView",components:{Card:B},data(){return{testimonials:[{id:1,text:"Testimonial 1",author:"Author 1"},{id:2,text:"Testimonial 2",author:"Author 2"}]}}};const ee=(0,d.A)(Z,[["render",q],["__scopeId","data-v-489c62dc"]]);var te=ee;const oe=e=>((0,a.Qi)("data-v-20d404d3"),e=e(),(0,a.jt)(),e),ne={id:"contact",class:"contact"},ae=oe((()=>(0,a.Lk)("h2",null,"Contact",-1))),re=oe((()=>(0,a.Lk)("label",{for:"name"},"Name:",-1))),ie=oe((()=>(0,a.Lk)("label",{for:"email"},"Email:",-1))),se=oe((()=>(0,a.Lk)("label",{for:"message"},"Message:",-1))),le=oe((()=>(0,a.Lk)("button",{type:"submit"},"Submit",-1))),ue=oe((()=>(0,a.Lk)("div",{class:"contact-info"},[(0,a.Lk)("p",null,"Location: Your City, Your Country"),(0,a.Lk)("div",{class:"social-icons"},[(0,a.Lk)("a",{href:"https://github.com/yourusername",target:"_blank"},"GitHub"),(0,a.Lk)("a",{href:"https://linkedin.com/in/yourusername",target:"_blank"},"LinkedIn")])],-1)));function ce(e,t,o,r,i,s){return(0,a.uX)(),(0,a.CE)("section",ne,[ae,(0,a.Lk)("form",{onSubmit:t[3]||(t[3]=(0,n.D$)(((...e)=>s.handleSubmit&&s.handleSubmit(...e)),["prevent"]))},[(0,a.Lk)("div",null,[re,(0,a.bo)((0,a.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>i.form.name=e),required:""},null,512),[[n.Jo,i.form.name]])]),(0,a.Lk)("div",null,[ie,(0,a.bo)((0,a.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>i.form.email=e),required:""},null,512),[[n.Jo,i.form.email]])]),(0,a.Lk)("div",null,[se,(0,a.bo)((0,a.Lk)("textarea",{id:"message","onUpdate:modelValue":t[2]||(t[2]=e=>i.form.message=e),required:""},null,512),[[n.Jo,i.form.message]])]),le],32),ue])}var de={name:"ContactView",data(){return{form:{name:"",email:"",message:""}}},methods:{handleSubmit(){this.form.name&&this.form.email&&this.form.message?(alert("Form submitted successfully!"),this.form={name:"",email:"",message:""}):alert("Please fill in all fields.")}}};const me=(0,d.A)(de,[["render",ce],["__scopeId","data-v-20d404d3"]]);var fe=me,ve={name:"App",components:{Navbar:f,Footer:k,Home:j,About:C["default"],Resume:O,Projects:M,Testimonials:te,Contact:fe}};const pe=(0,d.A)(ve,[["render",i]]);var he=pe,be=o(4458);(0,be.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var ke=o(1387);const ge=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:()=>Promise.resolve().then(o.bind(o,3520))}],Le=(0,ke.aE)({history:(0,ke.LA)("/"),routes:ge});var ye=Le,_e=(0,P.y$)({state:{education:[],skills:[]},mutations:{SET_EDUCATION(e,t){e.education=t},SET_SKILLS(e,t){e.skills=t}},actions:{async fetchEducation({commit:e}){try{const t=await fetch("https://yourusername.github.io/yourrepo/path/to/education.json"),o=await t.json();e("SET_EDUCATION",o.education)}catch(t){console.error("Error fetching education data:",t)}},async fetchSkills({commit:e}){try{const t=await fetch("https://yourusername.github.io/yourrepo/path/to/skills.json"),o=await t.json();e("SET_SKILLS",o.skills)}catch(t){console.error("Error fetching skills data:",t)}}}});(0,n.Ef)(he).use(_e).use(ye).mount("#app")},3520:function(e,t,o){o.r(t),o.d(t,{default:function(){return v}});var n=o(6768);const a=e=>((0,n.Qi)("data-v-1679df47"),e=e(),(0,n.jt)(),e),r={id:"about",class:"about"},i=a((()=>(0,n.Lk)("h2",null,"About Me",-1))),s=a((()=>(0,n.Lk)("p",null,"Your introduction goes here.",-1))),l=a((()=>(0,n.Lk)("img",{src:"https://yourusername.github.io/yourrepo/path/to/image.jpg",alt:"Professional Photo"},null,-1))),u=[i,s,l];function c(e,t,o,a,i,s){return(0,n.uX)(),(0,n.CE)("section",r,u)}var d={name:"AboutView"},m=o(1241);const f=(0,m.A)(d,[["render",c],["__scopeId","data-v-1679df47"]]);var v=f}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,r){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],r=e[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,a,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,i=n[0],s=n[1],l=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var c=l(o)}for(t&&t(n);u<i.length;u++)r=i[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self["webpackChunkvue_eomp"]=self["webpackChunkvue_eomp"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(833)}));n=o.O(n)})();
//# sourceMappingURL=app.03397508.js.map