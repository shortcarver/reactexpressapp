export default class MemoryModel {
  state = {
    nextIndex: 2,
    users: [
      {
        id: 1,
        email: 'michael.j.carver@gmail.com',
        password: 'password',
        firstName: 'Mike',
        lastName: 'Carver',
        phoneNumber: '123-123-1234',
        favoriteColor: 'red',
      },
    ],
  }

  constructor() {
    console.log('MemmoryModel startup!');
  }

  add = (user) => {
    if (this.getByEmail(user.email)) return false;

    this.state.users.push({
      ...user,
      id: this.state.nextIndex,
    });

    this.state.nextIndex += 1;

    return true;
  }

  getById = id => this.state.users.filter(value => value.id === id)[0];

  getByEmail = email => this.state.users.filter(value => value.email === email)[0];
}
