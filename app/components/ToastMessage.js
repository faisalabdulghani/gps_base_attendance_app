import Toast from 'react-native-toast-message';

export const showErrorMsg = (msgStr) =>
    Toast.show({
        text1: "Error",
        text2: msgStr,
        type: 'error',
    });

export const showSuccessMsg = (msgStr) =>
    Toast.show({
        text2: msgStr,
        text1: "Success",
        type: 'success',
    });