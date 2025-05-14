/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'


router.get(`/signup`,`#controllers/users_controller.showSignup`)
router.get(`/login`,`#controllers/users_controller.showLogin`)

router.post(`/toSignUp`,`#controllers/users_controller.store`)
router.post(`/tologin`,`#controllers/users_controller.login`)

router.group(()=>{
    router.on('/').render('pages/home')
}).use(middleware.auth())

