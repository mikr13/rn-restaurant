import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import type { ScreenProps } from '../types/app';
import type { YelpBusinesses } from '../types/yelp';
import { ResultDetails } from './ResultDetail';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

type ResultsListProps = {
  navigation: ScreenProps<"Home">["navigation"];
  title: string;
  businesses?: YelpBusinesses["businesses"];
};

export const ResultsList = ({
  navigation,
  title,
  businesses,
}: ResultsListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businesses}
        keyExtractor={(business) => business.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ListingDetails', { id: item.id })}>
            <ResultDetails {...item} />
          </TouchableOpacity>
        )} />
    </View>
  );
}
