(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./core/user.model.ts":
/*!****************************!*\
  !*** ./core/user.model.ts ***!
  \****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor() {
        this.uid = '';
        this.email = '';
        this.photoURL = '';
        // this.displayName = ''
        this.provider = '';
    }
}


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <router-outlet></router-outlet>\n</main>\n<nz-back-top [nzTemplate]=\"tpl\" [nzVisibilityHeight]=\"100\" (nzOnClick)=\"notify()\">\n  <ng-template #tpl>\n    <div class=\"ant-back-top-inner\">^</div>\n  </ng-template>\n</nz-back-top>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navigation></navigation>\n<div class=\"container\">\n    <div class=\"text-center mb-5\">\n        <h1>CHANGE PASSWORD</h1>\n    </div>\n    <div class=\" d-flex justify-content-between row \">\n        <div class=\"col-md-7\">\n            <div class=\"text-center img\">\n                <h5 class=\"mb-3\">MANAGE YOUR GADGETS ACCOUNT</h5>\n                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget Lorem ipsum\n                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ege</p>\n            </div>\n            <img src=\"https://demo.w3layouts.com/demos_new/template_demo/18-05-2019/gadget_signup_form-demo_Free/1576182126/web/images/b11.png\"\n                alt=\"\" style=\"max-width: 100%\">\n        </div>\n        <div class=\"col-md-5 m-auto\">\n            <div class=\"card text-center shadow  \" style=\"height: 34vh;\">\n                <div class=\"m-3\">\n                    <h3 class=\"name\" style=\"color: #b40606;\">Change Password</h3>\n                </div>\n                <form action=\"\" [formGroup]=\"change\">\n                    <div class=\"m-auto formchange\">\n                        <input type=\"email\" formControlName=\"email\" value=\"  {{user.email}}\"\n                            placeholder=\"Enter email...\">\n                        <p class=\"m-2\" id=\"result\" style=\"color: green;\"></p>\n                        <p class=\"m-2\" id=\"result2\" style=\"color: #b40606;\"></p>\n                        <button class=\"btn-danger\" (click)=\"resetPassword(change.value)\">Submit </button>\n\n                    </div>\n                </form>\n\n                <!-- <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n                    <nz-form-item>\n                        <nz-form-label class=\"change\" [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"email\">E-mail\n                        </nz-form-label>\n                        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"The input is not valid E-mail!\">\n                            <input nz-input formControlName=\"email\" id=\"email\" />\n                        </nz-form-control>\n                    </nz-form-item>\n                    <nz-form-item>\n                        <nz-form-label class=\"change\" [nzSm]=\"8\" [nzXs]=\"24\" nzFor=\"password\" nzRequired>Password\n                        </nz-form-label>\n                        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"Please input your password!\">\n                            <input nz-input type=\"password\" id=\"password\" formControlName=\"password\"\n                                (ngModelChange)=\"updateConfirmValidator()\" />\n                        </nz-form-control>\n                    </nz-form-item>\n                    <nz-form-item>\n                        <nz-form-label class=\"change\" [nzSm]=\"8\" [nzXs]=\"24\" nzFor=\"checkPassword\" nzRequired>Confirm\n                            Password\n                        </nz-form-label>\n                        <nz-form-control [nzSm]=\"13\" [nzXs]=\"24\" [nzErrorTip]=\"errorTpl\">\n                            <input nz-input type=\"password\" formControlName=\"checkPassword\" id=\"checkPassword\" />\n                            <ng-template #errorTpl let-control>\n                                <ng-container *ngIf=\"control.hasError('required')\">\n                                    Please confirm your password!\n                                </ng-container>\n                                <ng-container *ngIf=\"control.hasError('confirm')\">\n                                    Two passwords that you enter is inconsistent!\n                                </ng-container>\n                            </ng-template>\n                        </nz-form-control>\n                    </nz-form-item>\n                    <nz-form-item nz-row class=\"register-area\">\n                        <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\n                            <button nz-button nzType=\"primary\">Register</button>\n                        </nz-form-control>\n                    </nz-form-item>\n                </form> -->\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg mt-5\"\n    style=\"background-image: url('https://demo.w3layouts.com/demos_new/19-01-2017/sublime_contact_form-demo_Free/1317874809/web/images/banner.jpg');max-width: 100%\">\n    <div class=\"text-center pt-5 pb-3\">\n        <h2 style=\"color: #fff\">SUBLIME CONTACT FORM</h2>\n    </div>\n    <div class=\"container pb-5\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card m-auto\">\n                    <div class=\"text-center mt-5\">\n                        <form action=\"\">\n                            <h4 style=\"color: #fff\">CONTACT US</h4>\n                            <input type=\"text\" placeholder=\"USENAME\">\n                            <input type=\"email\" name=\"\" id=\"\" placeholder=\"MAIL@EXAMPLE.COM\"><br>\n                            <textarea placeholder=\"YOUR EMAIL\" style=\"height: 100px\">\n                                                    </textarea>\n                            <div class=\"\">\n                                <input type=\"submit\">\n                            </div>\n                        </form>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exam/exam.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exam/exam.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navigation>\n</navigation>\n\n<div class=\"container ex mt-5 pt-5\">\n    <div class=\"text-center \">\n        <h1 style=\"color: #b40606\">EXAM ONLINE</h1>\n    </div>\n    <div class=\"card mb-3 \" style=\"border: 2px solid #b40606;background: #333333;color: gray;\" id=\"myHeader\">\n        <div class=\"card-header d-flex justify-content-between \">\n            <p class=\"m-0\" style=\"font-weight: bold;\">Funny Exam</p>\n            <div class=\"d-flex\" style='margin:0px 5px '>\n                <i class=\"fa fa-clock-o mr-2\" style=\"font-size:36px\"></i>\n                <span class=\"\" id=\"h\" style=\"color: #b40606;\">h</span> :\n                <span class=\"\" id=\"m\" style=\"color: #b40606;\">m</span> :\n                <span class=\"\" id=\"s\" style=\"color: #b40606;\">s</span>\n            </div>\n            <div>{{result.answered}}/{{list && list.length}}</div>\n        </div>\n    </div>\n\n\n    <!-- <button class=\"btn btn-success\" (click)=\"result()\">Start</button> -->\n    <div *ngIf=\"isEdit\">\n\n        <div class=\"card mb-5\" *ngFor=\"let list of list\" style=\"position: inherit;\">\n            <div class=\"card-header d-flex justify-content-between\">\n                <p>{{list.Text }}</p>\n            </div>\n            <div class=\"card-body\">\n                <!-- <label class=\"container\">{{item.Text}}\n                    <input type=\"checkbox\" name=\"radio\">\n                    <span class=\"checkmark\"></span>\n                </label> -->\n                <!-- <div class=\"radio\">\n                    <label><input type=\"radio\" name=\"optradio\" checked>{{item.Text}}</label>\n                </div> -->\n                <!-- <div class=\"checkbox\">\n                    <label>\n                        <input (change)=\"onChoose(item.Id, list.Id)\" class=\"mr-1\" type=\"checkbox\" value=\"PHP\">\n                        {{ item.Text}}\n                    </label>\n                </div> -->\n                <nz-radio-group *ngFor=\"let item of list.Answers\" (ngModelChange)=\"onChoose(item.Id, list.Id)\"\n                    [(ngModel)]=\"list._answerId\">\n                    <label nz-radio [nzValue]=\"item.Id\" [ngStyle]=\"style\">{{item.Text}}</label>\n                </nz-radio-group>\n            </div>\n\n        </div>\n    </div>\n    <button class=\"btn m-3 {{isEdit? 'btn-danger': 'btn-success'}}\" (click)=\"isEdit? submit() :\n    start()\"> {{isEdit? 'Ket thuc' : 'Bat Dau'}}\n    </button>\n    <!-- <div class=\"row mt-3\">\n        <div class=\"col-md-4\">\n            Showing {{config.currentPage}} of {{list.length/config.itemsPerPage | number:\"1.0-0\" }}\n        </div>\n        <div class=\"col-md-8\">\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n        </div>\n    </div> -->\n\n    <nz-modal [(nzVisible)]=\"isSubmitted\" [nzFooter]=\"modalFooter\" (nzOnCancel)=\"onRedirect()\">\n        <nz-result nzStatus=\"success\" nzTitle=\"Finished Exam!\" nzSubTitle=\"Core: {{result.mark.toFixed(1)}}\">\n            <div nz-result-extra>\n                <button nz-button nzType=\"primary\" (click)=\"onRedirect()\">Go Back Home</button>\n            </div>\n        </nz-result>\n        <ng-template #modalFooter>\n        </ng-template>\n    </nz-modal>\n</div>\n\n<tp-footer>\n\n</tp-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navigation>\n</navigation>\n<div class=\"bg mt-5\" style=\"background-image: url(https://demo.w3layouts.com/demos_new/22-02-2017/elegant_feedback_form-demo_Free/1761240909/web/images/bg2.jpg);\n    max-width: 100%;\">\n    <div class=\"text-center pt-5\">\n        <h1 style=\"color: #fff\">FEEDBACK FORM</h1>\n    </div>\n    <div class=\"container pb-5\">\n        <div class=\"row\">\n            <div class=\"card col-md-6 \" style=\"background-color:rgba(1, 14, 21, 0.62);\">\n                <div class=\"container \">\n                    <form action=\"\">\n                        <div class=\"ans mt-3\">\n                            <p> Please help us to serve you better by taking a couple of minutes.</p>\n                        </div>\n                        <div>\n                            <div class=\"ques\">\n                                <h2>How satisfied were you with our Product/Service?</h2>\n                            </div>\n                            <ul class=\"chose mt-3\">\n                                <li><input type=\"radio\" name=\"view\" id=\"excellent\">\n                                    <label for=\"excellent\">Excellent</label>\n                                    <div class=\"check w3\"></div>\n                                </li>\n                                <li><input type=\"radio\" name=\"view\" id=\"good\" checked=\"checked\">\n                                    <label for=\"good\"> Good</label>\n                                    <div class=\"check w3ls\"></div>\n                                </li>\n                                <li><input type=\"radio\" name=\"view\" id=\"neutral\">\n                                    <label for=\"neutral\">Neutral</label>\n                                    <div class=\"check wthree\"></div>\n                                </li>\n                                <li><input type=\"radio\" name=\"view\" id=\"poor\">\n                                    <label for=\"poor\">Poor</label>\n                                    <div class=\"check w3_agileits\"></div>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"ques m-2\">\n                            <h2>If you have specific feedback, please write to us...</h2>\n                        </div>\n                        <div class=\"add\">\n                            <textarea nz-input placeholder=\"Additional comments\" [(ngModel)]=\"value\"\n                                [nzAutosize]=\"{ minRows: 5, maxRows: 5 }\"\n                                [ngModelOptions]=\"{standalone: true}\"></textarea>\n                            <div class=\"add mt-2 mb-2\">\n                                <input class=\"name\" type=\"text\" name=\"\" id=\"\" placeholder=\"Your Name\">\n                                <input class=\"email\" type=\"text\" name=\"\" id=\"\" placeholder=\"Your Email\"><br>\n                            </div>\n                            <input class=\"submit\" type=\"submit\" name=\"\" id=\"\" value=\"Send\">\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<tp-footer>\n\n</tp-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"bg-dark\">\n    <div class=\"container\">\n        <div class=\" justify-content-between  row \">\n            <div class=\"info text-center\">\n                <div>\n                    <i class=\"fa fa-map-marker mr-1\"></i>\n                    <span>12 Trịnh Đình Thảo, Phường Hòa Thạnh, Quận Tân Phú</span><br>\n                </div>\n                <div class=\"d-flex\">\n                    <div class=\"mr-2\">\n                        <i class=\"fa fa-envelope mr-1 \"></i>\n                        <span>info@example.com</span>\n                    </div>\n                    <div>\n                        <i class=\"fa fa-phone mr-1\"></i>\n                        <span>0898-398-112</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"info text-center \">\n                <span>Follow me on social media</span>\n                <div class=\"ml-3\">\n                    <a class=\" nav-link-icon \" href=\"#\">\n                        <i class=\"fa fa-facebook-square\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n                    </a>\n                    <a class=\" nav-link-icon\" href=\"#\">\n                        <i class=\"fa fa-twitter\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n                    </a>\n                    <a class=\" nav-link-icon\" href=\"#\">\n                        <i class=\"fa fa-instagram\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <hr style=\"max-width: 100%;background-color:#fff !important\">\n    <div class=\"text-center pb-1 \">\n        <span class=\"m-1\" href=\"#\" style=\"color: wheat\">Copyright © 2019 Tung ITC. All rights reserved.</span>\n\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navigation>\n</navigation>\n<!-- Header -->\n<div class=\"font mt-5 mt-5 pt-5\">\n    <!-- <div class=\"bg\"\n        style=\"background: url('https://demo.w3layouts.com/demos_new/template_demo/26-03-2019/aegis_demo_Free/1054937215/web/images/banner1.jpg') no-repeat center;max-width: 100%;\">\n        <div class=\"container\">\n            <div class=\"row tex-center img-responsive\">\n                <div class=\"col-md-7\">\n                    <div class=\"caption\">\n                        <h1 class=\"lg\">FIND THE BEST COURSE FOR YOU</h1>\n                        <div class=\"input-group mb-3\">\n                            <input type=\"text\" class=\"ipsearch\" placeholder=\"   Course search . . .\"\n                                aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn btnsearch\">Search</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-3\"></div>\n            </div>\n        </div>\n    </div> -->\n    <!-- Body -->\n    <div class=\"container mt-5\">\n        <h3 class=\" mb-5 text-center\" style=\"color: #cb2036;\">Vui lòng chọn môn thi ở dưới</h3>\n        <div class=\"row m-auto home\">\n            <div class=\"col-md-3 px-1 py-5\" style=\"width: 18rem;\" *ngFor=\"let item of list  | paginate:config\">\n                <div class=\"card subject logo text-center p-3\">\n                    <a *ngIf=\"checkTime(item.start_time, item.end_time)\" [routerLink]=\"['/index',item.Id]\"\n                        routerLinkActive=\"router-link-active\">\n                        <img src=\" {{item.Logo}}\" class=\"card-img-top\" alt=\"...\" style=\"max-width: 100%;margin: auto;\">\n                        {{item.Name}}\n                    </a>\n                    <div *ngIf=\"!checkTime(item.start_time, item.end_time)\" class=\"disabled-subject\">\n                        <div class=\"description d-flex align-items-center justify-content-center\">Chưa đến giờ thi</div>\n                        <img src=\" {{item.Logo}}\" class=\"card-img-top\" alt=\"...\" style=\"max-width: 100%;margin: auto;\">\n                        {{item.Name}}\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n        <div class=\"text-center\">\n            <div class=\"float-left\">\n                Showing {{config.currentPage}} of {{subject.length/config.itemsPerPage | number:\"1.0-0\" }}\n            </div>\n            <div class=\"mt-2\">\n                <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n            </div>\n\n        </div>\n\n    </div>\n\n    <!-- Detail -->\n    <div class=\"text-center\" style=\"background-image: url('https://test365.vn/templates/as002057/images/bg.row5.png');\">\n        <div class=\" container text-center\">\n            <div class=\"pt-5\">\n                <h5 style=\"color: white\">NHỮNG LỢI ÍCH BẠN CÓ KHI SỬ DỤNG HỆ THỐNG CỦA CHÚNG TÔI</h5>\n            </div>\n            <div>\n                <p style=\"color: #cb2036\">==================================</p>\n            </div>\n            <div class=\"row \">\n                <div class=\"col-md-4 pb-3\">\n                    <div class=\"card\">\n                        <p class=\"text-center\">\n                            <img src=\"https://test365.vn/images/sampledata/asimages/ico.monitoring.png\"\n                                class=\"card-img-top\" alt=\"...\" style=\"max-width: 100%\">\n                        </p>\n\n                        <div class=\"card-body\">\n                            <h5>Hiệu quả</h5>\n                            <ul>\n                                <li>Kho câu hỏi phủ kín các kiến thức cần trang bị được tích luỹ và tái sử dụng nhiều\n                                    lần trở thành kho kiến thức chuyên môn nghiệp vụ của doanh nghiệp</li>\n                                <li>Sơ loại ứng viên trước khi vào vòng phỏng vấn, tiết kiệm chi phí tuyển dụng</li>\n                                <li>Đào tạo nhân viên thông qua các bài test, tạo ra văn hoá bồi dưỡng kiến thức và sát\n                                    hạch liên tục</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 pb-3\">\n                    <div class=\"card\">\n                        <p class=\"\">\n                            <img src=\"https://test365.vn/images/sampledata/asimages/ico.optimization.png\"\n                                class=\"card-img-top\" alt=\"...\">\n                        </p>\n                        <div class=\"card-body\">\n                            <h5>NHANH CHÓNG</h5>\n                            <ul>\n                                <li>Mọi thứ đều thực hiện online, không cần giấy bút</li>\n                                <li>Công cụ trộn đề, sinh đề, giao đề thi cho thí sinh hoàn toàn tự động, 5 phút để tạo\n                                    xong một đợt thi cho hàng nghìn người</li>\n                                <li>Chấm thi tự động, chính xác tuyệt đối, biết kết quả ngay sau khi hoàn thành bài thi\n                                </li>\n                                <li>Giao diện đơn giản trực quan</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 pb-3\">\n                    <div class=\"card\">\n                        <p>\n                            <img src=\"https://test365.vn/images/sampledata/asimages/ico.copywriting.png\"\n                                class=\"card-img-top\" alt=\"...\">\n                        </p>\n                        <div class=\"card-body\">\n                            <h5>TIẾT KIỆM CHI PHÍ</h5>\n                            <ul>\n                                <li>Không cần đầu tư phần cứng, phần mềm, hệ thống mạng</li>\n                                <li>Không cần nhân sự vận hành</li>\n                                <li>Không cần nhân sự ra đề, chấm thi</li>\n                                <li>Không cần giấy bút, in ấn, lưu trữ</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<tp-footer>\n</tp-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/introduce/introduce.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/introduce/introduce.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navigation>\n</navigation>\n<div>\n    <div class=\"bg\" style=\"max-width: 100%;\">\n        <div class=\"bg2\">\n            <div class=\"container pd\">\n                <div class=\"row add \">\n                    <div class=\"col-md-6\">\n                        <div class=\"card1 m-auto\">\n                            <div class=\"m-auto avt\">\n                                <img src=\"https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/66389802_844593089242719_7949268730070958080_n.jpg?_nc_cat=101&_nc_oc=AQmStYPiXIBq3JMawOerSKAGUKlK5rJOM6R5y2Zo65M7sbQ7n4cY7qUXH1BTH1hyxA4&_nc_ht=scontent.fhan2-1.fna&oh=e2c8b34b9cd44a984e04fd57baf76d58&oe=5E2FAB1D\"\n                                    alt=\"\">\n                            </div>\n                            <h3>Nguyen Thanh Tung</h3>\n                            <p>WEBSITE PROGRAMING</p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"info3\">\n                            <H3 style=\"color: #fff\">Career Goal</H3>\n                            <p style=\"color: #c5c2c2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus\n                                dignissim velit sed nibh\n                                placerat, non aliquam purus pretium. Donec at justo dignissim, maximus elit et,\n                                vestibulum\n                                mi.\n                            </p>\n                            <div>\n                                <ul class=\"unline\" style=\"list-style: none\">\n                                    <li class=\"info3\">\n                                        <ul class=\"info\">\n                                            <li class=\"info2\">D.O.B</li>\n                                            <li><span>:xxx-xxx-xxx</span></li>\n                                        </ul>\n                                        <ul class=\"info\">\n                                            <li class=\"info2\"><span>PHONE</span></li>\n                                            <li><span>:xxx-xxx-xxx</span></li>\n                                        </ul>\n                                        <ul class=\"info\">\n                                            <li class=\"info2\"><span>ADDRESS </span></li>\n                                            <li><span>:California</span></li>\n                                        </ul>\n                                        <ul class=\"info\">\n                                            <li class=\"info2\"><span>E-MAIL</span></li>\n                                            <li><span>:info@example.com</span></li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"font2 m-5\">\n        <div class=\"text-center \">\n            <h1 style=\"font-family: 'Poppins', sans-serif;color: #00bcd4\">ABOUT ME</h1>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/ab5.jpg\"\n                        alt=\"\" style=\"max-width: 100%\">\n                </div>\n                <div class=\"col-md-6 lg1\">\n                    <h3> Aliquam Euismod At Turpis Eu Egestas</h3>\n                    <p>Nullam pulvinar nunc eget tortor elementum, sed vehicula massa vestibulum. Aenean gravida arcu\n                        viverra nisl euismod laoreet. Fusce accumsan vel arcu at tincidunt. Nulla non nulla ultrices,\n                        pharetra orci in, varius nunc</p>\n                    <h3 style=\"color:#00bcd4; font-size:1em\">Lorem Ipsum Dolor Sit Amet, Consectetur\n                        Adipisci Ask</h3>\n                    <div class=\"about \">\n                        <div class=\"about1\">\n                            <h3>20</h3>\n                            <h5>Web Projects</h5>\n                        </div>\n                        <div class=\"about1\">\n                            <h3>20</h3>\n                            <h5>Web Projects</h5>\n                        </div>\n                        <div class=\"about1\">\n                            <h3>20</h3>\n                            <h5>Web Projects</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 lg1\">\n                    <h3> Pellentesque sit amet ex at nisl posuere</h3>\n                    <p>Nullam pulvinar nunc eget tortor elementum, sed vehicula massa vestibulum. Aenean gravida arcu\n                        viverra nisl euismod laoreet. Fusce accumsan vel arcu at tincidunt. Nulla non nulla ultrices,\n                        pharetra orci in, varius nunc.</p>\n                    <h3 style=\"color:#00bcd4; font-size:1em\">Lorem Ipsum Dolor Sit Amet, Consectetur\n                        Adipisci Ask</h3>\n                    <button class=\"btn\">REDMORE</button>\n                </div>\n                <div class=\"col-md-6\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/ab7.jpg\"\n                        alt=\"\" style=\"max-width: 100%\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"text-center\">\n        <h1 style=\"    font-family: 'Poppins', sans-serif;\n        color: #00bcd4;\">MY PROJECTS</h1>\n    </div>\n    <div class=\"container  \">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"container1 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g1.jpg\"\n                        alt=\"Avatar\" class=\"image1\" style=\"max-width: 100%\">\n                    <div class=\"overlay1\">\n                        <div class=\"text1\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"container2 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g2.jpg\"\n                        alt=\"Avatar\" class=\"image2\" style=\"max-width: 100%\">\n                    <div class=\"overlay2\">\n                        <div class=\"text2\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"container3 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g31.jpg\"\n                        alt=\"Avatar\" class=\"image2\" style=\"max-width: 100%\">\n                    <div class=\"overlay3\">\n                        <div class=\"text3\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"container4 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g4.jpg\"\n                        alt=\"Avatar\" class=\"image4\" style=\"max-width: 100%\">\n                    <div class=\"overlay4\">\n                        <div class=\"text4\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"container1 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g5.jpg\"\n                        alt=\"Avatar\" class=\"image1\" style=\"max-width: 100%\">\n                    <div class=\"overlay1\">\n                        <div class=\"text1\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"container2 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g6.jpg\"\n                        alt=\"Avatar\" class=\"image2\" style=\"max-width: 100%\">\n                    <div class=\"overlay2\">\n                        <div class=\"text2\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"container1 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g7.jpg\"\n                        alt=\"Avatar\" class=\"image1\" style=\"max-width: 100%\">\n                    <div class=\"overlay1\">\n                        <div class=\"text1\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"container4 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g8.jpg\"\n                        alt=\"Avatar\" class=\"image4\" style=\"max-width: 100%\">\n                    <div class=\"overlay4\">\n                        <div class=\"text4\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"container3 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g9.jpg\"\n                        alt=\"Avatar\" class=\"image2\" style=\"max-width: 100%\">\n                    <div class=\"overlay3\">\n                        <div class=\"text3\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<tp-footer>\n</tp-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5 pt-5  \">\n    <div class=\"text-center lg mb-5\">\n        <h1> LOG IN FORM</h1>\n    </div>\n    <div class=\"d-flex justify-content-between row mb-2\">\n        <div class=\"col-md-8\">\n            <div class=\"text-center\">\n                <h5 class=\"mb-3\">MANAGE YOUR GADGETS ACCOUNT</h5>\n                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget Lorem ipsum\n                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ege</p>\n            </div>\n            <img src=\"https://demo.w3layouts.com/demos_new/template_demo/18-05-2019/gadget_signup_form-demo_Free/1576182126/web/images/b11.png\"\n                alt=\"\" style=\"max-width: 100%\">\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"card mt-auto shadow\">\n                <div class=\"card-body \">\n                    <div class=\"text-center mb-3\">\n                        <h3 style=\"font-weight: bold\">Login here</h3>\n                        <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAD29vbr6+vJycnPz8/j4+PFxcWzs7Ovr6/a2tpzc3Px8fGhoaGFhYX5+fmQkJBVVVVoaGgMDAyBgYG+vr7d3d0TExNNTU05OTkqKip5eXmNjY3U1NRDQ0MlJSWZmZkxMTFPT08dHR1AQEBeXl4pKSlcXFyenp4RERE1NTW8f+7JAAANKUlEQVR4nNVd52KjMAxuILOZTUJGm7bQcR3v/4B3NI0lGxtsSYbc96slibGwrS1xcxMdya4/mS+m68P3837T6/U2++fvw3q6mE/6t7P4t4+KYZavj716HNd5Nux6ohSk2eKpgTaMt0WWdj3lAKTj6SaAOoXp+L+gcnC6p1D3i/vFoGsC6jGaMqhTSznqmgwXBg8C5P0SeYUrmeZ7MfpKbFbXdSb7d6LknfFyNbt1OW9avs3xY3v6HGej/uDx8XHQH2Xjz9P249jEcffzZdfE/UOyqpvj23Q+2rmnuRyO5g9vdQOckhZpsWG2dc7tuB376irD8eLbOc62S80uWbioW/VDn/1ysHIt5razdXTsz2lGnVGSre1DrkTn7YuJdS4PfeawfbtUnYjMOQSPhWUaaxn+PrKtZPEoMrYvlpY5vM7ljksyf7Y8vxZFx7h6+3dpPWvwXr3JWPgeLsxeKrfexlCx0qokOrQiOaocZhWLm1u0ifgcJ6looKuYx2NZofEusnDsmzdcxJbGVa2CK49qYd7tvQ0TJzV5ziLarRLDt3Tflp06MBwjT5EYzqPxKOdxbmPF3Lh3FPFv8NC7dlX+mcHhIvBUQzi1JXwBhpqxlR5ff4QvXdhshqZxJzp4UnR2AjH001gICqpUc6i8dhdmGL7iiWzEZNVQe3RrqWFJ0I0aoWd9exU79AJ9p95KDKkT2L0zeqDNR0AwagS+XoMjOtUOI3sVNQIPEhMUwEGQRI3JdMtjMDR+w2I3KR5JXItgQNOwGEcnwXKwG5+lC9gy3tBFf4GGydmTWg4H2Xgyn4yzwZCvjuRobgV1EKyLfrKmMxudPno6PlYjHpmfaDCijor3es6Yym7lyjg55jvGuHgVSTwC24P0Mzj7tPh2Ef580lcSn0WCvYgtejIXvXVEWjSsyQuJd1mwcjPDUyBO4NY39v1OpRE/wNC9gJxORE1m5rN+F0yJexVN8ynsl8ht+Eq7t+k7agLR8YJ01CAnI3b8kjSGtClhrwqaixBrXQGu4gT9jGQuWYJTHsgot8LGlP9WRxyCZPC60xfqQXJmo+PgLfiRJCSxUXr60Dvldsjp73mYkaCgcJllQSbwn5ZDuCHmNn5nGdmXBNMrqddhmnBPiNXt4OcvPt9HXIJwCJd/WAT2et/h98RH0cMXvwx8IAbcuU2+eCPcFW275j2ANBGCgDJtJAoI3G0W8GukcBOCL7VZfN7Iw2+MjlaTCl6obxKsypEIgSQtAyRUg8GPRGH4Hk0sk6UhnKGifVovFOF7BD4qlyhMOIrIqVH3NThH9+H3yMQI7PUICXIQ66/xSKBtRjgKggT2NuG3Ryq4WwMHjZmgIJ4kKezl4RMA/dSpwaPTGm4UzizT5CCc2SBT0cUlYQkJZoxcOQl5CjB/h+sMncJwr4n0ElIWsZEAOEgE96iMNoNB8LLDJE62j5HKTbBgxAnsfYVPooEEMEEISygpCy8g5CDCItoUFijtIfguJWwKE9PwacBJ3Fc/BK2Z4MNf2mbIRvg8EDutakWgVBIcpDE2KWmbgkysmEbwEcXfJVE6WgUlIASKjblQEIyjuIBlqysv+EOYCWinufHJ1+UDigMxtU6QD4qfX7kWDWkDpFOc3HGOIS1nHYSevhlBq6SEueQVmjMoyQMgMB606+oyyY1vKeARAUEiYmchvgrCkFR9Fh5K8wMpNmunBbg9ZcwISqnIbKa2iw/O3/0/FD5Yfg6clFRxE0tY0NgeCmADN4WoPWVEI0taErScPPVzsBKVI47EvHB0Sxi0xErFTZVLFHYZKZJ+dRRCECOtXKFltVwbheAzugSXlKyghO5uYp5DYmmOks+XU6cGJCboyUVkTNDmA1rkr+scjiG11ODaKAR5cT6IYBlQK3p5yQluUAzEErCpzqxTSUNSqkeJGP13SpDL01Q2wdlz/qT/S4BsUAZAnpBySJ0TFtWA5KpJWhpbM8iFojCh8j/g9eTSjFjiglzUpNMEjIY6XjRmSu9loIYoWY3yshHlfYmQdGB/MCak2hXleHY02/AHcQ4io0pHqWmlV0apOIzaSfnoYQlGbaHyuJUSUA3IaRB0sE6RCcZ8RmgQkP+cKrcY25RxapC5k6C/WV1YIlDIKYCFYNgOtFRCCgsCNbXbDWIVxC/UMH3IZCNrpT+Q90bxisYV/5wA1/lgjSgvEnmti1RQeg6WBbMIVlpzs2ZT+EM5TRcgG5lDSi8is8pUmTtTmBivSlRa6nOrjlUy5hpkNbvjTG6fKw3cySgBfQBzmOYrxeAWIiCwJ6MspiP4WPhdHeX8pvzuOkpte4YkA4E2aGKxYH4LI6XI7G9UUwGJriVCCjj/wEA4bQPqjUSDMBnfsER7CggYylIochQDC3rtgMoYoFCmtw6/qISncV+A1lD0HN4IWIoyjdLQOZTkpT+wd1D2hlAXI8RLlTwUYGBncFZxL9XqTkn8Z0md5oJKk1NvHMW6vSKdRk4vBQxJL2GhphFYgfRSMdsCY0mKRkn2s0S2hZh9qCO0aUSv9ybaKQ3Zh8rG5zjvLEgDNTjhhqTIxlcPW7Zb5j9kX3ZabDhJN5RWx2QO4otSJt4AX9EY4TUdSkRMEGsXv8s/ZM1WcSEnphDU8H3N/y2NwcIn8/S4EulgqQGMnB36W/g+Ia9/epV+9xG0e0yMcKkUZvmrjZIaHEQ3qxbYVhspFxvfq8VXBXvB5q/K71fGKtRspFpbDui+jFxoCjpRilxCgboFjzxfjdA6Khae38jkYihUuvwH40vkPKrhytEgpMJnpiLJUQc+XwVW+hPYVv9xVcN+gJpWi5xLIShTP/+qvDameSZYolcwG3WrqZz9dsq6sFSW+uPWPlcqeBxHOZ/OuX/AahgHQDTwVIITkjZT87mp+iUiZJhu6Du1smbqf6oRnIaqaH4gP3ClEV/yS9S5JLqbzdeziCEnUqiO4YV3goOTtDFiVZD2qJsKJPzFfwgHkcLBmD7uepB0ZfCCKdap6p4IJY3hTrUgULxHSsCDpg3KVrCdH3UFaSSCTQ8OUghFhSpusXLYEYI7IMBDR+E0dS2wVSI9QhGAUGUSXimELoJKGRT7iVe0piHMGw98Ez8aiNyGcNN4FV0GgoJGwPq0/Bl1NcQvzO/k6YuQHINC/Uq7DJ4/fzNYurtXHfx5PNg4urowcFyvQQtsFOCfnwHP3UhMAPPcc6R4JepW+OYqQoK3ae2CfefJa2rfiB4BnkcR+ExufAJL4mdgRFbWLPCjEOy4ijkPNqyPWdbyHi3hxSDAzqlqe6Ce+BRUVV96HB8++xTOjiU9CHo9NWdHSTUMDoKHTx5Egs2rBier2YaScoyGoZkHPtV+F3WVa1rE9tnMGU3BftSG1vo5WIlN8rUD4n7QVPkMS2hX1pEiXZ/FJ+4b9Ua95YO4g0PLg+qs+kPdAWm/qJcY0PjAlWWMakLq7JWuTmGJukX06baO3hBUM1KcFoJ+qDGGEad0n9fE50udyEIFN4WoArLG1kIFE07ncIxmrP5wuspQ7VytHQJfcxVcxinb9obTB4EcDnUE4tPqeFqf1bu2CocPArG/Bo9oAd+0M6Si1y3sDALZOk0vtERxJKvvNF5PKF9Yp41SXBpNEJTOZNNeu96kdqUZ7dHmWA5u62yJekdpnhAEi0jEG8sjFRf50KrKW2tOYDcsXhbUp8rLeYzs94oe2K24P6Oys1Cai1/cBUs885HE6ggVAnNO2HHrGXbBMUFDtWnbh2iDEYvCh9A7OIhyR/b6yW2dHAv0Lm5LVJ/jH03F/ERz2rQUTmuAplg/uT6oB458Ym7TaqzCCSwRcTJdUH0hshR7OVyO1bg7DBP7hAL71+HFB+YVp6dXKMBHgXliaPmwJtrV8hetUuKCYiiadA5OI9FSuS7abLuUuHDRavCLciml6FqmzNkqi/MqknBY1oCU36y1fvohsYOIkxVJhUBikwItabTcBd0bh2eUmqm2RcmVhQUeZRAxzTIQQ4PJNJn1biRaxXLWTgqUB2511WPDqLrTD95E2xkdYqe73Vn1GfrJ697AP0OfB7NyQbjIIALYlT7XTqJAXeh1kyhS+HrNJApV9l6LoK+CyWQAKbGTR2RsBMujk6JraiwoZMvrY7XOp0O8y4V8k1keJFqeGYheWREE4VYoZ1yT1BBpLldF8tR861bwJN/C44JF891bAPm1Fz64BgtRqrGcA0nXYuMu3g69oFueGoWHmph1kQJ9xkGqJV8TugrQCDbNa8IyziuO67GW7gdWj8eiZfqKSEK+Bu1u1VY4TAXtRRO5HdrJSNrRcbbxRaAbs/hG1bYtCeFCEnevRmg4SMAkTuOPsr9ZuwKiBv0Y2uodv9O/JNJcNoX/KxfuMyiBkEaJDXgQai4uj76ENje9rt1ZweB030yEE/enq109jHT8QCpQnI6v8Ow5kWaLEL/V2yL7n6hTGGb5uqkL7XGdZ2IBlo6Q7PqT+WK6Phyf92WIZ7N/Ph7W08V80r9tQSP7CxY8rVd8/vWFAAAAAElFTkSuQmCC\"\n                            alt=\"\" style=\"height: 100px\">\n                    </div>\n                    <form nz-form [formGroup]=\" validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\n                        <nz-form-item>\n                            <nz-form-control nzErrorTip=\"Please input your email!\">\n                                <nz-input-group nzPrefixIcon=\"user\">\n                                    <input type=\"email\" nz-input formControlName=\"email\" placeholder=\"Email\" />\n                                </nz-input-group>\n                            </nz-form-control>\n                        </nz-form-item>\n                        <nz-form-item>\n                            <nz-form-control nzErrorTip=\"Please input your Password!\">\n                                <nz-input-group nzPrefixIcon=\"lock\">\n                                    <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\" />\n                                </nz-input-group>\n                            </nz-form-control>\n                            <label class=\"error mt-2\" style=\"color: red;\">{{errorMessage}}</label>\n                        </nz-form-item>\n                        <nz-form-item>\n                            <nz-form-control>\n                                <label nz-checkbox formControlName=\"remember\">\n                                    <span>Remember me</span>\n                                </label>\n                                <a class=\"login-form-forgot\" class=\"login-form-forgot\"\n                                    [routerLink]=\"['/changepassword']\" routerLinkActive=\"router-link-active\">Forgot\n                                    password</a>\n                                <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\"\n                                    (click)=\"tryLogin(validateForm.value)\">Log in</button>\n                                Or\n                                <a [routerLink]=\"['/signin']\" routerLinkActive=\"router-link-active\"\n                                    style=\"color: rgb(232, 0, 0);\">register now!</a>\n                            </nz-form-control>\n                        </nz-form-item>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<tp-footer></tp-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"container \">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top \" id=\"navbar\">\n        <div class=\"container justify-content-between\">\n            <div>\n                <button class=\"navbar-toggler \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n                    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <a class=\"navbar-brand ml-5 text-center\" routerLink=\"/index\">\n                    <img src=\"https://test365.vn/templates/as002057/images/logo.png\" alt=\"\"\n                        style=\"width:100px; margin-left: 20px\"></a>\n            </div>\n\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\" style=\"flex-grow: 0;\">\n                <ul class=\"navbar-nav m-auto\">\n                    <!-- <li class=\"nav-item \">\n                        <a class=\"nav-link\" routerLink='/index'>Home <span class=\"sr-only\">(current)</span></a>\n                    </li> -->\n                    <!-- <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/intro']\" routerLinkActive=\"router-link-active\">About</a>\n                    </li> -->\n                    <!-- <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/feedback']\" routerLinkActive=\"router-link-active\">Feed\n                            Back</a>\n                    </li> -->\n                    <!-- <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">\n                            Contact</a>\n                    </li> -->\n                    <li class=\"nav-item dropdown\">\n                        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            {{user.displayName}}\n                        </a>\n                        <div class=\"dropdown-menu bg-light lg\" aria-labelledby=\"navbarDropdown\">\n                            <!-- <a class=\"dropdown-item\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\">Log\n                                In</a>\n                            <a class=\"dropdown-item\" [routerLink]=\"['/signin']\"\n                                routerLinkActive=\"router-link-active\">Sign In</a> -->\n                            <a class=\"dropdown-item\" [routerLink]=\"['/changepassword']\"\n                                routerLinkActive=\"router-link-active\">\n                                Change\n                                Password</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/update']\"\n                                routerLinkActive=\"router-link-active\">Update\n                                Information</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" (click)=\"logout()\">Log out</a>\n                        </div>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </nav>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resetpw/resetpw.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resetpw/resetpw.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>resetpw works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mb-5 pt-5 mt-5\">\n    <div class=\"text-center\">\n        <h1>REGISTER FORM</h1>\n    </div>\n    <div class=\"row d-flex justify-content-between pt-3\">\n        <div class=\"col-md-7\">\n            <div class=\"text-center\">\n                <h5 class=\"mb-3\">MANAGE YOUR GADGETS ACCOUNT</h5>\n                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget Lorem ipsum\n                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ege</p>\n            </div>\n            <img src=\"https://demo.w3layouts.com/demos_new/template_demo/18-05-2019/gadget_signup_form-demo_Free/1576182126/web/images/b11.png\"\n                alt=\"\" style=\"max-width: 100%\">\n        </div>\n        <div class=\"col-md-5 \">\n            <div class=\"card shadow\">\n                <div class=\"card-body \">\n                    <div class=\"text-center\">\n                        <h1>Register</h1>\n                    </div>\n                    <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n                        <nz-form-item>\n                            <nz-form-label [nzSm]=\"9\" [nzXs]=\"24\" nzRequired nzFor=\"email\">E-mail</nz-form-label>\n                            <nz-form-control [nzSm]=\"11\" [nzXs]=\"24\" nzErrorTip=\"The input is not valid E-mail!\">\n                                <input nz-input formControlName=\"email\" type=\"email\" id=\"email\" />\n                            </nz-form-control>\n                        </nz-form-item>\n                        <nz-form-item>\n                            <nz-form-label [nzSm]=\"9\" [nzXs]=\"24\" nzFor=\"password\" nzRequired>Password</nz-form-label>\n                            <nz-form-control [nzSm]=\"11\" [nzXs]=\"24\" nzErrorTip=\"Please input your password!\">\n                                <input nz-input type=\"password\" id=\"password\" formControlName=\"password\"\n                                    (ngModelChange)=\"updateConfirmValidator()\" />\n                            </nz-form-control>\n                        </nz-form-item>\n                        <nz-form-item>\n                            <nz-form-label [nzSm]=\"9\" [nzXs]=\"24\" nzFor=\"checkPassword\" nzRequired>Confirm Password\n                            </nz-form-label>\n                            <nz-form-control [nzSm]=\"11\" [nzXs]=\"24\" [nzErrorTip]=\"errorTpl\">\n                                <input nz-input type=\"password\" formControlName=\"checkPassword\" id=\"checkPassword\" />\n                                <ng-template #errorTpl let-control>\n                                    <ng-container *ngIf=\"control.hasError('required')\">\n                                        Please confirm your password!\n                                    </ng-container>\n                                    <ng-container *ngIf=\"control.hasError('confirm')\">\n                                        Two passwords that you enter is inconsistent!\n                                    </ng-container>\n                                    <label class=\"error\">{{errorMessage}}</label>\n                                    <label class=\"success\">{{successMessage}}</label>\n                                </ng-template>\n                            </nz-form-control>\n                        </nz-form-item>\n\n                        <nz-form-item nz-row class=\"register-area\">\n                            <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\n                                <label nz-checkbox formControlName=\"agree\">\n                                    <span>I have read the <a>agreement</a></span>\n                                </label>\n                            </nz-form-control>\n                        </nz-form-item>\n                        <nz-form-item nz-row class=\"register-area\">\n                            <nz-form-control [nzSpan]=\"20\" [nzOffset]=\"6\">\n                                <button nz-button nzType=\"primary\" class=\"w-50\"\n                                    (click)=\"tryRegister(validateForm.value)\">Register</button>\n                            </nz-form-control>\n                        </nz-form-item>\n                        <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\"\n                            style=\"color: rgb(232, 0, 0);\"> Or Login now!</a>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<tp-footer></tp-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navigation></navigation>\n<div class=\"container d-flex flex-column align-items-center justify-content-center\" style=\"height: 80vh;\">\n\n    <h1 class=\"header\">CẬP NHẬT THÔNG TIN SINH VIÊN</h1>\n    <div class=\"my-3 mx-auto\" style=\"width: 100%; max-width: 400px;\">\n        <div class=\" card w-100\">\n            <div class=\"card-body mt-4\">\n                <form [formGroup]=\"profileForm\">\n                    <div class=\"form-group\">\n                        <div class=\"mb-3\">\n                            <label>Họ Và Tên:</label>\n                            <input value=\"{{ user.displayName }}\" type=\"text\" formControlName=\"name\"\n                                class=\"form-control\" required />\n                        </div>\n                        <div class=\"mb-3\">\n                            <label>MSSV</label>\n                            <input value=\"{{ user.studentId }}\" type=\"text\" formControlName=\"studentId\"\n                                class=\"form-control\" required />\n                        </div>\n                    </div>\n                </form>\n                <div class=\"text-center\">\n                    <p style=\"color: red;\" id=\"result\"></p>\n                    <button type=\"submit\" (click)=\"save(profileForm.value)\" class=\"btn btn-primary mr-3\">\n                        Lưu\n                    </button>\n                </div>\n\n            </div>\n        </div>\n\n\n    </div>\n\n</div>\n<tp-footer></tp-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navigation></navigation>\n<div class=\"container d-flex flex-column align-items-center justify-content-center\" style=\"height: 80vh;\">\n\n    <h1 class=\"header\">CẬP NHẬT THÔNG TIN SINH VIÊN</h1>\n    <div class=\"my-3 mx-auto\" style=\"width: 100%; max-width: 400px;\">\n        <div class=\" card w-100\">\n            <div class=\"card-body mt-4\">\n                <div *ngIf=\"user.studentId\">\n                    <div class=\"d-flex\">\n                        <p class=\"col-4\">Họ Và Tên:</p>\n                        <p class=\"col-8\">{{ user.displayName }}</p>\n                    </div>\n                    <div class=\"d-flex\">\n                        <p class=\"col-4\">MSSV:</p>\n                        <p class=\"col-8\">{{ user.studentId }}</p>\n                    </div>\n                </div>\n                <form *ngIf=\"!user.studentId\" [formGroup]=\"profileForm\">\n                    <div class=\"form-group\">\n                        <label>Họ Và Tên:</label>\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\" required />\n                        <label>MSSV</label>\n                        <input type=\"text\" formControlName=\"studentId\" class=\"form-control\" required />\n                    </div>\n                </form>\n                <div class=\"text-center\">\n                    <p style=\"color: red;\" id=\"result\"></p>\n                    <button *ngIf=\"!user.studentId\" type=\"submit\" (click)=\"save(profileForm.value)\"\n                        class=\"btn btn-primary mr-3\">\n                        Lưu\n                    </button>\n                    <button *ngIf=\"user.studentId\" type=\"submit\" [routerLink]=\"['/index']\"\n                        routerLinkActive=\"router-link-active\" class=\"btn btn-primary\">\n                        Chọn Môn Thi\n                    </button>\n                </div>\n\n            </div>\n        </div>\n\n\n    </div>\n\n</div>\n<tp-footer></tp-footer>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-item {\n  margin: 0px 15px; }\n\n.lg > a {\n  color: #b40606 !important; }\n\n.nav-link-icon {\n  color: gray;\n  font-size: 18px;\n  margin-right: 10px; }\n\n.nav-link-icon > i {\n  margin-right: 6px; }\n\n.nav-link-inner--text {\n  font-size: 15px; }\n\n.bg-dark {\n  font-family: 'Open Sans', Arial, serif; }\n\n.nav-link {\n  font-size: 18px;\n  color: #b40606 !important; }\n\n.fa {\n  padding: 10px; }\n\n.nav-link-icon :hover {\n  color: #ffffff; }\n\n:host ::ng-deep .ant-back-top {\n  bottom: 100px; }\n\n:host ::ng-deep .ant-back-top-inner {\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 50%;\n  background-color: gray;\n  color: #ffffff;\n  text-align: center;\n  font-size: 20px; }\n\n:host ::ng-deep strong {\n  color: #1088e9; }\n\n.info {\n  color: gray;\n  margin: 30px  0px 16px; }\n\n.wrapper {\n  width: 240px; }\n\nbutton {\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXluZ3V5ZW4vRG9jdW1lbnRzL0FuZ3VsYXIvQXNzaWdubWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLGdCQUFpQixFQUFBOztBQUdqQjtFQUVFLHlCQUFnQyxFQUFBOztBQUdqQztFQUNFLFdBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQ0YsRUFBQTs7QUFDQTtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGVBQ0YsRUFBQTs7QUFJQTtFQUNJLHNDQUFzQyxFQUFBOztBQUUxQztFQUNJLGVBQWU7RUFDbEIseUJBQWdDLEVBQUE7O0FBRWpDO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNHLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbXtcbm1hcmdpbjogMHB4IDE1cHggO1xufVxuXG4ubGcgPiBhe1xuICAgIC8vICBjb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6IHJnYigxODAsIDYsIDYpICFpbXBvcnRhbnRcblxufVxuIC5uYXYtbGluay1pY29ue1xuICAgY29sb3I6Z3JheTtcbiAgIGZvbnQtc2l6ZTogMThweDtcbiAgIG1hcmdpbi1yaWdodDogMTBweFxuIH1cbiAubmF2LWxpbmstaWNvbj4gaXtcbiAgIG1hcmdpbi1yaWdodDogNnB4O1xuIH1cbiAubmF2LWxpbmstaW5uZXItLXRleHQge1xuICAgZm9udC1zaXplOiAxNXB4XG4gfVxuLy8gIC5uYXZiYXItbmF2e1xuLy8gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbi8vICB9XG4gLmJnLWRhcmt7XG4gICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIHNlcmlmO1xuIH1cbiAubmF2LWxpbmt7XG4gICAgIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHJnYigxODAsIDYsIDYpICFpbXBvcnRhbnRcbiB9XG4gLmZhe1xuICAgcGFkZGluZzogMTBweDtcbiB9XG4gLm5hdi1saW5rLWljb24gOmhvdmVye1xuICAgY29sb3I6ICNmZmZmZmY7XG4gfVxuIDpob3N0IDo6bmctZGVlcCAuYW50LWJhY2stdG9wIHtcbiAgICBib3R0b206IDEwMHB4O1xuICB9XG5cbiAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtYmFjay10b3AtaW5uZXIge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgOmhvc3QgOjpuZy1kZWVwIHN0cm9uZyB7XG4gICAgY29sb3I6ICMxMDg4ZTk7XG4gIH1cbiAgLmluZm97XG4gICAgY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luOiAzMHB4ICAwcHggMTZweDtcbiAgfVxuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.isCollapsed = false;
    }
    notify() {
        console.log('notify');
    }
    toggleCollapsed() {
        this.isCollapsed = !this.isCollapsed;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/vi */ "./node_modules/@angular/common/locales/vi.js");
