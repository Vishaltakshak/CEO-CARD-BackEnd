
import { ContentSch } from '../Model/ContentManagementSchema.js'


const AddContent = async(product) => {
  try {
    const doc= await ContentSch.create(product)
    return doc
  } catch (error) {
    throw error
    
  }
}

export default AddContent

export const ViewContent=async()=>{
    try {
        const Content = await ContentSch.find({}).exec();
        return Content;
        
    } catch (error) {
        throw error
        
    }
    
}

export const UpdateContent = async (request, response) => {
    const { id } = request.params;
    const {
        VendorName,
        ContentType,
        Title,
        Description,
        ContentStatus
    } = request.body; 

    try {
        const doc = await ContentSch.findByIdAndUpdate(id, {
            VendorName,
            ContentType,
            Title,
            Description,
            ContentStatus,
        }, { new: true }); 

        if (!doc) {
            return response.status(404).json({ message: "Data couldn't be found" });
        }

        return response.status(200).json({ message: "Update successful", BookingData: doc });

    } catch (error) {
        console.error("Error updating content:", error);
        return response.status(500).json({ message: "Internal server error", error: error.message }); // Send error response
    }
};


export const DeleteContent = async(request, response)=>{
    const {id} = request.params;
    try {
        const doc = await ContentSch.findByIdAndDelete(id)
        if (!doc) {
            return response.status(404).json({ message: "Content Not Found" }); 
        }
  
        return response.status(200).json({ message: "Deletion successful" });
        
    } catch (error) {
        throw error
        
    }
}