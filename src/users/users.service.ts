import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user-entity';

@Injectable()
export class UsersService {

    // Fake DB simple
    private users: any = [{ id:0, name:'Cansın' }]


    // findAll F'i önceden any tipinde return ediyordu
    // artık User[] entity'sindeki field'ları return ediyor ve bütün
    // userları return ettiği için '[]' eklemesi de yapıldı.
    findAll(): User[] {
        return this.users;
    }   


    // findById F'i, User entity'sindeki field'ları
    // return edebileceğini belirtir.
    findById(id: Number): User {
        return this.users.find(user => user.id === id)
    }   

    // Burada da yeniden body içerisinden alanın field'ların
    // tipleri CreateUserDto ile belirtilmiştir. CreateUserDto tipindeki veriler alınabilir...

    // Ekstra olarak bu F'in return tipi de User entity'si olarak belirtilmiş
    // Yani User entity'sindeki field'lar alınabilir sadece.
    createUser(createUserDto: CreateUserDto): User {
        const newUser = { id: uuidv4(), ...createUserDto}
        this.users.push(newUser)
        return  newUser
    }
}