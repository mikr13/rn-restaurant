import type { NavigationStackProp } from "react-navigation-stack";

export type RootStackParamList = {
  Home: {};
};

export type ScreenProps<T> = {
  navigation: NavigationStackProp<RootStackParamList, T>;
}
