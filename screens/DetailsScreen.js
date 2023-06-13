import { useLayoutEffect } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/ui/AppHeader';

import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate';
import { MOVIES } from '../data/MoviesData';
import IconButton from '../components/ui/IconButton';

const DetailsScreen = ({ route, navigation }) => {
  const itemId = route.params.id;

  const selectedItem = MOVIES.find((item) => {
    return item.id === itemId;
  });

  const onFavoritePressedHandler = () => {
    console.log('Favoriiiit');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPressed={onFavoritePressedHandler} />;
      },
    });
  }, [navigation, onFavoritePressedHandler]);

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <AppHeader>MovieFlix</AppHeader>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{selectedItem.title}</Text>
          <Image style={styles.image} source={{ uri: selectedItem.imageUrl }} />
        </View>

        <View styles={styles.infoContainer}>
          <Text style={styles.text}>{selectedItem.releaseYear}</Text>
          <Text style={styles.text}>{selectedItem.actors}</Text>
        </View>
      </View>
    </ScreenTemplate>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: Colors.primaryText,
    marginTop: 50,
    textAlign: 'center',
  },
  text: {
    color: Colors.primaryText,
    textAlign: 'center',
  },
  infoContainer: {
    width: 250,
    height: 250,
    marginTop: 250,
    border: 2,
    borderColor: 'red',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 25,
  },
  wrapper: {
    alignContent: 'center',
  },
});

// Michaels KOd

/*

<ScreenTemplate>
<AppHeader>MovieFlix</AppHeader>
<View style={styles.screen}>
  <View style={styles.container}>
    <Text style={styles.title}>{selectedItem.title}</Text>
    <Image style={styles.image} source={{ uri: selectedItem.imageUrl }} />
    <View style={styles.infoWrapperContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>År:</Text>
        <Text style={styles.infoText}>{selectedItem.releaseYear}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Längd:</Text>
        <Text style={styles.infoText}>{selectedItem.runtime}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Regissör:</Text>
        <Text style={styles.infoText}>{selectedItem.director}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Skådespelare:</Text>
        <Text style={styles.infoText}>{selectedItem.actors}</Text>
      </View>
    </View>
  </View>
</View>
</ScreenTemplate>
);
};

export default DetailsScreen;

const styles = StyleSheet.create({
screen: {
flex: 1,
},
container: {
alignItems: 'center',
padding: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
color: Colors.lightText,
textAlign: 'center',
},
infoWrapperContainer: {
backgroundColor: Colors.primaryBackground800,
padding: 16,
borderRadius: 20,
},
infoContainer: {
width: '100%',
paddingHorizontal: 0,
paddingVertical: 6,
flexWrap: 'wrap',
flexDirection: 'row',
justifyContent: 'flex-start',
},
infoText: {
color: Colors.lightText,
marginHorizontal: 4,
},
image: {
width: 350,
height: 350,
resizeMode: 'cover',
marginVertical: 30,
borderRadius: 175,
borderWidth: 2,
borderColor: Colors.primaryText,
},
});
*/
