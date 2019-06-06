import { Container } from "inversify";
import { UsersService } from "./users-service";
import { HttpClient } from "./http-client";
import { TYPES } from "./type";
const container = new Container();

container.bind<UsersService>(TYPES.UsersService).to(UsersService);
container.bind<HttpClient>(TYPES.HttpClient).to(HttpClient);

export { container };
