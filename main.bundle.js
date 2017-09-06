webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n\tbackground: #eeeeff;\r\n\tpadding-top: 50px;\r\n\ttext-align: justify;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <section id=\"training\">\n        <app-training-calc [vdot_results]=\"vdot_results\" [vdot_training]=\"vdot_training\"></app-training-calc>\n      </section>\n      <section id=\"tables\">\n        <app-vdot-tables [vdot_results]=\"vdot_results\" [vdot_training]=\"vdot_training\"></app-vdot-tables>\n      </section>\n      <section id=\"calculator\">\n        <app-pace-calc [vdot_results]=\"vdot_results\"></app-pace-calc>\n      </section>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.title = 'app';
        // load VDOT data from JSON files
        this.http.get('../assets/vdot_results.json').subscribe(function (res) { return _this.vdot_results = res.json(); });
        this.http.get('../assets/vdot_training.json').subscribe(function (res) { return _this.vdot_training = res.json(); });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vdot_tables_vdot_tables_component__ = __webpack_require__("../../../../../src/app/vdot-tables/vdot-tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pace_calc_pace_calc_component__ = __webpack_require__("../../../../../src/app/pace-calc/pace-calc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__training_calc_training_calc_component__ = __webpack_require__("../../../../../src/app/training-calc/training-calc.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__vdot_tables_vdot_tables_component__["a" /* VdotTablesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pace_calc_pace_calc_component__["a" /* PaceCalcComponent */],
            __WEBPACK_IMPORTED_MODULE_9__training_calc_training_calc_component__["a" /* TrainingCalcComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n\tpadding: 20px;\r\n\ttext-align: center;\r\n\tbackground: #337ab7;\r\n\tcolor: #ddd;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n\t<p>Designed and coded by Michał Wiśniewski [MW Projects], 2017</p>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\r\n\tborder-radius: 0;\r\n\tmargin: 0;\r\n\tbackground: #337ab7 !important;\r\n\tborder-bottom: 0;\r\n}\r\n\r\nnav * {\r\n\toutline: none;\r\n}\r\n\r\nnav a {\r\n\tcolor: #fff !important;\r\n}\r\n\r\nnav a:hover, nav a:focus {\r\n\tcolor: #ddd !important;\r\n}\r\n\r\n.navbar-toggle {\r\n\tborder-color: #fff !important;\r\n}\r\n\r\n.navbar-toggle:hover, .navbar-toggle:focus {\r\n\tbackground: #286090 !important\r\n}\r\n\r\n.navbar-collapse {\r\n\tborder-top-color: #fff !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#training\">Kalkulator Treningowy VDOT</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#training\">Wyznaczanie intensywności treningu</a></li>\n        <li><a href=\"#tables\">Tabele VDOT</a></li>\n        <li><a href=\"#calculator\">Kalkulator tempa</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

$(document).on('click', 'a', function (event) {
    event.preventDefault();
    // smooth scrolling
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 500);
});
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pace-calc/pace-calc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.input-short {\r\n\tdisplay: inline;\r\n\twidth: 70px;\r\n}\r\n\r\nselect.input-short {\r\n\tdisplay: inline;\r\n\twidth: 150px;\r\n\tmargin-right: 10px;\r\n\tmargin-bottom: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pace-calc/pace-calc.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Kalkulator tempa</h2>\n<p>Wprowadź dystans zawodów, w których zamierzasz wystartować oraz wynik, jaki chciałbyś mieć na mecie. Dowiesz się jakie średne tempo będziesz musiał utrzymywać, by zrealizować plan.</p>\n<p>Wybierając któryś z popularnych dystansów poznasz również wartość wskaźnika VDOT, którą powinieneś wytrenować, aby realnie myśleć o przybiegnięciu na metę w zakładanym czasie.</p>\n<label>Dystans</label>\n<br>\n<select class=\"form-control input-short\" [(ngModel)]=\"distance\">\n\t<option value=\"0\">dowolny</option>\n\t<option value=\"5\">5km</option>\n\t<option value=\"10\">10km</option>\n\t<option value=\"21.097\">półmaraton</option>\n\t<option value=\"42.195\">maraton</option>\n</select> \n<input type=\"text\" class=\"form-control input-short\" value=\"{{ distance }}\" [(ngModel)]=\"distance\">\n<span>km</span>\n<br>\n<label>Planowany wynik</label>\n<br>\n<input type=\"text\" class=\"form-control input-short\" [(ngModel)]=\"h\">\n<span>godzin</span>\n<input type=\"text\" class=\"form-control input-short\" [(ngModel)]=\"m\">\n<span>minut</span>\n<input type=\"text\" class=\"form-control input-short\" [(ngModel)]=\"s\">\n<span>sekund</span>\n<br>\n<br>\n<button class=\"btn btn-primary\" (click)=\"calculatePace()\">Oblicz tempo</button>\n<br>\n<br>\n<div *ngIf=\"validData\" class=\"alert alert-info\">\n\t<p>Taki wynik wymaga utrzymania średniego tempa <strong>{{ pace }} min/km</strong>.</p>\n\t<p *ngIf=\"showVdot\">By było to możliwe, potrzebujesz VDOT na poziomie co najmniej <strong>{{vdot}}</strong>.</p>\n</div>\n<div *ngIf=\"!validData && buttonClicked\" class=\"alert alert-danger\">Podane dane są niepoprawne.</div>\n<br>"

/***/ }),

/***/ "../../../../../src/app/pace-calc/pace-calc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaceCalcComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaceCalcComponent = (function () {
    function PaceCalcComponent() {
        this.pace = '00:00';
        this.distance = 0;
        this.h = 0;
        this.m = 0;
        this.s = 0;
        this.validData = false;
        this.buttonClicked = false;
        this.showVdot = false;
        this.vdot = 0;
    }
    PaceCalcComponent.prototype.ngOnInit = function () {
    };
    // calculate race pace based on entered distance and finish time
    PaceCalcComponent.prototype.calculatePace = function () {
        this.buttonClicked = true;
        if (this.distance > 0 &&
            !isNaN(this.distance) &&
            !isNaN(this.h) &&
            !isNaN(this.m) &&
            !isNaN(this.s)) {
            this.validData = true;
            // calulate pace
            var totalMinutes = Number(this.h) * 60 + Number(this.m) + Number(this.s / 60);
            var paceMin = Math.floor(totalMinutes / this.distance);
            var paceSec = Math.floor(((totalMinutes / this.distance) % 1) * 60);
            this.pace = paceMin + ':' + (paceSec >= 10 ? paceSec : '0' + paceSec);
            // if selected distance was one of the popular ones also show VDOT needed to run that fast
            if (this.distance == 5 || this.distance == 10 || this.distance == 21.097 || this.distance == 42.195) {
                this.showVdot = true;
                var totalSec = Number(this.h * 3600) + Number(this.m * 60) + Number(this.s);
                this.vdot = this.findVdot(this.distance, totalSec); // find VDOT
            }
            else {
                this.showVdot = false;
            }
        }
        else {
            this.validData = false;
        }
    };
    // find VDOT
    PaceCalcComponent.prototype.findVdot = function (distance, totalSec) {
        var distMapping = {
            '5': '5k',
            '10': '10k',
            '21.097': 'hm',
            '42.195': 'm'
        };
        var dist = distMapping[distance];
        // find VDOT in JSON file's data
        var lastVdot = 30; // default lowest value
        for (var _i = 0, _a = this.vdot_results; _i < _a.length; _i++) {
            var result = _a[_i];
            if (totalSec > result[dist]) {
                return lastVdot;
            }
            else {
                lastVdot = result['vdot'];
            }
        }
        return 70; // highest returned value (if are results too good to be found in the VDOT tables)
    };
    return PaceCalcComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PaceCalcComponent.prototype, "vdot_results", void 0);
PaceCalcComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-pace-calc',
        template: __webpack_require__("../../../../../src/app/pace-calc/pace-calc.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pace-calc/pace-calc.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PaceCalcComponent);

//# sourceMappingURL=pace-calc.component.js.map

/***/ }),

/***/ "../../../../../src/app/training-calc/training-calc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.input-short {\r\n\tdisplay: inline;\r\n\twidth: 50px;\r\n}\r\n\r\nselect.input-short {\r\n\tdisplay: inline;\r\n\twidth: 150px;\r\n\tmargin-right: 10px;\r\n}\r\n\r\nul {\r\n\tpadding-left: 15px;\r\n}\r\n\r\nli {\r\n\tpadding-top: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training-calc/training-calc.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Wyznaczanie intensywności treningu</h2>\n<p>Opracowany przez amerykańskiego trenera biegowego Jacka Danielsa wskaźnik VDOT umożliwia ocenę aktualnej formy, prognozę wyników na innych dystansach oraz dobór optymalnych obciążeń treningowych, dzięki którym możliwa będzie systematyczna poprawa swoich osiągnęć.</p>\n<p>Aby poznać swoją aktualną formę, wpisz wyników ostatnich zawodów (przebiegniętych \"na maksa\", nie treningowo) na jednym z najpopularniejszych dystansów. Otrzymasz wartość wskaźnika VDOT oraz wyliczone tempa dla różnych jednostek treningowych.</p>\n<select class=\"form-control input-short\" [(ngModel)]=\"distance\">\n\t<option value=\"0\">wybierz dystans</option>\n\t<option value=\"5k\">5km</option>\n\t<option value=\"10k\">10km</option>\n\t<option value=\"hm\">półmaraton</option>\n\t<option value=\"m\">maraton</option>\n</select>\n<input type=\"text\" class=\"form-control input-short\" [(ngModel)]=\"h\">\n<span>godzin</span>\n<input type=\"text\" class=\"form-control input-short\" [(ngModel)]=\"m\">\n<span>minut</span>\n<input type=\"text\" class=\"form-control input-short\" [(ngModel)]=\"s\">\n<span>sekund</span>\n<br>\n<br>\n<button class=\"btn btn-primary\" (click)=\"calculateTraining()\">Wylicz treningi</button>\n<br>\n<br>\n<div *ngIf=\"validData\" class=\"alert alert-info\">\n\t<p>Twój wskaźnik VDOT wynosi <strong>{{ vdot }}</strong>.</p>\n\t<p>Aby poprawiać swoje wyniki, powinieneś trenować:</p>\n\t<ul>\n\t\t<li>biegi spokojne (rozbiegania, długie wybiegania) - <strong>{{ convertToPace(trainingPaces['bs1000']) }}</strong></li>\n\t\t<li>tempo maratońskie - <strong>{{ convertToPace(trainingPaces['m1000']) }}</strong></li>\n\t\t<li>biegi progowe 400m - <strong>{{ convertToPace(trainingPaces['p400']) }}</strong></li>\t\n\t\t<li>biegi progowe 1000m - <strong>{{ convertToPace(trainingPaces['p1000']) }}</strong></li>\n\t\t<li>interwały 400m - <strong>{{ convertToPace(trainingPaces['i400']) }}</strong></li>\n\t\t<li>interwały 1000m - <strong>{{ convertToPace(trainingPaces['i1000']) }}</strong></li>\n\t\t<li>rytmy 200m - <strong>{{ convertToPace(trainingPaces['r200']) }}</strong></li>\n\t\t<li>rytmy 400m - <strong>{{ convertToPace(trainingPaces['r400']) }}</strong></li>\n\t</ul>\n</div>\n<div *ngIf=\"!validData && buttonClicked\" class=\"alert alert-danger\">Podane dane są niepoprawne.</div>"

