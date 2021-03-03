"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactAPIServer = void 0;
const core_1 = require("@overnightjs/core");
const UserController_1 = require("./UserController");
const cors_1 = __importDefault(require("cors"));
const PostController_1 = require("./PostController");
class ReactAPIServer extends core_1.Server {
    constructor() {
        super(true);
        this.setupControllers();
    }
    setupControllers() {
        this.app.use(cors_1.default());
        this.app.use((req, res, next) => {
            console.log('New Request', req.url);
            next();
        });
        this.addControllers([
            new PostController_1.PostController(),
            new UserController_1.UserController()
        ]);
    }
    serve(port) {
        this.app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    }
}
exports.ReactAPIServer = ReactAPIServer;
