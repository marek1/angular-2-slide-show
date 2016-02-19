import {Component, Input, View} from 'angular2/core';

@Component({
    selector: 'slide-show-preview',
})
@View({
    templateUrl: 'app/slide-show/slide-show-preview.html',
})
export class SlideShowPreview{
    @Input() public pic;
    constructor(){
    }
    ngAfterViewInit(){
    }
}