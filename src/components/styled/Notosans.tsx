import { Text } from "react-native";

export default function NotosansText(props: Text["props"]) {
  return <Text {...props} style={[props.style, { fontFamily: "notosans" }]} />;
}
