import { StyleSheet, Text, View } from "react-native";

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

export const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Listing Details Screen</Text>
    </View>
  );
}
