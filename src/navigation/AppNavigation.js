import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {} from "react-native"
import {Icon} from "react-native-elements";
import {DestinosScreen} from "../screens/DestinosScreen";
import {FavoritesScreen } from "../screens/FavoritesScreen";
import {TopScreen} from "../screens/TopScreen";
import {AccountScreen} from "../screens/AccountScreen";
import {SearchScreen} from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={({router}) => ({
            tabBarActiveTintColor: "#00a680",
            tabBarInactiveTintColor: "#646464",
            tabBarIcon: ({color, size}) => <Icon type="material-community" name="home-outline" color={color} size={size} />
        })}>
            <Tab.Screen name="DESTINOS" component={DestinosScreen} />
            <Tab.Screen name="BUSCAR" component={SearchScreen} />
            <Tab.Screen name="FAVORITOS" component={FavoritesScreen} />
            <Tab.Screen name="TOP" component={TopScreen} />
            <Tab.Screen name="CUENTA" component={AccountScreen} />
        </Tab.Navigator>
    );
} 