import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import PressableText from "./styled/PressableText";

export type ExerciseForm = {
  name: string;
};

type WorkoutFormProps = {
  onSubmit: (form: ExerciseForm) => void;
};

export default function WorkoutForm({ onSubmit }: WorkoutFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ExerciseForm>();

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="name"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.input}
            placeholder="Exercise Name"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.name && <Text style={styles.error}>This field is required!</Text>}
      <PressableText text="Confirm" onPress={handleSubmit(onSubmit)} />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray",
    borderRadius: 8,
    fontFamily: "notosans",
  },
  error: {
    color: "red",
    textAlign: "center",
    fontFamily: "notosans",
  },
});
