import { StatusBar } from "expo-status-bar";
import useCachedResources from "./src/hooks/useCachedResources";

import Navigation from "./src/navigation";

export default function App() {
  const isLoaded = useCachedResources();

  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
