"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyTableComponent = (function () {
    function MyTableComponent() {
        this._ProductsOriginal = [
            { id: 1, Category: 'Category 1', name: "product 1", price: 100 },
            { id: 2, Category: 'Category 2', name: "product 1", price: 200 },
            { id: 3, Category: 'Category 3', name: "product 1", price: 300 },
            { id: 4, Category: 'Category 1', name: "product 1", price: 400 },
            { id: 5, Category: 'Category 2', name: "product 1", price: 500 },
            { id: 6, Category: 'Category 3', name: "product 1", price: 600 },
            { id: 7, Category: 'Category 1', name: "product 1", price: 700 },
            { id: 8, Category: 'Category 2', name: "product 1", price: 800 },
            { id: 9, Category: 'Category 3', name: "product 1", price: 900 },
            { id: 10, Category: 'Category 1', name: "product 1", price: 1000 }
        ];
        this._Products = Object.assign([], this._ProductsOriginal);
        this.rows = 10;
        this.log("constructor");
    }
    Object.defineProperty(MyTableComponent.prototype, "Products", {
        get: function () {
            //this._Products.length = this.rows
            return this._Products;
        },
        enumerable: true,
        configurable: true
    });
    MyTableComponent.prototype.remove = function (value) {
        console.log(value);
    };
    MyTableComponent.prototype.onChangeSelect = function (value) {
        console.log(value);
        if (value == 'all') {
            this._Products = Object.assign([], this._ProductsOriginal);
            return;
        }
        var filter = this._ProductsOriginal.filter(function (name) {
            if (name.Category == value) {
                return name;
            }
        });
        this._Products = filter;
    };
    MyTableComponent.prototype.ngOnInit = function () { this.log("onInit"); };
    MyTableComponent.prototype.ngOnDestroy = function () { this.log("onDestroy"); };
    MyTableComponent.prototype.log = function (msg) {
        console.log(msg);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MyTableComponent.prototype, "rows", void 0);
    MyTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'myTable',
            templateUrl: "myTable.html"
        }),
        __metadata("design:paramtypes", [])
    ], MyTableComponent);
    return MyTableComponent;
}());
exports.MyTableComponent = MyTableComponent;
//# sourceMappingURL=myTable.js.map