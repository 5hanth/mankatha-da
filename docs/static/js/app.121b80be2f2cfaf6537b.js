webpackJsonp([1],{"6qWT":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("/5sW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("Pe99")},null,null).exports,s=n("/ocq"),i=n("Xxa5"),l=n.n(i),c=n("c/Tr"),u=n.n(c),h=n("exGp"),d=n.n(h),p=n("//Fk"),v=n.n(p),f={name:"Home",data:function(){return{title:"Mankatha-da",description:"Tweet SHA256 version of your goals and crypto prove it once you have achieved.",goals:[],newGoal:"",encodedTweet:"",copiedText:""}},methods:{addGoal:function(t){var e=this.goals.filter(function(t){return!t.strike});if(console.log(e),e.length>=4)return alert("maximum 4 goals per tweet allowed");this.goals.push({text:t,strike:!1}),this.newGoal="",this.tweetGoals(this.goals),this.$refs.newGoal.focus()},tweetGoals:function(t){var e=this,n=t.filter(function(t){return!t.strike});if(!n.length)return alert("no goals added to tweet");var a=n.map(function(t){return e.sha256(t.text)});v.a.all(a).then(function(t){var n=t.join("");console.log("concatenated hashes string",n),n.length>280?(console.log("string greater than 280 chars. You need to tweet 4 goals per tweet to hash and prove them individually. Or you can tweet hash of concatenated hashes string but can only prove them by revealing all other goals."),e.sha256(n).then(e.composeTweetMsg)):e.composeTweetMsg(n)})},composeTweetMsg:function(t){var e=encodeURIComponent(t+" #2019Goals #MankathaDa");this.encodedTweet=e},tweet:function(t){var e="https://twitter.com/intent/tweet?text="+t;t.length<=239&&(e+="&url=https://5hanth.github.io/mankatha-da"),this.copiedText=this.goals.filter(function(t){return!t.strike}).map(function(t){return t.text}).join(","),window.open(e)},strikeToogle:function(t){if(this.goals.filter(function(t){return!t.strike}).length>=4&&this.goals[t].strike)return alert("maximum 4 goals per tweet allowed");this.goals[t].strike=!this.goals[t].strike},sha256:function(t){var e=this;return d()(l.a.mark(function n(){var a,o,r,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=new TextEncoder("utf-8").encode(t),e.next=3,crypto.subtle.digest("SHA-256",a);case 3:return o=e.sent,r=u()(new Uint8Array(o)),s=r.map(function(t){return("00"+t.toString(16)).slice(-2)}).join(""),e.abrupt("return",s);case 7:case"end":return e.stop()}},n,e)}))()}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("h3",[t._v(t._s(t.description))]),t._v(" "),t.goals.length?n("h3",[t._v("My 2019 Goals")]):t._e(),t._v(" "),n("ul",{staticClass:"goal-list"},t._l(t.goals,function(e,a){return n("li",{key:a,staticClass:"tooltip",class:{strike:e.strike},on:{click:function(e){t.strikeToogle(a)}}},[t._v("\n      "+t._s(e.text)+" "),n("span",{staticClass:"tooltiptext"},[t._v("Tap to strike")])])}),0),t._v(" "),t.goals.length?n("button",{staticClass:"tweet-btn",on:{click:function(e){t.tweet(t.encodedTweet)}}},[t._v("Tweet")]):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newGoal,expression:"newGoal",modifiers:{trim:!0}}],ref:"newGoal",attrs:{placeholder:"Add a goal"},domProps:{value:t.newGoal},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.addGoal(t.newGoal)},input:function(e){e.target.composing||(t.newGoal=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),t.newGoal?n("button",{staticClass:"add-btn",on:{click:function(e){t.addGoal(t.newGoal)}}},[t._v("Add")]):t._e(),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.copiedText,expression:"copiedText"}],staticClass:"copied"},[n("span",{ref:"copiedText",attrs:{id:"c-text"}},[t._v(t._s(t.copiedText))]),t._v(" "),n("br"),t._v(" You need to save this somewhere to prove your hashes later. ")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"footer"},[e("li",[e("a",{attrs:{href:"https://github.com/5hanth/Mankatha-da",target:"_blank"}},[this._v("\n        fork\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/5hanth/Mankatha-da/blob/master/Readme.md",target:"_blank"}},[this._v("\n        how it works?\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://www.linkedin.com/in/5hanth/",target:"_blank"}},[this._v("\n        say hi\n      ")])])])}]};var g=n("VU/8")(f,w,!1,function(t){n("6qWT")},"data-v-4b3738ea",null).exports;a.a.use(s.a);var m=new s.a({routes:[{path:"/",name:"Home",component:g}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:m,render:function(t){return t(r)}})},Pe99:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.121b80be2f2cfaf6537b.js.map