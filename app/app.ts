import {bootstrap} from 'angular2/platform/browser';
import {Component, View} from 'angular2/core';
import {SlideShow} from './slide-show/slide-show'

@Component({
    selector: 'app'
})
@View({
    directives: [SlideShow],
    template: `
        <slide-show></slide-show>
    `
})
class App{
    constructor(){
        console.log('initialised app!');
    }
}

bootstrap(App, []);