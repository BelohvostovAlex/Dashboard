import React, { useState } from "react";

import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClickv
import listPlugin from "@fullcalendar/list";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { makeStyles } from "./styles";

export const MyCalendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const styles = makeStyles({
    calendarWrapperColor: colors.primary[400],
    listItemColor: colors.greenAccent[500],
  });
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    console.log(selected);
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box sx={styles.entireCalendarWrapper}>
      <Box sx={styles.sideBarCalendar}>
        <Typography variant="h5">Events</Typography>
        <List>
          {currentEvents.map((item) => (
            <ListItem key={item.id} sx={styles.listItem}>
              <ListItemText
                primary={item.title}
                secondary={
                  <Typography>
                    {formatDate(item.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={styles.calendarWrapper}>
        <FullCalendar
          height="75vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={[
            { id: "12345", title: "All-day event", date: "2022-11-09" },
            { id: "412321", title: "Timed event", date: "2022-11-11" },
          ]}
        />
      </Box>
    </Box>
  );
};
