import * as Location from "expo-location";

export const requestLocationPermission = async () => {
    const { status } = await Location.getForegroundPermissionsAsync();

    if (status === "granted") return { granted: true };
    if (status === "denied") return { granted: false, canAskAgain: false };

    const { status: newStatus } = await Location.requestForegroundPermissionsAsync();

    return {
        granted: newStatus === "granted",
        canAskAgain: newStatus !== "denied"
    };
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


export const watchUserLocation = async (callback) => {
    return await Location.watchPositionAsync(
        {
            accuracy: Location.Accuracy.High,
            timeInterval: 3000,
            distanceInterval: 5,
        },
        (location) => {
            callback({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        }
    );
};
