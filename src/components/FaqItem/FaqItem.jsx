import React from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useTheme,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

import { makeStyles } from "./styles";

export const FaqItem = ({ title, text }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const styles = makeStyles({
    accordionItemTitleColor: colors.greenAccent[500],
    accordionItemBg: colors.primary[500],
  });
  return (
    <Accordion sx={styles.accordionItem}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="h5" sx={styles.accordionItemTitle}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{text}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
