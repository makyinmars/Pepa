import data from "../data/data.json";
import { containsKey, getData, removeData, storeData } from ".";
import { Workout } from "../types/data";

export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts: Workout[] = await getData("workout-data");
  return workouts;
};

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await containsKey("workout-data");
  if (!hasWorkouts) {
    await storeData("workout-data", data);
    return true;
  }
  return false;
};

export const clearWorkouts = async (): Promise<void> => {
  await removeData("workout-data");
};
