import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useGetBusinessById } from "../hooks/useGetBusinessById";
import type { ScreenProps } from "../types/app";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  resultsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    marginVertical: 5,
  },
});

type Props = Partial<ScreenProps<"ListingDetails">>;

export const ListingDetailsScreen = ({ route }: Props) => {
  const id = route?.params.id;
  const { data, isLoading, isError, error } = useGetBusinessById({
    params: {
      id: id || '',
    },
    queryKey: ['business', id || ''],
    enabled: !!id,
  });

  return (
    <View style={styles.container}>
      <Text>{data?.name}</Text>
      <FlatList
        data={data?.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width: 300, height: 200 }} />
        )}
      />
    </View>
  );
}
