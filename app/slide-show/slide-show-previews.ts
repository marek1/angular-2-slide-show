import {Component, Input, Output, View, EventEmitter} from 'angular2/core';
import {SlideShowPreview} from './slide-show-preview';

@Component({
    selector: 'slide-show-previews',
})
@View({
    templateUrl: 'app/slide-show/slide-show-previews.html',
    directives: [SlideShowPreview]
})
export class SlideShowPreviews{
    @Input() current;
    @Input() pics;
    @Output() changed = new EventEmitter();
    constructor (){
        // If you want to add items to the list upon construction of the child,
        // use the ngOnInit() hook (not the constructor(),
        // since the data-bound properties aren't initialized at that point)
    }
    getPercent (_length){
        return 'width : '+ (100 / _length) + '%';
    }
    isCurrent (_ind){
        return parseInt(this.current) === parseInt(_ind+1);
    }
    resetCurrent (_ind) {
        this.current = parseInt(_ind+1);
        this.changed.emit(this.current);
    }
    ngOnInit (){

    }


}