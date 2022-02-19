import { useEffect, useState } from "react";

import * as Font from "expo-font";
import { getWorkouts, initWorkouts } from "../storage/workout";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        await initWorkouts();
        await Font.loadAsync({
          notosans: require("../../assets/fonts/NotoSans-Regular.ttf"),
          "notosans-bold": require("../../assets/fonts/NotoSans-Bold.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        const workouts = await getWorkouts();
        console.log(workouts);
        setIsLoadingComplete(true);
      }
    };

    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
