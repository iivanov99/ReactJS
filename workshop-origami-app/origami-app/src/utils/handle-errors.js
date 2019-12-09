import { toast } from 'react-toastify';

const handleErrors = err => {
  toast.dismiss();

  if (err.inner) {
    err.inner.forEach(innerErr => toast.error(innerErr.message));
    return;
  } //yup validation errors

  if (err.message === 'Unauthorized') {
    toast.error('Invalid username or password!');
    return;
  }

  toast.error(err.message);
};

export default handleErrors;