import { NgForm } from '@angular/forms';
import { Contact } from './../../models/contact.model';
import { ContactsService } from './../../provider/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchContact: Contact = null;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
  }

  public search(query: string) {
    console.log(query);
    if (query && query !== '') {
      this.contactsService.find(query).toPromise().then((value: Contact) => {
        console.log(value);
        if (value && value !== null) {
          this.searchContact = value;
        }
      });
    }
  }

  public onSubmit(f: NgForm) {
    console.log(f.value);
    this.contactsService.update(this.searchContact._id, f.value).toPromise().then((value: Contact) => {
      if (value && value !== null) {
        console.log(value);
        this.searchContact = value;
      }
    });
  }

  public delete(id: string) {
    this.contactsService.delete(id).toPromise().then((value: Contact) => {
      if (value && value !== null) {
        console.log('Contact deleted successfully.');
        this.searchContact = null;
      }
    });
  }
}
