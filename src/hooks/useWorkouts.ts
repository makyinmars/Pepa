import { useEffect, useState } from "react";
import { getWorkouts } from "../storage/workout";
import { Workout } from "../types/data";

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const getData = async () => {
      const workouts = await getWorkouts();
      setWorkouts(workouts);
    };
    getData();
  }, []);

  return workouts;
};
