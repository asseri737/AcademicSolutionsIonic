(self["webpackChunkAcademicIo"] = self["webpackChunkAcademicIo"] || []).push([["src_app_pages_prefer_prefer_module_ts"],{

/***/ 5311:
/*!*******************************************************!*\
  !*** ./src/app/pages/prefer/prefer-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferPageRoutingModule": () => (/* binding */ PreferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _prefer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefer.page */ 195);




const routes = [
    {
        path: '',
        component: _prefer_page__WEBPACK_IMPORTED_MODULE_0__.PreferPage
    }
];
let PreferPageRoutingModule = class PreferPageRoutingModule {
};
PreferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreferPageRoutingModule);



/***/ }),

/***/ 3206:
/*!***********************************************!*\
  !*** ./src/app/pages/prefer/prefer.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferPageModule": () => (/* binding */ PreferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _prefer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefer-routing.module */ 5311);
/* harmony import */ var _prefer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefer.page */ 195);







let PreferPageModule = class PreferPageModule {
};
PreferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _prefer_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreferPageRoutingModule
        ],
        declarations: [_prefer_page__WEBPACK_IMPORTED_MODULE_1__.PreferPage]
    })
], PreferPageModule);



/***/ }),

/***/ 195:
/*!*********************************************!*\
  !*** ./src/app/pages/prefer/prefer.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferPage": () => (/* binding */ PreferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_prefer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./prefer.page.html */ 7586);
/* harmony import */ var _prefer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefer.page.scss */ 7649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 3027);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);






let PreferPage = class PreferPage {
    constructor(router, afA) {
        this.router = router;
        this.afA = afA;
    }
    ngOnInit() {
    }
    toChat() {
        this.router.navigateByUrl('/chat');
    }
    toBot() {
        this.router.navigateByUrl('/bot');
    }
    signOut() {
        this.afA.signOut().then(() => {
            this.router.navigate(['']);
        });
    }
};
PreferPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth }
];
PreferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-prefer',
        template: _raw_loader_prefer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_prefer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PreferPage);



/***/ }),

/***/ 7649:
/*!***********************************************!*\
  !*** ./src/app/pages/prefer/prefer.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  width: 220px;\n  height: 200px;\n  border-bottom: 20px solid #43ec7b;\n  padding-top: 40px;\n}\n\nion-icon {\n  font-size: 64px;\n  color: #43ec7b;\n}\n\nion-content {\n  text-align: center;\n  color: #43ec7b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRixrQkFBQTtFQUNBLGNBQUE7QUFFQSIsImZpbGUiOiJwcmVmZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCByZ2IoNjcsIDIzNiwgMTIzKTs7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBjb2xvcjogcmdiKDY3LCAyMzYsIDEyMyk7XHJcbiAgfVxyXG5cclxuICBpb24tY29udGVudHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5jb2xvcjogcmdiKDY3LCAyMzYsIDEyMyk7XHJcblxyXG4gIH0iXX0= */");

/***/ }),

/***/ 7586:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prefer/prefer.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar ccolor=\"success\">\n    <ion-title>preference</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"signOut()\">\n        <ion-icon name=\"log-out\" slot=\"icon-only\" color=\"success\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"height: 100%; display: flex; align-items: center; justify-content: center;\">\n  <ion-card (click)=\"toChat()\" >\n  \n  \n    <ion-card-content>\n      <ion-icon name=\"chatbubbles-outline\" ></ion-icon>\n\n    </ion-card-content>\n  </ion-card>\n  <ion-card (click)=\"toBot()\">\n  \n  \n    <ion-card-content>\n      <ion-icon name=\"logo-reddit\"></ion-icon>\n    <br>\n      Chat with Chatbot\n    </ion-card-content>\n  </ion-card>\n\n\n</div>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_prefer_prefer_module_ts.js.map