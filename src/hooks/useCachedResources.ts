import { useEffect, useState } from "react";

import * as Font from "expo-font";
import { initWorkouts } from "../storage/workout";

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
        setIsLoadingComplete(true);
      }
    };

    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
