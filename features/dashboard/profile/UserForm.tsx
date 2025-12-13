"use client";
import { useUserForm } from "./hooks/useUserForm";
import UserFormFields from "./UserFormFields";

export default function UserForm({ refresh }: { refresh: () => void }) {
  const { user, loading, form, onSubmit } = useUserForm(refresh);

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <UserFormFields form={form} user={user} loading={loading} />
    </form>
  );
}
