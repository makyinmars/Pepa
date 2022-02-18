import { useEffect, useState } from "react";

import * as Font from "expo-font";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        await Font.loadAsync({
          oswald: require("../../assets/fonts/Oswald-Regular.ttf"),
          "oswald-bold": require("../../assets/fonts/Oswald-Bold.ttf"),
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
