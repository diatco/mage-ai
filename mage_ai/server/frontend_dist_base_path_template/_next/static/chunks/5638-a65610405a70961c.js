"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5638],{65557:function(n,e,t){var o=t(21831),r=t(75582),i=t(82684),c=t(80329);e.Z=function(n){var e=n.children,t=n.uuid,d=n.uuids,a=void 0===d?[]:d,l=(0,c.j)("apiReloads"),u=(0,r.Z)(l,1)[0],s=(0,o.Z)(a);t&&s.push(t);var f=s.map((function(n){return String(u[n])||"-"})).join("_");return i.cloneElement(e,{key:f})}},55283:function(n,e,t){t.d(e,{HC:function(){return w},HS:function(){return C},IN:function(){return f},Kf:function(){return m},Nk:function(){return g},PB:function(){return x},PY:function(){return y},WC:function(){return p},fk:function(){return j},gE:function(){return I},j1:function(){return O},jv:function(){return k},nz:function(){return v},oh:function(){return s},qn:function(){return b},t1:function(){return Z},u2:function(){return h},y9:function(){return _}});var o=t(38626),r=t(44897),i=t(44425),c=t(42631),d=t(8059),a=t(70515),l=t(47041),u=t(91437),s=68,f=1.5*a.iI,p=3*a.iI;function h(n){var e=d.eW;return i.tf.CALLBACK===n?e=d.J:i.tf.CHART===n||i.tf.CONDITIONAL===n?e=d.Hv:i.tf.CUSTOM===n?e=d.AK:i.tf.DATA_EXPORTER===n?e=d.Sr:i.tf.DATA_LOADER===n?e=d.R2:i.tf.DBT===n?e=d.J:i.tf.EXTENSION===n?e=d.FI:i.tf.GLOBAL_DATA_PRODUCT===n?e=d.yr:i.tf.SCRATCHPAD===n?e=d.Hv:i.tf.SENSOR===n?e=d.rK:i.tf.MARKDOWN===n?e=d.RK:i.tf.TRANSFORMER===n&&(e=d.eW),e}function b(n,e){var t,o,c=((null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.borders)||r.Z.borders).light,d=((null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.monotone)||r.Z.monotone).grey500,a=e||{},l=a.blockColor,u=a.isSelected,s=a.theme;return u?c=(s||r.Z).content.active:i.tf.TRANSFORMER===n||l===i.Lq.PURPLE?(c=(s||r.Z).accent.purple,d=(s||r.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||l===i.Lq.YELLOW?(c=(s||r.Z).accent.yellow,d=(s||r.Z).accent.yellowLight):i.tf.DATA_LOADER===n||l===i.Lq.BLUE?(c=(s||r.Z).accent.blue,d=(s||r.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(s||r.Z).accent.sky,d=(s||r.Z).accent.skyLight):i.tf.SENSOR===n||l===i.Lq.PINK?(c=(s||r.Z).accent.pink,d=(s||r.Z).accent.pinkLight):i.tf.DBT===n?(c=(s||r.Z).accent.dbt,d=(s||r.Z).accent.dbtLight):i.tf.EXTENSION===n||l===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).teal,d=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).rose,d=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).roseLight):i.tf.CONDITIONAL===n||i.tf.SCRATCHPAD===n||l===i.Lq.GREY||i.tf.CUSTOM===n&&!l?(c=(s||r.Z).content.default,d=(s||r.Z).accent.contentDefaultTransparent):i.tf.GLOBAL_DATA_PRODUCT!==n||l||(c=(s||r.Z).monotone.white,d=(s||r.Z).monotone.whiteTransparent),{accent:c,accentLight:d}}var m=(0,o.css)([""," "," "," "," "," "," ",""],(0,u.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(b(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(b(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||r.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||r.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),g=o.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),y=o.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],m,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(b(n.blockType,n).accent,";\n    }\n  ")})),x=o.default.div.withConfig({displayName:"indexstyle__HeaderHorizontalBorder",componentId:"sc-s5rj34-2"})(["",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme||r.Z).borders.darkLight,";\n  ")})),v=o.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-3"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;"," "," "," ",""],m,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,1*a.iI,1*a.iI,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.dashboard,";\n  ")}),(function(n){return"undefined"!==typeof n.zIndex&&null!==n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")}),(function(n){return!n.noSticky&&"\n    // This is to hide the horizontal scrollbar in the block header when sideBySide is enabled,\n    // and the screen width is too small.\n    position: sticky;\n    top: -5px;\n  "}),(function(n){return n.noSticky&&"\n    ".concat((0,l.y$)(),"\n\n    overflow-x: auto;\n    overflow-y: visible;\n  ")})),C=o.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-s5rj34-4"})([""," "," ",""],(function(n){return!n.darkBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).darkLight,";\n  ")}),(function(n){return n.darkBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).medium,";\n  ")}),(function(n){return!n.noBackground&&"\n    background-color: ".concat((n.theme||r.Z).background.dashboard,";\n  ")})),k=o.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-5"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;position:relative;"," "," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],m,c.M8,c.mP,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme.background||r.Z.background).codeTextarea,";\n  ")}),(function(n){return!n.noPadding&&"\n    padding-bottom: ".concat(a.iI,"px;\n    padding-top: ").concat(a.iI,"px;\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n  ")}),(function(n){return!n.hideBorderBottom&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n    overflow: hidden;\n  ")})),I=o.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-6"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;&:hover{"," .block-divider-inner{","}}"," "," "," ",""],2*a.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||r.Z.text).fileBrowser,";\n      ")}),(function(n){return!n.height&&"\n    height: ".concat(2*a.iI,"px;\n  ")}),(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")}),(function(n){return!n.bottom&&"\n    bottom: ".concat(.5*a.iI,"px;\n  ")}),(function(n){return"undefined"!==typeof n.bottom&&"\n    bottom: ".concat(n.bottom,"px;\n  ")})),Z=o.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-7"})(["height 1px;width:100%;position:absolute;z-index:-1;"," ",""],(function(n){return!n.top&&"\n    top: ".concat(1.5*a.iI,"px;\n  ")}),(function(n){return"undefined"!==typeof n.top&&"\n    top: ".concat(n.top,"px;\n  ")})),_=o.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-8"})([""," ",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?a.iI:s,"px;\n  ")}),(function(n){return!n.noMargin&&"\n    margin-bottom: ".concat(1*a.iI,"px;\n    padding-bottom: ").concat(1*a.iI,"px;\n  ")})),w=o.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-9"})(["bottom:","px;left:","px;position:absolute;"],1*a.iI,s),j=o.default.div.withConfig({displayName:"indexstyle__ScrollColunnsContainerStyle",componentId:"sc-s5rj34-10"})(["position:relative;",""],(function(n){return"\n    z-index: ".concat((null===n||void 0===n?void 0:n.zIndex)||1,";\n  ")})),O=o.default.div.attrs((function(n){var e=n.height,t=n.left,o=n.right,r=n.top;return{style:{position:"fixed",height:e,width:n.width,left:t,right:o,top:r,zIndex:(n.zIndex||0)+2}}})).withConfig({displayName:"indexstyle__ScrollColunnStyle",componentId:"sc-s5rj34-11"})([""])},90758:function(n,e,t){t.d(e,{Z:function(){return _}});var o=t(82394),r=t(26304),i=t(82684),c=t(38626),d=t(39867),a=t(55485),l=t(48670),u=t(38276),s=t(30160),f=t(12468),p=t(44897),h=t(72473),b=t(97133),m=t(70515),g=t(15610),y=t(3314),x=t(28598);var v=function(n){var e=n.filePath,t=n.filesTouched,o=void 0===t?{}:t,r=n.isLast,c=n.onClickTab,v=n.onClickTabClose,C=n.renderTabTitle,k=n.savePipelineContent,I=n.selected,Z=n.themeContext,_=(0,i.useState)(!1),w=_[0],j=_[1];return(0,x.jsx)(a.ZP,{flexDirection:"column",fullHeight:!0,onClick:function(n){n.preventDefault(),I||(c?c(e):(null===k||void 0===k||k(),(0,g.u7)({file_path:encodeURIComponent(e)})))},onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:(0,x.jsx)(b.Gb,{last:r,selected:I,children:(0,x.jsxs)(a.ZP,{alignItems:"center",fullHeight:!0,children:[(0,x.jsx)(f.Z,{appearAbove:!0,appearBefore:!0,label:e,size:null,widthFitContent:!0,children:(0,x.jsxs)(a.ZP,{alignItems:"center",fullHeight:!0,children:[!o[e]&&(0,x.jsx)(h.iU,{muted:!I,size:1.5*m.iI}),o[e]&&(0,x.jsx)(f.Z,{label:"Unsaved changes",size:null,widthFitContent:!0,children:(0,x.jsx)("div",{style:{padding:1},children:(0,x.jsx)(d.Z,{borderColor:(Z||p.Z).borders.danger,size:1.25*m.iI})})}),(0,x.jsx)(u.Z,{mr:1}),(0,x.jsx)(s.ZP,{muted:!I,children:C?C(e):e})]})}),(0,x.jsx)(u.Z,{mr:2}),(0,x.jsx)(f.Z,{label:"Close",size:null,widthFitContent:!0,children:(0,x.jsxs)(l.Z,{autoHeight:!0,block:!0,noHoverUnderline:!0,noOutline:!0,onClick:function(n){(0,y.j)(n),null===v||void 0===v||v(e)},preventDefault:!0,children:[(w||I)&&(0,x.jsx)(h.x8,{muted:!I,size:1.25*m.iI}),!w&&!I&&(0,x.jsx)("div",{style:{width:1.25*m.iI}})]})})]})})})},C=t(86735),k=["filePaths","isSelectedFilePath","onClickTabClose","selectedFilePath"];function I(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function Z(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?I(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var _=function(n){var e=n.filePaths,t=n.isSelectedFilePath,o=n.onClickTabClose,d=n.selectedFilePath,l=(0,r.Z)(n,k),u=(0,i.useContext)(c.ThemeContext),s=(0,i.useMemo)((function(){return e.map((function(n){return decodeURIComponent(n)}))}),[e]),f=(0,i.useMemo)((function(){return null===s||void 0===s?void 0:s.length}),[s]);return(0,x.jsx)(a.ZP,{alignItems:"center",justifyContent:"flex-start",children:null===s||void 0===s?void 0:s.map((function(n,e){var r=t?t(n,d):d===encodeURIComponent(n);return(0,i.createElement)(v,Z(Z({},l),{},{filePath:n,isLast:e===f-1,key:n,onClickTabClose:function(n){if(o)o(n);else{var e=(0,C.Od)(s,(function(e){return e===n})).map((function(n){return encodeURIComponent(n)}));(0,g.u7)({file_path:e[e.length-1]||null,"file_paths[]":e},{pushHistory:!0})}},selected:r,themeContext:u}))}))})}},97133:function(n,e,t){t.d(e,{Gb:function(){return f},fm:function(){return u},lO:function(){return l},rK:function(){return s},zn:function(){return a}});var o=t(38626),r=t(44897),i=t(2842),c=t(70515),d=t(47041),a=300,l=o.default.div.withConfig({displayName:"indexstyle__PipelineContainerStyle",componentId:"sc-1sv9513-0"})([".pipeline-detail-enter-active{opacity:1;transition:opacity ","ms linear;}.pipeline-detail-enter-done{opacity:0;transition:opacity ","ms linear;}"],a,a),u=o.default.div.withConfig({displayName:"indexstyle__OverlayStyle",componentId:"sc-1sv9513-1"})(["height:100vh;opacity:1;position:fixed;width:100vw;z-index:9999;",""],(function(n){return"\n    background-color: ".concat((n.theme.background||r.Z.background).codeArea,";\n  ")})),s=o.default.div.withConfig({displayName:"indexstyle__PipelineHeaderStyle",componentId:"sc-1sv9513-2"})(["height:","px;position:sticky;top:","px;width:100%;z-index:5;"," "," "," ",""],i.Wi,i.Wi,(function(n){return"\n    background-color: ".concat((n.theme.background||r.Z.background).panel,";\n    border-bottom: 1px solid ").concat((n.theme.borders||r.Z.borders).medium,";\n  ")}),(function(n){return n.relativePosition&&"\n    position: relative;\n  "}),(function(n){return n.secondary&&"\n    height: ".concat(37,"px;\n    top: ").concat(i.Wi,"px;\n    overflow-x: auto;\n    z-index: 3;\n  ")}),(0,d.y$)()),f=o.default.div.withConfig({displayName:"indexstyle__FileTabStyle",componentId:"sc-1sv9513-3"})(["border-right:1px solid transparent;height:100%;padding:","px ","px;"," "," ",""],c.iI,c.cd*c.iI,(function(n){return"\n    &:hover {\n      cursor: default;\n\n      p {\n        color: ".concat((n.theme.content||r.Z.content).active," !important;\n        cursor: default;\n      }\n    }\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||r.Z.interactive).hoverBackground,";\n  ")}),(function(n){return!n.selected&&!n.last&&"\n    border-color: ".concat((n.theme.borders||r.Z.borders).light," !important;\n  ")}));o.default.div.withConfig({displayName:"indexstyle__HeaderViewOptionsStyle",componentId:"sc-1sv9513-4"})(["left:50%;position:absolute;transform:translateX(-50%);"])}}]);