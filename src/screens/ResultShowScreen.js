import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState([]);

  const getBusiness = async (id) => {
    try {
      const response = await yelp.get(`/${id}/reviews`);
      setResult(response.data.reviews);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBusiness(id);
  }, []);

  if (result.length === 0) {
    return null;
  }

  return (
    <ScrollView style={{
        flex: 1
    }}>
      {result.map((item) => {
        return (
          <>
            <Image
              style={styles.image}
              key={item.user.image_url}
              source={{
                uri: item.user.image_url,
              }}
            />
            <Text
              key={item.id}
              style={{
                fontSize: 16,
                marginBottom: 20,
              }}
            >
              {item.text}
            </Text>
          </>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

export default ResultShowScreen;
