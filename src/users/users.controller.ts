import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {

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