/* harmony import */ var _angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./introduce/introduce.component */ "./src/app/introduce/introduce.component.ts");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./exam/exam.component */ "./src/app/exam/exam.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _user_user_resolver__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user/user.resolver */ "./src/app/user/user.resolver.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./resetpw/resetpw.component */ "./src/app/resetpw/resetpw.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");


































Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_11___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"], _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_15__["ChangepasswordComponent"], _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_18__["IntroduceComponent"], _exam_exam_component__WEBPACK_IMPORTED_MODULE_19__["ExamComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_29__["UserComponent"],
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_30__["NavigationComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_31__["FooterComponent"],
            _resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_32__["ResetpwComponent"],
            _update_update_component__WEBPACK_IMPORTED_MODULE_33__["UpdateComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__["AngularFireAuthModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_24__["NgxPaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                // { path: 'feedback', component: FeedbackComponent },
                // { path: 'intro', component: IntroduceComponent },
                // { path: 'contact', component: ContactComponent },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"], resolve: { data: _user_user_resolver__WEBPACK_IMPORTED_MODULE_28__["UserResolver"] } },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
                { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"] },
                { path: 'changepassword', component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_15__["ChangepasswordComponent"] },
                // { path: 'changepassword', component: ChangepasswordComponent, resolve: { data: UserResolver } },
                { path: 'index/:subjectId', component: _exam_exam_component__WEBPACK_IMPORTED_MODULE_19__["ExamComponent"], resolve: { data: _user_user_resolver__WEBPACK_IMPORTED_MODULE_28__["UserResolver"] } },
                { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_29__["UserComponent"], resolve: { data: _user_user_resolver__WEBPACK_IMPORTED_MODULE_28__["UserResolver"] } },
                { path: 'update', component: _update_update_component__WEBPACK_IMPORTED_MODULE_33__["UpdateComponent"], resolve: { data: _user_user_resolver__WEBPACK_IMPORTED_MODULE_28__["UserResolver"] } },
            ], { enableTracing: true }),
        ],
        providers: [_core_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"], _core_user_service__WEBPACK_IMPORTED_MODULE_27__["UserService"], _user_user_resolver__WEBPACK_IMPORTED_MODULE_28__["UserResolver"], _core_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["vi_VN"], }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/changepassword/changepassword.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[nz-form] {\n  max-width: 100%; }\n\nbutton {\n  margin-left: 8px; }\n\n.img {\n  max-width: 100%; }\n\n.change > label {\n  float: left; }\n\n.ant-form-item > label {\n  float: left; }\n\nlabel {\n  float: left !important;\n  color: red; }\n\n.formchange > input {\n  width: 70%;\n  height: 40px;\n  margin: 15px 14px; }\n\n.formchange > button {\n  width: 50%;\n  height: 40px;\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlcGFzc3dvcmQvY2hhbmdlcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcXV5bmd1eWVuL0RvY3VtZW50cy9Bbmd1bGFyL0Fzc2lnbm1lbnQvc3JjL2FwcC9jaGFuZ2VwYXNzd29yZC9jaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQ0NFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDRSxlQUFlLEVBQUE7O0FBRWxCO0VBQ0UsV0FBWSxFQUFBOztBQUVkO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVUsRUFBQTs7QUFFWjtFQUNFLFVBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW256LWZvcm1dIHtcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7IH1cblxuLmltZyB7XG4gIG1heC13aWR0aDogMTAwJTsgfVxuXG4uY2hhbmdlID4gbGFiZWwge1xuICBmbG9hdDogbGVmdDsgfVxuXG4uYW50LWZvcm0taXRlbSA+IGxhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxubGFiZWwge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmVkOyB9XG5cbi5mb3JtY2hhbmdlID4gaW5wdXQge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTVweCAxNHB4OyB9XG5cbi5mb3JtY2hhbmdlID4gYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG4iLCJbbnotZm9ybV0ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbiAuaW1ne1xuICAgbWF4LXdpZHRoOiAxMDAlO1xuIH1cbi5jaGFuZ2UgPmxhYmVsIHtcbiAgZmxvYXQ6IGxlZnQgO1xufVxuLmFudC1mb3JtLWl0ZW0gPiBsYWJlbHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5sYWJlbHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHJlZDtcbn1cbi5mb3JtY2hhbmdlID5pbnB1dHtcbiAgd2lkdGg6IDcwJSA7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxNXB4IDE0cHg7XG59XG4uZm9ybWNoYW5nZSA+YnV0dG9ue1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.ts ***!
  \************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var core_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/user.model */ "./core/user.model.ts");







// import { Observable, Observer } from 'rxjs';
let ChangepasswordComponent = class ChangepasswordComponent {
    constructor(fb, router, authService, userService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.user = new core_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
        // validateForm: FormGroup;
        this.change = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    ngOnInit() {
        this.router.data.subscribe((routeData) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let data = routeData['data'];
            if (data) {
                this.user = yield this.userService.getUserProfile(data.uid);
            }
            else {
                console.log('---errrr');
            }
        }));
    }
    resetPassword(value, email) {
        this.email = value.email;
        // email = this.user.email
        // email = value.email
        if (!this.email) {
            console.log('Không được để trống ');
            document.getElementById('result2').innerHTML = "Không được để trống nha! Cảm ơn";
        }
        else {
            console.log('email');
            this.authService.ResetPassword(this.email)
                .then(res => {
                document.getElementById('result').innerHTML = "Đổi thành công rồi nha.";
                console.log('------changepass', this.user);
            }, err => {
                document.getElementById('result2').innerHTML = " Email không chính xác vui lòng kiểm tra lại";
                console.log('email không chính xác vui lòng kiểm tra lại', err);
            });
        }
        console.log("===================", this.email);
    }
};
ChangepasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-changepassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./changepassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./changepassword.component.scss */ "./src/app/changepassword/changepassword.component.scss")).default]
    })
], ChangepasswordComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  background-color: rgba(0, 0, 0, 0.5);\n  margin: auto; }\n\n.bg {\n  background-position: center;\n  background-attachment: fixed; }\n\ninput[type=\"text\"], input[type=\"email\"], textarea {\n  width: 70%;\n  padding: 10px;\n  font-size: 16px;\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0);\n  font-weight: normal;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-bottom: 5px solid #ffffff;\n  font-family: 'Muli', sans-serif;\n  margin-bottom: 30px;\n  outline: none;\n  letter-spacing: 1px; }\n\ninput[type=\"submit\"] {\n  width: 100%;\n  background-color: #171515;\n  font-size: 16px;\n  color: #fff;\n  border: none;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXluZ3V5ZW4vRG9jdW1lbnRzL0FuZ3VsYXIvQXNzaWdubWVudC9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFpQztFQUVqQyxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBOztBQUVoQztFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiAgICAvLyB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5iZ3tcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdICxpbnB1dFt0eXBlPVwiZW1haWxcIl0sIHRleHRhcmVhe1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnTXVsaScsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5pbnB1dFt0eXBlPVwic3VibWl0XCJde1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE1MTU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG5cbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");





