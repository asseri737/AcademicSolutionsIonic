(self["webpackChunkAcademicIo"] = self["webpackChunkAcademicIo"] || []).push([["src_app_chats_chats_module_ts"],{

/***/ 4874:
/*!***********************************************!*\
  !*** ./src/app/chats/chats-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsPageRoutingModule": () => (/* binding */ ChatsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats.page */ 5608);




const routes = [
    {
        path: '',
        component: _chats_page__WEBPACK_IMPORTED_MODULE_0__.ChatsPage
    }
];
let ChatsPageRoutingModule = class ChatsPageRoutingModule {
};
ChatsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatsPageRoutingModule);



/***/ }),

/***/ 3675:
/*!***************************************!*\
  !*** ./src/app/chats/chats.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsPageModule": () => (/* binding */ ChatsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _chats_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats-routing.module */ 4874);
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats.page */ 5608);







let ChatsPageModule = class ChatsPageModule {
};
ChatsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chats_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatsPageRoutingModule
        ],
        declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_1__.ChatsPage]
    })
], ChatsPageModule);



/***/ }),

/***/ 5608:
/*!*************************************!*\
  !*** ./src/app/chats/chats.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsPage": () => (/* binding */ ChatsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chats.page.html */ 3250);
/* harmony import */ var _chats_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats.page.scss */ 5759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 3027);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);



/* eslint-disable @typescript-eslint/ban-types */



let ChatsPage = class ChatsPage {
    constructor(router, afA) {
        this.router = router;
        this.afA = afA;
        this.contacts = [
            {
                name: 'Abdullah',
                imgUri: 'https://randomuser.me/api/portraits/men/32.jpg'
            },
            {
                name: 'Basil',
                imgUri: 'https://randomuser.me/api/portraits/men/15.jpg'
            },
        ];
    }
    signOut() {
        this.afA.signOut().then(() => {
            this.router.navigate(['']);
        });
    }
};
ChatsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth }
];
ChatsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-chats',
        template: _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chats_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatsPage);



/***/ }),

/***/ 5759:
/*!***************************************!*\
  !*** ./src/app/chats/chats.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h1 {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiY2hhdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 3250:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar ccolor=\"success\">\n    <ion-title>Contacts</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"signOut()\">\n        <ion-icon name=\"log-out\" slot=\"icon-only\" color=\"success\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-list >\n    <ion-item button *ngFor=\"let contact of contacts\" routerLink=\"/chat/{{contact.name}}\">\n      <ion-avatar>\n        <ion-img [src]=\"contact.imgUri\"></ion-img>\n      </ion-avatar>\n      <h1>\n      {{ contact.name }}</h1>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chats_chats_module_ts.js.map