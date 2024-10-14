import express from "express";
import { addInventory, ViewInventory } from "../Controller/InventoryController.js";
import { DeleteInventoryItem, UpdateInventory } from "../Services/InventoryServices.js";

export const InventoryRouter = express.Router();

InventoryRouter.get("/view",ViewInventory);
InventoryRouter.post('/add',addInventory)
InventoryRouter.put('/updated/:id',UpdateInventory)
InventoryRouter.delete('/delete/:id',DeleteInventoryItem)
export default InventoryRouter;