let AuthGuard = class AuthGuard {
    constructor(afAuth, userService, router) {
        this.afAuth = afAuth;
        this.userService = userService;
        this.router = router;
    }
    canActivate() {
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser()
                .then(user => {
                this.router.navigate(['/user']);
                return resolve(false);
            }, err => {
                return resolve(true);
            });
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");






let AuthService = class AuthService {
    constructor(afAuth, afs) {
        this.afAuth = afAuth;
        this.afs = afs;
    }
    doRegister(value) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    doLogin(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const credential = yield firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithEmailAndPassword(value.email, value.password);
            return this.updateUserData(credential.user);
        });
    }
    doLogout() {
        return new Promise((resolve, reject) => {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser) {
                this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    }
    updateUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        return userRef.set(data, { merge: true });
    }
    ResetPassword(value) {
        // email = value.email
        console.log("email ");
        return this.afAuth.auth.sendPasswordResetEmail(value, { url: `${window.location.origin}/login` });
        // console.log("====== sucess", value);
        // firebase.auth().sendPasswordResetEmail(value,
        //   { url: 'http://localhost:4200/_/core' })
        // document.getElementById('result').innerHTML = "Thành công! Một liên kết đặt lại mật khẩu đã gữi đến email của bạn."
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/core/user.model.ts":
/*!************************************!*\
  !*** ./src/app/core/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    // provider?: string
    constructor() {
        this.uid = '';
        this.email = '';
        this.photoURL = '';
        this.displayName = '';
        // this.provider = ''
    }
}


/***/ }),

/***/ "./src/app/core/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);






let UserService = class UserService {
    constructor(db, afAuth, afs) {
        this.db = db;
        this.afAuth = afAuth;
        this.afs = afs;
    }
    getCurrentUser() {
        return new Promise((resolve, reject) => {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user);
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    }
    updateCurrentUser(user, value) {
        console.log('---- update', value);
        const userRef = this.afs.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email,
            displayName: value.name,
            photoURL: user.photoURL,
            studentId: value.studentId,
        };
        return userRef.set(data, { merge: true });
    }
    getUserProfile(uid) {
        return this.afs
            .collection('users')
            .doc(uid)
            .ref.get()
            .then(user => {
            console.log('0--===', user);
            if (user.exists) {
                console.log('=--- user', user.data());
                return user.data();
            }
            return null;
        })
            .catch(function (error) {
            console.log('Error getting document:', error);
            return null;
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/exam/exam.component.scss":
/*!******************************************!*\
  !*** ./src/app/exam/exam.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.ex {\n  min-height: 80vh; }\n\n.card-body {\n  padding: 1px 0px 0px 0px;\n  margin: 10px; }\n\n.sticky {\n  position: fixed;\n  top: 63px;\n  left: 50%;\n  transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  z-index: 20;\n  width: 100%; }\n\n@media screen and (min-width: 768px) {\n    .sticky {\n      width: 40%; } }\n\n.sticky + .content {\n  padding-top: 102px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXluZ3V5ZW4vRG9jdW1lbnRzL0FuZ3VsYXIvQXNzaWdubWVudC9zcmMvYXBwL2V4YW0vZXhhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBOztBQUduQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNFLHdCQUF3QjtFQUN4QixZQUFZLEVBQUE7O0FBSWQ7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBQ1g7SUFYRjtNQVlJLFVBQVUsRUFBQSxFQUViOztBQUVEO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9leGFtL2V4YW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gXG4gIC5leHtcbiAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XG4gIH1cbiAgLmNhcmQtYm9keXtcbiAgICBwYWRkaW5nOiAxcHggMHB4IDBweCAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIFxuICBcbiAgLnN0aWNreSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNjNweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICB3aWR0aDogNDAlOyAgXG4gICAgfVxuICB9XG4gIFxuICAuc3RpY2t5ICsgLmNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAxMDJweDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/exam/exam.component.ts":
/*!****************************************!*\
  !*** ./src/app/exam/exam.component.ts ***!
  \****************************************/
/*! exports provided: ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/user.model */ "./src/app/core/user.model.ts");







let ExamComponent = class ExamComponent {
    constructor(authService, userService, http, router) {
        this.authService = authService;
        this.userService = userService;
        this.http = http;
        this.router = router;
        this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
        this.isSubmitted = false;
        this.h = 1;
        this.m = 30;
        this.s = 0;
        this.timeout = null;
        this.result = {
            mark: 0,
            trueAnswer: 0,
            answered: 0
        };
        this.getQuestions = (subjectName) => {
            return this.http.get(`../../assets/${subjectName}.json`);
        };
        this.config = {
            itemsPerPage: 3,
            currentPage: 1,
        };
    }
    showModal() {
        this.isSubmitted = true;
    }
    onRedirect() {
        console.log('Button ok clicked!');
        window.location.href = '/index';
    }
    start() {
        if (this.s === -1) {
            this.m -= 1;
            this.s = 59;
        }
        if (this.m === -1) {
            this.h -= 1;
            this.m = 59;
        }
        if (this.h == -1) {
            clearTimeout(this.timeout);
            alert('Het gio');
            return false;
        }
        document.getElementById('h').innerText = this.h.toString();
        document.getElementById('m').innerText = this.m.toString();
        document.getElementById('s').innerText = this.s.toString();
        this.timeout = setTimeout(() => {
            this.s--;
            this.start();
        }, 1000);
        this.isEdit = true;
    }
    stop() {
        clearTimeout(this.timeout);
        this.isEdit = false;
        console.log('Stop');
    }
    ngOnInit() {
        this.router.data.subscribe((routerData) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let data = routerData['data'];
            if (data) {
                this.user = yield this.userService.getUserProfile(data.uid);
            }
            else {
                console.log('=======errr');
            }
        }));
        this.isEdit = false;
        this.router.paramMap.subscribe(params => {
            const id = params.get('subjectId');
            this.subjectName = id;
        });
        this.getQuestions(this.subjectName).subscribe(data => {
            this.list = data;
        });
        window.onscroll = function () { myFunction(); };
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            }
            else {
                header.classList.remove("sticky");
            }
        }
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    onChoose(answerId, questionId) {
        console.log('-----===-=-=-=-==', answerId);
        const current = this.list.find(question => question.Id === questionId);
        if (!current._answerId) {
            this.result.answered += 1;
        }
        current._answerId = answerId;
    }
    submit() {
        this.list.map(question => {
            if (question._answerId) {
                if (question._answerId === question.AnswerId) {
                    this.result.mark += question.Marks;
                    this.result.trueAnswer += 1;
                }
            }
        });
        this.showModal();
    }
};
ExamComponent.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exam',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exam/exam.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exam.component.scss */ "./src/app/exam/exam.component.scss")).default]
    })
], ExamComponent);



