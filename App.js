import {NavigationContainer} from "@react-navigation/native";
import {AppNavigation} from "./src/navigation/AppNavigation.js";


export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}
