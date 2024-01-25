import LoginForm from "@/src/components/auth/login-form";
import Modal from "@/src/components/ui/modal";

const LoginPage = () => {
  return (
    <Modal heading="Login">
      <LoginForm />
    </Modal>
  );
};

export default LoginPage;
