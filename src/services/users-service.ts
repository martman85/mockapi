import axios from 'axios';

export default class UsersService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getUsers(): Promise<any> {
    return axios.get('http://localhost:3000/users');
  }
}
