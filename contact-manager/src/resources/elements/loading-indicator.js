import * as nprogress from 'nprogress';
import {bindable, noView, decorators} from 'aurelia-framework';

export let LoadingIndicator = decorators(
    noView(['nprogress/nprogress.css']), //tells aurelia not to load a loading-indicator.html view
    bindable({name: 'loading', defaultValue: false}) // loading property for binding in html
).on(class {
    loadingChanged(newValue){
        if(newValue){
            nprogress.start();
        }
        else {
            nprogress.done();
        }
    }
});