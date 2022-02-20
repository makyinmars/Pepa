import { Workout } from "../types/data";

import { useEffect, useState } from "react";
import { getWorkout } from "../storage/workout";

export const useWorkoutBySlug = (slug: string) => {
  const [workout, setWorkout] = useState<Workout>();

  useEffect(() => {
    const getData = async () => {
      const workout = await getWorkout(slug);
      setWorkout(workout);
    };
    getData();
  }, []);

  return workout;
};
