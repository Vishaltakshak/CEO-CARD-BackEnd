import mongoose, { Schema, SchemaTypes } from "mongoose";
export const InventorySchema=mongoose.Schema(
    {
        VendorName:{type:SchemaTypes.String, required:true},
        InventoryType:{
            type:SchemaTypes.String,
            Required:true,
        },
        Availability:{
            type:SchemaTypes.String,
            Required:true
        },
        Pricing:{
            type:SchemaTypes.Number,
            Required:true
        },
        Discount:{
            type:SchemaTypes.Number,
            Required:true
        },
        CreationDate:{
            type:SchemaTypes.Date,
            Required:true
        }
    }
)
export const InventorySch = mongoose.model("InventoryData",InventorySchema);