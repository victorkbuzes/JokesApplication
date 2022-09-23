import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View } from "react-native-web";
import { CategoryScreen } from "./CategoryScreen";
import { JokesScreen } from "./JokesScreen";


const Tab = createBottomTabNavigator();
export default function HomeScreen() {

  return (    
    <Tab.Navigator>
      <Tab.Screen name="jokes" component={JokesScreen}  options={{ headerShown: false }} />
      <Tab.Screen name="category" component={CategoryScreen} options={{ headerShown: false }}  />
    

    </Tab.Navigator>
 
  )
}