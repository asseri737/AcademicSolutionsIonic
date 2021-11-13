(self["webpackChunkAcademicIo"] = self["webpackChunkAcademicIo"] || []).push([["src_app_pages_chat_chat_module_ts"],{

/***/ 3214:
/*!***************************************************!*\
  !*** ./src/app/pages/chat/chat-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageRoutingModule": () => (/* binding */ ChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page */ 1397);




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_0__.ChatPage
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ 7709:
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageModule": () => (/* binding */ ChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ 3214);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 1397);







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPageRoutingModule
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage]
    })
], ChatPageModule);



/***/ }),

/***/ 1397:
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPage": () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat.page.html */ 6038);
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page.scss */ 7365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ 9517);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);







let ChatPage = class ChatPage {
    constructor(chatService, router, route) {
        this.chatService = chatService;
        this.router = router;
        this.route = route;
        this.newMsg = '';
        console.log(route.snapshot.paramMap.get('userId'));
    }
    ngOnInit() {
        this.messages = this.chatService.getChatMessages();
    }
    sendMessage() {
        this.chatService.addChatMessage(this.newMsg).then(() => {
            this.newMsg = '';
            this.content.scrollToBottom();
        });
    }
    signOut() {
        this.chatService.signOut().then(() => {
            this.router.navigateByUrl('/', { replaceUrl: true });
        });
    }
};
ChatPage.ctorParameters = () => [
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ChatPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent,] }]
};
ChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatPage);



/***/ }),

/***/ 7365:
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 6px;\n  background: #fff;\n  resize: none;\n  margin-top: 0px;\n  --padding-start: 8px;\n}\n\n.message {\n  padding: 10px !important;\n  border-radius: 10px !important;\n  margin-bottom: 4px !important;\n  white-space: pre-wrap;\n}\n\n.my-message {\n  background: #aafcb5;\n  color: #fff;\n}\n\n.other-message {\n  background: #1b7927;\n  color: #fff;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6ImNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxufVxyXG4gXHJcbi5tZXNzYWdlIHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcbiBcclxuLm15LW1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDojYWFmY2I1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIFxyXG4ub3RoZXItbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWI3OTI3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIFxyXG4udGltZSB7XHJcbiAgICBjb2xvcjogI2RmZGZkZjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn0iXX0= */");

/***/ }),

/***/ 6038:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title>Open Chat</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"signOut()\">\n        <ion-icon name=\"log-out\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n\n      <ion-buttons slot=\"start\">\n        <ion-back-button (click)=\"toPrefer()\" color=\"light\"></ion-back-button>\n\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content class=\"ion-padding\">\n \n  <ion-grid>\n    <ion-row *ngFor=\"let message of messages | async\">\n      <ion-col size=\"9\" class=\"message\"\n        [offset]=\"message.myMsg ? 3 : 0\"\n        [ngClass]=\"{ 'my-message': message.myMsg, 'other-message': !message.myMsg }\">\n        <b>{{ message.fromName }}</b><br>\n        <span>{{ message.msg }}\n        </span>\n        <div class=\"time ion-text-right\"><br>{{ message.createdAt | date:'short' }}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n \n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"10\">\n        <ion-textarea autoGrow=\"true\" class=\"message-input\" rows=\"1\" maxLength=\"500\" [(ngModel)]=\"newMsg\" >\n        </ion-textarea>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" fill=\"clear\" color=\"success\" [disabled]=\"newMsg === ''\"\n          class=\"msg-btn\" (click)=\"sendMessage()\">\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_chat_chat_module_ts.js.map