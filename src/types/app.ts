import type { NavigationProp } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: {};
  ListingDetails: { id: string };
};

export type StackNavigation = NavigationProp<RootStackParamList>;

export type ScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>
