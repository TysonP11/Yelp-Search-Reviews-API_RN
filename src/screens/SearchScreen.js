import React from 'react';
import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text style={styles.text}>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultList title='Cost Effective' results={filterResultByPrice('$')} />
        <ResultList title='Bit Pricier' results={filterResultByPrice('$$')} />
        <ResultList title='Big Spender' results={filterResultByPrice('$$$')} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    //flex: 1,
  },
});

export default SearchScreen;
