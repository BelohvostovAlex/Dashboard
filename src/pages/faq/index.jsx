import React from "react";

import { PageLayout } from "../../layouts/PageLayout";

import { mockFaqData } from "../../data/mockFaqData";
import { FaqItem } from "../../components/FaqItem/FaqItem";

export const Faq = () => {
  return (
    <PageLayout title="FAQ" subtitle="Frequently Asked Questions Page">
      {mockFaqData.map((item) => (
        <FaqItem title={item.title} text={item.text} />
      ))}
    </PageLayout>
  );
};
