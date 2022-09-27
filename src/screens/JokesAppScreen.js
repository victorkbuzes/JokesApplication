import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View } from "react-native";
import { CategoryScreen } from "./CategoryScreen";
import { JokesScreen } from "./JokesScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function JokesAppScreen() {

  const homeName = "Home";
  const categoryName = "Category";
  

  return (   
 
    
    <Tab.Navigator 
     initialRouteName= {homeName}
     screenOptions={({ route }) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        let rn = route.name;
        if (rn === homeName) {
          iconName = focused ? 'home' : 'home-outline';          
        } else if (rn === categoryName ) {
          iconName = focused ? 'list' : 'list-outline';


        }
        return <Ionicons name= {iconName} size={size} color={color}  />
      },

     })}

     tabBarOptions = {{
      activeTintColor: '#EB1D36',
      inactiveTintColor: 'grey',
      labelStyle: {  fontSize: 28 , fontWeight: 'bold' },
      style: { padding: 16, height: 80 },

     }}>

      <Tab.Screen name= {homeName} component={JokesScreen} options={{ headerShown: false }} />
      <Tab.Screen name= {categoryName} component={CategoryScreen} options={{ headerShown: false }} />


    </Tab.Navigator>
 
  )
}