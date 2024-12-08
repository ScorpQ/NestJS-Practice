import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    // Dependecy Injection yapmak bu kadar kolay,
    // Sadece eklemek istediğin service/controller adını yazman yeterli
    // Normal yolla hiç DI yapmadığın için anlamak zor olur
    // İstersen GPT'ye şunu yaz: Bana basitçe Dependency Injection anlatır mısın çok basitçe başla...
    constructor(private userService: UsersService) {}

    // Bu şekilde basit bir endpoint yazabiliriz: localhost:3000/users
    @Get()
    getUsers(): any {
        return [{id: 10}] 
    }


    // Bu şekilde parametre verebiliriz: localhost:3000/users/:id

    // Ayrıca verilen parametre eğer içeride 'number' olarak kullanılacaksa
    // build-in pipe'lardan birini kullanabiliriz. (ParseIntPipe)
    // Daha fazlası için: https://docs.nestjs.com/pipes
    @Get(':id')  
    getUsersById(@Param('id', ParseIntPipe) id: number): any {
        return {
            'type': typeof id,
            'id': id 
        }
    }
}

