import {DialogController} from 'aurelia-dialog';

export class ContactDialog {
    static inject = [DialogController];

    contact = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    };

    constructor(controller){
        this.controller = controller;
    }
}