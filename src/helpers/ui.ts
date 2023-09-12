import {showMessage} from 'react-native-flash-message';

export const showError = (message: string) => {
  showMessage({
    type: 'danger',
    icon: 'danger',
    message,
    duration: 8000,
  });
};
