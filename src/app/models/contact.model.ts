export interface iContact {
  _id?: string;
  name: string;
  surname: string;
  number: number;
  birthday: Date;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export class Contact implements iContact{
  _id?: string;
  name: string;
  surname: string;
  number: number;
  birthday: Date;
  address: string;
  city: string;
  state: string;
  zip: string;

  constructor(contact: iContact) {
    this._id = contact._id;
    this.name = contact.name;
    this.surname = contact.surname;
    this.number = contact.number;
    this.birthday = contact.birthday;
    this.address = contact.address;
    this.city = contact.city;
    this.state = contact.state;
    this.zip = contact.zip;
  }
}
