export const makeStyles = (props) => ({
  entireCalendarWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  sideBarCalendar: {
    flex: "1 1 20%",
    background: props.calendarWrapperColor,
    padding: "15px",
    borderRadius: "4px",
  },
  listItem: {
    backgroundColor: props.listItemColor,
    margin: "10px 0px",
    borderRadius: "2px",
  },
  calendarWrapper: {
    flex: "1 1 100%",
    marginLeft: "15px",
  },
});