/***/ }),

/***/ "./src/app/feedback/feedback.component.scss":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ans {\n  color: #e6cfcf;\n  font-size: 1.2em; }\n\n.ques > h2 {\n  font-size: 1.1em;\n  color: #1ec8e9; }\n\n.chose {\n  list-style: none; }\n\n.chose > li > label {\n  display: inline-block;\n  margin-left: 20px;\n  color: #e6cfcf;\n  font-size: 1em; }\n\n.card {\n  margin: auto; }\n\ntextarea {\n  background-color: rgba(16, 16, 16, 0.47);\n  height: 7em;\n  border: 1px solid  #696867;\n  color: #fff; }\n\n.add > input {\n  background-color: rgba(16, 16, 16, 0.47);\n  border: 1px solid  #696867;\n  border-radius: 5px; }\n\n.name {\n  width: 42%;\n  margin-right: 10px;\n  height: 40px; }\n\n.email {\n  width: 43%;\n  height: 40px; }\n\n.submit {\n  background-color: rgba(16, 16, 16, 0.47);\n  border: 1px solid  #696867;\n  width: 30%;\n  border-radius: 5px;\n  color: #fff;\n  height: 40px;\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXluZ3V5ZW4vRG9jdW1lbnRzL0FuZ3VsYXIvQXNzaWdubWVudC9zcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGdCQUNKLEVBQUE7O0FBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQ0osRUFBQTs7QUFDQTtFQUVJLFlBQ0osRUFBQTs7QUFDQTtFQUNBLHdDQUF3QztFQUN4QyxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLFdBRUEsRUFBQTs7QUFDQTtFQUNBLHdDQUF3QztFQUN4QywwQkFBMEI7RUFDMUIsa0JBQWtCLEVBQUE7O0FBRWxCO0VBQ0EsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRVo7RUFDSSxVQUFVO0VBQ2QsWUFBWSxFQUFBOztBQUVaO0VBQ0ksd0NBQXdDO0VBQzVDLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFDQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5ze1xuICAgIGNvbG9yOiAjZTZjZmNmO1xuICAgIGZvbnQtc2l6ZTogMS4yZW1cbn1cbi5xdWVzID5oMntcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGNvbG9yOiAjMWVjOGU5O1xufVxuLmNob3Nle1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbn1cbi5jaG9zZSA+IGxpID5sYWJlbHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgY29sb3I6ICNlNmNmY2Y7XG4gICAgZm9udC1zaXplOiAxZW1cbn1cbi5jYXJke1xuICAgIC8vIG1heC13aWR0aDogNDAlO1xuICAgIG1hcmdpbjogYXV0b1xufVxudGV4dGFyZWF7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2LCAxNiwgMTYsIDAuNDcpO1xuaGVpZ2h0OiA3ZW07XG5ib3JkZXI6IDFweCBzb2xpZCAgIzY5Njg2NztcbmNvbG9yOiAjZmZmXG5cbn1cbi5hZGQgPmlucHV0e1xuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMTYsIDE2LCAwLjQ3KTtcbmJvcmRlcjogMXB4IHNvbGlkICAjNjk2ODY3O1xuYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm5hbWV7XG53aWR0aDogNDIlO1xubWFyZ2luLXJpZ2h0OiAxMHB4O1xuaGVpZ2h0OiA0MHB4O1xufVxuLmVtYWlse1xuICAgIHdpZHRoOiA0MyU7XG5oZWlnaHQ6IDQwcHg7XG59XG4uc3VibWl0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYsIDE2LCAxNiwgMC40Nyk7XG5ib3JkZXI6IDFweCBzb2xpZCAgIzY5Njg2NztcbndpZHRoOiAzMCU7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG5jb2xvcjogI2ZmZjtcbmhlaWdodDogNDBweDtcbm1hcmdpbjogMTBweFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeedbackComponent = class FeedbackComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.scss */ "./src/app/feedback/feedback.component.scss")).default]
    })
], FeedbackComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".info {\n  color: gray;\n  margin: 30px  0px 16px; }\n\n.wrapper {\n  width: 240px; }\n\nbutton {\n  margin-bottom: 12px; }\n\n.fa {\n  padding: 10px; }\n\n.nav-link-icon :hover {\n  color: #ffffff; }\n\n.nav-link-icon {\n  color: gray;\n  font-size: 18px;\n  margin-right: 10px; }\n\n.nav-link-icon > i {\n  margin-right: 6px; }\n\n.nav-link-inner--text {\n  font-size: 15px; }\n\n.bg-dark {\n  font-family: 'Open Sans', Arial, serif; }\n\n.nav-link {\n  font-size: 18px;\n  color: #b40606 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXluZ3V5ZW4vRG9jdW1lbnRzL0FuZ3VsYXIvQXNzaWdubWVudC9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFdBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQ0YsRUFBQTs7QUFDQTtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGVBQ0YsRUFBQTs7QUFJQTtFQUNJLHNDQUFzQyxFQUFBOztBQUUxQztFQUNJLGVBQWU7RUFDbEIseUJBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm97XG4gICAgY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luOiAzMHB4ICAwcHggMTZweDtcbiAgfVxuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG4gIC5mYXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5uYXYtbGluay1pY29uIDpob3ZlcntcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAubmF2LWxpbmstaWNvbntcbiAgICBjb2xvcjpncmF5O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcbiAgfVxuICAubmF2LWxpbmstaWNvbj4gaXtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuICAubmF2LWxpbmstaW5uZXItLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweFxuICB9XG4gLy8gIC5uYXZiYXItbmF2e1xuIC8vICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gLy8gIH1cbiAgLmJnLWRhcmt7XG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBzZXJpZjtcbiAgfVxuICAubmF2LWxpbmt7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICBjb2xvcjogcmdiKDE4MCwgNiwgNikgIWltcG9ydGFudFxuICB9Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tp-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".font {\n  font-family: 'Open Sans', Arial, serif; }\n\n.bg {\n  height: 100vh; }\n\n.lg {\n  font-weight: bold;\n  color: #b40606;\n  background-attachment: fixed; }\n\n.carousel-item > img {\n  height: 70vh; }\n\n.card > p > img {\n  width: 62px;\n  height: 62px; }\n\n.card > p {\n  margin-top: 12px; }\n\n.card-body > ul > li {\n  text-align: justify; }\n\n.card {\n  height: 422px; }\n\n.roll {\n  background-color: yellow;\n  height: 50px;\n  width: 50px;\n  float: right; }\n\n.caption {\n  padding-top: 200px; }\n\n.ipsearch {\n  width: 50%;\n  border-radius: 5px;\n  border: 1px solid #c7c5c5;\n  height: 50px; }\n\n.btnsearch {\n  background-color: #b40606;\n  color: #ffffff; }\n\n.btnselect > span {\n  float: left; }\n\n.btnselect {\n  height: 40px; }\n\n.title {\n  color: #b40606;\n  margin-top: 10px; }\n\n.card {\n  border: 2px solid #b40606; }\n\n.logo > img {\n  width: 200px;\n  height: 200px; }\n\n.subject {\n  border: 2px solid #b40606;\n  height: 350px;\n  font-size: 20px; }\n\n.subject:hover {\n  box-shadow: 0 0 13px #888888; }\n\n.subject > a:hover {\n  color: #1890ff; }\n\n.subject > a {\n  color: #000000; }\n\n.disabled-subject .description {\n  background-color: rgba(0, 0, 0, 0.9);\n  color: #b40606;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXluZ3V5ZW4vRG9jdW1lbnRzL0FuZ3VsYXIvQXNzaWdubWVudC9zcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQ0osRUFBQTs7QUFDQTtFQUVJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLDRCQUE0QixFQUFBOztBQUVoQztFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxXQUFXO0VBQ2YsWUFBWSxFQUFBOztBQUdaO0VBQ0ksZ0JBQ0osRUFBQTs7QUFDQTtFQUNJLG1CQUNKLEVBQUE7O0FBQ0E7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFDSixFQUFBOztBQUNBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0EsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix5QkFBb0M7RUFDcEMsWUFBWSxFQUFBOztBQUVaO0VBQ0kseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDQSxZQUFZLEVBQUE7O0FBRVo7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFFakI7RUFDSSx5QkFBeUI7RUFDN0IsYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFFZjtFQUNJLDRCQUE0QixFQUFBOztBQUVoQztFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBRVEsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxxQ0FBcUM7RUFDckMsd0NBQXdDO0VBQ3hDLG9DQUFvQztFQUNwQyxtQ0FBbUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnR7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgc2VyaWZcbn1cbi5iZ3tcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoJyAnKW5vLXJlcGVhdCBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5sZ3tcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2I0MDYwNjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuLmNhcm91c2VsLWl0ZW0gPiBpbWd7XG4gICAgaGVpZ2h0OiA3MHZoO1xufVxuLmNhcmQgPnA+aW1ne1xuICAgIHdpZHRoOiA2MnB4O1xuaGVpZ2h0OiA2MnB4O1xuXG59XG4uY2FyZCA+cHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4XG59XG4uY2FyZC1ib2R5ID4gdWwgPmxpIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5XG59XG4uY2FyZHtcbiAgICBoZWlnaHQ6IDQyMnB4O1xufVxuLnJvbGx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBmbG9hdDogcmlnaHRcbn1cbi5jYXB0aW9ue1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbn1cbi5pcHNlYXJjaHtcbndpZHRoOiA1MCU7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG5ib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk5LCAxOTcsIDE5NykgO1xuaGVpZ2h0OiA1MHB4O1xufVxuLmJ0bnNlYXJjaHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjQwNjA2O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnRuc2VsZWN0ID4gc3BhbntcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5idG5zZWxlY3R7XG5oZWlnaHQ6IDQwcHg7XG59XG4udGl0bGV7XG4gICAgY29sb3I6ICNiNDA2MDY7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jYXJke1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiNDA2MDY7XG4gICAgLy8gaGVpZ2h0OiAzMDBweDtcbn1cbi5sb2dvID4gaW1ne1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuLnN1YmplY3R7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2I0MDYwNjtcbmhlaWdodDogMzUwcHg7XG5mb250LXNpemU6IDIwcHg7XG59XG4uc3ViamVjdDpob3ZlcntcbiAgICBib3gtc2hhZG93OiAwIDAgMTNweCAjODg4ODg4OyBcbn1cbi5zdWJqZWN0PmE6aG92ZXJ7XG4gICAgY29sb3I6ICMxODkwZmY7XG59XG4uc3ViamVjdCA+YXtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpc2FibGVkLXN1YmplY3Qge1xuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICAgICAgY29sb3I6ICNiNDA2MDY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _assets_Subjects_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/Subjects.json */ "./src/assets/Subjects.json");
var _assets_Subjects_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/Subjects.json */ "./src/assets/Subjects.json", 1);
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/user.model */ "./src/app/core/user.model.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let IndexComponent = class IndexComponent {
    constructor(userService, authService, http, router) {
        this.userService = userService;
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.lists = _assets_Subjects_json__WEBPACK_IMPORTED_MODULE_4___namespace;
        this.subject = _assets_Subjects_json__WEBPACK_IMPORTED_MODULE_4__;
        this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_7__["User"]();
    }
    ngOnInit() {
        this.router.data.subscribe((routeData) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let data = routeData['data'];
            if (data) {
                this.user = yield this.userService.getUserProfile(data.uid);
            }
            else {
                console.log('---errrr');
            }
        }));
        function back() {
            window.scrollTo(500, 0);
        }
        this.getData().subscribe(data => {
            this.list = data;
        });
        this.config = {
            itemsPerPage: 4,
            currentPage: 1,
            totalItems: this.list
        };
    }
    checkTime(start_time, end_time) {
        const from = moment__WEBPACK_IMPORTED_MODULE_8__(start_time, 'DD/MM/YYYY HH:mm').unix();
        const to = moment__WEBPACK_IMPORTED_MODULE_8__(end_time, 'DD/MM/YYYY HH:mm').unix();
        const current = moment__WEBPACK_IMPORTED_MODULE_8__().unix();
        if (current >= from && current <= to) {
            return true;
        }
        return false;
    }
    getData() {
        return this.http.get('../../assets/Subjects.json');
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
};
IndexComponent.ctorParameters = () => [
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/introduce/introduce.component.scss":
/*!****************************************************!*\
  !*** ./src/app/introduce/introduce.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  background: url(\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/ban6666.jpg\") no-repeat -194px 0px;\n  background-position: center;\n  background-attachment: fixed;\n  background-size: cover; }\n\n.bg2 {\n  background: url(\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/dott.png\"); }\n\n.add {\n  padding-bottom: 100px; }\n\n.pd {\n  padding-top: 9em; }\n\n.info {\n  display: -webkit-box;\n  display: flex;\n  list-style: none;\n  padding: 0; }\n\n.info > li {\n  width: 30%; }\n\n.info > li > span {\n  color: #d9edf7; }\n\n.info2 {\n  margin-right: 15px;\n  list-style: none;\n  color: #ffffff; }\n\n.info3 > ul {\n  margin-bottom: 10px; }\n\n.unline {\n  border-top: 2px dotted #00bcd4; }\n\n.unline > li {\n  margin-top: 20px; }\n\n.card1 {\n  border: 5px solid rgba(238, 238, 238, 0.53);\n  width: 300px;\n  height: 300px;\n  margin: 0 auto; }\n\n.avt > img {\n  width: 133px;\n  height: 133px;\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 16px; }\n\n.card1 > h3 {\n  text-align: center;\n  color: #ffffff; }\n\n.card1 > p {\n  text-align: center;\n  color: #ffc53e; }\n\n.about {\n  border: 2px solid #ffb900;\n  display: -webkit-box;\n  display: flex; }\n\n.about1 {\n  margin: auto;\n  width: 30,333%; }\n\n.about1 > h3 {\n  color: #fdac14;\n  font-family: 'Yanone Kaffeesatz', sans-serif;\n  letter-spacing: 2px;\n  font-size: 2em;\n  margin-top: 6px; }\n\n.about1 > h5 {\n  color: #00bcd4;\n  text-transform: capitalize;\n  letter-spacing: 2px;\n  font-family: 'Yanone Kaffeesatz', sans-serif;\n  font-size: 1.3em; }\n\nh3 {\n  font-family: 'Yanone Kaffeesatz', sans-serif;\n  letter-spacing: 2px; }\n\n.lg1 > h3 {\n  color: #fdac14;\n  font-size: 1.3em;\n  text-transform: uppercase;\n  margin: 20px 0px; }\n\n.lg1 > p {\n  font-size: 1em;\n  color: #999;\n  margin: 1em 0;\n  margin: 16px 0px; }\n\n.btn {\n  background-color: #f9a300;\n  color: #ffffff; }\n\n.container1 {\n  position: relative;\n  width: 50%; }\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.overlay1 {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  right: 0;\n  background-color: rgba(16, 16, 16, 0.47);\n  overflow: hidden;\n  width: 100%;\n  height: 0;\n  -webkit-transition: .5s ease;\n  transition: .5s ease; }\n\n.container1:hover .overlay1 {\n  bottom: 0;\n  height: 100%; }\n\n.text1 {\n  white-space: nowrap;\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.container2 {\n  position: relative;\n  width: 50%; }\n\n.image2 {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.overlay2 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(16, 16, 16, 0.47);\n  overflow: hidden;\n  width: 0;\n  height: 100%;\n  -webkit-transition: .5s ease;\n  transition: .5s ease; }\n\n.container2:hover .overlay2 {\n  width: 100%; }\n\n.text2 {\n  white-space: nowrap;\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.container3 {\n  position: relative;\n  width: 50%; }\n\n.image3 {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.overlay3 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(16, 16, 16, 0.47);\n  overflow: hidden;\n  width: 100%;\n  height: 0;\n  -webkit-transition: .5s ease;\n  transition: .5s ease; }\n\n.container3:hover .overlay3 {\n  height: 100%; }\n\n.text3 {\n  white-space: nowrap;\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.container4 {\n  position: relative;\n  width: 50%; }\n\n.image4 {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.overlay4 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(16, 16, 16, 0.47);\n  overflow: hidden;\n  width: 100%;\n  height: 0;\n  -webkit-transition: .5s ease;\n  transition: .5s ease; }\n\n.container4:hover .overlay4 {\n  height: 100%; }\n\n.text4 {\n  white-space: nowrap;\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.dt {\n  margin: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXluZ3V5ZW4vRG9jdW1lbnRzL0FuZ3VsYXIvQXNzaWdubWVudC9zcmMvYXBwL2ludHJvZHVjZS9pbnRyb2R1Y2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5SkFBeUo7RUFDekosMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUU1QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxpSUFBaUksRUFBQTs7QUFHckk7RUFDSSxxQkFDSixFQUFBOztBQUNBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFVBQ0osRUFBQTs7QUFDQTtFQUNJLFVBQ0osRUFBQTs7QUFDQTtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQ0osRUFBQTs7QUFDQTtFQUNJLG1CQUNKLEVBQUE7O0FBQ0E7RUFDSSw4QkFBOEIsRUFBQTs7QUFFbEM7RUFDSSxnQkFDSixFQUFBOztBQUNBO0VBQ0ksMkNBQTJDO0VBQzNDLFlBQVk7RUFDWixhQUFhO0VBRWIsY0FDSixFQUFBOztBQUNBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsY0FBYztFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUNBLEVBQUE7O0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0kseUJBQXlCO0VBQ3pCLG9CQUFhO0VBQWIsYUFBYSxFQUFBOztBQUVqQjtFQUNJLFlBQVk7RUFFWixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYztFQUNkLDRDQUE0QztFQUM1QyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQ0osRUFBQTs7QUFDQTtFQUNJLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1QyxnQkFDSixFQUFBOztBQUNBO0VBQ0ksNENBQTRDO0VBQzVDLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUNKLEVBQUE7O0FBQ0E7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFDSixFQUFBOztBQUNBO0VBQ0kseUJBQXlCO0VBQ3pCLGNBQ0osRUFBQTs7QUFDQTtFQUNJLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7RUFDUix3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxTQUFRO0VBQ1IsNEJBQW9CO0VBQXBCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLFNBQVM7RUFDVCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsWUFBWTtFQUNaLDRCQUFvQjtFQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxvQ0FBb0MsRUFBQTs7QUFFdEM7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsU0FBUztFQUNULDRCQUFvQjtFQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxvQ0FBb0MsRUFBQTs7QUFFdEM7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsU0FBUztFQUNULDRCQUFvQjtFQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxvQ0FBb0MsRUFBQTs7QUFFdEM7RUFDSSxXQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbnRyb2R1Y2UvaW50cm9kdWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9kZW1vLnczbGF5b3V0cy5jb20vZGVtb3NfbmV3L3RlbXBsYXRlX2RlbW8vMjAtMTAtMjAxNy9jX3Jlc3VtZS1kZW1vX0ZyZWUvNzYwMTQyNDgxL3dlYi9pbWFnZXMvYmFuNjY2Ni5qcGcnKSBuby1yZXBlYXQgLTE5NHB4IDBweDs7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgLy8gaGVpZ2h0OiA3MHZoO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbn1cbi5iZzJ7XG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2RlbW8udzNsYXlvdXRzLmNvbS9kZW1vc19uZXcvdGVtcGxhdGVfZGVtby8yMC0xMC0yMDE3L2NfcmVzdW1lLWRlbW9fRnJlZS83NjAxNDI0ODEvd2ViL2ltYWdlcy9kb3R0LnBuZycpXG5cbn1cbi5hZGR7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4XG59XG4ucGR7XG4gICAgcGFkZGluZy10b3A6IDllbTtcbn1cbi5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMFxufVxuLmluZm8gPmxpe1xuICAgIHdpZHRoOiAzMCVcbn1cbi5pbmZvID4gbGkgPnNwYW57XG4gICAgY29sb3I6ICNkOWVkZjc7XG59XG4uaW5mbzJ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgY29sb3I6ICNmZmZmZmZcbn1cbi5pbmZvMyA+dWx7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxufVxuLnVubGluZXtcbiAgICBib3JkZXItdG9wOiAycHggZG90dGVkICMwMGJjZDQ7XG59XG4udW5saW5lID5saXtcbiAgICBtYXJnaW4tdG9wOiAyMHB4XG59XG4uY2FyZDF7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjUzKTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICAvLyBwYWRkaW5nOiA2M3B4O1xuICAgIG1hcmdpbjogMCBhdXRvIFxufVxuLmF2dCA+aW1ne1xuICAgIHdpZHRoOiAxMzNweDtcbiAgICBoZWlnaHQ6IDEzM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAvLyBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbm1hcmdpbi1sZWZ0OiBhdXRvO1xubWFyZ2luLXJpZ2h0OiBhdXRvO1xubWFyZ2luLXRvcDogMTZweFxufVxuLmNhcmQxPmgze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jYXJkMSA+IHB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZjNTNlO1xufVxuLmFib3V0e1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmI5MDA7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5hYm91dDF7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgd2lkdGg6IDMwLDMzMyU7XG59XG4uYWJvdXQxID5oM3tcbiAgICBjb2xvcjogI2ZkYWMxNDtcbiAgICBmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbi10b3A6IDZweFxufVxuLmFib3V0MSA+aDV7XG4gICAgY29sb3I6ICMwMGJjZDQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuM2VtXG59XG5oM3tcbiAgICBmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuLmxnMSA+aDN7XG4gICAgY29sb3I6ICNmZGFjMTQ7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogMjBweCAwcHhcbn1cbi5sZzEgPnB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6ICM5OTk7XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgICBtYXJnaW46IDE2cHggMHB4XG59XG4uYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWEzMDA7XG4gICAgY29sb3I6ICNmZmZmZmZcbn1cbi5jb250YWluZXIxIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBcbiAgLmltYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIC5vdmVybGF5MSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYsIDE2LCAxNiwgMC40Nyk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MDtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lcjE6aG92ZXIgLm92ZXJsYXkxIHtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAudGV4dDEge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuLy8gICBzbGlkZTJcbi5jb250YWluZXIyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBcbiAgLmltYWdlMiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICAub3ZlcmxheTIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2LCAxNiwgMTYsIDAuNDcpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICB9XG4gIFxuICAuY29udGFpbmVyMjpob3ZlciAub3ZlcmxheTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAudGV4dDIge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICAuY29udGFpbmVyMyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIC5pbWFnZTMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgLm92ZXJsYXkzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMTYsIDE2LCAwLjQ3KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lcjM6aG92ZXIgLm92ZXJsYXkzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC50ZXh0MyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIC5jb250YWluZXI0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBcbiAgLmltYWdlNCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICAub3ZlcmxheTQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2LCAxNiwgMTYsIDAuNDcpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICB9XG4gIFxuICAuY29udGFpbmVyNDpob3ZlciAub3ZlcmxheTQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLnRleHQ0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgLmR0e1xuICAgICAgbWFyZ2luOiA2cHhcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/introduce/introduce.component.ts":
/*!**************************************************!*\
  !*** ./src/app/introduce/introduce.component.ts ***!
  \**************************************************/
/*! exports provided: IntroduceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroduceComponent", function() { return IntroduceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntroduceComponent = class IntroduceComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntroduceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-introduce',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./introduce.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/introduce/introduce.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./introduce.component.scss */ "./src/app/introduce/introduce.component.scss")).default]
    })
], IntroduceComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\n  max-width: 300px; }\n\n.login-form-forgot {\n  float: right; }\n\n.login-form-button {\n  width: 100%; }\n\n.img {\n  max-width: 100%;\n  position: relative;\n  margin: auto; }\n\n.bg {\n  background-repeat: no-repeat;\n  height: 800px; }\n\n.lg {\n  font-weight: bold;\n  font-size: 43px;\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXluZ3V5ZW4vRG9jdW1lbnRzL0FuZ3VsYXIvQXNzaWdubWVudC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVyxFQUFBOztBQUVmO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUNGLEVBQUE7O0FBSUE7RUFDRSw0QkFBNEI7RUFDOUIsYUFBYSxFQUFBOztBQUdiO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5sb2dpbi1mb3JtLWZvcmdvdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbiAgLmxvZ2luLWZvcm0tYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuLmltZ3tcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0b1xufVxuLy8gLmNhcmR7XG4vLyAgIHdpZHRoOiAzNTZweFxuLy8gfVxuLmJnIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbmhlaWdodDogODAwcHg7XG5cbn1cbi5sZ3tcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.errorMessage = '';
        this.createForm();
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    createForm() {
        this.validateForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    tryLogin(value) {
        this.authService.doLogin(value).then(res => {
            this.router.navigate(['/user']);
        }, err => {
            console.log(err, 'loi dang nhap');
            this.errorMessage = err.message;
        });
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            remember: [true]
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-item {\n  margin: 0px 15px; }\n\n.lg > a {\n  color: #b40606 !important; }\n\n.nav-link-icon {\n  color: gray;\n  font-size: 18px;\n  margin-right: 10px; }\n\n.nav-link-icon > i {\n  margin-right: 6px; }\n\n.nav-link-inner--text {\n  font-size: 15px; }\n\n.bg-dark {\n  font-family: 'Open Sans', Arial, serif; }\n\n.nav-link {\n  font-size: 18px;\n  color: #b40606 !important; }\n\n.fa {\n  padding: 10px; }\n\n.nav-link-icon :hover {\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXluZ3V5ZW4vRG9jdW1lbnRzL0FuZ3VsYXIvQXNzaWdubWVudC9zcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFpQixFQUFBOztBQUdqQjtFQUVFLHlCQUFnQyxFQUFBOztBQUdqQztFQUNFLFdBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQ0YsRUFBQTs7QUFDQTtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGVBQ0YsRUFBQTs7QUFJQTtFQUNJLHNDQUFzQyxFQUFBOztBQUUxQztFQUNJLGVBQWU7RUFDbEIseUJBQWdDLEVBQUE7O0FBRWpDO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVte1xuICAgIG1hcmdpbjogMHB4IDE1cHggO1xuICAgIH1cbiAgICBcbiAgICAubGcgPiBhe1xuICAgICAgICAvLyAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBjb2xvcjogcmdiKDE4MCwgNiwgNikgIWltcG9ydGFudFxuICAgIFxuICAgIH1cbiAgICAgLm5hdi1saW5rLWljb257XG4gICAgICAgY29sb3I6Z3JheTtcbiAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XG4gICAgIH1cbiAgICAgLm5hdi1saW5rLWljb24+IGl7XG4gICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgIH1cbiAgICAgLm5hdi1saW5rLWlubmVyLS10ZXh0IHtcbiAgICAgICBmb250LXNpemU6IDE1cHhcbiAgICAgfVxuICAgIC8vICAubmF2YmFyLW5hdntcbiAgICAvLyAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC8vICB9XG4gICAgIC5iZy1kYXJre1xuICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgc2VyaWY7XG4gICAgIH1cbiAgICAgLm5hdi1saW5re1xuICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6IHJnYigxODAsIDYsIDYpICFpbXBvcnRhbnRcbiAgICAgfVxuICAgICAuZmF7XG4gICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgfVxuICAgICAubmF2LWxpbmstaWNvbiA6aG92ZXJ7XG4gICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var core_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/user.model */ "./core/user.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let NavigationComponent = class NavigationComponent {
    constructor(authservice, userService, router, location) {
        this.authservice = authservice;
        this.userService = userService;
        this.router = router;
        this.location = location;
        this.user = new core_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
    }
    ngOnInit() {
        this.router.data.subscribe((routerData) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let data = routerData['data'];
            if (data) {
                this.user = yield this.userService.getUserProfile(data.uid);
            }
            else {
                console.log('=======errr');
            }
        }));
    }
    logout() {
        this.authservice.doLogout()
            .then((res) => {
            this.location.back();
        }, (error) => {
            console.log("Logout error", error);
        });
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/resetpw/resetpw.component.scss":
/*!************************************************!*\
  !*** ./src/app/resetpw/resetpw.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0cHcvcmVzZXRwdy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/resetpw/resetpw.component.ts":
/*!**********************************************!*\
  !*** ./src/app/resetpw/resetpw.component.ts ***!
  \**********************************************/
/*! exports provided: ResetpwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpwComponent", function() { return ResetpwComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResetpwComponent = class ResetpwComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ResetpwComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resetpw',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resetpw.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resetpw/resetpw.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resetpw.component.scss */ "./src/app/resetpw/resetpw.component.scss")).default]
    })
], ResetpwComponent);



