import faker from 'faker';
export class Company {
  name: string;
  catchphrase: string;
  location: {
    lat: number;
    long: number;
  };
  markerContent(): string {
    return `<div><h1>${this.name}</h1> <br/> <h3>${this.catchphrase}</h3></div>`;
  }
  constructor() {
    this.name = faker.company.companyName();
    this.catchphrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      long: +faker.address.longitude(),
    };
  }
}
