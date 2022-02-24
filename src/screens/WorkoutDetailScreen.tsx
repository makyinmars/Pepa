import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";

import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import Modal from "../components/styled/Modal";
import PressableText from "../components/styled/PressableText";
import { formatTime } from "../utils/time";
import WorkoutItem from "../components/WorkoutItem";
import { SequenceItem } from "../types/data";
import { useCountdown } from "../hooks/useCountdown";

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
  const [trackerIndex, setTrackerIndex] = useState<number>(-1);

  const countdown = useCountdown(
    trackerIndex,
    trackerIndex >= 0 ? sequence[trackerIndex].duration : -1
  );

  useEffect(() => {
    console.log(countdown);
    if (!workout) return;
    if (trackerIndex === workout.sequence.length - 1) return;

    if (countdown === 0) {
      addItemToSequence(trackerIndex + 1);
    }
  }, [countdown]);

  const workout = useWorkoutBySlug(route.params.slug);

  const addItemToSequence = (index: number) => {
    setSequence([...sequence, workout!.sequence[index]]);
    setTrackerIndex(index);
  };

  if (!workout) {
    return null;
  }

  const hasReachedEnd =
    sequence.length === workout.sequence.length && countdown === 0;

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
        {sequence.length > 0 && countdown >= 0 && (
          <View>
            <Text style={styles.countdown}>{countdown}</Text>
          </View>
        )}
      </View>
      <View>
        <Text style={styles.conditionalText}>
          {sequence.length === 0
            ? "Prepare"
            : hasReachedEnd
            ? "Great Work!"
            : sequence[trackerIndex].name}
        </Text>
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
  countdown: {
    fontFamily: "notosans-bold",
    fontSize: 30,
  },
  conditionalText: {
    fontFamily: "notosans",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
});
