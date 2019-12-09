import { toast } from 'react-toastify';

const redirectWithNotification = (history, to, notifcationMessage) => {
  history.push(to);
  toast.dismiss();
  toast.success(notifcationMessage);
};

export default redirectWithNotification;