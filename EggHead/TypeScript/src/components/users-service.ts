import { HttpClient } from "./http-client";

export class UsersService {
  private http: HttpClient;

  constructor() {
    this.http = new HttpClient();
  }

  getUsers(): Promise<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
