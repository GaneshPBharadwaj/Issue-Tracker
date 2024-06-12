import { Project } from "../schema/project.schema.js";

export class HomeController{

    async home(req, res, next){
        try{

            const projects = await Project.find();
            return res.render("home", { title: "Home", projects: projects});
    
        }catch(err){
            console.error(err);
        }
    }
}
