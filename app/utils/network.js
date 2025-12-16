import NetInfo from "@react-native-community/netinfo";

export const checkInternet = async () => {
    const state = await NetInfo.fetch();


    if (!state.isConnected && !state.isWifiEnabled) {
        return false
    } else return true
};
