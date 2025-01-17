"use client";
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";

const page = () => {
  return (
    <div>
      <AuthForm
        type="SIGN_IN"
        schema={signInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={() => {}}
      />
    </div>
  );
};

export default page;
