import { View, StyleSheet, FlatList, Text } from "react-native";
import { useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import slugify from "slugify";

import ExerciseForm, { ExerciseFormType } from "../components/ExerciseForm";
import { SequenceItem, SequenceType } from "../types/data";
import ExerciseItem from "../components/ExerciseItem";
import PressableText from "../components/styled/PressableText";
import Modal from "../components/styled/Modal";
import WorkoutForm from "../components/WorkoutForm";

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
  const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);

  const handleFormSubmit = (form: ExerciseFormType) => {
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
        renderItem={({ item, index }) => (
          <ExerciseItem item={item}>
            <PressableText
              text="Remove"
              onPressIn={() => {
                const items = [...seqItems];
                items.splice(index, 1);
                setSeqItems(items);
              }}
            />
          </ExerciseItem>
        )}
        keyExtractor={(item) => item.slug}
      />
      <View>
        <Modal
          activator={({ handleOpen }) => (
            <PressableText text="Create Workout" onPress={handleOpen} />
          )}
        >
          <View>
            <WorkoutForm
              onSubmit={(data) => {
                console.log(data);
              }}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
