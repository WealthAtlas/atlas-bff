import {Query, Resolver} from '@nestjs/graphql';

@Resolver('User')
export class UserResolver {
    @Query('user')
    getUser() {
        return {
            name: 'John Doe',
            email: ''
        };
    }
}