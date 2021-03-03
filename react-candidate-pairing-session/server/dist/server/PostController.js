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
exports.PostController = void 0;
const core_1 = require("@overnightjs/core");
const posts_json_1 = __importDefault(require("../database/posts.json"));
let PostController = class PostController {
    async getFullPostById(req, res) {
        const filteredPosts = posts_json_1.default.filter(post => post.id.toString() === req.params.postId);
        if (filteredPosts.length > 0) {
            res.status(200).json(filteredPosts[0]);
        }
        else {
            res.status(404).json({
                error: 'Post not found.'
            });
        }
    }
};
__decorate([
    core_1.Get(':postId')
], PostController.prototype, "getFullPostById", null);
PostController = __decorate([
    core_1.Controller('post')
], PostController);
exports.PostController = PostController;
