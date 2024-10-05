import { Feather } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    height: "100%"
  },
  iconStyle: {
    fontSize: 25,
    marginHorizontal: 10,
  }
});

type SearchBarProps = {
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmit: () => void;
};

export const SearchBar = ({ term, onTermChange, onTermSubmit }: SearchBarProps) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}
