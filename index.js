const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];
  // As an illustration, pull names out of the data array
    const names = data.map(group => group.map(person => person.name));

    console.log(names); // [['John', 'Jane'], ['Bob']]  
