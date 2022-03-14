import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import PressableText from "./styled/PressableText";

export type ExerciseFormType = {
  name: string;
  duration: string;
  type: string;
  reps?: string;
};

type WorkoutFormProps = {
  onSubmit: (form: ExerciseFormType) => void;
};

const selectionItems = ["exercise", "break", "stretch"];

export default function ExerciseForm({ onSubmit }: WorkoutFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ExerciseFormType>();
  const [isSelectionOn, setIsSelectionOn] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View>
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
        {errors.name && (
          <Text style={styles.error}>This field is required!</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Duration"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="duration"
        />
        {errors.duration && (
          <Text style={styles.error}>This field is required!</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Repetitions"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="reps"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              {isSelectionOn ? (
                <View style={styles.selectionItemContainer}>
                  {selectionItems.map((item, i) => (
                    <PressableText
                      key={i}
                      text={item}
                      onPressIn={() => {
                        onChange(item);
                        setIsSelectionOn(false);
                      }}
                    />
                  ))}
                </View>
              ) : (
                <TextInput
                  onPressIn={() => setIsSelectionOn(true)}
                  style={styles.input}
                  value={value}
                  placeholder="Type"
                />
              )}
            </View>
          )}
          name="type"
        />
        {errors.type && (
          <Text style={styles.error}>This field is required!</Text>
        )}

        <PressableText text="Add Exercise" onPress={handleSubmit(onSubmit)} />
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
    fontFamily: "notosans",
  },
  error: {
    color: "red",
    textAlign: "center",
    fontFamily: "notosans",
  },
  selectionItemContainer: {
    backgroundColor: "lightgray",
    borderWidth: 1,
    paddingVertical: 4,
    marginHorizontal: 12,
    borderRadius: 8,
  },
});
