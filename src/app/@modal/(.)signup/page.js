import SignupForm from "@/src/components/auth/signup-form";
import Modal from "@/src/components/ui/modal";

const SignupPage = () => {
  return (
    <Modal heading="Sign up">
      <SignupForm />
    </Modal>
  );
};

export default SignupPage;
