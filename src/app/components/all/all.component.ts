import { iContact } from './../../models/contact.model';
import { ContactsService } from './../../provider/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'birthday', 'number', 'address', 'city', 'state', 'zip'];
  dataSource: iContact[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getAll().subscribe((data: iContact[]) => {
      this.dataSource = data;
    });
  }

}
