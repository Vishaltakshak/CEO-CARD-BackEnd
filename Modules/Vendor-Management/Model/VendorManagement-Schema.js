// import mongoose, { SchemaTypes } from "mongoose";

// export const VendorManagementSchema = mongoose.Schema(
//     {
//         VendorName: { type: SchemaTypes.String, required: true, minLength: 10 },
//         VendorCategory: { type: SchemaTypes.String, required: true },
//         ContactName: { type: SchemaTypes.String, required: true },
//         ContactMail: { type: SchemaTypes.String, required: true },
//         ContactNumber: { type: SchemaTypes.String, required: true, unique: true },
//         VendorWebsite: { type: SchemaTypes.String, required: true },
//         VendorDescription: { type: SchemaTypes.String, required: true, minLength: 20, maxLength: 150 },
//         VendorAddress: { type: SchemaTypes.String, required: true },
//         VendorRating: { type: SchemaTypes.Number, required: true },
//         VendorImages: { type: [SchemaTypes.String], required: true },
//         VendorOpenHours: { 
//             type: Map,
//             of: String,
//             required: true 
//         },
//         VendorPricingInfo: { type: SchemaTypes.String, required: true },
//         VendorAmenities: { type: [SchemaTypes.String], required: true },
//         VendorLocationCoordinates: {
//             type: {
//                 latitude: { type: SchemaTypes.Number, required: true },
//                 longitude: { type: SchemaTypes.Number, required: true }
//             },
//             required:true
//         },
//         VendorStatus:{type:SchemaTypes.String, required:true}
//     }
// );

// export const VendorManagementSch = mongoose.model("VendorManagement", VendorManagementSchema);

























// // import mongoose, { SchemaTypes } from "mongoose";

// // export const VendorManagementSchema = mongoose.Schema(
// //     {
// //        VendorName:{type:SchemaTypes.String, required:true, minLength:10},
// //        VendorCategory:{type:SchemaTypes.String, required:true},
// //        ContactName:{type:SchemaTypes.String, required:true},
// //        ContactMail:{type:SchemaTypes.Mixed, required:true},
// //        ContactNumber:{type:SchemaTypes.Number, required:true, unique:true, minLength:10},
// //        VendorWebsite:{type:SchemaTypes.Mixed, required:true},
// //        VendorDescription:{type:SchemaTypes.String, required:true, minLength:20, maxLength:150},
// //        VendorAddress:{type:SchemaTypes.String,required:true},
// //        VendorRating:{type:SchemaTypes.String,required:true},
// //        VendorImages:{type:SchemaTypes.String,required:true},
// //        VendorOpenHours:{type:SchemaTypes.Number,required:true},
// //        VendorPricingInfo:{type:SchemaTypes.Number, required:true},
// //        VendorAmenities:{type:SchemaTypes.String, required:true},
// //        VendorLoactionCoordinates:{type:SchemaTypes.Number,required:true},
// //        VendorStatus:{type:SchemaTypes.String, required:true}
// //     }
// // )

// // export const VendorManagementSch = mongoose.model("VendorManagement",VendorManagementSchema);



import mongoose, { SchemaTypes } from "mongoose";

export const VendorManagementSchema = mongoose.Schema(
    {
        VendorName: { type: SchemaTypes.String, required: true, minLength: 10 },
        VendorCategory: { type: SchemaTypes.String, required: true },
        ContactName: { type: SchemaTypes.String, required: true },
        ContactMail: { type: SchemaTypes.String, required: true },
        ContactNumber: { type: SchemaTypes.String, required: true, unique: true },
        VendorWebsite: { type: SchemaTypes.String, required: true },
        VendorDescription: { type: SchemaTypes.String, required: true, minLength: 20, maxLength: 150 },
        VendorAddress: { type: SchemaTypes.String, required: true },
        VendorRating: { type: SchemaTypes.Number, required: true },
        VendorImages: { type: [SchemaTypes.String], required: true },
        VendorOpenHours: {
            type: Map,
            of: String,
            required: true
        },
        VendorPricingInfo: {
            type: {
                Currency: { type: SchemaTypes.String, required: true },
                PriceRange: {
                    Min: { type: SchemaTypes.Number, required: true },
                    Max: { type: SchemaTypes.Number, required: true }
                }
            },
            required: true
        },
        VendorAmenities: { type: [SchemaTypes.String], required: true },
        VendorLocationCoordinates: {
            type: {
                latitude: { type: SchemaTypes.Number, required: true },
                longitude: { type: SchemaTypes.Number, required: true }
            },
            required:true
        },
        VendorStatus:{type:SchemaTypes.String, required:true}
    }
);

export const VendorManagementSch = mongoose.model("VendorManagement", VendorManagementSchema);