/***/ }),

/***/ "../../../../../src/app/training-calc/training-calc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingCalcComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrainingCalcComponent = (function () {
    function TrainingCalcComponent() {
        this.distance = '0';
        this.h = 0;
        this.m = 0;
        this.s = 0;
        this.validData = false;
        this.buttonClicked = false;
    }
    TrainingCalcComponent.prototype.ngOnInit = function () {
    };
    // find VDOT and display training paces based on entered data
    TrainingCalcComponent.prototype.calculateTraining = function () {
        this.buttonClicked = true;
        if (this.distance !== '0' &&
            !isNaN(this.h) &&
            this.h >= 0 &&
            !isNaN(this.m) &&
            this.m >= 0 &&
            !isNaN(this.s) &&
            this.s >= 0 &&
            (this.h > 0 || this.m > 0 || this.s > 0)) {
            this.validData = true;
            var totalSec = Number(this.h * 3600) + Number(this.m * 60) + Number(this.s);
            this.vdot = this.findVdot(this.distance, totalSec); // find VDOT
            this.trainingPaces = this.getTrainingPaces(this.vdot); // get training paces based on found VDOT
        }
        else {
            this.validData = false;
        }
    };
    // find VDOT in JSON file's data
    TrainingCalcComponent.prototype.findVdot = function (distance, totalSec) {
        var lastVdot = 30; // default lowest value
        for (var _i = 0, _a = this.vdot_results; _i < _a.length; _i++) {
            var result = _a[_i];
            if (totalSec > result[distance]) {
                return lastVdot;
            }
            else {
                lastVdot = result['vdot'];
            }
        }
        return 70; // highest returned value (if are results too good to be found in the VDOT tables)
    };
    // find training paces in JSON file's data
    TrainingCalcComponent.prototype.getTrainingPaces = function (vdot) {
        return this.vdot_training[vdot - 30];
    };
    // convert time in seconds to time in mm:ss format
    TrainingCalcComponent.prototype.convertToPace = function (totalSec) {
        if (totalSec === 0)
            return 'nie powinieneś jeszcze wykonywać tego treningu'; // return if training is not recommended for found VDOT
        var m = Math.floor(totalSec / 60);
        var s = totalSec % 60;
        if (s < 10)
            s = '0' + s;
        return m + ":" + s + " min/km";
    };
    return TrainingCalcComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TrainingCalcComponent.prototype, "vdot_results", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TrainingCalcComponent.prototype, "vdot_training", void 0);
TrainingCalcComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-training-calc',
        template: __webpack_require__("../../../../../src/app/training-calc/training-calc.component.html"),
        styles: [__webpack_require__("../../../../../src/app/training-calc/training-calc.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TrainingCalcComponent);

//# sourceMappingURL=training-calc.component.js.map

/***/ }),

/***/ "../../../../../src/app/vdot-tables/vdot-tables.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vdot-tables/vdot-tables.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Tabele VDOT</h2>\n<p><strong>Wartości VDOT dla wyników na poszczególnych dystansach</strong></p>\n<p>Poniższa tabela pozwala na prognozowanie wyników nadchodzących zawodów w oparciu o ostatnie rezultaty na innych dystansach.</p>\n<p>Zakłada ona jednak odpowiednie przygotowanie zawodnika do startu w dłuższych biegach. Przykładowo, złamanie 50 minut w zawodach na 10km wcale nie zagwarantuje przebiegnięcia maratonu poniżej 4 godzin - do tego wymagany będzie również odpowiednio duży kilometraż oraz właściwie rozłożenie akcentów treningowch.</p>\n<table class=\"table table-hover table-condensed\">\n  <thead>\n    <tr>\n      <th>VDOT</th>\n      <th>5km</th>\n      <th>10km</th>\n      <th>Półmaraton</th>\n      <th>Maraton</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let result of vdot_results\">\n      <td><strong>{{ result[\"vdot\"] }}</strong></td>\n      <td>{{ convertToHMS(result[\"5k\"]) }}</td>\n      <td>{{ convertToHMS(result[\"10k\"]) }}</td>\n      <td>{{ convertToHMS(result[\"hm\"]) }}</td>\n      <td>{{ convertToHMS(result[\"m\"]) }}</td>\n    </tr>\n  </tbody>\n</table>\n<br>\n<p><strong>Intensywność treningu dla poszczególnych wartości VDOT</strong></p>\n<p>Dzięki znajomości swojego VDOT możliwe jest wyznczanie tempa dla poszczególnych jednostek treningowych. Trzymanie się ich pozwoli na regularne oraz bezpiecznie (minimalizacja ryzyka kontucji) postępy.</p>\n<p>Gdy treningi na danych obciążeniach stają się coraz łatwiejsze, a po drodze nie ma żadnego startu kontrolnego, można podnosić wartość VDOT co 4-6 tygodni.</p>\n<table class=\"table table-hover table-condensed\">\n  <thead>\n    <tr>\n      <th>VDOT</th>\n      <th>BS</th>\n      <th>M</th>\n      <th>P 400m</th>\n      <th>P 1000m</th>\n      <th>I 400m</th>\n      <th>I 1000m</th>\n      <th>R 200m</th>\n      <th>R 400m</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let paces of vdot_training\">\n      <td><strong>{{ paces[\"vdot\"] }}</strong></td>\n      <td>{{ convertToHMS(paces[\"bs1000\"]) }}</td>\n      <td>{{ convertToHMS(paces[\"m1000\"]) }}</td>\n      <td>{{ convertToHMS(paces[\"p400\"]) }}</td>\n      <td>{{ convertToHMS(paces[\"p1000\"]) }}</td>\n      <td>{{ convertToHMS(paces[\"i400\"]) }}</td>\n      <td>{{ convertToHMS(paces[\"i1000\"]) }}</td>\n      <td>{{ convertToHMS(paces[\"r200\"]) }}</td>\n      <td>{{ convertToHMS(paces[\"r400\"]) }}</td>\n    </tr>\n  </tbody>\n</table>\n<br>"

/***/ }),

/***/ "../../../../../src/app/vdot-tables/vdot-tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VdotTablesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VdotTablesComponent = (function () {
    function VdotTablesComponent() {
    }
    VdotTablesComponent.prototype.ngOnInit = function () {
    };
    // convert time in seconds to time in hh:mm:ss format
    VdotTablesComponent.prototype.convertToHMS = function (totalSec) {
        if (totalSec === 0)
            return '-';
        var h = Math.floor(totalSec / 3600);
        var m = Math.floor((totalSec % 3600) / 60);
        var s = totalSec % 60;
        if (h === 0)
            h = '';
        if (h > 0 && m < 10)
            m = '0' + m;
        if (h === 0 && m === 0)
            m = '';
        if (s < 10)
            s = '0' + s;
        return ((h > 0) ? (h + ':') : '') + ((m > 0 || h > 0) ? (m + ':') : '') + s;
    };
    return VdotTablesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], VdotTablesComponent.prototype, "vdot_results", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], VdotTablesComponent.prototype, "vdot_training", void 0);
VdotTablesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-vdot-tables',
        template: __webpack_require__("../../../../../src/app/vdot-tables/vdot-tables.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vdot-tables/vdot-tables.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VdotTablesComponent);

//# sourceMappingURL=vdot-tables.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map