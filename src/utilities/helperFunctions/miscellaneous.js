import { showMessage } from 'react-native-flash-message';
import { layout } from '../layout';

const showErrorAlert = (alertMessage, options = {}) => {
  showMessage({
    message: 'error',
    description: String(alertMessage),
    type: 'danger',
    floating: true,
    duration: 4000,
    style: { marginTop: layout.isIOS ? 0 : 20 },
    ...options,
  });
};

const showSuccessAlert = (alertMessage, options = {}) => {
  showMessage({
    message: 'success',
    description: String(alertMessage),
    type: 'success',
    floating: true,
    duration: 4000,
    style: { marginTop: layout.isIOS ? 0 : 20 },
    ...options,
  });
};

const showInfoAlert = (alertMessage, options = {}) => {
  showMessage({
    message: 'info',
    description: String(alertMessage),
    type: 'info',
    floating: true,
    duration: 4000,
    style: { marginTop: layout.isIOS ? 0 : 20 },
    ...options,
  });
};

const getAPIError = error => {
  if (error.response) { 
    if (
      error.response.data &&
      (error.response.data.msg || error.response.data.message)
    ) {
      return error.response.data.alert || error.response.data.message;
    }
  }
  return 'Something went wrong';
};

export {
  getAPIError,
  showErrorAlert,
  showInfoAlert,
  showSuccessAlert
};

