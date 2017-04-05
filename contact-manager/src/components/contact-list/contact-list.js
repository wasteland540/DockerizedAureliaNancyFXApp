import {EventAggregator} from 'aurelia-event-aggregator';
import {HttpClient} from 'aurelia-http-client';
import {DialogService} from 'aurelia-dialog';
import {WebAPI} from '../../web-api';
import {ContactUpdated, ContactViewed, ContactAdded} from '../../messages';
import {ContactDialog} from '../contact-dialog/contact-dialog';

export class ContactList{
    static inject = [WebAPI, EventAggregator, DialogService];

    constructor(api, ea, dialogService){
        this.api = api;
        this.ea = ea;
        this.dialogService = dialogService;
        this.contacts = [];

        //messaging subscription
        this.ea.subscribe(ContactViewed, msg => this.select(msg.contact));

        this.ea.subscribe(ContactUpdated, msg => {
            let id = msg.contact.id;
            let found = this.contacts.find(x => x.id === id);
            
            Object.assign(found, msg.contact);
        });

        this.ea.subscribe(ContactAdded, msg => {
            //reload contacts from API
            this.api.getContactList().then(contacts => this.contacts = contacts);
            this.select(msg.contact);
        });
    }

    created(){
        this.api.getContactList().then(contacts => this.contacts = contacts);
    }

    select(contact){
        this.selectedId = contact.id;
        return true; //allows to trigger the router! anotherwise the action of an event will be canceled
    }

    openDialog(){
        this.dialogService.open({viewModel: ContactDialog, model:{}}).then(response => {
            if (!response.wasCancelled) {
                this.api.saveContact(response.output).then(contact => {
                    this.contact = contact;
                    this.originalContact = JSON.parse(JSON.stringify(contact));

                    this.ea.publish(new ContactAdded(this.contact));
                });
            } else {
                console.log('bad');
            }
        });
    }

    callNancy(){
        let client = new HttpClient()
            .configure(x => {
                x.withBaseUrl('http://192.168.99.100:8080'); //IP of the docker machine; Port of the REST-API container
            });

        client.get('add?a=2&b=3')
        .then(data => {
            let response = JSON.parse(data.response);
            console.log(response.result);
        });
    }
}