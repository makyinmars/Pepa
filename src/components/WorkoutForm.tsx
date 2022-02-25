import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import PressableText from "./styled/PressableText";

export type ExerciseForm = {
  name: string;
  duration: string;
};

type WorkoutProps = {
  onSubmit: (form: ExerciseForm) => void;
};

export default function WorkoutForm({ onSubmit }: WorkoutProps) {
  const [form, setForm] = useState<ExerciseForm>({
    name: "",
    duration: "",
  });

  const onChangeText = (name: string) => (text: string) => {
    setForm({ ...form, [name]: text });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Form</Text>
      <View>
        <TextInput
          onChangeText={onChangeText("name")}
          style={styles.input}
          value={form.name}
          placeholder="Name"
        />
        <TextInput
          onChangeText={onChangeText("duration")}
          style={styles.input}
          value={form.duration}
          placeholder="Duration"
        />
        <PressableText text="Submit" onPress={() => onSubmit(form)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontFamily: "notosans-bold",
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray",
    borderRadius: 8,
  },
});
