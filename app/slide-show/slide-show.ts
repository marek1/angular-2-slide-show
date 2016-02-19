import {Component, Inject, View} from 'angular2/core';
import {SlideShowControl} from './slide-show-control';
import {SlideShowPreviews} from './slide-show-previews';
import {SlideShowImages} from './slide-show-images';

@Component({
    selector: 'slide-show',
    providers: []
})
@View({
    templateUrl : 'app/slide-show/slide-show.html',
    directives: [SlideShowControl, SlideShowPreviews, SlideShowImages]
})
export class SlideShow {
    public current:number = 1;
    public pics:Array<string> = [];
    constructor(){
        this.init();
    }
    init(){
        var nameOfPicFolder = 'app/slide-show/images';
        var noOfPics = 17;
        var counter = 1;
        while (counter <= noOfPics) {
            this.pics.push(nameOfPicFolder+'/Bild_'+counter+'_sm.jpg');
            counter++;
        }
    }
    setCurrent(_newValue){
        this.current = _newValue;
    }
}