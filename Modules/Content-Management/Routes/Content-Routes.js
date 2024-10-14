import express from "express";
import AddContent, { DeleteContent, UpdateContent, ViewContent } from "../Services/Content-Services.js";
import { addContent, ViewConten } from "../controller/ContentController.js";

export const ContentRoutes = express.Router();

ContentRoutes.get('/view',ViewConten);
ContentRoutes.post('/add',addContent);
ContentRoutes.put('/update/:id',UpdateContent);
ContentRoutes.delete('/delete/:id',DeleteContent)