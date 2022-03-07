import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import slugify from "slugify";

import ExerciseForm, { ExerciseFormData } from "../components/ExerciseForm";
import { SequenceItem, SequenceType } from "../types/data";

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
  const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);

  const handleFormSubmit = (form: ExerciseFormData) => {
    const sequenceItem: SequenceItem = {
      slug: slugify(form.name + " " + Date.now(), { lower: true }),
      name: form.name,
      type: form.type as SequenceType,
      duration: Number(form.duration),
    };

    if (form.reps) {
      sequenceItem.reps = Number(form.reps);
    }

    setSeqItems([...seqItems, sequenceItem]);
    console.log(sequenceItem);
  };

  return (
    <View style={styles.container}>
      <ExerciseForm onSubmit={handleFormSubmit} />
      <FlatList
        data={seqItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Workout: {item.name}</Text>
            <Text>Duration: {item.duration}</Text>
            <Text>{item.reps && `Reps: ${item.reps}`}</Text>
            <Text>Type: {item.type}</Text>
          </View>
        )}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 8,
    padding: 8,
    flex: 1,
    alignItems: "center",
  },
});
