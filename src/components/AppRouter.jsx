import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { DashBoard } from "../pages/dashboard";
import { Team } from "../pages/team";
import { Invoices } from "../pages/invoices";
import { Contacts } from "../pages/contacts";
import { Bar } from "../pages/bar";
import { Form } from "../pages/form";
import { Line } from "../pages/line";
import { Pie } from "../pages/pie";
import { Faq } from "../pages/faq";
import { Geography } from "../pages/geography";
import { Calendar } from "../pages/calendar";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/line" element={<Line />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/geography" element={<Geography />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
