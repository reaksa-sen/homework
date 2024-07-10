import { IUser } from "../database/models/user.model";

export const mockUsers: IUser[] = [
    {
        _id: '1', name: 'Alice', age: 25, gender: 'female',
        email: 'alice@gmail.com'
    },
    {
        _id: '2', name: 'Bob', age: 30, gender: 'male',
        email: 'bob@gmail.com'
    },
  ];