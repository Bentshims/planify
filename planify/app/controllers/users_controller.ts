import type { HttpContext } from '@adonisjs/core/http'
import { createUserValidator,loginUserValidator } from '#validators/create_user'
import User from '#models/user'

export default class UsersController {

    public async showSignup({view}:HttpContext){
        return view.render('security/signup')

    }

    public async showLogin({view}:HttpContext){
        return view.render('security/login')

    }

    public async store({view,request}:HttpContext) {
        const datas = await request.validateUsing(createUserValidator)
        await User.create({
            fullName: datas.fullName,
            email: datas.email,
            password:datas.password
        })
        return view.render('security/login')
    }

    public async login({view,request,auth}:HttpContext){
        const {email, password} = await request.validateUsing(loginUserValidator)

        // verifier les donnees
        const user = await User.verifyCredentials(email, password)

        // connecter le user
        await auth.use('web').login(user)

        return view.render('pages/home')
    }

    

}