import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import Modal from "../components/styled/Modal";
import PressableText from "../components/styled/PressableText";
import { formatTime } from "../utils/time";
import { FontAwesome } from "@expo/vector-icons";
import WorkoutItem from "../components/WorkoutItem";
import { SequenceItem } from "../types/data";

type DetailsParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailsParams;

export default function WorkoutDetailScreen({ route }: Navigation) {
  const [sequence, setSequence] = useState<SequenceItem[]>([]);
  const [countdown, setCountdown] = useState<number>(-1);
  const [tackerIndex, setTrackerIndex] = useState<number>(-1);

  const workout = useWorkoutBySlug(route.params.slug);

  const addItemToSequence = (index: number) => {
    setSequence([...sequence, workout!.sequence[index]]);
    setTrackerIndex(index);
  };

  useEffect(() => {
    if (tackerIndex === -1) {
      return;
    }

    setCountdown(workout!.sequence[tackerIndex].duration);

    const intervalId = window.setInterval(() => {
      setCountdown((count) => {
        console.log(count);
        return count - 1;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [tackerIndex, workout]);

  if (!workout) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.name}</Text>
      <WorkoutItem item={workout}>
        <Modal
          activator={({ handleOpen }) => (
            <PressableText text="Check Sequence" onPress={handleOpen} />
          )}
        >
          <View>
            {workout.sequence.map((sequence, index) => (
              <View key={index} style={styles.sequenceItem}>
                <Text>
                  {sequence.name} | {formatTime(sequence.duration)} |{" "}
                  {sequence.reps} reps
                </Text>
                {index !== workout.sequence.length - 1 && (
                  <FontAwesome name="arrow-down" size={20} />
                )}
              </View>
            ))}
          </View>
        </Modal>
      </WorkoutItem>
      <View style={styles.playIcon}>
        {sequence.length === 0 && (
          <FontAwesome
            name="play-circle-o"
            size={80}
            onPress={() => addItemToSequence(0)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "notosans-bold",
  },
  sequenceItem: {
    alignItems: "center",
  },
  playIcon: {
    alignItems: "center",
  },
});
