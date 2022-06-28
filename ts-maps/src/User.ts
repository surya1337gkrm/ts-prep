import faker from 'faker';
export class User {
  name: string;
  location: {
    lat: number;
    long: number;
  };
  markerContent(): string {
    return `Username is : ${this.name}`;
  }
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      long: +faker.address.longitude(),
    };
  }
}
