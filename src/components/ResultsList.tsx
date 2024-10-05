import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation, type NavigationInjectedProps } from 'react-navigation';
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
  title: string;
  businesses?: YelpBusinesses["businesses"];
} & NavigationInjectedProps;

export const ResultsList = withNavigation(({
  title,
  businesses,
  navigation,
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
})
