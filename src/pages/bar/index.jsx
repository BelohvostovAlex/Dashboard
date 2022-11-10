import React from "react";

import { PageLayout } from "../../layouts/PageLayout";
import { BarChart } from "../../components/BarChart/BarChart";

export const Bar = () => {
  return (
    <PageLayout title="Bar Chart" subtitle="Simple Bar Chart">
      <BarChart />
    </PageLayout>
  );
};
