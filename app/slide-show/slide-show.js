System.register(['angular2/core', './slide-show-control', './slide-show-previews', './slide-show-images'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, slide_show_control_1, slide_show_previews_1, slide_show_images_1;
    var SlideShow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slide_show_control_1_1) {
                slide_show_control_1 = slide_show_control_1_1;
            },
            function (slide_show_previews_1_1) {
                slide_show_previews_1 = slide_show_previews_1_1;
            },
            function (slide_show_images_1_1) {
                slide_show_images_1 = slide_show_images_1_1;
            }],
        execute: function() {
            SlideShow = (function () {
                function SlideShow() {
                    this.current = 1;
                    this.pics = [];
                    this.init();
                }
                SlideShow.prototype.init = function () {
                    var nameOfPicFolder = 'app/slide-show/images';
                    var noOfPics = 17;
                    var counter = 1;
                    while (counter <= noOfPics) {
                        this.pics.push(nameOfPicFolder + '/Bild_' + counter + '_sm.jpg');
                        counter++;
                    }
                };
                SlideShow.prototype.setCurrent = function (_newValue) {
                    this.current = _newValue;
                };
                SlideShow = __decorate([
                    core_1.Component({
                        selector: 'slide-show',
                        providers: []
                    }),
                    core_1.View({
                        templateUrl: 'app/slide-show/slide-show.html',
                        directives: [slide_show_control_1.SlideShowControl, slide_show_previews_1.SlideShowPreviews, slide_show_images_1.SlideShowImages]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SlideShow);
                return SlideShow;
            })();
            exports_1("SlideShow", SlideShow);
        }
    }
});