/***/ }),

/***/ "./src/app/signin/signin.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[nz-form] {\n  max-width: 600px; }\n\n.ant-form-item-label {\n  text-align: left; }\n\n.phone-select {\n  width: 70px; }\n\n.register-are {\n  margin-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9xdXluZ3V5ZW4vRG9jdW1lbnRzL0FuZ3VsYXIvQXNzaWdubWVudC9zcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUNDSSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxnQkFDRixFQUFBOztBQUVBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW256LWZvcm1dIHtcbiAgbWF4LXdpZHRoOiA2MDBweDsgfVxuXG4uYW50LWZvcm0taXRlbS1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLnBob25lLXNlbGVjdCB7XG4gIHdpZHRoOiA3MHB4OyB9XG5cbi5yZWdpc3Rlci1hcmUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cbiIsIltuei1mb3JtXSB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxuICAuYW50LWZvcm0taXRlbS1sYWJlbHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XG4gIH1cblxuICAucGhvbmUtc2VsZWN0IHtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxuXG4gIC5yZWdpc3Rlci1hcmUge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SigninComponent = class SigninComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.errorMessage = '';
        this.successMessage = '';
        this.confirmationValidator = (control) => {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== this.validateForm.controls.password.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
        this.createFrom();
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    updateConfirmValidator() {
        /** wait for refresh value */
        Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
    }
    getCaptcha(e) {
        e.preventDefault();
    }
    createFrom() {
        this.validateForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    tryRegister(value) {
        this.authService.doRegister(value)
            .then(res => {
            console.log(res);
            this.errorMessage = "";
            this.successMessage = "Your account has been created";
        }, err => {
            console.log(err);
            this.errorMessage = err.message;
            this.successMessage = "";
        });
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            checkPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.confirmationValidator]],
            nickname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumberPrefix: ['+86'],
            phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            website: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            agree: [false]
        });
    }
};
SigninComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.component.scss */ "./src/app/signin/signin.component.scss")).default]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/update/update.component.scss":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 40px; }\n\n.image {\n  width: 100%; }\n\n.card-body p {\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXluZ3V5ZW4vRG9jdW1lbnRzL0FuZ3VsYXIvQXNzaWdubWVudC9zcmMvYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLFdBQ0YsRUFBQTs7QUFFQTtFQUVJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuICAuaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlXG4gIH1cblxuICAuY2FyZC1ib2R5IHtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/user.model */ "./src/app/core/user.model.ts");








