import { Router } from "express";
import { CreateUserController } from "./Controllers/CreateUserController";
import { CreateTagController } from "./Controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";
import { CreateComplimentController } from "./Controllers/CreateComplimentsController";
import { ListUserReceiveComplimentsController } from "./Controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./Controllers/ListUserSendComplimentsController";
import { ListTagController } from "./Controllers/ListTagController";
import { ListUserController } from "./Controllers/ListUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController  =new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController=  new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController =new ListUserSendComplimentsController();
const listTagController = new ListTagController();
const listUserController = new ListUserController();

router.post("/users",createUserController.handle);
router.post("/tags",ensureAuthenticate,ensureAdmin,createTagController.handle);
router.post("/login",authenticateUserController.handle);
router.post("/compliments",createComplimentController.handle);

router.get("/users/compliments/send",listUserSendComplimentsController.handle);
router.get("/users/compliments/receive",listUserReceiveComplimentsController.handle);
router.get("/tags",listTagController.handle);
router.get("/users",ensureAuthenticate,listUserController.handle);
export{router};