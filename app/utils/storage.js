// src/utils/storage.js
import AsyncStorage from "@react-native-async-storage/async-storage";

// Save a value
export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log("Error saving data:", error);
    }
};

// Get a value
export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value != null ? JSON.parse(value) : null;
    } catch (error) {
        console.log("Error reading data:", error);
        return null;
    }
};

// Remove a key
export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log("Error deleting data:", error);
    }
};

// Clear all storage
export const clearAll = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log("Error clearing storage:", error);
    }
};
