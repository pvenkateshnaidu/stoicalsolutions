(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"features\">\n<br>\n<br>\n<br>\n</div>\n<div id=\"about\" name=\"about\">\n  <div class=\"container\">\n    <div class=\"row white\">\n      <h2 class=\"centered\">ABOUT US</h2>\n      <hr>\n      <div class=\"col-md-6\"> <img class=\"img-responsive\" src=\"assets/images/about1.jpg\"> </div>\n      <div class=\"col-md-6\">\n        \n        <p>Our experienced marketers, talented designers and skilled programmers work together to uncover your goals and understand your business and market. We develop and build web solutions designed to attract your target customers.</p>\n        <h3></h3>\n        <p>STOICAL SOLUTIONS is a web design and digital marketing agency.Our team is comprised and overall technologists who thrive on helping small to mid-sized businesses grow.</p>\n          <ul class=\"fa-ul\">\n            <li><i class=\"fa-li fa fa-spinner fa-spin\"></i>Website designer</li>\n            <li><i class=\"fa-li fa fa-spinner fa-spin\"></i>Video Design</li>\n            <li><i class=\"fa-li fa fa-spinner fa-spin\"></i>Logo Design</li>\n            <li><i class=\"fa-li fa fa-spinner fa-spin\"></i>Content Writing</li>\n            <li><i class=\"fa-li fa fa-spinner fa-spin\"></i>SEO</li>\n            <li><i class=\"fa-li fa fa-spinner fa-spin\"></i>Payment Gateway</li>\n\t\t\t<li><i class=\"fa-li fa fa-spinner fa-spin\"></i>Cost-Effective</li>\n\t\t\t<li><i class=\"fa-li fa fa-spinner fa-spin\"></i>Social Media Management</li>\n\t\t\t<li><i class=\"fa-li fa fa-spinner fa-spin\"></i>Support and Maintenance</li>\n          </ul>\n              </div>\n    </div>\n   \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(titleService) {
        this.titleService = titleService;
        this.title = 'About Us';
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");








var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        data: { title: 'Home' }
    },
    {
        path: 'services',
        component: _services_services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"],
        data: { title: 'Services' }
    },
    {
        path: 'features',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        data: { title: 'About Us' }
    },
    {
        path: 'portfolio',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"],
        data: { title: 'Portfolio' }
    },
    {
        path: 'contact',
        component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__["ContactusComponent"],
        data: { title: 'Contact Us' }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!DOCTYPE html>\n<html lang=\"en\" class=\"csstransforms csstransforms3d csstransitions\">\n<head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n<title>Stoical Solutions|Stoicalsolutions|Website site design|</title>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\">\n</head>\n<body data-spy=\"scroll\" data-offset=\"0\" data-target=\"#navbar-main\">\n<app-header></app-header>\n<app-services></app-services>\n<app-about></app-about>\n<app-portfolio></app-portfolio>\n<app-contactus></app-contactus>\n\n<app-footer></app-footer>\n</body>\n</html>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'stoicalsolutions';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/fesm5/ngx-page-scroll.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__["ContactusComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_page_scroll__WEBPACK_IMPORTED_MODULE_11__["NgxPageScrollModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ==== CONTACT ==== -->\n<div id=\"contact\" name=\"contact\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <h2 class=\"centered\">CONTACT US</h2>\n      <hr>\n      <div class=\"col-md-4 centered\"> <i class=\"fa fa-map-marker fa-2x\"></i>\n        <p>32985 Hamilton Ct.,Suite 122<br>\n\t\tFarmington hills, MI 48334</p>\n      </div>\n      <div class=\"col-md-4 centered\"> <i class=\"fa fa-envelope-o fa-2x\"></i>\n        <p>stoicalsolutions@gmail.com</p>\n      </div>\n      <div class=\"col-md-4 centered\"> <i class=\"fa fa-phone fa-2x\"></i>\n        <p> 224-703-3561</p>\n      </div>\n    </div><br>\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-lg-offset-2 centered\">\n        <p>We’d love to chat with you about your project. There’s no obligation! When you’re ready to talk, either call us, or send us an email via the quick contact form below.</p>\n        <form method=\"POST\" id=\"contactForm\" action=\"\" class=\"form\" novalidate=\"\">\n          <div class=\"row\">\n            <div class=\"col-xs-6 col-md-6 form-group\">\n              <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Name\" required=\"required\">\n              <p class=\"help-block text-danger\"></p>\n            </div>\n            <div class=\"col-xs-6 col-md-6 form-group\">\n              <input type=\"email\" id=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" required=\"required\">\n              <p class=\"help-block text-danger\"></p>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <textarea name=\"message\" id=\"message\" class=\"form-control\" rows=\"5\" placeholder=\"Message\" required=\"\"></textarea>\n            <p class=\"help-block text-danger\"></p>\n          </div>\n          <div id=\"success\"></div>\n          <input type=\"submit\" class=\"btn btn btn-lg\" name=\"contact\" value=\"Send Message\">\n        </form>\n\n        <!-- form --> \n      </div>\n    </div>\n    <!-- row --> \n    \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Contact Us';
    }
    ContactusComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">Copyright © 2014 Stoical Solutions.</div>\n      <div class=\"col-sm-6\">\n        <div class=\"follow-us\"> <a class=\"fa fa-facebook social-icon\" href=\"index.php#\"></a> \n          <a class=\"fa fa-twitter social-icon\" href=\"index.php#\"></a> \n          <a class=\"fa fa-linkedin social-icon\" href=\"index.php#\"></a> \n          <a class=\"fa fa-google-plus social-icon\" href=\"index.php#\"></a> \n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"navbar navbar-inverse navbar-fixed-top\">\n<header id=\"header\">\n  <nav class=\"navbar navbar-inverse\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> \n          <span class=\"sr-only\">Toggle navigation</span> \n          <span class=\"icon-bar\"></span> \n          <span class=\"icon-bar\"></span> \n          <span class=\"icon-bar\"></span> \n        </button>\n        <a pageScroll [routerLink]=\"['']\" href=\"#main-slide\" class=\"navbar-brand\" ><i class=\"fa fa-sun-o\"></i> Stoical Solutions</a>\n      </div>\n      <div class=\"collapse navbar-collapse navbar-right\" id=\"navbar\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"\"><a pageScroll [routerLink]=\"['']\" href=\"#main-slide\" class=\"smoothScroll\">Home</a></li>\n        \n          <li class><a pageScroll [routerLink]=\"['/services']\" href=\"#services\"  class=\"smoothScroll\">Services</a></li>\n           <li class><a  pageScroll [routerLink]=\"['/features']\" href=\"#features\" class=\"smoothScroll\">About</a></li>\n          <li class><a pageScroll [routerLink]=\"['/portfolio']\" href=\"#portfolio\" class=\"smoothScroll\">Portfolio</a></li>\n          <li class><a pageScroll [routerLink]=\"['/contact']\" href=\"#contact\" class=\"smoothScroll\">Contact</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Stoical Solutions | Home';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"portfolio\">\n  <br>\n  <br>\n  <br>\n  <br>\n</div>\n<section id=\"recent-works\" name=\"recent-works\">\n  <div class=\"container\">\n    <div class=\"center\">\n      <h2>Portfolio</h2>\n      <hr>\n     <!-- <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n        Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.<!-- <a href=\"portfolio.html\" class=\"readmore\">--><!--View all Works →</a></p>-->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n        <div class=\"recent-work-wrap\"> \n          <img class=\"img-responsive\" src=\"assets/images/item1.png\" alt=\"\">\n          <div class=\"overlay\">\n            <div class=\"recent-work-inner\">\n              <h3><a href=\"index.php#\">IT Solutions</a> </h3>\n              <p>Full service provider of information technology professional services and business solutions</p>\n              <a class=\"preview\" href=\"http://choicetechinc.com/\" target=\"_blank\"><i class=\"fa fa-search\"></i> View</a> \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n        <div class=\"recent-work-wrap\"> \n          <img class=\"img-responsive\" src=\"assets/images/item2.png\" alt=\"\">\n          <div class=\"overlay\">\n            <div class=\"recent-work-inner\">\n              <h3><a href=\"index.php#\">Business IT services</a></h3>\n              <p>IT Managed Services, Digital Marketing & Commerce, Talent Acquisition and IT Seminars.</p>\n              <a class=\"preview\" href=\"http://avsconsultants.com/\" target=\"_blank\"><i class=\"fa fa-search\"></i> View</a> </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n        <div class=\"recent-work-wrap\"> \n          <img class=\"img-responsive\" src=\"assets/images/item444.png\" alt=\"\">\n          <div class=\"overlay\">\n            <div class=\"recent-work-inner\">\n              <h3><a href=\"html#\">world’s largest financial institutions</a></h3>\n              <p>World’s largest financial institutions for FX, commodity, private equity trades and others.</p>\n              <a class=\"preview\" href=\"http://epiphyte.com/\" target=\"_blank\"><i class=\"fa fa-search\"></i> View</a> \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n        <div class=\"recent-work-wrap\"> \n          <img class=\"img-responsive\" src=\"assets/images/item3.png\" alt=\"\">\n          <div class=\"overlay\">\n            <div class=\"recent-work-inner\">\n              <h3><a href=\"index.php#\">India Number1 Social Networking Community</a></h3>\n              <p>Social Community Networking website for students.Find new skills, singers,dancers,shortfilms,Information On Study Abroad,Upload Videos</p>\n              <a class=\"preview\" href=\"http://stepfocus.com/\" target=\"_blank\"><i class=\"fa fa-search\"></i> View</a> </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n        <div class=\"recent-work-wrap\"> <img class=\"img-responsive\" src=\"assets/images/item55.png\" alt=\"\">\n          <div class=\"overlay\">\n            <div class=\"recent-work-inner\">\n              <h3><a href=\"index.php#\">Pre Engineering Building</a></h3>\n              <p>Our organization started in the year 1984 to serve in the fields of mainly Cinema theater fabrication all over Andhra Pradesh.</p>\n              <a class=\"preview\" href=\"http://septemberr.com/\" target=\"_blank\"><i class=\"fa fa-search\"></i> View</a> </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n        <div class=\"recent-work-wrap\"> <img class=\"img-responsive\" src=\"assets/images/item666.png\" alt=\"\">\n          <div class=\"overlay\">\n            <div class=\"recent-work-inner\">\n              <h3><a href=\"index.php#\">Shresht Industries Private Limited is a healthcare</a></h3>\n              <p>Healthcare RO products company with a vision to make India a Shresht Bharat.</p>\n              <a class=\"preview\" href=\"http://shresht.com/\" target=\"_blank\"><i class=\"fa fa-search\"></i> View</a> </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Portfolio';
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-slide\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#main-slide\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#main-slide\" data-slide-to=\"1\" class=\"\"></li>\n    <li data-target=\"#main-slide\" data-slide-to=\"2\" class=\"\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"item active\"> <img class=\"img-responsive\" src=\"assets/images/bg1.jpg\" alt=\"slider\">\n      <div class=\"slider-content\">\n        <div class=\"col-md-12 text-center\">\n          <!--<h3>Welcome to <span class=\"logo\">Stoical Solutions</span></h3>-->\n          <h3>Your Creative Business Partner</h3>\n          <p><a pageScroll [routerLink]=\"['/portfolio']\" href=\"#portfolio\" class=\"slider btn\">View Portfolio</a> </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"item\"> \n      <img class=\"img-responsive\" src=\"assets/images/bg2.jpg\" alt=\"slider\">\n      <div class=\"slider-content\">\n        <div class=\"col-md-12 text-center\">\n          <h3><strong>Responsive</strong> Design</h3>\n          <h4>Responsive, Easy to Customize and Ready for Your Business</h4>\n          <p><a pageScroll [routerLink]=\"['/services']\" href=\"#services\"  class=\"slider btn\">Services</a> </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"item\"> \n      <img class=\"img-responsive\" src=\"assets/images/bg3.jpg\" alt=\"slider\">\n      <div class=\"slider-content\">\n        <div class=\"col-md-12 text-center\">\n          <h3><strong>Easy</strong> to Customize</h3>\n          <h4>Responsive, Easy to Customize and Ready for Your Business</h4>\n          <p><a pageScroll [routerLink]=\"['/features']\" href=\"#features\" class=\"slider btn\">About us</a> </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class=\"left carousel-control\" href=\"index.php#main-slide\" data-slide=\"prev\"> \n    <span><i class=\"fa fa-angle-left\"></i></span> </a> \n    <a class=\"right carousel-control\" href=\"index.php#main-slide\" data-slide=\"next\"> \n      <span><i class=\"fa fa-angle-right\"></i></span> \n    </a> \n    </div>\n\n    <section id=\"feature\" name=\"feature\">\n        <div id=\"services\">\n            <br>\n           \n          </div>\n      <div class=\"container\">\n        <div class=\"center\"><br><br>\n          <h2>Our Services</h2>\n          <hr>\n          <p class=\"lead\">Digital marketing solutions built around your goals and numerous digital marketing campaigns under our belt\n    <br>\n            We make the process of getting a great new website easy, cost-effective, and quick.</p>\n        </div>\n        <div class=\"row\">\n          <div class=\"features\">\n            <div class=\"col-md-4 col-sm-6\">\n              <div class=\"feature-wrap\"> <i class=\"fa fa-laptop\"></i>\n                <h2>Domain And Hosting</h2>\n                <h3>Includes a free domain (YourCompany.com) and email services. Transfer an existing domain for free.</h3>\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n              <div class=\"feature-wrap\"> <i class=\"fa fa-code\"></i>\n                <h2>Development And Design</h2>\n                <h3>Stand out from the crowd of competitors with a modern and professional design that looks great on all devices.</h3>\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n              <div class=\"feature-wrap\"> <i class=\"fa fa-bullhorn\"></i>\n                <h2>Internet Marketing</h2>\n                <h3>We optimize your site for search engine inclusion using your top keywords. Get listed on Google, Yahoo, Bing and more!</h3>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Services';
    }
    ServicesComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sri\stoicalsolutions\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map