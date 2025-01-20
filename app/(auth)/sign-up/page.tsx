"use client";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";

const page = () => {
  return (
    <div>
      <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
          fullName: "",
          email: "",
          universityId: "",
          universityCard: "",
          password: "",
        }}
        onSubmit={() => {}}
      />
    </div>
  );
};

export default page;
