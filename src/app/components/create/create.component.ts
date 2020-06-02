import { ContactsService } from './../../provider/contacts.service';
import { Contact, iContact } from './../../models/contact.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    if (!f.valid) {
      return;
    }
    const contact: Contact = new Contact(f.value);
    this.contactsService.create(contact).toPromise().then((value: iContact) => {
      if (value && value !== null) {
        console.log('Contact created.');
      } else {
        console.log('Error creating contact.');
      }
      f.reset();
    });
  }
}
