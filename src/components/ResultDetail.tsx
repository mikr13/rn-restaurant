import { Image, StyleSheet, Text, View } from 'react-native';
import { truncateName } from '../utils/string';

type ResultDetailsProps = {
  name: string;
  image_url: string;
  rating: number;
  review_count: number;
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  details: {
    fontWeight: "thin",
    fontSize: 12,
    color: "gray",
  }
});

export const ResultDetails = ({
  name,
  image_url,
  rating,
  review_count,
}: ResultDetailsProps) => (
  <View style={styles.container}>
    <Image source={{ uri: image_url }} style={styles.image} />
    <Text style={styles.name}>{truncateName(name, 25)}</Text>
    <Text style={styles.details}>{rating} Stars, {review_count} Reviews</Text>
  </View>
);
