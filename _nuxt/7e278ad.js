(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{398:function(t,e,n){"use strict";n(20),n(62);var r=n(1);e.a=r.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var r=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},r)}}})},400:function(t,e,n){"use strict";n(9),n(8),n(69),n(30),n(273),n(193),n(70),n(86);var r=n(1);var o,l=n(63);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},429:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5fd44042",content,!0,{sourceMap:!1})},476:function(t,e,n){"use strict";n(429)},477:function(t,e,n){var r=n(15)(!1);r.push([t.i,"button[type][data-v-31e70ece]{padding:0}.triangle[data-v-31e70ece]{width:0;height:0;border:25px solid transparent;border-top:0;border-bottom:25px solid rgba(19,25,40,.75)}.triangle2[data-v-31e70ece]{width:0;height:0;border:30px solid transparent;border-top:0;border-bottom:30px solid rgba(17,25,40,.75)}",""]),t.exports=r},478:function(t,e,n){var content=n(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5939d713",content,!0,{sourceMap:!1})},479:function(t,e,n){var r=n(15)(!1);r.push([t.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),t.exports=r},486:function(t,e,n){"use strict";n.r(e);var r={name:"ClientReviewComponent",data:function(){return{rating:4,button:!0}}},o=(n(476),n(33)),l=n(36),c=n.n(l),d=n(181),v=n(201),f=n(383),h=n(391),m=n(400),y=n(179),x=(n(20),n(197),n(64),n(478),n(85)),C=n(25),k=n(398),w=n(139),$=n(87),I=n(1).a.extend({name:"rippleable",directives:{ripple:$.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),_=n(28),H=n(0),S=n(6),V=Object(S.a)(C.a,k.a,I,w.a,_.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,n=t.large,r=t.light,o=t.medium,small=t.small;return{dark:e,large:n,light:r,medium:o,size:t.size,small:small,xLarge:t.xLarge,xSmall:t.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(i){var t=this;return function(e){if(!t.readonly){var n=t.genHoverIndex(e,i);t.clearable&&t.internalValue===n?t.internalValue=0:t.internalValue=n}}},createProps:function(i){var t={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-i)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-i)%1>0),t},genHoverIndex:function(t,i){var e=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(e=!e),i+(e?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,n=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var rect=t.target&&t.target.getBoundingClientRect();if(rect&&t.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(t,i){var e=this;this.runDelay("open",(function(){e.hoverIndex=e.genHoverIndex(t,i)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(i){var t=this,e=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);var n={click:e.click};return this.hover&&(n.mouseenter=function(e){return t.onMouseEnter(e,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(e){return t.onMouseEnter(e,i)})),this.$createElement(x.a,this.setTextColor(this.getColor(e),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(e)])}},render:function(t){var e=this,n=Object(H.g)(Number(this.length)).map((function(i){return e.genItem(i)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}}),j=n(393),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-16"},[n("div",[t.$vuetify.breakpoint.mobile?n("h2",{staticClass:"\n      font-weight-bold\n      primary--text\n      text-center\n      mb-2 mt-10"},[t._v("\n      Our Happy Clients\n    ")]):n("h3",{staticClass:"\n      display-2\n      font-weight-bold\n      primary--text\n      text-center mb-2"},[t._v("\n      Our Happy Clients\n    ")])]),t._v(" "),n("div",{staticClass:"mx-auto mb-10",staticStyle:{height:"4px",background:"#2196F3","border-radius":"20px"},style:t.$vuetify.breakpoint.mobile?"width: 290px":"width: 400px"}),t._v(" "),n("v-container",[n("v-row",t._l(3,(function(e){return n("v-col",{key:e,attrs:{cols:t.$vuetify.breakpoint.mdAndUp?4:t.$vuetify.breakpoint.sm?6:12,"data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"1500"}},[n("v-card",{staticClass:"primary py-8 px-5",attrs:{flat:""}},[n("v-row",[n("v-col",{class:t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.sm?"ml-4 text-center":null,attrs:{cols:t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.sm?12:2}},[n("v-avatar",{attrs:{size:t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.sm?80:60}},[n("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})])],1),t._v(" "),n("v-col",{staticClass:"white--text ml-4 pr-0",attrs:{cols:t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.sm?12:8}},[n("h3",{staticClass:"heading-font blue--text",class:t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.sm?"text-center":null},[t._v("\n                Robert Martin\n              ")]),t._v(" "),n("p",{staticClass:"subtitle-2 font-weight-light mb-0",class:t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.sm?"text-center":null},[t._v("\n                SL Manager\n              ")]),t._v(" "),n("v-rating",{staticClass:"ml-n2",class:t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.sm?"text-center":null,attrs:{"background-color":"orange lighten-3",color:"orange",size:"14"},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}})],1)],1),t._v(" "),n("p",{staticClass:"white--text caption font-weight-light text-justify pt-6"},[n("v-icon",{staticClass:"mt-n3",attrs:{color:"blue",size:"32"}},[t._v("\n              mdi-format-quote-open\n            ")]),t._v("\n            I thank team for providing amazing support for the project.\n            Both the android TV app & Mobile app works fine and it helped our client,\n            Console IT a lot on trade show to showcase their products to the customer.\n          ")],1),t._v(" "),n("div",{staticClass:"mt-2 pt-2",staticStyle:{"border-top":"2px solid #2196F3"}},[n("span",{staticClass:"font-weight-light caption grey--text text--lighten-1"},[t._v("\n                12 july,2021\n            ")]),t._v(" "),n("div",{staticClass:"d-flex float-right mt-2"},[n("div",{staticClass:"triangle"}),t._v(" "),n("div",{staticClass:"triangle2 ml-n8 mt-n1"})])])],1)],1)})),1),t._v(" "),n("div",{staticClass:"pt-16"},[n("div",{staticClass:"d-flex justify-center"},t._l(3,(function(e){return n("v-btn",{key:e,staticClass:"mx-1",attrs:{icon:"","x-small":"",color:"primary",outlined:""}},[n("v-icon",{attrs:{color:"primary","x-small":""}},[t._v("mdi-circle")])],1)})),1)])],1)],1)}),[],!1,null,"31e70ece",null);e.default=component.exports;c()(component,{VAvatar:d.a,VBtn:v.a,VCard:f.a,VCol:h.a,VContainer:m.a,VIcon:y.a,VRating:V,VRow:j.a})}}]);