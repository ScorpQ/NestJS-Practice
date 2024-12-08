import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    // Fake DB simple
    private users: any = [{ id:0, name:'Cansın' }]

    findAll() {
        return this.users;
    }

    findById(id: Number): String {
        return this.users.find(user => user.id === id)
    }   

    createUser(name: String) {
        const user = { id: uuidv4(), name}
        return this.users.push(user)
    }
}
