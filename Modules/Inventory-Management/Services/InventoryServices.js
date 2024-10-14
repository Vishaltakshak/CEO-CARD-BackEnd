import { InventorySch } from "../model/Inventory-Management.js";

export const AddInventory = async (Product) => {
    try {
        const InventoryItem = await InventorySch.create(Product);
        return InventoryItem;
    } catch (error) {
        throw error;
    }
};

export const fetchInventory = async (request, response) => {
    try {
        const viewInventory = await InventorySch.find({}).exec();
        return viewInventory

        // if (!viewInventory || viewInventory.length === 0) {
        //     return response.status(400).json({ message: "Inventory is empty" });
        // } else {
        //     return response.status(200).json({ message: "Inventory data", InventoryData: viewInventory });
        // }
    } catch (error) {
        return response.status(500).json({ message: "Server error", error: error.message });
    }
};

export const UpdateInventory = async (request, response) => {
    const { id } = request.params;
    const { VendorName, InventoryType, Availability, Pricing, Discount, CreationDate } = request.body;

    try {
        const updatedValue = await InventorySch.findByIdAndUpdate(id, {
            VendorName,
            InventoryType,
            Availability,
            Pricing,
            Discount,
            CreationDate
        }, { new: true });

        if (!updatedValue) {
            return response.status(404).json({ message: "Error updating value or item not found" });
        } else {
            return response.status(200).json({ message: "Value updated", UpdatedValue: updatedValue });
        }
    } catch (error) {
        return response.status(500).json({ message: "Server side error", error: error.message });
    }
};

export const DeleteInventoryItem = async (request, response) => {
    const { id } = request.params;

    try {
        const deleteItem = await InventorySch.findByIdAndDelete(id);

        if (!deleteItem) {
            return response.status(404).json({ message: "Item not found" });
        } else {
            return response.status(200).json({ message: "Item deleted successfully" });
        }
    } catch (error) {
        return response.status(500).json({ message: "Server error", error: error.message });
    }
};