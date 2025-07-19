import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#2C2C2C',
          color: '#fff',
          borderRadius: '8px',
        },
        success: {
          iconTheme: {
            primary: '#FF6B35',
            secondary: '#fff',
          },
        },
        error: {
          iconTheme: {
            primary: '#DC3545',
            secondary: '#fff',
          },
        },
      }}
    />
  );
};

export default Toast;
