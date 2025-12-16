import * as Location from "expo-location";

export const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === "granted";
};

export const checkGpsEnabled = async () => {
    const enabled = await Location.hasServicesEnabledAsync();
    return enabled;
};

export const getCurrentLocation = async () => {
    const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
    });

    return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
    };
};
