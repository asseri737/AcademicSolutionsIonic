(self["webpackChunkAcademicIo"] = self["webpackChunkAcademicIo"] || []).push([["src_app_pages_bot_bot_module_ts"],{

/***/ 2392:
/*!*************************************************!*\
  !*** ./src/app/pages/bot/bot-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotPageRoutingModule": () => (/* binding */ BotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _bot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bot.page */ 2608);




const routes = [
    {
        path: '',
        component: _bot_page__WEBPACK_IMPORTED_MODULE_0__.BotPage
    }
];
let BotPageRoutingModule = class BotPageRoutingModule {
};
BotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BotPageRoutingModule);



/***/ }),

/***/ 4020:
/*!*****************************************!*\
  !*** ./src/app/pages/bot/bot.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotPageModule": () => (/* binding */ BotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _bot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bot-routing.module */ 2392);
/* harmony import */ var _bot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bot.page */ 2608);







let BotPageModule = class BotPageModule {
};
BotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bot_routing_module__WEBPACK_IMPORTED_MODULE_0__.BotPageRoutingModule
        ],
        declarations: [_bot_page__WEBPACK_IMPORTED_MODULE_1__.BotPage]
    })
], BotPageModule);



/***/ }),

/***/ 2608:
/*!***************************************!*\
  !*** ./src/app/pages/bot/bot.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotPage": () => (/* binding */ BotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_bot_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bot.page.html */ 1468);
/* harmony import */ var _bot_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bot.page.scss */ 4888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4595);





let BotPage = class BotPage {
    constructor(platform, ngZone) {
        this.platform = platform;
        this.ngZone = ngZone;
        platform.ready().then(() => {
            apiAIPromises.init({
                clientAccessToken: '26950d7a838f45e0b584e39ef33c7c47'
            }).then(result => console.log(result));
        });
    }
    ask(question) {
        apiAIPromises.requestText({
            query: question
        })
            .then(({ result: { fulfillment: { speech } } }) => {
            this.ngZone.run(() => {
                this.answer = speech;
            });
        });
    }
};
BotPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone }
];
BotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-bot',
        template: _raw_loader_bot_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bot_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BotPage);



/***/ }),

/***/ 4888:
/*!*****************************************!*\
  !*** ./src/app/pages/bot/bot.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("df-messenger {\n  --df-messenger-button-titlebar-color:#5df069;\n  --df-messenger-send-icon:#5df069 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtFQUNBLGlDQUFBO0FBQ0oiLCJmaWxlIjoiYm90LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRmLW1lc3NlbmdlcntcclxuICAgIC0tZGYtbWVzc2VuZ2VyLWJ1dHRvbi10aXRsZWJhci1jb2xvcjojNWRmMDY5O1xyXG4gICAgLS1kZi1tZXNzZW5nZXItc2VuZC1pY29uOiM1ZGYwNjlcclxufSJdfQ== */");

/***/ }),

/***/ 1468:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bot/bot.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\n  <df-messenger\n    chat-icon=\"https:&#x2F;&#x2F;www.kku.edu.sa&#x2F;sites&#x2F;default&#x2F;files&#x2F;logo_2.png\"\n    intent=\"WELCOME\"\n    chat-title=\"Khaled\"\n    agent-id=\"497f7e0b-d55a-42df-b4ef-b91f2b723a19\"\n    language-code=\"en\"\n    expand=\"false\"\n  ></df-messenger>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bot_bot_module_ts.js.map