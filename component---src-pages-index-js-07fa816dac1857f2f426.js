webpackJsonp([35783957827783],{97:function(e,t,n){"use strict";function a(e){return e}function o(e,t,n){function o(e,t){var n=g.hasOwnProperty(t)?g[t]:null;N.hasOwnProperty(t)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,r=a.__reactAutoBindPairs;n.hasOwnProperty(u)&&v.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==u){var l=n[i],c=a.hasOwnProperty(i);if(o(c,i),v.hasOwnProperty(i))v[i](e,l);else{var d=g.hasOwnProperty(i),m="function"==typeof l,h=m&&!d&&!c&&n.autobind!==!1;if(h)r.push(i,l),a[i]=l;else if(c){var y=g[i];s(d&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,i),"DEFINE_MANY_MERGED"===y?a[i]=p(a[i],l):"DEFINE_MANY"===y&&(a[i]=f(a[i],l))}else a[i]=l}}}else;}function c(e,t){if(t)for(var n in t){var a=t[n];if(t.hasOwnProperty(n)){var o=n in v;s(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in e;if(r){var i=b.hasOwnProperty(n)?b[n]:null;return s("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=p(e[n],a))}e[n]=a}}}function d(e,t){s(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(s(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function p(e,t){return function(){var n=e.apply(this,arguments),a=t.apply(this,arguments);if(null==n)return a;if(null==a)return n;var o={};return d(o,n),d(o,a),o}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var a=t[n],o=t[n+1];e[a]=m(e,o)}}function y(e){var t=a(function(e,a,o){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=a,this.refs=l,this.updater=o||n,this.state=null;var r=this.getInitialState?this.getInitialState():null;s("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new _,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],E.forEach(r.bind(null,t)),r(t,w),r(t,e),r(t,D),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),s(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in g)t.prototype[o]||(t.prototype[o]=null);return t}var E=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},w={componentDidMount:function(){this.__isMounted=!0}},D={componentWillUnmount:function(){this.__isMounted=!1}},N={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},_=function(){};return i(_.prototype,e.prototype,N),y}var r,i=n(4),l=n(34),s=n(1),u="mixins";r={},e.exports=o},305:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof D&&"undefined"!=typeof window&&window.IntersectionObserver&&(D=new window.IntersectionObserver(function(e){e.forEach(function(e){N.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),D}t.__esModule=!0;var r=n(41),i=a(r),l=n(55),s=a(l),u=n(54),c=a(u),d=n(127),p=a(d),f=n(126),m=a(f),h=n(5),y=a(h),E=n(7),g=a(E),b=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},v={},w=function(e){var t=b(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!v[n]||(v[n]=!0,!1)},D=void 0,N=[],_=function(e,t){o().observe(e),N.push([e,t])},I=null,S=function(){if(null!==I)return I;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return I=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",u=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+i+l+t+n+r+o+a+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},M=function(e){var t=e.style,n=e.onLoad,a=(0,p.default)(e,["style","onLoad"]);return y.default.createElement("img",(0,m.default)({},a,{onLoad:n,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};M.propTypes={style:g.default.object,onLoad:g.default.func};var O=function(e){function t(n){(0,i.default)(this,t);var a=(0,s.default)(this,e.call(this,n)),o=!0,r=!0,l=!1,u=w(n);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,r=!1,l=!0),"undefined"==typeof window&&(o=!1,r=!1),a.state={isVisible:o,imgLoaded:r,IOSupported:l},a.handleRef=a.handleRef.bind(a),a}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&_(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=b(this.props),n=t.title,a=t.alt,o=t.className,r=t.outerWrapperClassName,i=t.style,l=void 0===i?{}:i,s=t.imgStyle,u=void 0===s?{}:s,c=t.sizes,d=t.resolutions,p=t.backgroundColor,f=t.Tag,h=void 0;h="boolean"==typeof p?"lightgray":p;var E=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u),g=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(c){var v=c;return v.srcWebp&&v.srcSetWebp&&S()&&(v.src=v.srcWebp,v.srcSet=v.srcSetWebp),y.default.createElement(f,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},y.default.createElement(f,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef},y.default.createElement(f,{style:{width:"100%",paddingBottom:100/v.aspectRatio+"%"}}),v.base64&&y.default.createElement(M,{alt:a,title:n,src:v.base64,style:E}),v.tracedSVG&&y.default.createElement(M,{alt:a,title:n,src:v.tracedSVG,style:E}),h&&y.default.createElement(f,{title:n,style:{backgroundColor:h,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(M,{alt:a,title:n,srcSet:v.srcSet,src:v.src,sizes:v.sizes,style:g,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,m.default)({alt:a,title:n},v))}})))}if(d){var w=d,D=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:w.width,height:w.height},l);return"inherit"===l.display&&delete D.display,w.srcWebp&&w.srcSetWebp&&S()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),y.default.createElement(f,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},y.default.createElement(f,{className:(o?o:"")+" gatsby-image-wrapper",style:D,ref:this.handleRef},w.base64&&y.default.createElement(M,{alt:a,title:n,src:w.base64,style:E}),w.tracedSVG&&y.default.createElement(M,{alt:a,title:n,src:w.tracedSVG,style:E}),h&&y.default.createElement(f,{title:n,style:{backgroundColor:h,width:w.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:w.height}}),this.state.isVisible&&y.default.createElement(M,{alt:a,title:n,width:w.width,height:w.height,srcSet:w.srcSet,src:w.src,style:g,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,m.default)({alt:a,title:n,width:w.width,height:w.height},w))}})))}return null},t}(y.default.Component);O.defaultProps={fadeIn:!0,alt:"",Tag:"div"},O.propTypes={responsiveResolution:g.default.object,responsiveSizes:g.default.object,resolutions:g.default.object,sizes:g.default.object,fadeIn:g.default.bool,title:g.default.string,alt:g.default.string,className:g.default.oneOfType([g.default.string,g.default.object]),outerWrapperClassName:g.default.oneOfType([g.default.string,g.default.object]),style:g.default.object,imgStyle:g.default.object,position:g.default.string,backgroundColor:g.default.oneOfType([g.default.string,g.default.bool]),onLoad:g.default.func,Tag:g.default.string},t.default=O},159:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,a=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,l=i&&i(Object);return function s(u,c,d){if("string"!=typeof c){if(l){var p=i(c);p&&p!==l&&s(u,p,d)}var f=a(c);o&&(f=f.concat(o(c)));for(var m=0;m<f.length;++m){var h=f[m];if(!(e[h]||t[h]||d&&d[h])){var y=r(c,h);try{n(u,h,y)}catch(e){}}}return u}return u}})},4:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,l,s=n(e),u=1;u<arguments.length;u++){a=Object(arguments[u]);for(var c in a)r.call(a,c)&&(s[c]=a[c]);if(o){l=o(a);for(var d=0;d<l.length;d++)i.call(a,l[d])&&(s[l[d]]=a[l[d]])}}return s}},291:function(e,t){},201:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(5),r=a(o);n(291);var i=function(e){var t=e.label,n=e.score,a=Array.from(Array(n).keys()),o=Array.from(Array(5-n).keys());return r.default.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:5}},r.default.createElement("span",null,t),r.default.createElement("div",{className:"score"},a.map(function(e){return r.default.createElement("span",{className:"star",key:t+"_"+e})}),o.map(function(e){return r.default.createElement("span",{key:t+"_"+(5-e)})})))};t.default=i,e.exports=t.default},204:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(5),i=a(r),l=n(155),s=(a(l),n(305)),u=a(s),c=n(201),d=a(c),p=function(e){var t=e.data;return i.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.default.createElement("div",{style:{display:"flex"}},i.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.default.createElement(u.default,{title:"me",alt:"dobleuber",resolutions:t.file.childImageSharp.resolutions}),i.default.createElement("h4",{style:{marginTop:15}},"Skills"),t.site.siteMetadata.skills.map(function(e){return i.default.createElement(d.default,o({key:e.label},e))})),i.default.createElement("div",{style:{display:"flex",flexDirection:"column",padding:20}},i.default.createElement("h4",null,"Frontend Developer"),i.default.createElement("p",null,"Web developer with 15+ years of experience. Passionate for my work and self-improvement. Committed with developing product with high quality standards. I enjoy learning and working with new technologies. I love working hard when I am doing challenging projects."),i.default.createElement("p",null,"I fell in love with React and its ecosystem a couple of years ago. I have been studying this framework a lot and have built several applications to put my skills into practice. I’ve given talks about React, Angular and Web development in multiple tech meetups in my city."),i.default.createElement("p",null,"My mainy is to learn about new things and I am always trying new ways to do things."),i.default.createElement("h4",null,"Experience"),i.default.createElement("h5",null,"PSL Corp"),i.default.createElement("p",null,"Senior Web Developer ",i.default.createElement("br",null),"I joined to PSL to start to create a robust team and architecture for Microsoft projects. I have worked a lot in the adoption of new technologies in the backend side and the last years for frontend."),i.default.createElement("h6",null,"Responsabilities:"),i.default.createElement("ul",null,i.default.createElement("li",null,"Develop high quality web applications for Big companies at US and Colombia"),i.default.createElement("li",null,"Support the software architect at defining the technology stack for Web projects and develop the most challenging features"),i.default.createElement("li",null,"Help with personal selection process doing internal and external technical interviews"),i.default.createElement("li",null,"Support to another teams in the resolution of difficult issues"),i.default.createElement("li",null,"Mentoring junior developers to improve their technical skills")),i.default.createElement("h5",null,"Trebol / Axede S.A."),i.default.createElement("p",null,"Web Developer ",i.default.createElement("br",null),i.default.createElement("i",null,"July 2007 - May 2009"),i.default.createElement("br",null),"I worked as Outsource Developer in www.virtualexito.com, now www.exito.com. At that time was the biggest online store at Colombia.",i.default.createElement("br",null),"I started with a project for the judicial branch of Colombia, That was a very challenging project and the expectative were very high."),i.default.createElement("h6",null,"Responsabilities:"),i.default.createElement("ul",null,i.default.createElement("li",null,"Develop and support the design for online payments with PSE, Master Card and Visa."),i.default.createElement("li",null,"Help to define the best practices to work with LinQ and LinQ to SQL, the new Microsoft technology.")),i.default.createElement("h5",null,"Seriva"),i.default.createElement("p",null,"Web Developer ",i.default.createElement("br",null),i.default.createElement("i",null,"June 2005 - April 2007"),i.default.createElement("br",null),"Worked in support and customization of the banking platform created by Seriva. I worked for Banco de Credito, Banco de Occidente, Banco Popular."),i.default.createElement("h6",null,"Responsabilities:"),i.default.createElement("ul",null,i.default.createElement("li",null,"Develop custom features for Banco de Crédito."),i.default.createElement("li",null,"Maintenance and support for the other customers at Colombia.")),i.default.createElement("h5",null,"Symmetry Ltda"),i.default.createElement("p",null,"Web Developer ",i.default.createElement("br",null),i.default.createElement("i",null,"September 2004 - June 2005")," ",i.default.createElement("br",null),"Worked as contributor developer to the team that architected, developed and deployed the Avianca website (Major airline in Colombia) using Microsoft technologies (.NET). Delivered an operational online ticket sales website in just 3 months.",i.default.createElement("br",null),"This project was one of the first .net projects in the world."),i.default.createElement("h6",null,"Responsabilities:"),i.default.createElement("ul",null,i.default.createElement("li",null,"Develop the booking engine platform."),i.default.createElement("li",null,"Develop the integration with the payments platforms for PSE-ACH, Verisign, Visa and Transbank."),i.default.createElement("li",null,"Maintenance and Support of Avianca.com web site.")))))};t.default=p;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-07fa816dac1857f2f426.js.map