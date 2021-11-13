(self["webpackChunkAcademicIo"] = self["webpackChunkAcademicIo"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 5926:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 4418);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 441:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5926);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 4418);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 4418:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ 9517);
/* eslint-disable prefer-const */








let LoginPage = class LoginPage {
    constructor(fb, router, alertController, loadingController, chatService) {
        this.fb = fb;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.chatService = chatService;
    }
    ngOnInit() {
        this.credentialForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]]
        });
    }
    signIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            let b = document.getElementById('eemail').value;
            this.chatService
                .signIn(this.credentialForm.value)
                .then((res) => {
                loading.dismiss();
                if (b[0] === 'm') {
                    this.router.navigateByUrl('/chats', { replaceUrl: true });
                }
                else {
                    this.router.navigateByUrl('/prefer', { replaceUrl: true });
                    console.log(b);
                }
            }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                loading.dismiss();
                const alert = yield this.alertController.create({
                    header: ':(',
                    message: err.message,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
    // Easy access for form fields
    get email() {
        return this.credentialForm.get('email');
    }
    get password() {
        return this.credentialForm.get('password');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".errors {\n  font-size: small;\n  color: #fff;\n  background: var(--ion-color-danger);\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.loginForm {\n  border-radius: 10px 10px 10px 10px;\n  --ion-background-color: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center;\n}\n\nion-content {\n  --ion-background-color:#68f573a9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFFSSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLDRDQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNFLGdDQUFBO0FBRUYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ycyB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5sb2dpbkZvcm17XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojNjhmNTczYTk7XHJcbn0iXX0= */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n \n<ion-content class=\"background\">\n \n<ion-item>\n<img src=\"assets/pics/logo_2.png\" class=\"logo\"alt=\"why\" height=\"300px\" width=\"400px\" style=\"padding: 20px;\">\n\n</ion-item>\n\n\n<div class=\"loginForm\">\n  <form [formGroup]=\"credentialForm\">\n    <ion-item class=\"email\">\n      <ion-input\n        placeholder=\"Email address\"\n        formControlName=\"email\"\n        autofocus=\"true\"\n        clearInput=\"true\"\n        id=\"eemail\"\n      ></ion-input>\n    </ion-item>\n    <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\n      <span *ngIf=\"email.errors?.required\">Email is required</span>\n      <span *ngIf=\"email.errors?.email\">Email is invalid</span>\n    </div>\n \n    <ion-item class=\"password\">\n      <ion-input\n      placeholder=\"Password\"\n      type=\"password\"\n      formControlName=\"password\"\n      clearInput=\"true\"\n    ></ion-input>\n    </ion-item>\n    <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n      <span *ngIf=\"password.errors?.required\">Password is required</span>\n      <span *ngIf=\"password.errors?.minlength\">Password needs to be 6 characters</span>\n    </div>\n  </form>\n</div>\n    <ion-button (click)=\"signIn()\" expand=\"full\" color=\"success\">Sing in</ion-button>\n \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map