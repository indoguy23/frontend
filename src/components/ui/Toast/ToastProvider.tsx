import { Toaster } from "sonner";

const ToastProvider = () => {
  return (
    <Toaster
      richColors
      closeButton
      expand
      position="top-right"
      visibleToasts={5}
      toastOptions={{
        duration: 4000,
      }}
    />
  );
};

export default ToastProvider;
