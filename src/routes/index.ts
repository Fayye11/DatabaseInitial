import { Router } from "express";
import * as homeControllers from '../controllers/homeController'
const router = Router()

router.get('/', homeControllers.home)
router.post('/novousuario', homeControllers.newUser)

router.get('/usuario/:id/mais', homeControllers.addIdade)
router.get('/usuario/:id/menos', homeControllers.diminuirIdade)
router.get('/usuario/:id/excluir', homeControllers.deletarIdade)

export default router