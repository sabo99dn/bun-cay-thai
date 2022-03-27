import AsyncStorage from '@react-native-community/async-storage';

const key = "NOTIFICATION";

export const saveList = async (data) => {
    try {
        await AsyncStorage.setItem(
            key,
            JSON.stringify(data)
        );
        return true;
    } catch (error) {
        // Error saving data
        return false;
    }
}

export const getList = async () => {
    try {
        const result = await AsyncStorage.getItem(key);
        return result ? JSON.parse(result) : null;
    } catch (error) {
        // Error saving data
        return null;
    }
}

export const addNotificationToList = async (notification, unread = true) => {
    try {
        const data = await getList();
        let dataUpdate = [ ...data ];
        const lastItem = data[data.length - 1];
        let itemSave = { ...notification };
        const now = new Date;
        itemSave.id = lastItem.id + 1;
        itemSave.unread = unread;
        itemSave.time = now.toUTCString();
        dataUpdate.push(itemSave);
        await saveList(dataUpdate);
        return itemSave;
    } catch (error) {
        // Error saving data
        return null;
    }
}

export const saveTokenDevice = async (token) => {
    try {
        await AsyncStorage.setItem(
            key + "-TOKEN-DEVICE",
            token
        );
        return true;
    } catch (error) {
        // Error saving data
        return false;
    }
}

export const getTokenDevice = async () => {
    try {
        const result = await AsyncStorage.getItem(key+ "-TOKEN-DEVICE");
        return result ? result : null;
    } catch (error) {
        // Error saving data
        return null;
    }
}
