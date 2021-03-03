"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const core_1 = require("@overnightjs/core");
const users_json_1 = __importDefault(require("../database/users.json"));
const posts_json_1 = __importDefault(require("../database/posts.json"));
let UserController = class UserController {
    async getAllMinimalUsers(req, res) {
        const minimalUsers = users_json_1.default.map((user) => ({
            id: user.id,
            name: user.name,
        }));
        res.status(200).json(minimalUsers);
    }
    async getPostByUser(req, res) {
        const filteredPosts = posts_json_1.default.filter((post) => post.userId.toString() === req.params.userId);
        if (filteredPosts.length > 0) {
            res.status(200).json(filteredPosts);
        }
        else {
            res.status(404).json({
                error: "User not found.",
            });
        }
    }
    async getFullUserById(req, res) {
        const filteredUsers = users_json_1.default.filter((user) => user.id.toString() === req.params.userId);
        if (filteredUsers.length > 0) {
            res.status(200).json(filteredUsers[0]);
        }
        else {
            res.status(404).json({
                error: "User not found.",
            });
        }
    }
};
__decorate([
    core_1.Get()
], UserController.prototype, "getAllMinimalUsers", null);
__decorate([
    core_1.Get(":userId/posts")
], UserController.prototype, "getPostByUser", null);
__decorate([
    core_1.Get(":userId")
], UserController.prototype, "getFullUserById", null);
UserController = __decorate([
    core_1.Controller("user")
], UserController);
exports.UserController = UserController;
