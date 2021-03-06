System.register(['angular2/platform/browser', 'angular2/core', './slide-show/slide-show'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, slide_show_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slide_show_1_1) {
                slide_show_1 = slide_show_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    console.log('initialised app!');
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app'
                    }),
                    core_1.View({
                        directives: [slide_show_1.SlideShow],
                        template: "\n        <slide-show></slide-show>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            browser_1.bootstrap(App, []);
        }
    }
});
