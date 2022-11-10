import React from "react";

import { PageLayout } from "../../layouts/PageLayout";
import { MyForm } from "../../components/MyForm/MyForm";

export const Form = () => {
  return (
    <PageLayout title="CREATE USER" subtitle="Create a New User Profile">
      <MyForm />
    </PageLayout>
  );
};
