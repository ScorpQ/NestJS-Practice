import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

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

    // Burada da yeniden body içerisinden alanın field'ların
    // tipleri gözükmektedir. X tipindeki veriler alınabilir...
    createUser(createUserDto: CreateUserDto): any {
        const user = { id: uuidv4(), ...createUserDto}
        return this.users.push(user)
    }
}
