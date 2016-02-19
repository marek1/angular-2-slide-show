import {Component, Input, Output, View} from 'angular2/core';
import {SlideShowImage} from './slide-show-image';

@Component({
    selector: 'slide-show-images',
})
@View({
    templateUrl: 'app/slide-show/slide-show-images.html',
    directives: [SlideShowImage]
})
export class SlideShowImages{
    @Input() current;
    @Input() pics;
    constructor (){
        // If you want to add items to the list upon construction of the child,
        // use the ngOnInit() hook (not the constructor(),
        // since the data-bound properties aren't initialized at that point)
    }
    isCurrent(_ind){
        return parseInt(this.current) === parseInt(_ind+1);
    }
    ngOnInit (){
    }

}