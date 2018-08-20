webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overview_overview_component__ = __webpack_require__("./src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__information_information_component__ = __webpack_require__("./src/app/information/information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__result_result_component__ = __webpack_require__("./src/app/result/result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__overview_overview_component__["a" /* OverviewComponent */]
    },
    {
        path: 'information',
        component: __WEBPACK_IMPORTED_MODULE_3__information_information_component__["a" /* InformationComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'result',
        component: __WEBPACK_IMPORTED_MODULE_5__result_result_component__["a" /* ResultComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#header {\r\n  padding: 5px 5px 5px 15px;\r\n  border-bottom: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\nhtml {\r\n  position: relative;\r\n  min-height: 100%;\r\n}\r\n\r\n.footer {\r\n  border-top: 1px solid rgba(0,0,0,.1);\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 70px; /* Set the fixed height of the footer here */\r\n  background-color: #ffffff;\r\n  clear: both;\r\n}\r\n\r\n.footer * {\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\nfooter .container {\r\n  margin-left: 0;\r\n  padding-left: 0;\r\n}\r\n\r\nfooter img {\r\n  float: left;\r\n  padding: 5px 5px 5px 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <div id=\"header\">\n    <img src=\"assets/Faculteitlogo.jpg\">\n  </div>\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"footer\">\n  <div class=\"container\">\n    <img align=\"left\" src=\"assets/Ugentlogo.png\">\n  </div>\n</footer>\n<!--buitenste rand blijft het zelfe ! daarom dat dit gemeenschappelijke deel hier in staat-->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overview_overview_component__ = __webpack_require__("./src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__information_information_component__ = __webpack_require__("./src/app/information/information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__result_result_component__ = __webpack_require__("./src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_5__information_information_component__["a" /* InformationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__result_result_component__["a" /* ResultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/information/information.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/information/information.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  information works!\n</p>\n"

/***/ }),

/***/ "./src/app/information/information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InformationComponent = /** @class */ (function () {
    function InformationComponent() {
    }
    InformationComponent.prototype.ngOnInit = function () {
    };
    InformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-information',
            template: __webpack_require__("./src/app/information/information.component.html"),
            styles: [__webpack_require__("./src/app/information/information.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/overview/overview.component.css":
/***/ (function(module, exports) {

module.exports = "#filler {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#blueTag {\r\n  position: relative;\r\n  background-color: #1E64C8;\r\n  clear: both;\r\n  overflow: hidden;\r\n}\r\n\r\n#blueTag h1 {\r\n  padding-top: 10%;\r\n  padding-bottom: 10%;\r\n  text-align: center;\r\n  color : white;\r\n}\r\n\r\n#blueTag img {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  max-height: 100px;\r\n  width: auto;\r\n}\r\n\r\n#buttonTags {\r\n  background-color: lightgray;\r\n}\r\n\r\n.col-6 {\r\n  text-align: center;\r\n}\r\n\r\n.button-wrapper{\r\n  display: inline-block;\r\n  padding-bottom: 75px;\r\n}\r\n\r\n.row {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"filler\">\n  <div id=\"blueTag\">\n    <h1>Benieuwd naar hoe goed u slaapt?</h1>\n    <div class=\"image-frame\">\n      <img align=\"right\" src=\"assets/Slaap.png\">\n    </div>\n  </div>\n  <div id=\"buttonTags\">\n    <div class=\"row\" style=\"padding-top: 5%\">\n      <div class=\"col-6 offset-6\">\n        <p>Meer info?</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div class=\"button-wrapper\">\n          <button routerLink=\"/register\" type=\"button\" class=\"btn btn-info\">Test hier</button>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"button-wrapper\">\n          <button onclick=\"location.href='http://www.google.com'\" type=\"button\" class=\"btn btn-info\">\n            <i class=\"material-icons\">search</i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-overview',
            template: __webpack_require__("./src/app/overview/overview.component.html"),
            styles: [__webpack_require__("./src/app/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "h3 {\r\n  padding-bottom: 20px;\r\n  padding-top: 20px;\r\n}\r\n\r\nform {\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.alert-info {\r\n  color: #FFFFFF;\r\n  background-color: #1E64C8;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!berekend\" class=\"container\">\n  <h3>Vul hier uw gegevens in en kom snel te weten of u in aanmerking komt!</h3>\n  <form [formGroup]=\"myForm\" novalidate>\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <label for=\"naam\" class=\"col-2 col-form-label\">Naam</label>\n        <input type=\"text\" class=\"form-control col-10\" id=\"naam\"\n               [ngClass]=\"{'is-invalid': naam.invalid && (naam.dirty || naam.touched)}\"\n               formControlName=\"naam\" placeholder=\"Naam\">\n      </div>\n      <div *ngIf=\"naam.invalid && (naam.dirty || naam.touched)\"\n           class=\"alert alert-danger col-10 offset-2\" style=\"margin-top: 10px; vertical-align: middle\">\n\n        <div *ngIf=\"naam.errors.required\">\n          * Naam is verplicht.\n        </div>\n        <div *ngIf=\"naam.errors.minlength\">\n          * Naam moet minimaal 2 character lang zijn.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <label for=\"voornaam\" class=\"col-2 col-form-label\">Voornaam</label>\n        <input type=\"text\" class=\"form-control col-10\" id=\"voornaam\"\n               [ngClass]=\"{'is-invalid': voornaam.invalid && (voornaam.dirty || voornaam.touched)}\"\n               formControlName=\"voornaam\" placeholder=\"Voornaam\">\n      </div>\n      <div\n        *ngIf=\"voornaam.invalid && (voornaam.dirty || voornaam.touched)\"\n        class=\"alert alert-danger col-10 offset-2\" style=\"margin-top: 10px; vertical-align: middle\">\n\n        <div *ngIf=\"voornaam.errors.required\">\n          * Voornaam is verplicht.\n        </div>\n        <div *ngIf=\"voornaam.errors.minlength\">\n          * Voornaam moet minimaal 2 character lang zijn.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"geboorteDatum\" class=\"col-2 col-form-label\">Geboortedatum</label>\n      <input type=\"date\" class=\"form-control col-10\" id=\"geboorteDatum\"\n             [ngClass]=\"{'is-invalid': geboorteDatum.invalid && (geboorteDatum.dirty || geboorteDatum.touched)}\"\n             formControlName=\"geboorteDatum\">\n      <div\n        *ngIf=\"geboorteDatum.invalid && (geboorteDatum.dirty || geboorteDatum.touched)\"\n        class=\"alert alert-danger col-10 offset-2\" style=\"margin-top: 10px; vertical-align: middle\">\n\n        <div *ngIf=\"geboorteDatum.errors.required\">\n          * Geboortedatum is verplicht.\n        </div>\n        <div *ngIf=\"geboorteDatum.errors.dateChecker\">\n          * Geboortedatum ligt niet tussen 1900-2000.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <label for=\"email\" class=\"col-2 col-form-label\">E-mailadres</label>\n        <input type=\"email\" class=\"form-control col-10\" id=\"email\"\n               [ngClass]=\"{'is-invalid': email.invalid && (email.dirty || email.touched)}\"\n               formControlName=\"email\" placeholder=\"example@example.be\">\n      </div>\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n           class=\"alert alert-danger col-10 offset-2\" style=\"margin-top: 10px; vertical-align: middle\">\n\n        <div *ngIf=\"email.errors.required\">\n          * Email is verplicht.\n        </div>\n        <div *ngIf=\"email.errors.email\">\n          * Email moet van het correcte formaat zijn.\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <label class=\"col-2 col-form-label\">Geslacht:</label>\n      <div class=\"radio col-2\" style=\"padding-left: 0px\">\n        <input type=\"radio\" required [(ngModel)]=\"geslacht\" [ngModelOptions]=\"{standalone: true}\" name=\"geslacht\"\n               value=\"man\"> Man\n      </div>\n      <div class=\"radio col-2\">\n        <input type=\"radio\" required [(ngModel)]=\"geslacht\" [ngModelOptions]=\"{standalone: true}\" name=\"geslacht\"\n               value=\"vrouw\"> Vrouw\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <label for=\"gewicht\" class=\"col-2 col-form-label\">Gewicht(kg)</label>\n        <input type=\"number\" class=\"form-control col-10\" id=\"gewicht\"\n               [ngClass]=\"{'is-invalid': gewicht.invalid && (gewicht.dirty || gewicht.touched)}\"\n               formControlName=\"gewicht\" placeholder=\"65,6\">\n      </div>\n      <div *ngIf=\"gewicht.invalid && (gewicht.dirty || gewicht.touched)\"\n           class=\"alert alert-danger col-10 offset-2\" style=\"margin-top: 10px; vertical-align: middle\">\n\n        <div *ngIf=\"gewicht.errors.required\">\n          * Gewicht is verplicht.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <label for=\"lengte\" class=\"col-2 col-form-label\">Lengte(m)</label>\n        <input type=\"number\" class=\"form-control col-10\" id=\"lengte\"\n               [ngClass]=\"{'is-invalid': lengte.invalid && (lengte.dirty || lengte.touched)}\"\n               formControlName=\"lengte\" placeholder=\"1,78\">\n      </div>\n      <div *ngIf=\"lengte.invalid && (lengte.dirty || lengte.touched)\"\n           class=\"alert alert-danger col-10 offset-2\" style=\"margin-top: 10px; vertical-align: middle\">\n\n        <div *ngIf=\"lengte.errors.required\">\n          * Lengte is verplicht.\n        </div>\n        <div *ngIf=\"lengte.errors.lengthChecker\">\n          * Lengte ligt niet binnen het gevraagde interval.\n        </div>\n      </div>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-info\" (click)=\"onSubmit()\" [disabled]=\"!myForm.valid\">Submit</button>\n\n  </form>\n</div>\n\n<div *ngIf=\"berekend\" class=\"alert alert-info col-4 offset-4\" style=\"margin-top: 100px;\" >\n  <div *ngIf=\"geschikt\">\n    <strong>Proficiat</strong>, je komt in aanmerking om deel te nemen! <br>\n    We nemen zo snel mogelijk contact met u op!\n  </div>\n  <div *ngIf=\"!geschikt\">\n      <strong>Jammer</strong>, u komt niet in aanmerking. <br>\n      Toch bedankt voor de interesse en tijd.\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.berekend = false;
        this.geschikt = false;
        this.createFormControls();
        this.createForm();
        this.geslacht = 'man';
    };
    RegisterComponent.prototype.createFormControls = function () {
        this.naam = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(2)
        ]);
        this.voornaam = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(2)
        ]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email
        ]);
        this.geboorteDatum = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
            this.dateCheckerValidator
        ]);
        this.gewicht = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.lengte = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
            this.lengthValidator
        ]);
    };
    RegisterComponent.prototype.createForm = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            naam: this.naam,
            voornaam: this.voornaam,
            email: this.email,
            geboorteDatum: this.geboorteDatum,
            gewicht: this.gewicht,
            lengte: this.lengte
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        if (this.myForm.valid) {
            this.berekend = true;
            var bmi = this.gewicht.value / (this.lengte.value * this.lengte.value);
            var year = new Date(this.geboorteDatum.value).getFullYear();
            console.log('bmi is = ' + bmi);
            console.log('geboortejaar is = ' + year);
            console.log('Geslacht is ' + this.geslacht);
            this.geschikt = true;
            /*const txtFile = "assets/Data.txt";
            const file = new File(txtFile);
            var str = "My string of text";
      
            file.open("w"); // open file with write access
            file.writeln("First line of text");
            file.writeln("Second line of text " + str);
            file.write(str);
            file.close();*/
        }
    };
    RegisterComponent.prototype.dateCheckerValidator = function (control) {
        var value = control.value;
        if (value) {
            var year = new Date(value).getFullYear();
            if (year > 2000 || year < 1900) {
                return {
                    dateChecker: {
                        datavalue: 'No correct date'
                    }
                };
            }
        }
        return null;
    };
    RegisterComponent.prototype.lengthValidator = function (control) {
        var value = control.value;
        if (value) {
            if (value < 1 || value > 2) {
                return {
                    lengthChecker: {
                        length: 'No correct length'
                    }
                };
            }
        }
        return null;
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  result works!\n</p>\n"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-result',
            template: __webpack_require__("./src/app/result/result.component.html"),
            styles: [__webpack_require__("./src/app/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map