let UpdateComponent = class UpdateComponent {
    constructor(userService, authService, route, location, fb) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            studentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
    }
    ngOnInit() {
        console.log(this.route.data);
        this.route.data.subscribe((routeData) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let data = routeData['data'];
            if (data) {
                this.user = yield this.getProfile(data.uid);
                console.log(this.user);
                this.createForm(this.user);
            }
        }));
    }
    getProfile(uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.userService.getUserProfile(uid);
        });
    }
    createForm(user) {
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            studentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](user.studentId),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](user.displayName)
        });
    }
    save(value) {
        this.userService.updateCurrentUser(this.user, value)
            .then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(res, 'thanh cong');
            window.location.href = '/user';
        }), err => console.log(err, 'loi'));
    }
    logout() {
        this.authService.doLogout()
            .then((res) => {
            this.location.back();
        }, (error) => {
            console.log("Logout error", error);
        });
    }
};
UpdateComponent.ctorParameters = () => [
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update.component.scss */ "./src/app/update/update.component.scss")).default]
    })
], UpdateComponent);



/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 40px; }\n\n.image {\n  width: 100%; }\n\n.card-body p {\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXluZ3V5ZW4vRG9jdW1lbnRzL0FuZ3VsYXIvQXNzaWdubWVudC9zcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsV0FDRixFQUFBOztBQUVBO0VBRUksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbiAgLmltYWdlIHtcbiAgICB3aWR0aDogMTAwJVxuICB9XG5cbiAgLmNhcmQtYm9keSB7XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/user.model */ "./src/app/core/user.model.ts");








