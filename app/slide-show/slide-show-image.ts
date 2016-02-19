import {Component, Input, View} from 'angular2/core';

@Component({
    selector: 'slide-show-image',
})
@View({
    templateUrl: 'app/slide-show/slide-show-image.html',
})
export class SlideShowImage{
    @Input() public pic;
    constructor(){
    }
    ngOnInit (){
    }
}