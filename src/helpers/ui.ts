import {Alert} from 'react-native';
import {showMessage} from 'react-native-flash-message';

export const showError = (message: string) => {
  showMessage({
    type: 'danger',
    icon: 'danger',
    message,
    duration: 8000,
  });
};

export const showSuccess = (message: string) => {
  showMessage({
    type: 'success',
    icon: 'success',
    message,
    duration: 5000,
  });
};

export const alert = (title: string, message: string) =>
  Alert.alert(title, message, [{text: 'OK'}]);

export const askQuestion = (
  title: string,
  question: string,
  okText: string,
  onOk: () => void,
) =>
  Alert.alert(
    title,
    question,
    [
      {
        text: okText,
        onPress: onOk,
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
