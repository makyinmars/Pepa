import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import { getWorkouts } from "../storage/workout";
import { Workout } from "../types/data";

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getData = async () => {
      const workouts = await getWorkouts();
      setWorkouts(workouts);
    };
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return workouts;
};
