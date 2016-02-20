Angular 2 - Slide Show
====================

I recently created a simple app using Angular 1.5 components :

Github : https://github.com/marek1/angular-1-5-slide-show
DEMO : http://marek-sonnabend.de/demos/angular-1-5-slide-show

Now I want to create the same app using Angular 2 (with Typescript).

Github : https://github.com/marek1/angular-2-slide-show
DEMO : http://marek-sonnabend.de/demos/angular-2-slide-show

The setup app the Angular 2 app please refer to : http://marek-sonnabend.de/blog/2016/02/12/Getting-started-with-Angular2/

I use System.js which takes care of transpiling Typescript to Javascript (ES5), which is configured in the index.html file (in project root) :

    <script>
    	  System.config({packages: {app: {format: 'register',defaultExtension: 'js'}}});
    	  System.import('app/app').then(null, console.error.bind(console));
    </script>
	<body>
	    <app>Loading</app>
    </body>

Components
----------

I need to create an *app*- component (which has a selector *app* ), which renders a view. The view (template) will have a child component *SlideShow* (which has a selector *slide-show*). In order to use the selector *slide-show* I need to import the component and pass it as directive into the *app* component. Finally I will *bootstrap* the app :

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

The app component will render :

    <slide-show></slide-show>

The Slide-Show component will have 3 child components :

 - slide-show-control
 - slide-show-images
 - slide-show-previews

which need to be imported and passed into the slide-show component as directives.

The slide-show component will load a template which looks like this :

    <slide-show-control class="control" (changed)="setCurrent($event)" [maximum]="pics.length" [current]="current"></slide-show-control>
	<slide-show-images [pics]="pics" [current]="current"></slide-show-images>
	<slide-show-previews (changed)="setCurrent($event)" [pics]="pics" [current]="current"></slide-show-previews>

I create the following bindings :

 - **maximum**: holds the (maximum) number of images available
 - **current** : holds the number if the currently selected image
 - **pics** : holds the URLs to the images

**A general information about bindings** : 

> While property bindings are used to pass data from a parent to a child components, event bindings are used to pass data from a child to a parent component.

As I want to actually be able to change ***current*** in the child components slide-show-control and slide-show-preview I need to use an EventHandler (named *changed*) :

	(changed)="setCurrent($event)"

If the event *changed* is fired, the method *setCurrent* (of the parent component) will be called.

In the child-components I will have the following annotations :

 - @Input (data-bound input property) -> square brakets [] , i.e. [current]
 - @Output (an event-bound output property) -> parenthesis (), i.e. (changed)

As I want to change the value of *current* in the slide-show-preview I would click on a different thumbnail. I listen for a click event, which will call the method resetCurrent.

    @Output() changed = new EventEmitter();
    constructor (){
		//...
	}
	resetCurrent (_ind) {
        this.current = parseInt(_ind+1);
        this.changed.emit(this.current);// emits the event
    }

which will emit the event and pass the new value. The *setCurrent* method assign the new value (to *current*) and the new value of *current* will be propagated to the child components.

    setCurrent(_newValue){
        this.current = _newValue;
    }

Angular 2 directives
--------------------

To iterate over the *pic* array I use Angular 2's directive *ngFor :

    <div *ngFor="#pic of pics; #i=index">
        {{pic}}
    </div>
    
    
In Angular 1.x *$index* is always available, while in Angular 2 you will have to explicitely assign it.    

Another directive I use is *ngClass*, which evaluates an expression and adds CSS classes depending on whether that expression is true, i.e. 

	[ngClass]="{active : isCurrent(i)}"

I could also make use of *ngIf to hide or show elements in the view; just like ng-if or ng-show in Angular 1.x.

Another 

Event binding
-------------

I bind methods to user events using parentheses, i.e. (click)="someThing() or : 

    (click)="resetCurrent(i)"
    

Property binding
----------------

I bind properties using the square brackets [], i.e. [model]="myPic" or : 

    <slide-show-preview [pic]="pic" ></slide-show-preview>
    
