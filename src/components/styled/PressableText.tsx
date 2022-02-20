import { Pressable, Text, StyleSheet, PressableProps } from "react-native";

export default function PressableText(
  props: PressableProps & { text: string }
) {
  return (
    <Pressable {...props}>
      <Text style={styles.checkSequence}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkSequence: {
    textDecorationLine: "underline",
  },
});
