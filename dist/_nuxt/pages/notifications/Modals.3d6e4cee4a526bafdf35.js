webpackJsonp([33],{"4Gdk":function(a,i,t){"use strict";i.a={name:"modals",data:function(){return{myModal:!1,largeModal:!1,smallModal:!1,primaryModal:!1,successModal:!1,warningModal:!1,dangerModal:!1,infoModal:!1}}}},BV49:function(a,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("4Gdk"),o=t("bdgn"),e=t("VU/8")(n.a,o.a,!1,null,null,null);e.options.__file="pages/notifications/Modals.vue",i.default=e.exports},bdgn:function(a,i,t){"use strict";var n=function(){var a=this,i=a.$createElement,t=a._self._c||i;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"animated fadeIn"},[t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("b-card",{attrs:{header:"Bootstrap Modals"}},[t("b-button",{attrs:{type:"button",variant:"secondary"},on:{click:function(i){a.myModal=!0}}},[a._v("Launch demo modal")]),t("b-button",{attrs:{type:"button",variant:"secondary"},on:{click:function(i){a.largeModal=!0}}},[a._v("Launch large modal")]),t("b-button",{attrs:{type:"button",variant:"secondary"},on:{click:function(i){a.smallModal=!0}}},[a._v("Launch small modal")]),t("hr"),t("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(i){a.primaryModal=!0}}},[a._v("Launch primary modal")]),t("b-button",{attrs:{type:"button",variant:"success"},on:{click:function(i){a.successModal=!0}}},[a._v("Launch success modal")]),t("b-button",{attrs:{type:"button",variant:"warning"},on:{click:function(i){a.warningModal=!0}}},[a._v("Launch warning modal")]),t("b-button",{attrs:{type:"button",variant:"danger"},on:{click:function(i){a.dangerModal=!0}}},[a._v("Launch danger modal")]),t("b-button",{attrs:{type:"button",variant:"info"},on:{click:function(i){a.infoModal=!0}}},[a._v("Launch info modal")])],1)],1)],1)],1),t("b-modal",{attrs:{title:"Modal title"},on:{ok:function(i){a.myModal=!1}},model:{value:a.myModal,callback:function(i){a.myModal=i},expression:"myModal"}},[a._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]),t("b-modal",{attrs:{title:"Modal title",size:"lg"},on:{ok:function(i){a.largeModal=!1}},model:{value:a.largeModal,callback:function(i){a.largeModal=i},expression:"largeModal"}},[a._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]),t("b-modal",{attrs:{title:"Modal title",size:"sm"},on:{ok:function(i){a.smallModal=!1}},model:{value:a.smallModal,callback:function(i){a.smallModal=i},expression:"smallModal"}},[a._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]),t("b-modal",{staticClass:"modal-primary",attrs:{title:"Modal title"},on:{ok:function(i){a.primaryModal=!1}},model:{value:a.primaryModal,callback:function(i){a.primaryModal=i},expression:"primaryModal"}},[a._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]),t("b-modal",{staticClass:"modal-success",attrs:{title:"Modal title","ok-variant":"success"},on:{ok:function(i){a.successModal=!1}},model:{value:a.successModal,callback:function(i){a.successModal=i},expression:"successModal"}},[a._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]),t("b-modal",{staticClass:"modal-warning",attrs:{title:"Modal title","ok-variant":"warning"},on:{ok:function(i){a.warningModal=!1}},model:{value:a.warningModal,callback:function(i){a.warningModal=i},expression:"warningModal"}},[a._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]),t("b-modal",{staticClass:"modal-danger",attrs:{title:"Modal title","ok-variant":"danger"},on:{ok:function(i){a.dangerModal=!1}},model:{value:a.dangerModal,callback:function(i){a.dangerModal=i},expression:"dangerModal"}},[a._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]),t("b-modal",{staticClass:"modal-info",attrs:{title:"Modal title","ok-variant":"info"},on:{ok:function(i){a.infoModal=!1}},model:{value:a.infoModal,callback:function(i){a.infoModal=i},expression:"infoModal"}},[a._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")])],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};i.a=o}});