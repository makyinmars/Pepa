import { useEffect, useState } from "react";

import * as Font from "expo-font";
import { getData, storeData, containsKey } from "../storage";
import data from "../data/data.json";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        const hasWorkouts = await containsKey("workout-data");
        if (!hasWorkouts) {
          console.log("Storing data");
          await storeData("workout-data", data);
        }
        await Font.loadAsync({
          notosans: require("../../assets/fonts/NotoSans-Regular.ttf"),
          "notosans-bold": require("../../assets/fonts/NotoSans-Bold.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        const workouts = await getData("workout-data");
        console.log(workouts);
        setIsLoadingComplete(true);
      }
    };

    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
