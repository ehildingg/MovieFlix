import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../utilities/constants/colors';

import { useNavigation } from '@react-navigation/native';

const RenderItem = ({ renderItem }) => {
  const navigation = useNavigation();

  const onSelectedItemHandler = () => {
    navigation.navigate('Detaljer', { id: renderItem.item.id });
  };

  return (
    <Pressable onPress={onSelectedItemHandler}>
      <View style={styles.movieContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.movieTitleText}>{renderItem.item.title}</Text>
          <Text style={styles.moviePlotText}>{renderItem.item.plot}</Text>
        </View>
        <Image style={styles.movieImage} source={{ uri: renderItem.item.imageUrl }} />
      </View>
    </Pressable>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  movieContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: 'red',
    padding: 5,
  },

  movieImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    flex: 0.5,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 0.5,
    marginTop: 10,
  },
  movieTitleText: {
    fontSize: 24,
    marginBottom: 4,
    color: Colors.lightText,
  },
  moviePlotText: {
    fontSize: 12,
    color: Colors.lightText,
  },
});
