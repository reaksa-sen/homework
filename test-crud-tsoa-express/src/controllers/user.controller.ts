import {
  Controller,
  Route,
  Post,
  Body,
  Get,
  Path,
  SuccessResponse,
  Put,
  Delete,
  Query,
} from "tsoa";
import userService from "../services/user.service";
import { InternalServerError, NotFoundError } from "../errors/error";
import { IUser } from "../database/models/user.model";

@Route("/v1/users")
export class UserController extends Controller {
  @Get("{userId}")
  public async getUser(@Path() userId: string): Promise<IUser | null> {
    try {
      const user = userService.getUser(userId);
      return user;
    } catch (error) {
      throw new NotFoundError("User not found");
    }
  }

  @Post("/")
  @SuccessResponse("201", "created")
  public async createUser(@Body() user: IUser): Promise<IUser> {
    try {
      const users = userService.createUser(user);
      return users;
    } catch (error) {
      throw new InternalServerError("Failed to create user");
    }
  }

  @Get("/")
  public async getUsers(
    @Query() page?: number,
    @Query() limit?: number,
    @Query() sort?: string,
    @Query() gender?: string,
    // @Query() age?: number
    @Query() minAge?: number,
    @Query() maxAge?: number

    // /v1/users?minAge=18&maxAge=25
  ): Promise<IUser[]> {
    try {
      let getLimit = limit || 10;
      let getPage = page || 1;
      let sortOrder = sort || "-name";
      const users = userService.getUsers(
        getPage,
        getLimit,
        sortOrder,
        gender,
        minAge,
        maxAge
      );
      return users;
    } catch (error) {
      throw new InternalServerError("Failed to get user");
    }
  }

  @Put("{userId}")
  public async updateUser(
    @Path() userId: string,
    @Body() body: Partial<IUser>
  ): Promise<IUser | null> {
    try {
      const users = userService.updateUser(userId, body);
      return users;
    } catch (error) {
      throw new NotFoundError("Failed to update user");
    }
  }

  @Delete("{userId}")
  @SuccessResponse("204", "delete successful!")
  public async deleteUser(
    @Path() userId: string
  ): Promise<{ message: string }> {
    try {
      await userService.deleteUser(userId);
      return { message: "user deleted :)" };
    } catch (error) {
      throw new NotFoundError("Failed to delete user");
    }
  }
}

export default new UserController();
