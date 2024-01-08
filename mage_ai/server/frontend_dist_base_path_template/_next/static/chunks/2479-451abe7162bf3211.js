"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2479],{56756:function(e,n){var t,o,i;o=[],void 0===(i="function"===typeof(t=function(){var e,n,t,o,i=window,r=i.cancelRequestAnimationFrame&&i.requestAnimationFrame||setTimeout,l=i.cancelRequestAnimationFrame||clearTimeout,u=[],c=0,d=!1,a=7,s=35,f=125,v=0,p=0,m=0,h={get didTimeout(){return!1},timeRemaining:function(){var e=a-(Date.now()-p);return Math.max(0,e)}},b=g((function(){a=22,f=66,s=0}));function g(e){var n,t,o=99,i=function i(){var r=Date.now()-t;r<o?n=setTimeout(i,o-r):(n=null,e())};return function(){t=Date.now(),n||(n=setTimeout(i,o))}}function C(){d&&(o&&l(o),t&&clearTimeout(t),d=!1)}function j(){125!=f&&(a=7,f=125,s=35,d&&(C(),k())),b()}function y(){o=null,t=setTimeout(x,0)}function w(){t=null,r(y)}function k(){d||(n=f-(Date.now()-p),e=Date.now(),d=!0,s&&n<s&&(n=s),n>9?t=setTimeout(w,n):(n=0,w()))}function x(){var o,i,r,l=a>9?9:1;if(p=Date.now(),d=!1,t=null,c>2||p-n-50<e)for(i=0,r=u.length;i<r&&h.timeRemaining()>l;i++)o=u.shift(),m++,o&&o(h);u.length?k():c=0}function F(e){return v++,u.push(e),k(),v}function D(e){var n=e-1-m;u[n]&&(u[n]=null)}if(i.requestIdleCallback&&i.cancelIdleCallback)try{i.requestIdleCallback((function(){}),{timeout:0})}catch(O){!function(e){var n,t;if(i.requestIdleCallback=function(n,t){return t&&"number"==typeof t.timeout?e(n,t.timeout):e(n)},i.IdleCallbackDeadline&&(n=IdleCallbackDeadline.prototype)){if(!(t=Object.getOwnPropertyDescriptor(n,"timeRemaining"))||!t.configurable||!t.get)return;Object.defineProperty(n,"timeRemaining",{value:function(){return t.get.call(this)},enumerable:!0,configurable:!0})}}(i.requestIdleCallback)}else i.requestIdleCallback=F,i.cancelIdleCallback=D,i.document&&document.addEventListener&&(i.addEventListener("scroll",j,!0),i.addEventListener("resize",j),document.addEventListener("focus",j,!0),document.addEventListener("mouseover",j,!0),["click","keypress","touchstart","mousedown"].forEach((function(e){document.addEventListener(e,j,{capture:!0,passive:!0})})),i.MutationObserver&&new MutationObserver(j).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}));return{request:F,cancel:D}})?t.apply(n,o):t)||(e.exports=i)},79899:function(e,n,t){t.d(n,{Z:function(){return v}});var o=t(82684),i=t(39867),r=t(89706),l=t(44425),u=t(32929),c=t(72473),d=t(71953),a=t(55283),s=t(53005),f=t(81728);function v(e){var n=e.allowEmptyFolders,t=e.children,v=e.disabled,p=e.file,m=e.filePath,h=e.isInPipelinesFolder,b=e.isFileDisabled,g=e.isNotFolder,C=e.level,j=e.name,y=e.theme,w=e.useRootFolder,k=e.uuid,x=(0,o.useMemo)((function(){return m||(w?(0,s.a9)(p):(0,s.jN)(p))}),[p,m,w,,]),F=(0,o.useMemo)((function(){return!!t&&!g}),[t,g]),D=(0,o.useMemo)((function(){var e,n,t;return null===k||void 0===k||null===(e=k.split)||void 0===e||null===(n=e.call(k,"/"))||void 0===n||null===(t=n.find)||void 0===t?void 0:t.call(n,(function(e){return(0,f.C5)(e)in l.GJ}))}),[k]),O=(0,o.useMemo)((function(){return D?(0,f.C5)(D):null}),[D]),Z=(0,o.useMemo)((function(){return F&&D&&D===j}),[D,F,j]),E=(0,o.useMemo)((function(){return D&&!F&&(0,s.y)(j)&&(0,s.o$)(j,O)}),[O,D,F,j]),P=(0,o.useMemo)((function(){return D?(0,a.qn)(O,{theme:y}).accent:null}),[O,D]),I=j===r.oy,L=(0,o.useMemo)((function(){return b?b(x,t):v||h&&"__init__.py"===j||D&&"__init__.py"===j}),[t,v,,x,D,b,h,j]),_=(0,o.useMemo)((function(){var e,t=c.FileFill;if(!F&&g)t=c.Ellipsis;else if(I)t=c.PipelineV3;else if(j===r.PF)t=c.Charts;else if(F)t=Z&&(null===u.iK||void 0===u.iK?void 0:u.iK[O])||c.FolderV2Filled;else if(!j&&n)t=c.Ellipsis;else if(h&&!F&&"metadata.yaml"===j)t=c.Pipeline;else if(null!==j&&void 0!==j&&j.includes(".log"))t=c.Logs;else if(!F){var o=(0,s.mD)(j);o&&o in d.T&&(t=d.T[o],e=d.k[o])}return{Icon:t,iconColor:e}}),[n,O,Z,F,h,g,C,j]),R=_.Icon,T=_.iconColor;return{BlockIcon:(0,o.useMemo)((function(){var e=i.Z;return l.tf.CHART===O&&(e=c.Charts),e}),[O]),Icon:R,blockType:O,color:P,disabled:L,filePathToUse:x,folderNameForBlock:D,iconColor:T,isBlockFile:E,isFirstParentFolderForBlock:Z,isFolder:F,isPipelineFolder:I}}},71953:function(e,n,t){t.d(n,{T:function(){return c},k:function(){return d}});var o,i,r=t(82394),l=t(72473),u=t(89706),c=(o={},(0,r.Z)(o,u.Lu.CSV,l.Table),(0,r.Z)(o,u.Lu.JSON,l.Code),(0,r.Z)(o,u.Lu.MD,l.File),(0,r.Z)(o,u.Lu.PY,l.Lightning),(0,r.Z)(o,u.Lu.R,l.Insights),(0,r.Z)(o,u.Lu.SH,l.Terminal),(0,r.Z)(o,u.Lu.SQL,l.Database),(0,r.Z)(o,u.Lu.TXT,l.Alphabet),(0,r.Z)(o,u.Lu.YAML,l.List),(0,r.Z)(o,u.Lu.YML,l.List),o),d=(i={},(0,r.Z)(i,u.Lu.CSV,"#C7CDDA"),(0,r.Z)(i,u.Lu.JSON,"#6B50D7"),(0,r.Z)(i,u.Lu.MD,"#9B6CA7"),(0,r.Z)(i,u.Lu.PY,"#FFE873"),(0,r.Z)(i,u.Lu.R,"#FF144D"),(0,r.Z)(i,u.Lu.SH,"#CBFE00"),(0,r.Z)(i,u.Lu.SQL,"#00758F"),(0,r.Z)(i,u.Lu.TXT,"#C7CDDA"),(0,r.Z)(i,u.Lu.YAML,"#95ECE2"),(0,r.Z)(i,u.Lu.YML,"#95ECE2"),i)},46978:function(e,n,t){t.d(n,{Cl:function(){return u},Nk:function(){return c},ZG:function(){return l}});var o=t(25976),i=t(44897),r=t(70515),l=1.5*r.iI,u=1*l+r.iI/2,c=o.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(e){return"\n      background-color: ".concat((e.theme.interactive||i.Z.interactive).hoverBackground,";\n    ")}))},52479:function(e,n,t){t.d(n,{Z:function(){return Oe}});var o=t(82394),i=t(75582),r=t(82684),l=t(25976),u=t(69864),c=t(85202),d=t(44425),a=t(71180),s=t(50724),f=t(55485),v=t(70374),p=t(38276),m=t(30160),h=t(44897),b=t(42631),g=t(70515),C=l.default.div.withConfig({displayName:"indexstyle__FileHeaderMenuContainerStyle",componentId:"sc-1lru5j9-0"})(["height:100%;width:100%;position:relative;padding:","px;",""],g.iI/2,(function(e){return"\n    border-bottom: ".concat(b.YF,"px ").concat(b.M8," ").concat((e.theme||h.Z).borders.medium,";\n  ")})),j=t(72473),y=t(26419),w=t(28598);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var F=function(e){var n=e.setShowHiddenFiles,t=e.showHiddenFiles,o=(0,r.useState)(null),i=o[0],l=o[1],u=(0,r.useRef)(null),c=(0,r.useMemo)((function(){return[{label:function(){return(0,w.jsxs)(f.ZP,{alignItems:"center",children:[t?(0,w.jsx)(j.PreviewOpen,{success:!0}):(0,w.jsx)(j.PreviewHidden,{muted:!0}),(0,w.jsx)(p.Z,{mr:1}),(0,w.jsx)(m.ZP,{noWrapping:!0,children:"Hidden files"})]})},onClick:function(){n((function(e){return!e}))},uuid:"Hidden files"}]}),[n,t]);return(0,w.jsx)(C,{children:(0,w.jsx)(s.Z,{onClickOutside:function(){return l(null)},open:!0,style:{width:"fit-content"},children:(0,w.jsx)(f.ZP,{alignItems:"center",fullHeight:!0,children:(0,w.jsxs)("div",{style:{position:"relative"},children:[(0,w.jsx)(a.ZP,x(x({},y.a),{},{noBackground:0!==i,onClick:function(){return l((function(e){return 0===e?null:0}))},onMouseEnter:function(){return l((function(e){return null!==e?0:null}))},ref:u,children:(0,w.jsx)(m.ZP,{default:!0,children:"View"})})),(0,w.jsx)(v.Z,{alternateBackground:!0,items:c,onClickCallback:function(){return l(null)},open:0===i,parentRef:u,uuid:"FileBrowser/FileHeaderMenu/view"})]})})})})},D=(t(56756),t(78050)),O=t(89706),Z=t(97618),E=t(79899),P=t(68804),I=t(46978),L=t(85385),_=t(53808),R=t(53005),T=t(86735);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N="default_repo",A=l.default.div.withConfig({displayName:"Folder__ChildrenStyle",componentId:"sc-1gsjts-0"})([".expanded_children{display:block;}.collapsed_children{display:none;}"]),B=l.default.div.withConfig({displayName:"Folder__ChevronStyle",componentId:"sc-1gsjts-1"})([".expanded{.down{display:block;position:relative;}.right{display:none;position:absolute;}}.collapsed{.down{display:none;position:absolute;}.right{display:block;position:relative;}}"]);function U(e){var n=e.children,t=e.idleTimeout,o=(0,r.useState)(!1),i=o[0],l=o[1];return(0,r.useEffect)((function(){i&&l(!1);var e=requestIdleCallback((function(){return l(!0)}),{timeout:t});return function(){return cancelIdleCallback(e)}}),[t]),i?n:null}var H=function e(n){var t=n.allowEmptyFolders,i=n.allowSelectingFolders,l=n.containerRef,u=n.disableContextMenu,c=n.file,d=n.isFileDisabled,a=n.isInPipelinesFolder,s=n.isNotFolder,f=n.level,v=n.onClickFile,p=n.onClickFolder,h=n.onSelectBlockFile,b=n.onlyShowChildren,C=n.openFile,y=n.openSidekickView,k=n.reloadCount,x=n.renderAfterContent,F=n.selectFile,S=n.setContextItem,H=n.setCoordinates,q=n.setDraggingFile,Y=n.setSelectedFile,Q=n.theme,V=n.timeout,z=n.useRootFolder,G=n.uuidCombined,W=n.uuidContainer,$=(0,r.useRef)(null),X=c.children,J=c.disabled,K=c.name,ee=c.parent,ne=(0,r.useMemo)((function(){return X?(0,T.YC)(X,(function(e){return e.children?0:1})):X}),[X]),te=(0,r.useMemo)((function(){return[].concat(G||[]).concat(K||N)}),[K,G,,]),oe=(0,r.useMemo)((function(){return null===te||void 0===te?void 0:te.join("/")}),[te]),ie=(0,_.U2)(_.lQ,{}),re=(0,r.useRef)(null),le=(0,r.useRef)(null),ue=(0,r.useRef)(oe in ie?ie[oe]:0===f),ce=(0,r.useRef)(0),de=null===ue||void 0===ue?void 0:ue.current;K||t||(c.name=N);var ae=(0,E.Z)({allowEmptyFolders:t,children:ne,disabled:J,file:c,isInPipelinesFolder:a,isFileDisabled:d,isNotFolder:s,level:f,name:K,theme:Q,useRootFolder:z,uuid:oe}),se=ae.BlockIcon,fe=ae.Icon,ve=(ae.blockType,ae.color),pe=ae.disabled,me=ae.filePathToUse,he=ae.folderNameForBlock,be=ae.iconColor,ge=ae.isBlockFile,Ce=ae.isFirstParentFolderForBlock,je=ae.isFolder,ye=ae.isPipelineFolder,we=(0,r.useCallback)((function(n){return null===n||void 0===n?void 0:n.map((function(n){return(0,w.jsx)(e,{allowEmptyFolders:t,allowSelectingFolders:i,containerRef:l,disableContextMenu:u,file:M(M({},n),{},{parent:c}),isFileDisabled:d,isNotFolder:null===n||void 0===n?void 0:n.isNotFolder,isInPipelinesFolder:a||ye,level:b?f:f+1,onClickFile:v,onClickFolder:p,onSelectBlockFile:h,openFile:C,openSidekickView:y,reloadCount:k,renderAfterContent:x,selectFile:F,setContextItem:S,setCoordinates:H,setDraggingFile:q,setSelectedFile:Y,theme:Q,timeout:V,useRootFolder:z,uuidCombined:te,uuidContainer:W},"".concat(oe,"/").concat((null===n||void 0===n?void 0:n.name)||N,"-").concat(k))}))}),[t,i,ne,u,c,d,a,ye,f,v,p,h,b,C,y,k,x,F,S,H,q,Y,z,oe,te,W]),ke=(0,r.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(ue.current="undefined"===typeof e||null===e?!ue.current:e,null!==re&&void 0!==re&&re.current&&(re.current.className=null!==ue&&void 0!==ue&&ue.current?"expanded_children":"collapsed_children",le.current.className=null!==ue&&void 0!==ue&&ue.current?"expanded":"collapsed"),0===(null===ce||void 0===ce?void 0:ce.current)){var t;if(null===$||void 0===$||!$.current){var i,r=document.getElementById(null===re||void 0===re||null===(i=re.current)||void 0===i?void 0:i.id);$.current=(0,D.createRoot)(r)}null===$||void 0===$||null===(t=$.current)||void 0===t||t.render((null===ne||void 0===ne?void 0:ne.length)>=1?(0,w.jsx)(U,{idleTimeout:n||1,children:we(ne)}):je?we(xe):(0,w.jsx)("div",{}))}(0,_.rQ)(_.lQ,(0,o.Z)({},oe,ue.current)),ce.current+=1}),[ne,je,oe]);(0,r.useEffect)((function(){var e=function(e){var n=e.detail,t=n.expand,i=(n.file,n.folder);je&&i&&null!==oe&&void 0!==oe&&oe.startsWith(null===i||void 0===i?void 0:i.uuid)&&((0,_.rQ)(_.lQ,(0,o.Z)({},oe,t)),ke(t,100*f))};return window.addEventListener(P.op,e),function(){window.removeEventListener(P.op,e)}}),[je,f,ke,oe]);var xe=(0,r.useMemo)((function(){return[{disabled:!0,name:"Empty",parent:c,isNotFolder:!0,uuid:te}]}),[c,te]),Fe=(0,r.useMemo)((function(){var e=[];return(0,T.w6)(f).forEach((function(n,t){var o,i=I.Cl-1;e.push((0,w.jsx)("div",{style:{borderLeft:"1px solid ".concat(null===Q||void 0===Q||null===(o=Q.content)||void 0===o?void 0:o.disabled),height:22,marginLeft:i/2-2,paddingLeft:i/2+2}},"line-".concat(oe,"-").concat(t)))})),e}),[f,Q,oe]);return(0,r.useEffect)((function(){setTimeout((function(){var e;if(de&&0===(null===ce||void 0===ce?void 0:ce.current)&&null!==re&&void 0!==re&&null!==(e=re.current)&&void 0!==e&&e.id){ce.current=1;try{var n;if(null===$||void 0===$||!$.current){var t,o=document.getElementById(null===re||void 0===re||null===(t=re.current)||void 0===t?void 0:t.id);$.current=(0,D.createRoot)(o)}null===$||void 0===$||null===(n=$.current)||void 0===n||n.render((null===ne||void 0===ne?void 0:ne.length)>=1?(0,w.jsx)(U,{idleTimeout:100*f,children:we(ne)}):null!==ne&&void 0!==ne&&ne.length?null:je?we(xe):(0,w.jsx)("div",{}))}catch(i){console.log(i)}}}),1)}),[]),(0,w.jsxs)(w.Fragment,{children:[!b&&(0,w.jsxs)("div",{className:"row",onClick:function(e){if(e.preventDefault(),!pe){if((null===ee||void 0===ee?void 0:ee.name)===O.PF){null===y||void 0===y||y(L.cH.CHARTS);var n=(0,R.lr)(c);n&&(null===h||void 0===h||h(n.uuid,n.type,(0,R.jN)(c)))}var t=(0,R.V3)(c);if(ne)i?F(me):ke(),null===p||void 0===p||p(me);else if(v)v(me);else if(t)null===h||void 0===h||h(t.uuid,t.type,(0,R.jN)(c),{file:c,path:me});else if(K.match(O.xF))null===C||void 0===C||C(me);else{var o=(0,R.lr)(c);o&&(null===h||void 0===h||h(o.uuid,o.type,(0,R.jN)(c)))}}},onContextMenu:function(e){var n;clearTimeout(V.current),null!==l&&void 0!==l&&null!==(n=l.current)&&void 0!==n&&n.contains(e.target)&&!u&&(e.preventDefault(),H({x:e.pageX,y:e.pageY}),q(null),Y(M(M({},c),{},{uuid:oe})))},onMouseDown:function(e){var n,t=c?(0,R.lr)(c,null,!0):null;null===l||void 0===l||null===(n=l.current)||void 0===n||!n.contains(e.target)||!t||(null===ne||void 0===ne?void 0:ne.length)>=1||u||pe||a||(e.preventDefault(),clearTimeout(V.current),V.current=setTimeout((function(){H({x:e.pageX,y:e.pageY}),q(c),Y(null)}),300))},style:{alignItems:"center",cursor:"default",display:"flex",minWidth:f*I.Cl+c.name.length*g.Fo+2*g.iI,paddingRight:g.iI/4},children:[(0,w.jsxs)(Z.Z,{alignItems:"center",flex:1,children:[Fe,(0,w.jsxs)(B,{children:[ne&&(0,w.jsxs)("div",{className:de?"expanded":"collapsed",ref:le,children:[(0,w.jsx)("div",{className:"down",children:(0,w.jsx)(j.ChevronDown,{muted:!0,size:I.ZG})}),(0,w.jsx)("div",{className:"right",children:(0,w.jsx)(j.ChevronRight,{muted:!0,size:I.ZG})})]}),!ne&&(0,w.jsx)("div",{style:{width:I.ZG}})]}),(0,w.jsx)("div",{style:{marginLeft:g.iI/2,marginRight:g.iI/2},children:he&&!je&&ge?(0,w.jsx)(se,{color:ve,size:he&&!je?.7*I.ZG:I.ZG,square:!0}):(0,w.jsx)(fe,{fill:be||(Ce?ve:null),disabled:pe,size:I.ZG})}),(0,w.jsx)(m.ZP,{default:!pe,disabled:pe,monospace:!0,small:!0,children:K})]}),x&&x(c)]}),(0,w.jsx)(A,{children:(0,w.jsx)("div",{className:de?"expanded_children":"collapsed_children",id:"".concat(W,"-").concat(oe),ref:re})})]})},q=t(65186),Y=t(93369),Q=t(65956),V=t(17488),z=t(35686),G=t(42122),W=t(72619);var $=function(e){var n=e.fetchFileTree,t=e.file,o=e.moveFile,l=e.onCancel,c=e.onCreateFile,d=e.selectedFolder,s=e.showError,v=(0,r.useRef)(null),m=(0,G.Qr)(t)?null:t,h=(0,r.useState)(m?(0,R.jN)(m,null,!0):""),b=h[0],C=h[1],j=(0,r.useState)(m?null===m||void 0===m?void 0:m.name:""),y=j[0],k=j[1];(0,r.useEffect)((function(){var e;null===v||void 0===v||null===(e=v.current)||void 0===e||e.focus()}),[]),(0,r.useEffect)((function(){d&&C((0,R.eV)(null===d||void 0===d?void 0:d.uuid))}),[d]);var x=(0,u.Db)(z.ZP.files.useCreate(),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(e){var t=e.file;null===n||void 0===n||n(),l(),null===c||void 0===c||c(t)},onErrorCallback:function(e,n){return s({errors:n,response:e})}})}}),F=(0,i.Z)(x,1)[0],D=(0,u.Db)(z.ZP.files.useUpdate(m&&encodeURIComponent((0,R.jN)(m))),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(){null===n||void 0===n||n(),l()},onErrorCallback:function(e,n){return s({errors:n,response:e})}})}}),O=(0,i.Z)(D,1)[0];return(0,w.jsxs)(Q.Z,{footer:(0,w.jsxs)(f.ZP,{children:[(0,w.jsxs)(Y.ZP,{bold:!0,disabled:!y,inline:!0,onClick:function(){return m?O({file:{dir_path:b,name:y},file_json_only:!0}):F({file:{dir_path:b,name:y,overwrite:!1},file_json_only:!0})},primary:!0,tabIndex:0,uuid:"NewFile/create_file",children:[m?o?"Move":"Rename":"Create"," file"]}),(0,w.jsx)(p.Z,{ml:1,children:(0,w.jsx)(a.ZP,{onClick:function(){return l()},tabIndex:0,children:"Cancel"})})]}),headerTitle:m?o?"Move file":"Rename file":"New file",minWidth:50*g.iI,children:[(0,w.jsx)(V.Z,{disabled:!!m&&!o,label:"Directory",monospace:!0,onChange:function(e){return C(e.target.value)},setContentOnMount:!0,value:b}),(0,w.jsx)(p.Z,{mt:2,children:(0,w.jsx)(V.Z,{disabled:!!o,label:"Filename",monospace:!0,onChange:function(e){return k(e.target.value)},ref:v,required:!0,value:y})})]})},X=t(82359);var J=function(e){var n=e.fetchFileTree,t=e.file,o=e.moveFile,l=e.onCancel,c=e.onCreateFile,d=e.projectType,s=e.selectedFolder,v=e.setErrors,m=e.showError,h=(0,r.useRef)(null),b=(0,G.Qr)(t)?null:t,C=(0,r.useState)(b?(0,R.jN)(b,null,!0):""),j=C[0],y=C[1],k=(0,r.useState)(b?null===b||void 0===b?void 0:b.name:""),x=k[0],F=k[1];(0,r.useEffect)((function(){var e;null===h||void 0===h||null===(e=h.current)||void 0===e||e.focus()}),[]),(0,r.useEffect)((function(){s&&y((0,R.eV)(null===s||void 0===s?void 0:s.uuid))}),[s]);var D=(0,u.Db)(z.ZP.folders.useCreate(),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(e){var t=e.file;null===n||void 0===n||n(),l(),null===c||void 0===c||c(t)},onErrorCallback:function(e,n){return v?v({errors:n,response:e}):m({errors:n,response:e})}})}}),O=(0,i.Z)(D,1)[0],Z=(0,u.Db)(z.ZP.folders.useUpdate(b&&encodeURIComponent((0,R.jN)(b))),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(){null===n||void 0===n||n(),l()},onErrorCallback:function(e,n){return v?v({errors:n,response:e}):m({errors:n,response:e})}})}}),E=(0,i.Z)(Z,1)[0],P=(0,u.Db)(z.ZP.projects.useCreate(),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(){null===n||void 0===n||n(),l()},onErrorCallback:function(e,n){return v?v({errors:n,response:e}):m({errors:n,response:e})}})}}),I=(0,i.Z)(P,2),L=I[0],_=I[1].isLoading;return(0,w.jsxs)(Q.Z,{footer:(0,w.jsxs)(f.ZP,{children:[(0,w.jsxs)(Y.ZP,{bold:!0,disabled:!x,inline:!0,loading:_,onClick:function(){return b?E({folder:{name:x,path:j}}):d?L({project:{repo_path:j,type:d,uuid:x}}):O({folder:{name:x,overwrite:!1,path:j}})},primary:!0,tabIndex:0,uuid:"NewFolder/create_folder",children:[d&&"Create project",!d&&(0,w.jsxs)(w.Fragment,{children:[b?o?"Move":"Rename":"Create"," folder"]})]}),(0,w.jsx)(p.Z,{ml:1,children:(0,w.jsx)(a.ZP,{onClick:function(){return l()},tabIndex:0,children:"Cancel"})})]}),headerTitle:b?o?"Move folder":"Rename folder":d?X.k.STANDALONE===d?"New Mage project":X.k.DBT===d?"New dbt project":"New project":"New folder",minWidth:50*g.iI,children:[(0,w.jsx)(V.Z,{disabled:!!b&&!o,label:d?"Project directory":"Directory",monospace:!0,onChange:function(e){return y(e.target.value)},setContentOnMount:!0,value:j}),(0,w.jsx)(p.Z,{mt:2,children:(0,w.jsx)(V.Z,{disabled:!!o,label:d?"Project name":"Folder name",monospace:!0,onChange:function(e){return F(e.target.value)},ref:h,required:!0,value:x})})]})},K=t(57653),ee=t(89515),ne=t(17717),te=t(77011);function oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?oe(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var re=l.default.div.withConfig({displayName:"MultiFileInput__DropzoneStyle",componentId:"sc-1l6yd2y-0"})(["&:hover{cursor:pointer;}"]);var le=function(e){var n=e.children,t=e.inputOnChange,o=e.inputProps,i=e.onDragActiveChange,l=e.setFiles,u=(0,r.useCallback)((function(e){l(e)}),[l]),c=(0,te.uI)({onDrop:u}),d=c.getInputProps,a=c.getRootProps,s=c.isDragActive,f=d(),v=f.accept,p=f.autoComplete,m=f.multiple,h=f.onChange,b=f.onClick,g=f.ref,C=f.style,j=f.tabIndex,y=f.type,k=ie(ie({},o),{},{accept:v,autoComplete:p,multiple:m,onChange:function(e){null===t||void 0===t||t(e),null===o||void 0===o||o.onChange(e),h(e)},onClick:b,ref:g,style:C,tabIndex:j,type:y});return(0,r.useEffect)((function(){null===i||void 0===i||i(s)}),[s,i]),(0,w.jsxs)(re,ie(ie({},a()),{},{children:[(0,w.jsx)("input",ie(ie({},k),{},{directory:"",webkitdirectory:""})),n]}))};function ue(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function ce(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ue(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var de=function(e){var n=e.children,t=e.directoryPath,l=e.onDragActiveChange,c=e.setFileUploadProgress,d=e.setUploadedFiles,a=(0,u.Db)(z.ZP.files.useCreate({onUploadProgress:function(e,n){var t,i=n.body,r=[null===i||void 0===i?void 0:i.dir_path,null===i||void 0===i||null===(t=i.file)||void 0===t?void 0:t.name].filter((function(e){return(null===e||void 0===e?void 0:e.length)>=1})).join(ne.sep);null===c||void 0===c||c((function(n){return ce(ce({},n),{},(0,o.Z)({},r,e.loaded/e.total))}))}})),s=(0,i.Z)(a,1)[0],f=(0,r.useCallback)((function(e){e.forEach((function(e){var n=e.name,i=e.path,r=[t],l=i.split(ne.sep).filter((function(e){return e&&e!==n})).join(ne.sep);l&&r.push(l);var u=[],a=r.join(ne.sep);(null===a||void 0===a?void 0:a.length)>=1&&r.push(a),u.push(n);var f=u.join(ne.sep);s({dir_path:a,file:e,overwrite:!1}).then((function(e){var n=e.data,t=n.error,i=n.file;d((function(e){return ce(ce({},e),{},(0,o.Z)({},f,i||t))}))})),c((function(e){return ce(ce({},e),{},(0,o.Z)({},f,0))}))}))}),[s,t,c,d]);return(0,w.jsx)(le,{onDragActiveChange:l,setFiles:f,children:n})},ae=t(35185),se=t(75499),fe=(g.iI,l.default.div.withConfig({displayName:"indexstyle__DropZoneStyle",componentId:"sc-1g3zz7z-0"})(["border-radius:","px;padding:","px;max-width:","px;min-width:","px;",""],b.n_,8*g.iI,100*g.iI,55*g.iI,(function(e){return"\n    border: 1px dashed ".concat((e.theme.borders||h.Z.borders).contrast,";\n  ")}))),ve=l.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1g3zz7z-1"})(["max-width:","px;min-width:","px;"],100*g.iI,55*g.iI);var pe=function(e){var n=e.fetchFileTree,t=e.onCancel,o=e.selectedFolder,l=(0,r.useState)(!1),u=l[0],c=l[1],d=(0,r.useState)({}),s=d[0],v=d[1],h=(0,r.useState)({}),b=h[0],g=h[1],C=!(0,G.Qr)(s),j=(0,r.useMemo)((function(){var e=[];return(0,T.YC)(Object.entries(s),(function(e){var n=(0,i.Z)(e,2),t=n[0];n[1];return t})).forEach((function(n){var t=(0,i.Z)(n,2),o=t[0],r=t[1],l=b[o],u=null===l||void 0===l?void 0:l.message;e.push([(0,w.jsxs)("div",{children:[(0,w.jsx)(m.ZP,{overflowWrap:!0,preWrap:!0,children:o}),u&&(0,w.jsx)(p.Z,{mt:1,children:(0,w.jsx)(m.ZP,{danger:!0,small:!0,children:u})})]},"name-".concat(o)),(0,w.jsx)(ae.Z,{danger:!!u,progress:100*r},"progress-".concat(o))])})),(0,w.jsx)(se.Z,{columnFlex:[1,4],columns:[{uuid:"Filename"},{uuid:"Upload progress"}],rows:e,uuid:"block-runs"})}),[s,b]);return(0,w.jsxs)(Q.Z,{footer:(0,w.jsxs)(f.ZP,{fullWidth:!0,children:[(0,w.jsx)(a.ZP,{onClick:function(){return t()},children:"Close"}),C&&(0,w.jsx)(p.Z,{ml:1,children:(0,w.jsx)(a.ZP,{onClick:function(){v({}),g({})},children:"Clear files and retry"})})]}),headerTitle:"Upload files",children:[C&&(0,w.jsx)(ve,{children:j}),!C&&(0,w.jsx)(de,{directoryPath:o?(0,R.jN)(o):"",onDragActiveChange:c,setFileUploadProgress:v,setUploadedFiles:function(e){g(e),null===n||void 0===n||n()},children:(0,w.jsx)(fe,{children:(0,w.jsxs)(m.ZP,{center:!0,children:[u&&"Drop to upload",!u&&"Click or drop files and folders to upload"]})})})]})},me=t(77417),he=t(19698),be=t(31353),ge=t(68669),Ce=t(74401),je=t(44952),ye=t(89538);function we(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function ke(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?we(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):we(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var xe,Fe=20*g.iI;function De(e,n){var t=e.addNewBlock,o=(e.blocks,e.deleteWidget),a=e.disableContextMenu,s=(e.fetchAutocompleteItems,e.fetchFiles),f=e.fetchPipeline,p=e.files,h=e.onClickFile,b=e.onClickFolder,C=e.onCreateFile,y=e.onSelectBlockFile,k=e.openFile,x=(e.openSidekickView,e.pipeline),D=e.renderAfterContent,O=e.showError,Z=e.setSelectedBlock,E=e.setShowHiddenFiles,L=e.showHiddenFiles,_=e.showHiddenFilesSetting,S=e.uuid,M=(e.widgets,(0,r.useRef)(null)),N=((0,r.useRef)(null),(0,r.useContext)(l.ThemeContext)),A=(0,r.useState)(null),B=A[0],U=A[1],Y=(0,r.useState)(null),Q=Y[0],V=Y[1],G=(0,r.useState)(null),ne=G[0],te=G[1],oe=(0,r.useState)(0),ie=oe[0],re=oe[1],le=(0,r.useState)(null);le[0],le[1];(0,r.useEffect)((function(){re((function(e){return e+1}))}),[p]);var ue=(0,r.useMemo)((function(){return ne&&"undefined"!==typeof(null===ne||void 0===ne?void 0:ne.children)&&ne}),[ne]),ce=(0,me.Z)(),de=ce.featureEnabled,ae=ce.featureUUIDs,se=ce.project,fe=(0,he.Z)().status,ve=(0,u.Db)((function(e){return z.ZP.downloads.files.useCreate(e)()}),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(){var n=e.data.download.token;(0,je.K)(n)},onErrorCallback:function(e,n){return O({errors:n,response:e})}})}}),we=(0,i.Z)(ve,1)[0],xe=(0,u.Db)((function(e){return z.ZP.files.useDelete(e)()}),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(){null===s||void 0===s||s()},onErrorCallback:function(e,n){return O({errors:n,response:e})}})}}),De=(0,i.Z)(xe,1)[0],Oe=(0,u.Db)((function(e){return z.ZP.folders.useDelete(e)()}),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(){null===s||void 0===s||s()},onErrorCallback:function(e,n){return O({errors:n,response:e})}})}}),Ze=(0,i.Z)(Oe,1)[0],Ee=(0,u.Db)((function(e){var n=e.block,t=(n.language,n.type,n.uuid),o=e.file,i=e.force,r=void 0!==i&&i;return z.ZP.blocks.useDelete(encodeURIComponent(t),{file_path:o?encodeURIComponent((0,Ce.a)(o)):null,force:r})()}),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(){null===s||void 0===s||s()},onErrorCallback:function(e,n){var t=e.error,o=t.exception;if(!t.message.includes("raise HasDownstreamDependencies"))return O({errors:n,response:e});_e({block:Be,file:ne,exception:o})}})}}),Pe=(0,i.Z)(Ee,1)[0],Ie=(0,ye.dd)((function(e){var n=e.block,t=e.file;return(0,w.jsx)(ee.Z,{centerOnScreen:!0,danger:!0,onCancel:Re,onClick:function(){return Pe({block:n,file:t,force:!0}).then((function(){return Re()}))},subtitle:"Deleting this block file is dangerous. This block may have dependencies in active pipelines. Press confirm to delete this block anyway and remove it as a dependency from downstream blocks.",title:"Delete ".concat(n.uuid," anyway?"),width:34*g.iI})})),Le=(0,i.Z)(Ie,2),_e=Le[0],Re=Le[1],Te=(0,T.sE)(null===x||void 0===x?void 0:x.blocks,(function(e){var n=e.type;return d.tf.DATA_EXPORTER===n})),Se=(0,u.Db)(z.ZP.blocks.pipelines.useUpdate(encodeURIComponent(null===x||void 0===x?void 0:x.uuid),encodeURIComponent(null===Te||void 0===Te?void 0:Te.uuid)),{onSuccess:function(e){return(0,W.wD)(e,{callback:function(){null===f||void 0===f||f()},onErrorCallback:function(e,n){return O({errors:n,response:e})}})}}),Me=(0,i.Z)(Se,1)[0],Ne=(0,r.useCallback)((function(){return te(null)}),[te]);(0,r.useEffect)((function(){var e,o,i,r=function(e){if(clearTimeout(M.current),V(null),Q&&x&&t){var o,i,r=(null===n||void 0===n||null===(o=n.current)||void 0===o||null===(i=o.getBoundingClientRect)||void 0===i?void 0:i.call(o))||{},l=r.width,u=r.x;if(e.pageX>u+l){var c=(null===x||void 0===x?void 0:x.type)===K.qL.INTEGRATION,d=(0,ge.TU)(ke(ke({},Q),{},{path:(0,Ce.a)(Q)}),fe.repo_path,x);null===t||void 0===t||t(ke(ke({},d),{},{require_unique_name:!1}),(function(e){c&&Te&&Me({block:ke(ke({},Te),{},{upstream_blocks:[e.uuid]})}),null===Z||void 0===Z||Z(e)}),{disableFetchingFiles:!0})}}},l=function(e){Q&&U({x:e.pageX,y:e.pageY})};return null===(e=document)||void 0===e||e.addEventListener("click",Ne),null===(o=document)||void 0===o||o.addEventListener("mousemove",l),null===(i=document)||void 0===i||i.addEventListener("mouseup",r),function(){var e,n,t;null===(e=document)||void 0===e||e.removeEventListener("click",Ne),null===(n=document)||void 0===n||n.removeEventListener("mousemove",l),null===(t=document)||void 0===t||t.removeEventListener("mouseup",r)}}),[t,Te,Q,Ne,x,n,Z,fe,M,Me]);var Ae=(0,r.useMemo)((function(){return null===p||void 0===p?void 0:p.map((function(e){return(0,w.jsx)(H,{containerRef:n,disableContextMenu:a,file:e,level:0,onClickFile:h,onClickFolder:b,onSelectBlockFile:y,openFile:k,reloadCount:ie,renderAfterContent:D,setCoordinates:U,setDraggingFile:V,setSelectedFile:te,theme:N,timeout:M,uuidContainer:S},"".concat(e.name,"-").concat(ie))}))}),[a,p,h,b,k,y,ie,D,S]),Be=(0,r.useMemo)((function(){return ne&&(0,R.lr)(ne)}),[ne]),Ue=(0,r.useMemo)((function(){return Q&&(0,R.lr)(Q)}),[Q]),He=(0,ye.dd)((function(){return(0,w.jsx)(pe,{fetchFileTree:s,onCancel:Qe,selectedFolder:ue})}),{},[s,ue],{background:!0,uuid:"upload_files"}),qe=(0,i.Z)(He,2),Ye=qe[0],Qe=qe[1],Ve=(0,ye.dd)((function(e){return(0,w.jsx)($,{fetchFileTree:s,file:null===e||void 0===e?void 0:e.file,moveFile:null===e||void 0===e?void 0:e.moveFile,onCancel:We,onCreateFile:C,selectedFolder:ue,showError:O})}),{},[s,C,ue,O],{background:!0,disableClickOutside:!0,uuid:"new_file"}),ze=(0,i.Z)(Ve,2),Ge=ze[0],We=ze[1],$e=(0,ye.dd)((function(e){return(0,w.jsx)(J,{fetchFileTree:s,file:null===e||void 0===e?void 0:e.file,moveFile:null===e||void 0===e?void 0:e.moveFile,onCancel:Ke,projectType:null===e||void 0===e?void 0:e.projectType,selectedFolder:ue,showError:O})}),{},[s,ue,O,O],{background:!0,disableClickOutside:!0,uuid:"new_folder"}),Xe=(0,i.Z)($e,2),Je=Xe[0],Ke=Xe[1],en=(0,r.useMemo)((function(){var e;if(!Be&&!ne&&!ue)return(0,w.jsx)("div",{});var t=(null===n||void 0===n||null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect())||{},i=t.x,r=t.width,l=B||{},u=l.x,a=void 0===u?0:u,s=l.y,f=void 0===s?0:s,p=a+g.iI;a+Fe>=i+r&&(p=i+r-(Fe+g.iI)),p<0&&(p=0);var m=[];ue?(m.push.apply(m,[{label:function(){return"New folder"},onClick:function(){Je()},uuid:"new_folder"},{label:function(){return"Rename folder"},onClick:function(){Je({file:ue})},uuid:"rename_folder"},{label:function(){return"Move folder"},onClick:function(){Je({file:ue,moveFile:!0})},uuid:"Move_folder"},{label:function(){return"Delete folder"},onClick:function(){var e=(0,Ce.a)(ue);window.confirm("Are you sure you want to delete folder ".concat(e," and all its subfolders and files?"))&&Ze(encodeURIComponent(e))},uuid:"Delete_folder"},{label:function(){return"New file"},onClick:function(){Ge({file:{}})},uuid:"new_file"},{label:function(){return"Upload files"},onClick:function(){Ye()},uuid:"upload_files"},{label:function(){return"Expand all subfolders"},onClick:function(){var e=new CustomEvent(P.op,{detail:{expand:!0,file:ne,folder:ue}});window.dispatchEvent(e)},uuid:"Expand all subfolders"},{label:function(){return"Collapse all subfolders"},onClick:function(){var e=new CustomEvent(P.op,{detail:{expand:!1,file:ne,folder:ue}});window.dispatchEvent(e)},uuid:"Collapse all subfolders"}]),null!==de&&void 0!==de&&de(null===ae||void 0===ae?void 0:ae.PROJECT_PLATFORM)&&m.push({beforeIcon:(0,w.jsx)(q.Z,{width:1.5*g.iI}),onClick:function(){Je({projectType:X.k.STANDALONE})},uuid:"New Mage project"}),null!==de&&void 0!==de&&de(null===ae||void 0===ae?void 0:ae.DBT_V2)&&m.push({beforeIcon:(0,w.jsx)(j.DBT,{}),onClick:function(){Je({projectType:X.k.DBT})},uuid:"New dbt project"})):ne&&(m.push.apply(m,[{label:function(){return"Rename file"},onClick:function(){Ge({file:ne})},uuid:"rename_file"},{label:function(){return"Move file"},onClick:function(){Ge({file:ne,moveFile:!0})},uuid:"move_file"},{label:function(){return"Download file"},onClick:function(){var e=(0,Ce.a)(ne);we(encodeURIComponent(e))},uuid:"download_file"}]),Be?m.push({label:function(){return"Delete file"},onClick:function(){if(Be.type===d.tf.CHART)window.confirm("Are you sure you want to delete ".concat(Be.uuid,"?"))&&o(Be);else{var e=(0,Ce.a)(ne);window.confirm("Are you sure you want to delete ".concat(e,"?"))&&De(encodeURIComponent(e))}},uuid:"delete_block_file"}):m.push({label:function(){return"Delete file"},onClick:function(){var e=(0,Ce.a)(ne);window.confirm("Are you sure you want to delete file ".concat(e,"?"))&&De(encodeURIComponent(e))},uuid:"delete_file"}));var h=f+g.iI/2,b=36*m.length;return f+b>=window.innerHeight&&(h=f-b),(0,c.createPortal)((0,w.jsx)("div",{style:{left:p,position:"fixed",top:h,zIndex:be.bf+100},children:(0,w.jsx)(v.Z,{items:m,open:!0,parentRef:void 0,uuid:"FileBrowser/ContextMenu",width:Fe})}),document.body)}),[B,Pe,De,Ze,o,we,de,ae,se,n,Ye,Ge,Je,Be,ne,ue]);return(0,w.jsxs)(I.Nk,{ref:n,children:[_&&E&&"undefined"!==typeof L&&(0,w.jsx)(F,{setShowHiddenFiles:E,showHiddenFiles:L}),Ae,(Be||ne||ue)&&en,Ue&&(0,w.jsx)("div",{style:{left:(null===B||void 0===B?void 0:B.x)-g.iI,position:"fixed",top:(null===B||void 0===B?void 0:B.y)-g.iI,zIndex:be.bf+100},children:(0,w.jsx)(m.ZP,{cursor:"grabbing",monospace:!0,children:null===Ue||void 0===Ue?void 0:Ue.uuid})})]})}!function(e){e.BLOCK_FILE="block_file",e.DISABLED="disabled",e.FILE="file",e.FOLDER="folder",e.PIPELINE="pipeline"}(xe||(xe={}));var Oe=r.forwardRef(De)},53005:function(e,n,t){t.d(n,{IO:function(){return h},V3:function(){return m},a9:function(){return c},eV:function(){return d},jN:function(){return a},lr:function(){return p},mD:function(){return s},o$:function(){return v},u$:function(){return b},y:function(){return f}});var o=t(17717),i=t(44425),r=t(89706),l=t(81728),u=t(68669);function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=n||(t?null:null===e||void 0===e?void 0:e.name);if(null!==e&&void 0!==e&&e.parent){var r=[e.parent.name];return(null===i||void 0===i?void 0:i.length)>=1&&r.push(i),c(e.parent,r.join(o.sep))}return i}function d(e){return null===e||void 0===e?void 0:e.split(o.sep).slice(1).join(o.sep)}function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=c(e,n,t);return d(o)}function s(e){var n=null===e||void 0===e?void 0:e.match(r.d2);return(null===n||void 0===n?void 0:n.length)>=1?n[0].replace(".",""):null}function f(e){var n=["\\.".concat(r.Lu.PY),"\\.".concat(r.Lu.R),"\\.".concat(r.Lu.SQL),"\\.".concat(r.Lu.YAML),"\\.".concat(r.Lu.YML)].join("|"),t=new RegExp("".concat(n,"$")),o=e.match(t);return(null===o||void 0===o?void 0:o.length)>=1?o[0].replace(".",""):null}function v(e,n){var t=f(e);return!["__init__.py"].includes(e)&&(i.tf.DBT!==n||![r.Lu.YAML,r.Lu.YML].includes(t))}function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=c(e,n).split(o.sep);if(!l)return null;var d=(0,u.ck)(l);if(!l)return null;var a="";a=l.length>=3?l.slice(2,l.length).join(o.sep):l[l.length-1];var s=t?i.Q3:i.$W;if(s.concat(i.tf.DBT).includes(d)&&f(a)){var v=a.lastIndexOf("."),p=a.slice(v+1);return{language:r.nB[p],type:d,uuid:a.slice(0,v)}}}function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=c(e,n).split(o.sep);if(t[1]){var u=(0,l.C5)(t[n?0:1]);t[1]===i.tf.DBT&&(u=i.tf.DBT);var d=t[t.length-1],a=new RegExp(".".concat(r.Lu.YAML,"$")),s=new RegExp(".".concat(r.Lu.R,"$")),f=new RegExp(".".concat(r.Lu.SQL,"$")),v=new RegExp(".".concat(r.Lu.MD,"$"));if(d.match(a)&&i.VZ.includes(u))return{type:u,uuid:d.replace(a,"")};if(d.match(s)&&i.J8.includes(u))return{type:u,uuid:d.replace(s,"")};if(d.match(f)&&i.HX.includes(u)){var p=d.replace(/[.]/g,"_"),m=u===i.tf.DBT?t.slice(2,-1).join("_").concat("_".concat(p)):d.replace(f,"");return{type:u,uuid:m}}return d.match(v)&&u===i.tf.MARKDOWN?{type:u,uuid:d.replace(v,"")}:void 0}}function h(e,n){var t=e.split("."),i=t[t.length-1];r.n6.includes(i)&&t.pop();var l=t.join("").split(o.sep),u=l.slice(1,l.length).join("");return n.find((function(e){return e.uuid===u}))}function b(e){var n=e||{},t=n.language,o=n.name,u=n.type;if(o&&t&&u){var c=u===i.tf.CUSTOM?u:"".concat(u,"s"),d=r.JD[t],a=(0,l.kE)(o);return"".concat(c,"/").concat(a,".").concat(d)}}},68669:function(e,n,t){t.d(n,{TU:function(){return p},ck:function(){return f},lU:function(){return v}});var o=t(21831),i=t(17717),r=t(44425),l=t(57653),u=t(89706),c=t(86735),d=t(74401),a=t(81728),s=t(42122),f=function(e){var n;if(null===e||void 0===e||e.forEach((function(e){if((null===e||void 0===e?void 0:e.length)>=1){var t=null===e||void 0===e?void 0:e.toLowerCase();(t in r.qC||(t=(0,a.C5)(t))in r.GJ)&&(n=t)}})),!n){var t=["\\.".concat(u.Lu.SQL),"\\.".concat(u.Lu.YAML),"\\.".concat(u.Lu.YML)].join("|"),o=new RegExp("".concat(t,"$"));if(e.join(i.sep).match(o))return r.tf.DBT}return n};function v(){return new RegExp(Object.keys(u.nB).map((function(e){return".(".concat(e,")$")})).join("|"))}function p(e,n,t){var p,m,h=null===e||void 0===e||null===(p=e.path.match(v())[0])||void 0===p?void 0:p.split(".")[1],b=t.type===l.qL.INTEGRATION,g=(0,c.sE)(null===t||void 0===t?void 0:t.blocks,(function(e){var n=e.type;return r.tf.DATA_EXPORTER===n})),C=e.path.replace(n,"").split(i.sep),j=f(e.path.split(i.sep)),y=r.tf.DBT===j,w=(m=C)[0]===r.tf.DBT?m.slice(1).join(i.sep):function(e){return e.at(-1)}(m).split(".")[0];if(C.length>=3&&!y){var k=C.slice(1,C.length-1).join(i.sep);w="".concat(k,"/").concat(w)}var x=u.nB[h],F={configuration:(0,s.hB)({file_path:y&&r.t6.SQL===x?(0,d.a)(e):null,file_source:{path:(0,d.a)(e)}}),language:x,name:(0,a.wE)(w),type:j};if(j===r.tf.CUSTOM&&(F.color=r.Lq.TEAL),b){var D=(0,c.sE)(t.blocks,(function(e){var n=e.type;return r.tf.DATA_LOADER===n})),O=(0,c.sE)(t.blocks,(function(e){var n=e.type;return r.tf.TRANSFORMER===n})),Z=[];O?Z.push(O.uuid):null!==g&&void 0!==g&&g.upstream_blocks?Z.push.apply(Z,(0,o.Z)(g.upstream_blocks)):D&&Z.push(D.uuid),F.upstream_blocks=Z}return F}},44952:function(e,n,t){t.d(n,{K:function(){return i}});var o=t(4383);function i(e){var n=(0,o.ZP)("downloads",e),t=document.createElement("a");t.href=n,document.body.appendChild(t),t.click(),window.URL.revokeObjectURL(n),document.body.removeChild(t)}}}]);