let UserComponent = class UserComponent {
    constructor(userService, authService, route, location, fb) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            studentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
    }
    ngOnInit() {
        console.log(this.route.data);
        this.route.data.subscribe((routeData) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let data = routeData['data'];
            if (data) {
                this.user = yield this.getProfile(data.uid);
                console.log(this.user);
            }
        }));
    }
    getProfile(uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.userService.getUserProfile(uid);
        });
    }
    createForm() {
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            studentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
    }
    save(value) {
        this.userService.updateCurrentUser(this.user, value)
            .then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(res, 'thanh cong');
            this.user = yield this.getProfile(localStorage.getItem('uid'));
        }), err => console.log(err, 'loi'));
    }
    logout() {
        this.authService.doLogout()
            .then((res) => {
            this.location.back();
        }, (error) => {
            console.log("Logout error", error);
        });
    }
};
UserComponent.ctorParameters = () => [
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/user/user.resolver.ts":
/*!***************************************!*\
  !*** ./src/app/user/user.resolver.ts ***!
  \***************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.model */ "./src/app/core/user.model.ts");





let UserResolver = class UserResolver {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    resolve(route) {
        let user = new _core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser().then(res => {
                console.log('user resolve', res);
                if (res.providerData[0].providerId == 'password') {
                    user.photoURL = 'https://via.placeholder.com/400x300';
                    user.displayName = res.displayName;
                    // user.provider = res.providerData[0].providerId
                    user.uid = res.uid;
                    user.email = res.email;
                    return resolve(user);
                }
                else {
                    user.photoURL = res.photoURL;
                    user.displayName = res.displayName;
                    // user.provider = res.providerData[0].providerId
                    user.uid = res.uid;
                    user.email = res.email;
                    return resolve(user);
                }
            }, err => {
                console.log('---------- rerreerrr');
                this.router.navigate(['/login']);
                return reject(err);
            });
        });
    }
};
UserResolver.ctorParameters = () => [
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserResolver);



