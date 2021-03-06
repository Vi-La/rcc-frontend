import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
  background: {},
  sideBar: {
    backgroundColor: "#121212",
  },
  Icons: {
    color: "#b45309",
  },
  userTableIcons: {
    color: "#b45309",
    cursor: "pointer",
  },
  InnerIcon: {
    marginLeft: "0px",
  },
  labels: {
    color: "#000000",
  },
  toolBar: {
    // backgroundColor: "#",
  },
  createEvent: {
    textAlign: "center",
    borderRadius: "5px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.25)",
    background: "rgba(196, 196, 196, 0.05)",
    // padding: "20px 0px 20px 200px",
  },
  Title: {
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "400",
    color: "#b45309",
    textTransform: "uppercase",
    display: "block",
    margin: "5px 0px 20px 0px",
  },
  daysContainer: {
    display: "flex",
    alignContent: "space-between",
  },
  day: {
    borderStyle: "none",
    color: "#000000",
    width: "20%",
    background: "#FFFFFF",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    marginLeft: "360px",
    marginBottom: "50px",
  },
  Inputs: {
    border: "1px solid #333",
    width: "45%",
    height: "35px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "4px",
    marginBottom: "10px",
    outline: "none",
    textIndent: "10px",
    marginRight: "10px",
    color: "#000000",
  },
  InputTickets: {
    border: "1px solid #333",
    width: "100%",
    height: "35px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "4px",
    marginBottom: "10px",
    outline: "none",
    textIndent: "10px",
    marginRight: "10px",
    color: "#000000",
  },
  thumbnail: {
    border: "1px solid #333",
    height: "35px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "4px",
    marginBottom: "10px",
    outline: "none",
    textIndent: "10px",
    color: "#000000",
  },

  SendBtn: {
    width: "20%",
    height: "40px",
    background: " #b45309",
    border: "1px solid #b45309",
    boxSizing: "border-box",
    borderRadius: "3px",
    cursor: "pointer",
    color: "#ffffff",
  },
  ApproveBtn: {
    width: "15%",
    padding: "5px",
    background: " #b45309",
    border: "1px solid #b45309",
    boxSizing: "border-box",
    borderRadius: "3px",
    cursor: "pointer",
    color: "#ffffff",
  },

  RejectBtn: {
    width: "15%",
    padding: "5px",
    background: "red",
    borderStyle: "none",
    boxSizing: "border-box",
    borderRadius: "3px",
    color: "#ffffff",
    marginLeft: "30px",
  },
  toogleBtn: {
    backgroundColor: "#b45309",
    float: "right",
    cursor: "pointer",
    marginBottom: "30px",
    borderStyle: "none",
    padding: "5px",
    color: "#FFFFFF",
    borderRadius: "5px",
    marginTop: "25px",
  },
  EventContainer: {
    padding: "20px",
  },
  LogoutBtn: {
    width: "10%",
    padding: "5px",
    marginLeft: "20px",
    background: " #FFFFFF",
    boxSizing: "border-box",
    borderRadius: "3px",
    cursor: "pointer",
    borderStyle: "none",
    color: "#000000",
  },
  InputPartOne: {
    width: "45%",
    height: "35px",
    background: "#ffffff",
    border: "1px solid #555",
    boxSizing: "border-box",
    borderRadius: "4px",
    marginBottom: "10px",
    outline: "none",
    textIndent: "10px",
    marginRight: "10px",
    color: "#000000",
  },
  InputPartArea: {
    width: "45%",
    background: "#ffffff",
    border: "1px solid #555",
    boxSizing: "border-box",
    borderRadius: "4px",
    marginBottom: "10px",
    outline: "none",
    textIndent: "10px",
    marginRight: "10px",
    color: "#000000",
  },
  Container: {
    background: "rgba(196, 196, 196, 0.05)",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.25)",
    padding: "20px",
  },
  eventScheduleContainer: {
    marginTop: "50px",
  },
  eventScheduleFields: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  EventTitle: {
    fontSize: "25px",
    fontWeight: 700,
    textAlign: "left",
    color: "#0000000",
    marginBottom: "20px",
  },
  EventImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
})
