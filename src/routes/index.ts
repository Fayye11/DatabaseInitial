import { Router, Request, Response} from "express";
import * as homeControllers from '../controllers/homeController'
const router = Router()

router.get('/', homeControllers.home)

export default router