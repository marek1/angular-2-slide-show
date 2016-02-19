import {Component, Input, View, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'slide-show-control'
})
@View({
    templateUrl: 'app/slide-show/slide-show-control.html',
})
export class SlideShowControl{
    @Input() public maximum;
    @Input() public current;
    @Output() changed = new EventEmitter();
    constructor(){

    }
    resetCurrent(_num){
        this.changed.emit(_num);
    }
}