import express from "express";
import { AddLink, DeleteLink, UpdateLink, ViewAllLinks } from "../services/OnHoverLinkServices.js";

export const OnHoverLink=express.Router();

OnHoverLink.get('/view',ViewAllLinks);
OnHoverLink.post('/add',AddLink);
OnHoverLink.put('/update/:id',UpdateLink);
OnHoverLink.delete('/delete/:id',DeleteLink);
