import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import UserJSON from "../database/users.json";
import PostJSON from "../database/posts.json";

@Controller("user")
export class UserController {
  @Get()
  async getAllMinimalUsers(req: Request, res: Response) {
    const minimalUsers = UserJSON.map((user) => ({
      id: user.id,
      name: user.name,
    }));
    res.status(200).json(minimalUsers);
  }

  @Get(":userId/posts")
  async getPostByUser(req: Request, res: Response) {
    const filteredPosts = PostJSON.filter(
      (post) => post.userId.toString() === req.params.userId
    );
    if (filteredPosts.length > 0) {
      res.status(200).json(filteredPosts);
    } else {
      res.status(404).json({
        error: "User not found.",
      });
    }
  }

  @Get(":userId")
  async getFullUserById(req: Request, res: Response) {
    const filteredUsers = UserJSON.filter(
      (user) => user.id.toString() === req.params.userId
    );
    if (filteredUsers.length > 0) {
      res.status(200).json(filteredUsers[0]);
    } else {
      res.status(404).json({
        error: "User not found.",
      });
    }
  }
}
