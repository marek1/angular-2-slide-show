System.register(['angular2/core', './slide-show-preview'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, slide_show_preview_1;
    var SlideShowPreviews;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slide_show_preview_1_1) {
                slide_show_preview_1 = slide_show_preview_1_1;
            }],
        execute: function() {
            SlideShowPreviews = (function () {
                function SlideShowPreviews() {
                    this.changed = new core_1.EventEmitter();
                    // If you want to add items to the list upon construction of the child,
                    // use the ngOnInit() hook (not the constructor(),
                    // since the data-bound properties aren't initialized at that point)
                }
                SlideShowPreviews.prototype.getPercent = function (_length) {
                    return 'width : ' + (100 / _length) + '%';
                };
                SlideShowPreviews.prototype.isCurrent = function (_ind) {
                    return parseInt(this.current) === parseInt(_ind + 1);
                };
                SlideShowPreviews.prototype.resetCurrent = function (_ind) {
                    this.current = parseInt(_ind + 1);
                    this.changed.emit(this.current);
                };
                SlideShowPreviews.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SlideShowPreviews.prototype, "current", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SlideShowPreviews.prototype, "pics", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SlideShowPreviews.prototype, "changed", void 0);
                SlideShowPreviews = __decorate([
                    core_1.Component({
                        selector: 'slide-show-previews',
                    }),
                    core_1.View({
                        templateUrl: 'app/slide-show/slide-show-previews.html',
                        directives: [slide_show_preview_1.SlideShowPreview]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SlideShowPreviews);
                return SlideShowPreviews;
            })();
            exports_1("SlideShowPreviews", SlideShowPreviews);
        }
    }
});
