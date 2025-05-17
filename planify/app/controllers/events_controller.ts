import type { HttpContext } from '@adonisjs/core/http'
// import { Application } from "@adonisjs/core/app";
import Event from "#models/event";
import auth from '@adonisjs/auth/services/main';
import dayjs from 'dayjs';
// import { eventValidator } from '#validators/event';

export default class EventsController {
   
    public async index({view,auth}:HttpContext) {
        const datas = await Event.all()
        const user = auth.user!
        return view.render('pages/home',{datas,user})
    }

    public async create({view}:HttpContext ){
        return view.render('pages/createEvent')
    }

    public async store({request,auth,response}:HttpContext){
        const payload = request.all()
        const eventImage = request.file('image')
        const user = auth.user!
        const image = eventImage // recuperation de l'image
        if(!image){
            return response.badRequest('image non trouver')
        }

        const imageName = `${Date.now()}.${image.extname}` // creation du nom de l'image avec l'ID unique de l'image son extension
        await image.move('./public/images',{name:imageName}) // stockage de l'image dans le dossier public avec le nom generer
        const event = await Event.create({
            userId: user.id,
            category: payload.category,
            image: `/images/${imageName}`, // utilisation de l'adresse de l'image dans ./public/images/imageName
            eventTitle: payload.eventTitle,
            description: payload.description,
            beginHour: payload.beginHour,
            endHour: payload.endHour,
            beginDate: payload.beginDate,
            endDate: payload.endDate,
            location: payload.location
        })

        console.log(event);
        return response.redirect().toRoute('events.index')

    }

    public async show({params,view}: HttpContext){
        const event = await Event.findOrFail(params.id)
        return view.render('pages/showEvent',{event})
    }

    public async edit(){

    }

    public async update(){

    }

    public async destroy(){

    }


    
}