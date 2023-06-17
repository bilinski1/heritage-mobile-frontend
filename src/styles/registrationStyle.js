import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export const registrationStyle = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgb(109,49,158)",
  },
  view: {
    width: "80%",
  },
  cardTitle: {
    color: "rgb(134,68,162)",
  },
  cardButton: {
    margin: 5,
    marginLeft: 0,
    marginRight: 0,
  },
  textStyle: {
    margin: 5,
    marginLeft: 0,
    marginRight: 0,
    color: "rgb(103,80,164)",
    textAlign: "center",
  },
  textInput: {
    backgroundColor: "transparent",
  },
  icon: {
    color: "rgb(103,80,164)",
  },
});
