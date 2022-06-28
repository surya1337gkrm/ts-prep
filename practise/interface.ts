interface obj {
  name: string;
  age: number;
  initial: string;
  bday: Date;
  summary(): string;
}

const surya = {
  name: 'Surya Venkatesh',
  age: 24,
  initial: 'Mr.',
  bday: new Date(),
  summary() {
    return `${this.name}`;
  },
  edu: 'Masters',
};

const printSummary = (item: obj): void => {
  console.log(item.summary());
};

/*If we are passing the object as an argument in that case, even if we have 
additional properties on the argument it works because typescript will check
whether the object has all properties with types defined.

but if we extend the object using the interface ( example const surya:obj)
in that case, if we add additional properties to the object error will be
generated.
*/


printSummary(surya);
