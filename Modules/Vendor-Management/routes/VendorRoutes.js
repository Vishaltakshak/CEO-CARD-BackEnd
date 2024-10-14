import express from "express";
import { AddVendor, DeleteVendor, UpdateVendor, VendorList } from "../Services/vendorServices.js";

export const VendorRoutes=express.Router();

VendorRoutes.post('/add',AddVendor)
VendorRoutes.get('/vendors',VendorList)
VendorRoutes.put('/Update/:id',UpdateVendor)
VendorRoutes.delete('/delete/:id',DeleteVendor)