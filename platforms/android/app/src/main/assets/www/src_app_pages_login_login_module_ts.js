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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".errors {\n  font-size: small;\n  color: #fff;\n  background: var(--ion-color-danger);\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.email, .password {\n  padding-top: 20px;\n}\n\n.loginForm {\n  border-radius: 10px 10px 10px 10px;\n  --ion-background-color: #fff;\n  padding: 90px;\n  width: 90%;\n  height: 300px;\n  max-width: 400px;\n  max-height: 400px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.logo {\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-content {\n  --ion-background-color:#ffffff;\n}\n\nbutton {\n  margin-top: 50px;\n  background: #5df069;\n  border-radius: 999px;\n  box-shadow: #5df069 0 10px 20px -10px;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-family: Inter, Helvetica, \"Apple Color Emoji\", \"Segoe UI Emoji\", NotoColorEmoji, \"Noto Color Emoji\", \"Segoe UI Symbol\", \"Android Emoji\", EmojiSymbols, -apple-system, system-ui, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 24px;\n  opacity: 1;\n  outline: 0 solid transparent;\n  padding: 8px 18px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: -moz-fit-content;\n  width: fit-content;\n  word-break: break-word;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUFBO0VBRUksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNFLDhCQUFBO0FBS0Y7O0FBSEE7RUFDSSxnQkFBQTtFQUNGLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtUEFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBTUYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ycyB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5lbWFpbCwucGFzc3dvcmR7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ubG9naW5Gb3Jte1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA5MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvIFxyXG59XHJcbi5sb2dve1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gXHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogIzVkZjA2OTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBib3gtc2hhZG93OiAjNWRmMDY5IDAgMTBweCAyMHB4IC0xMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlcixIZWx2ZXRpY2EsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixOb3RvQ29sb3JFbW9qaSxcIk5vdG8gQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiLFwiQW5kcm9pZCBFbW9qaVwiLEVtb2ppU3ltYm9scywtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixcIk5vdG8gU2Fuc1wiLHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBvdXRsaW5lOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDhweCAxOHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgYm9yZGVyOiAwO1xyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n \n<ion-content class=\"background\">\n \n<ion-item>\n<img src=\"assets/pics/logo_2.png\" class=\"logo\"alt=\"why\" height=\"250px\" width=\"250px\" style=\"padding: 20px;\">\n\n</ion-item>\n\n\n<div class=\"loginForm\">\n  <form [formGroup]=\"credentialForm\">\n    <ion-item class=\"email\">\n      <ion-input\n        placeholder=\"Email address\"\n        formControlName=\"email\"\n        autofocus=\"true\"\n        clearInput=\"true\"\n        id=\"eemail\"\n      ></ion-input>\n    </ion-item>\n    <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\n      <span *ngIf=\"email.errors?.required\">Email is required</span>\n      <span *ngIf=\"email.errors?.email\">Email is invalid</span>\n    </div>\n \n    <ion-item class=\"password\">\n      <ion-input\n      placeholder=\"Password\"\n      type=\"password\"\n      formControlName=\"password\"\n      clearInput=\"true\"\n    ></ion-input>\n    </ion-item>\n    <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n      <span *ngIf=\"password.errors?.required\">Password is required</span>\n      <span *ngIf=\"password.errors?.minlength\">Password needs to be 6 characters</span>\n    </div>\n    <button (click)=\"signIn()\" >sign in</button>\n\n  </form>\n</div>\n \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map