import userApi from '../users';

class MemoryModel {
  state = {
    tokens: [],
    clients: [
      {
        id: 'app',
        secret: 'password',
        grants: ['password'],
      },
    ],
  }

  constructor() {
    console.log('MemoryModel startup!');
  }

  getAccessToken = (accessToken) => {
    console.log(accessToken);
    const t = this.state.tokens.filter(token => token.accessToken === accessToken)[0];
    console.log(t);
    return t;
  }

  getClient = (clientId, clientSecret) => {
    console.log('getClient', clientId, clientSecret);
    const c = this.state.clients.filter(client => client.id === clientId && client.secret === clientSecret)[0];
    console.log(c);
    return c;
  }

  getUser = (username, password) => {
    console.log(username, password);
    return userApi.getByEmail(username).password === user.password;
  }

  saveToken = (token, client, user) => {
    const nt = {
      ...token,
      client,
      user,
    };
    this.state.tokens.push(nt);
    return nt;
  }

  validateScope = (user, client, scope) => ['api'];

  verifyScope = (token, scope) => true;
}

const model = new MemoryModel();

export default model;
