"use strict";(self.webpackChunkonepredict_engineering_blog=self.webpackChunkonepredict_engineering_blog||[]).push([[351],{5787:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),l=new RegExp(i.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,r)=>{let i=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,l=s,s=!0,o++):s&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,i=!0):(i=n(c)===c&&r(c)!==c,l=s,s=r(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},3714:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return _},P:function(){return E},S:function(){return W},_:function(){return l},a:function(){return s},b:function(){return d},g:function(){return p},h:function(){return o}});var n=a(959),r=(a(5787),a(507)),i=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function p(e,t,a,n,r,i,l,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],m=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,u);return n.createElement(n.Fragment,null,n.createElement(m,s({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:o}=e,c=l(e,b);return n.createElement("img",s({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=l(e,f);const o=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(h,s({},i,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var w;h.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},y.displayName="Picture",y.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,v);return t?n.createElement(y,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const _=function(e){return n.createElement(n.Fragment,null,n.createElement(y,s({},e)),n.createElement("noscript",null,n.createElement(y,s({},e,{shouldLoad:!0}))))};_.displayName="MainImage",_.propTypes=y.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],k=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:i().object.isRequired,alt:L},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],$=["style","className"],T=new Set;let I,j;const O=function(e){let{as:t="div",image:r,style:i,backgroundColor:d,className:p,class:u,onStartLoad:m,onLoad:g,onError:b}=e,f=l(e,N);const{width:h,height:y,layout:w}=r,v=c(h,y,w),{style:E,className:_}=v,S=l(v,$),x=(0,n.useRef)(),k=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(p=u);const L=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(w,h,y);return(0,n.useEffect)((()=>{I||(I=a.e(582).then(a.bind(a,6582)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(k);if(j&&T.has(k))return;let t,n;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;x.current&&(x.current.innerHTML=a(s({isLoading:!0,isLoaded:T.has(k),image:r},f)),T.has(k)||(t=requestAnimationFrame((()=>{x.current&&(n=l(x.current,k,T,i,m,g,b))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{T.has(k)&&j&&(x.current.innerHTML=j(s({isLoading:T.has(k),isLoaded:T.has(k),image:r},f)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},S,{style:s({},E,i,{backgroundColor:d}),className:`${_}${p?` ${p}`:""}`,ref:x,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},z=(0,n.memo)((function(e){return e.image?(0,n.createElement)(O,e):null}));z.propTypes=C,z.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function H(e){return function(t){let{src:a,__imageData:r,__error:i}=t,o=l(t,A);return i&&console.warn(i),r?n.createElement(e,s({image:r},o)):(console.warn("Image not loaded",a),null)}}const R=H((function(e){let{as:t="div",className:a,class:r,style:i,image:o,loading:u="lazy",imgClassName:m,imgStyle:b,backgroundColor:f,objectFit:h,objectPosition:y}=e,w=l(e,S);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),b=s({objectFit:h,objectPosition:y,backgroundColor:f},b);const{width:v,height:L,layout:C,images:N,placeholder:$,backgroundColor:T}=o,I=c(v,L,C),{style:j,className:O}=I,z=l(I,x),A={fallback:void 0,sources:[]};return N.fallback&&(A.fallback=s({},N.fallback,{srcSet:N.fallback.srcSet?k(N.fallback.srcSet):void 0})),N.sources&&(A.sources=N.sources.map((e=>s({},e,{srcSet:k(e.srcSet)})))),n.createElement(t,s({},z,{style:s({},j,i,{backgroundColor:f}),className:`${O}${a?` ${a}`:""}`}),n.createElement(g,{layout:C,width:v,height:L},n.createElement(E,s({},p($,!1,C,v,L,T,h,y))),n.createElement(_,s({"data-gatsby-image-ssr":"",className:m},w,d("eager"===u,!1,A,u,b)))))})),q=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},M=new Set(["fixed","fullWidth","constrained"]),P={src:i().string.isRequired,alt:L,width:q,height:q,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};R.displayName="StaticImage",R.propTypes=P;const W=H(z);W.displayName="StaticImage",W.propTypes=P},814:function(e,t,a){var n=a(959),r=a(2728),i=a(3714);const s=()=>n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("g",{"clip-path":"url(#clip0_3349_3067)"},n.createElement("path",{d:"M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z",fill:"#0A0A0A"})),n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_3349_3067"},n.createElement("rect",{width:"24",height:"24",fill:"white"})))),l=()=>n.createElement("div",{className:"header-container"},n.createElement("div",{className:"header-wrap"},n.createElement("div",null,n.createElement(r.Link,{to:"/",style:{display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none",gap:12}},n.createElement("div",{className:"web"},n.createElement(i.S,{formats:["auto","webp"],height:48,alt:"onepredict",placeholder:"none",src:"../images/logo/onpredict_basic.png",__imageData:a(9911)})),n.createElement("div",{className:"mobile"},n.createElement(i.S,{formats:["auto","webp"],height:48,alt:"onepredict",placeholder:"none",src:"../images/symbol/onepredict_Symbol_b.png",__imageData:a(7033)})),n.createElement("span",{style:{fontWeight:"700",fontSize:"1.25rem",color:"black"}},"Engineering Blog."))),n.createElement(r.Link,{style:{textDecorationLine:"none",color:"black",display:"flex",justifyContent:"center",alignItems:"center",gap:4,fontWeight:"700",fontSize:"1.125em",lineHeight:"1.1"},to:"https://blog.onepredict.ai/",target:"_blank"},n.createElement("span",null,"채용"),n.createElement(s,null)))),o=e=>{const{children:t}=e;return n.createElement("div",{className:"content-container"},n.createElement("div",{className:"content-wrap"},n.createElement("main",{className:"content-main-wrap"},t)))};t.Z=e=>{let{location:t,title:a,children:r}=e;const i="/"===t.pathname;return n.createElement("div",{"data-is-root-path":i},n.createElement(l,null),n.createElement(o,null,r))}},5435:function(e,t,a){var n=a(959),r=a(2728);t.Z=e=>{var t,a;let{description:i,title:s,slug:l,children:o}=e;const{site:c}=(0,r.useStaticQuery)("2094693779"),d=i||c.siteMetadata.description,p=null===(t=c.siteMetadata)||void 0===t?void 0:t.title,u=l&&[(null===(a=c.siteMetadata)||void 0===a?void 0:a.siteUrl)||"","posts",l.replace(/\//g,""),"thumbnail.jpg"].join("/");return n.createElement(n.Fragment,null,n.createElement("title",null,p?`${s} | ${p}`:s),n.createElement("meta",{name:"description",content:d}),u&&n.createElement("meta",{property:"og:image",content:u}),n.createElement("meta",{property:"og:title",content:s}),n.createElement("meta",{property:"og:description",content:d}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:title",content:s}),n.createElement("meta",{name:"twitter:description",content:d}),o)}},9911:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/0fbfd0d02fa527a5e1888b8d5d53bb92/fbc70/onpredict_basic.png","srcSet":"/static/0fbfd0d02fa527a5e1888b8d5d53bb92/41406/onpredict_basic.png 37w,\\n/static/0fbfd0d02fa527a5e1888b8d5d53bb92/7481f/onpredict_basic.png 73w,\\n/static/0fbfd0d02fa527a5e1888b8d5d53bb92/fbc70/onpredict_basic.png 146w,\\n/static/0fbfd0d02fa527a5e1888b8d5d53bb92/2d1fa/onpredict_basic.png 292w","sizes":"(min-width: 146px) 146px, 100vw"},"sources":[{"srcSet":"/static/0fbfd0d02fa527a5e1888b8d5d53bb92/a9446/onpredict_basic.webp 37w,\\n/static/0fbfd0d02fa527a5e1888b8d5d53bb92/ce79f/onpredict_basic.webp 73w,\\n/static/0fbfd0d02fa527a5e1888b8d5d53bb92/27515/onpredict_basic.webp 146w,\\n/static/0fbfd0d02fa527a5e1888b8d5d53bb92/f101c/onpredict_basic.webp 292w","type":"image/webp","sizes":"(min-width: 146px) 146px, 100vw"}]},"width":146,"height":48}')},7033:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/da22a82747a78d5a188d56ab40a0db11/fcdb9/onepredict_Symbol_b.png","srcSet":"/static/da22a82747a78d5a188d56ab40a0db11/29278/onepredict_Symbol_b.png 12w,\\n/static/da22a82747a78d5a188d56ab40a0db11/2391d/onepredict_Symbol_b.png 24w,\\n/static/da22a82747a78d5a188d56ab40a0db11/fcdb9/onepredict_Symbol_b.png 48w,\\n/static/da22a82747a78d5a188d56ab40a0db11/e3fe2/onepredict_Symbol_b.png 96w","sizes":"(min-width: 48px) 48px, 100vw"},"sources":[{"srcSet":"/static/da22a82747a78d5a188d56ab40a0db11/30aa9/onepredict_Symbol_b.webp 12w,\\n/static/da22a82747a78d5a188d56ab40a0db11/4e704/onepredict_Symbol_b.webp 24w,\\n/static/da22a82747a78d5a188d56ab40a0db11/e78b1/onepredict_Symbol_b.webp 48w,\\n/static/da22a82747a78d5a188d56ab40a0db11/8ef24/onepredict_Symbol_b.webp 96w","type":"image/webp","sizes":"(min-width: 48px) 48px, 100vw"}]},"width":48,"height":48}')}}]);
//# sourceMappingURL=commons-bb9a0b4125d4a54674b4.js.map