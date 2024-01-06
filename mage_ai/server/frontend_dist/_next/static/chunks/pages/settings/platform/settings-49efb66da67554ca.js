(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3112],{80754:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n=r(77837),o=r(38860),i=r.n(o),c=r(93808),s=r(82394),l=r(75582),u=r(82684),a=r(69864),d=r(21764),p=r(32013),f=r(98777),j=r(71180),v=r(15338),h=r(55485),g=r(88543),m=r(38276),x=r(30160),P=r(35686),b=r(77417),Z=r(72473),O=r(70515),S=r(81728),w=r(42122),y=r(72619),k=r(23780),I=r(28598);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=function(){var e,t=(0,k.VI)(null,{},[],{uuid:"Platform/Settings"}),r=((0,l.Z)(t,1)[0],(0,b.Z)()),n=r.project,o=r.rootProject,i=(0,u.useState)(null),c=i[0],_=i[1],T=(0,u.useState)(!1),E=(T[0],T[1]),N=(0,u.useState)(null),R=N[0],D=N[1],B=(0,u.useCallback)((function(e){_(e),E(!0)}),[_,E]);(0,u.useEffect)((function(){o&&!c&&_(null===o||void 0===o?void 0:o.platform_settings),n&&!R&&D(null===n||void 0===n?void 0:n.name)}),[o]);var A=(0,u.useMemo)((function(){var e=(0,S.RA)((0,S.Y6)());return(0,I.jsx)(j.ZP,{beforeIcon:(0,I.jsx)(Z.Add,{}),compact:!0,small:!0,onClick:function(){return B((function(t){return C(C({},t),{},{projects:C(C({},null===c||void 0===c?void 0:c.projects),{},(0,s.Z)({},e,{}))})}))},secondary:!0,children:"Register project"})}),[c]),F=(0,a.Db)(P.ZP.projects.useUpdate(null===o||void 0===o?void 0:o.name),{onSuccess:function(e){return(0,y.wD)(e,{callback:function(e){var t=e.project;B((function(e){return C(C({},e),t)})),d.Am.success("Platform settings successfully saved.",{position:d.Am.POSITION.BOTTOM_RIGHT,toastId:"platform-settings-success-".concat(null===t||void 0===t?void 0:t.name)})}})}}),M=(0,l.Z)(F,2),H=M[0],W=M[1].isLoading;return(0,I.jsxs)(m.Z,{p:O.cd,children:[(0,I.jsx)(g.Z,{title:"Projects",headerChildren:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(m.Z,{ml:O.cd}),A]}),children:(0,I.jsx)(p.Z,{noBorder:!0,noBoxShadow:!0,visibleMappingForced:Object.keys((null===c||void 0===c?void 0:c.projects)||{}).reduce((function(e,t,r){return C(C({},e),{},(0,s.Z)({},String(r),!0))}),{}),children:Object.entries((null===c||void 0===c?void 0:c.projects)||{}).map((function(e){var t=(0,l.Z)(e,2),r=t[0],n=t[1],o=n.path,i=n.uuid;return(0,I.jsxs)(f.Z,{noBorderRadius:!0,noPaddingContent:!0,title:(0,I.jsx)(h.ZP,{alignItems:"center",children:(0,I.jsx)(x.ZP,{large:!0,monospace:!0,children:r})}),titleXPadding:O.cd*O.iI,titleYPadding:O.cd*O.iI,children:[(0,I.jsx)(g.S,{title:"Name",description:"Unique name of project.",textInput:{fullWidth:!1,monospace:!0,placeholder:r,onChange:function(e){return B((function(t){return C(C({},t),{},{projects:C(C({},null===c||void 0===c?void 0:c.projects),{},(0,s.Z)({},r,C(C({},n),{},{uuid:e.target.value})))})}))},value:i}}),(0,I.jsx)(g.S,{title:"Path",description:(0,I.jsxs)(x.ZP,{muted:!0,small:!0,children:["Relative path to the project directory starting from the root project directory.",(0,I.jsx)("br",{}),"If blank, the default path will be the project name."]}),textInput:{fullWidth:!1,monospace:!0,placeholder:r,onChange:function(e){return B((function(t){return C(C({},t),{},{projects:C(C({},null===c||void 0===c?void 0:c.projects),{},(0,s.Z)({},r,C(C({},n),{},{path:e.target.value})))})}))},value:o||""}}),(0,I.jsx)(g.S,{title:"Currently selected project",description:"The currently selected project.",toggleSwitch:{checked:r===R,onCheck:function(){return D(r===R?null:r)}}}),(0,I.jsx)(v.Z,{light:!0}),(0,I.jsx)(g.S,{children:(0,I.jsx)(j.ZP,{compact:!0,noBorder:!0,onClick:function(){B((function(e){return C(C({},e),{},{projects:(0,w.gR)(null===c||void 0===c?void 0:c.projects,[r])})}))},small:!0,children:"Deregister project"})})]},r)}))})}),(0,I.jsx)(m.Z,{mt:O.HN}),(0,I.jsx)(g.Z,{title:"Features",children:(0,I.jsx)(g.S,{title:"Override all project features",description:(0,I.jsxs)(x.ZP,{muted:!0,small:!0,children:["If this setting is toggled, the feature flags that are set from the root project",(0,I.jsx)("br",{}),"will override the feature flags of all sub-projects."]}),toggleSwitch:{checked:null===c||void 0===c||null===(e=c.features)||void 0===e?void 0:e.override,onCheck:function(){return B((function(e){var t;return C(C({},e),{},{features:C(C({},null===e||void 0===e?void 0:e.features),{},{override:!(null!==c&&void 0!==c&&null!==(t=c.features)&&void 0!==t&&t.override)})})}))}}})}),(0,I.jsx)(m.Z,{my:O.HN,children:(0,I.jsxs)(h.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,I.jsx)("div",{}),(0,I.jsx)(j.ZP,{beforeIcon:(0,I.jsx)(Z.Save,{}),loading:W,onClick:function(){return H({project:{activate_project:R,platform_settings:c,root_project:!0}})},primary:!0,children:"Save settings"})]})})]})},E=r(28274),N=r(24755);function R(){return(0,I.jsx)(E.Z,{uuidItemSelected:N.B2.SETTINGS,uuidWorkspaceSelected:N.Pl.PROJECT_PLATFORM,children:(0,I.jsx)(T,{})})}R.getInitialProps=(0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var D=(0,c.Z)(R)},39863:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/platform/settings",function(){return r(80754)}])}},function(e){e.O(0,[6085,1557,8038,8432,9774,2888,179],(function(){return t=39863,e(e.s=t);var t}));var t=e.O();_N_E=t}]);