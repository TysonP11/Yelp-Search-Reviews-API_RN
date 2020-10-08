import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation';

const ResultList = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ResultShow', { id: item.id })}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultList);
