"use client";
import { useUserForm } from "./hooks/useUserForm";
import UserFormFields from "./UserFormFields";

export default function UserForm({ refresh }: { refresh: () => void }) {
  const { user, loading, form, onSubmit } = useUserForm(refresh);

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <UserFormFields form={form} user={user} loading={loading} />
    </form>
  );
}
