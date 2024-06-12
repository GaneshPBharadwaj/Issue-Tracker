import express from 'express';

const router = express.Router();

import { HomeController } from '../controller/home.controller.js';
import { IssueController } from '../controller/issue.controller.js';
import { ProjectController } from '../controller/project.controller.js';



const homeController = new HomeController();
const issueController = new IssueController();
const projectController = new ProjectController();

// Accessing the Routes
router.get('/', (req, res, next)=>{
    homeController.home(req, res, next)
});

// Route to handle project Form rendering
router.get("/project/create", (req, res, next)=>{
    projectController.projectForm(req, res, next)
});

// Route to handle project creation
router.post("/project/create", (req, res, next)=>{
    projectController.createProjects(req, res, next)
});

// Route to handle view project
router.get("/project/:id", (req, res, next)=>{
    projectController.viewProjects(req, res, next)
});

// Route to Filter the issues and search
router.get("/projects/:id/filter", (req, res, next)=>{
    projectController.filterProjects(req, res, next)
});

// Route to handle project deletion
router.post("/projects/:id/delete", (req, res, next)=>{
    projectController.deleteProject(req, res, next)
});

// Route to render the issue creation form
router.get("/projects/:id/issues/new", (req, res, next)=>{
    issueController.createIssueForm(req, res, next)
});

// Route to handle the creation of a new issue
router.post("/projects/:id/issues", (req, res, next)=>{
    issueController.createIssue(req, res, next)
});

export default router;