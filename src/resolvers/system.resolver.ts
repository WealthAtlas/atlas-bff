import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { Auth } from '../models/auth.model';

@Resolver()
export class SystemResolver {
  constructor(
    private readonly userService: UserService,
  ) {
  }

  @Mutation('registerUser')
  async registerUser(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<Boolean> {
    return await this.userService.registerUser(name, email, password);
  }

  @Mutation('loginUser')
  async loginUser(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<Auth> {
    return await this.userService.loginUser(email, password);
  }
}