/***/ }),

/***/ "./src/assets/Subjects.json":
/*!**********************************!*\
  !*** ./src/assets/Subjects.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"Id\":\"ADAV\",\"Name\":\"Lập trình Android nâng cao\",\"Logo\":\"../../assets/images/ADAV.jpg\",\"start_time\":\"17/11/2019 09:30\",\"end_time\":\"17/11/2019 12:30\"},{\"Id\":\"ADBS\",\"Name\":\"Lập trình Android cơ bản\",\"Logo\":\"../../assets/images/ADBS.jpg\",\"start_time\":\"19/11/2019 09:30\",\"end_time\":\"19/11/2019 12:30\"},{\"Id\":\"ADTE\",\"Name\":\"Kiểm thử và triển khai ứng dụng Android\",\"Logo\":\"../../assets/images/ADTE.jpg\",\"start_time\":\"18/11/2019 09:30\",\"end_time\":\"18/11/2019 12:30\"},{\"Id\":\"ADUI\",\"Name\":\"Thiết kế giao diện trên Android\",\"Logo\":\"../../assets/images/ADUI.jpg\",\"start_time\":\"18/11/2019 09:30\",\"end_time\":\"18/11/2019 12:30\"},{\"Id\":\"ASNE\",\"Name\":\"Lập trình ASP.NET\",\"Logo\":\"../../assets/images/ASNE.png\",\"start_time\":\"18/11/2019 09:30\",\"end_time\":\"18/11/2019 12:30\"},{\"Id\":\"CLCO\",\"Name\":\"Điện toán đám mây\",\"Logo\":\"../../assets/images/CLCO.jpg\",\"start_time\":\"20/11/2019 09:30\",\"end_time\":\"20/11/2019 12:30\"},{\"Id\":\"DBAV\",\"Name\":\"SQL Server\",\"Logo\":\"../../assets/images/DBAV.png\",\"start_time\":\"20/11/2019 09:30\",\"end_time\":\"20/11/2019 12:30\"},{\"Id\":\"DBBS\",\"Name\":\"Cơ sở dữ liệu\",\"Logo\":\"../../assets/images/DBBS.png\",\"start_time\":\"21/11/2019 09:30\",\"end_time\":\"21/11/2019 12:30\"},{\"Id\":\"GAME\",\"Name\":\"Lập trình game 2D\",\"Logo\":\"../../assets/images/GAME.png\",\"start_time\":\"22/11/2019 09:30\",\"end_time\":\"22/11/2019 12:30\"},{\"Id\":\"HTCS\",\"Name\":\"HTML5 và CSS3\",\"Logo\":\"../../assets/images/HTCS.jpg\",\"start_time\":\"22/11/2019 09:30\",\"end_time\":\"22/11/2019 12:30\"},{\"Id\":\"INMA\",\"Name\":\"Internet Marketing\",\"Logo\":\"../../assets/images/INMA.jpg\",\"start_time\":\"23/11/2019 09:30\",\"end_time\":\"23/11/2019 12:30\"},{\"Id\":\"JAAV\",\"Name\":\"Lập trình Java nâng cao\",\"Logo\":\"../../assets/images/JAAV.png\",\"start_time\":\"23/11/2019 09:30\",\"end_time\":\"23/11/2019 12:30\"},{\"Id\":\"JABS\",\"Name\":\"Lập trình hướng đối tượng với Java\",\"Logo\":\"../../assets/images/JABS.png\",\"start_time\":\"24/11/2019 09:30\",\"end_time\":\"24/11/2019 12:30\"},{\"Id\":\"JSPR\",\"Name\":\"Lập trình JavaScript\",\"Logo\":\"../../assets/images/JSPR.png\",\"start_time\":\"24/11/2019 09:30\",\"end_time\":\"24/11/2019 12:30\"},{\"Id\":\"LAYO\",\"Name\":\"Thiết kế layout\",\"Logo\":\"../../assets/images/LAYO.jpg\",\"start_time\":\"25/11/2019 09:30\",\"end_time\":\"25/11/2019 12:30\"},{\"Id\":\"MOWE\",\"Name\":\"Thiết kế web cho điện thoại di động\",\"Logo\":\"../../assets/images/MOWE.png\",\"start_time\":\"25/11/2019 09:30\",\"end_time\":\"25/11/2019 12:30\"},{\"Id\":\"PHPP\",\"Name\":\"Lập trình PHP\",\"Logo\":\"../../assets/images/PHPP.png\",\"start_time\":\"26/11/2019 09:30\",\"end_time\":\"26/11/2019 12:30\"},{\"Id\":\"PMAG\",\"Name\":\"Quản lý dự án với Agile\",\"Logo\":\"../../assets/images/PMAG.jpg\",\"start_time\":\"27/11/2019 09:30\",\"end_time\":\"27/11/2019 12:30\"},{\"Id\":\"VBPR\",\"Name\":\"Lập trình VB.NET\",\"Logo\":\"../../assets/images/VBPR.png\",\"start_time\":\"27/11/2019 09:30\",\"end_time\":\"27/11/2019 12:30\"},{\"Id\":\"WEBU\",\"Name\":\"Xây dựng trang web\",\"Logo\":\"../../assets/images/WEBU.jpg\",\"start_time\":\"27/11/2019 09:30\",\"end_time\":\"27/11/2019 12:30\"}]");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAzFnJtyxVFUrTJ6pKfUATjzQ6gJuZUpIY',
        authDomain: 'assignment-2e965.firebaseapp.com',
        databaseURL: 'https://assignment-2e965.firebaseio.com',
        projectId: 'assignment-2e965',
        storageBucket: 'assignment-2e965.appspot.com',
        messagingSenderId: 'G-NVP4NELJQ3'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/quynguyen/Documents/Angular/Assignment/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map