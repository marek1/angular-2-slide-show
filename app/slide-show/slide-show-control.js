System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SlideShowControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SlideShowControl = (function () {
                function SlideShowControl() {
                    this.changed = new core_1.EventEmitter();
                }
                SlideShowControl.prototype.resetCurrent = function (_num) {
                    this.changed.emit(_num);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SlideShowControl.prototype, "maximum", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SlideShowControl.prototype, "current", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SlideShowControl.prototype, "changed", void 0);
                SlideShowControl = __decorate([
                    core_1.Component({
                        selector: 'slide-show-control'
                    }),
                    core_1.View({
                        templateUrl: 'app/slide-show/slide-show-control.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], SlideShowControl);
                return SlideShowControl;
            })();
            exports_1("SlideShowControl", SlideShowControl);
        }
    }
});
