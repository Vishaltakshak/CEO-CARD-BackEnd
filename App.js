import express from "express";
import {CreatConnection } from "./shared/Connection.js";
import { BookingRoutes } from "./Modules/Booking-Management/Routes/Booking-Routes.js";
import { ContentRoutes } from "./Modules/Content-Management/Routes/Content-Routes.js";
import InventoryRouter from "./Modules/Inventory-Management/Routes/InventoryRoutes.js";
import { SubNavRouter } from "./Modules/NAV-OnHover/Routes/NavOnHover-Routes.js";
import NavBarRoutes from "./Modules/NavBar/routes/NavBarRoutes.js";
import { OnHoverLink } from "./Modules/OnHover-Links/Routes/OnHoverLinkRouter.js";
import UserRoutes from "./Modules/User-Management/Routes/UserRoutes.js";
import { VendorRoutes } from "./Modules/Vendor-Management/routes/VendorRoutes.js";
import cors from 'cors'



const App = express();
const port=process.env.PORT||4444
App.use(express.json());

App.use(cors({
    origin: 'http://localhost:5173', // Replace with your allowed origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // If you need to support cookies or authentication
}));

App.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

App.use('/api/booking/services',BookingRoutes);
App.use('/api/Content/management',ContentRoutes);
App.use('/api/Inventory/management',InventoryRouter);
App.use('/api/Nav/hover',SubNavRouter);
App.use('/api/NavBar',NavBarRoutes);
App.use('/api/subnav/link',OnHoverLink);
App.use('/api/user',UserRoutes);
App.use('/api/Vendor',VendorRoutes);

const promise = CreatConnection();
promise.then((connectionInfo)=>{
    App.listen(port, err=>{
        if (err) {
            console.log('error in app',err);   
        }else{
            console.log("server is running",port)
        }
    
    })

}).catch(err=>{
    console.log(err);
})
