import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ResultsList } from "../components/ResultsList";
import { SearchBar } from "../components/SearchBar";
import { useGetBusinesses } from "../hooks/useGetBusinesses";

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

export const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [searchParams, setSearchParams] = useState<{ term: string; location: string; limit: number }>({
    term: 'pasta',
    location: 'san jose',
    limit: 10,
  });
  const { data, isLoading, isError, error } = useGetBusinesses({
    params: searchParams,
    queryKey: ['businesses', searchParams.term],
    enabled: searchParams.term.length > 0,
  });
  const [modifiedResults, setModifiedResults] = useState(data?.businesses);

  const filterResultsByPrice = (price: string) => {
    return modifiedResults?.filter((result) => result.price === price);
  }

  const injectDummyPrice = () => {
    const prices = ["$", "$$", "$$$"];
    const modified = data?.businesses.map((result) => ({
      ...result,
      price: prices[Math.floor(Math.random() * prices.length)],
    }));
    setModifiedResults(modified);
  };

  const onSubmit = () => {
    setSearchParams({ term, location: 'san jose', limit: 50 });
    setTerm('');
  };

  useEffect(() => {
    injectDummyPrice();
  }, [data?.businesses]);

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={onSubmit}
      />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error: {error.message}</Text>
      ) : modifiedResults && (
        <ScrollView style={styles.resultsContainer}>
          <ResultsList title="Cost Effective" businesses={filterResultsByPrice("$")} />
          <ResultsList title="Bit Pricier" businesses={filterResultsByPrice("$$")} />
          <ResultsList title="Big Spender" businesses={filterResultsByPrice("$$$")} />
        </ScrollView>
      )}
    </View>
  );
}
