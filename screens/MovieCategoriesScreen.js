import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import AppHeader from '../components/ui/AppHeader';
import Colors from '../utilities/constants/colors';
import { MOVIE_CATEGORIES } from '../data/CategoriesData';
import CategoryItem from '../components/ui/CategoryItem';
import ScreenTemplate from './ScreenTemplate';

const MovieCategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (category) => {
    const onCategorySelectedHandler = () => {
      navigation.navigate('MovieOverview', { category: category.item });
    };
    return <CategoryItem item={category.item} onPress={onCategorySelectedHandler} />;
  };

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <AppHeader>MovieFlix</AppHeader>
        <FlatList
          data={MOVIE_CATEGORIES}
          keyExtractor={(category) => category.id}
          numColumns={3}
          renderItem={renderCategoryItem}
        />
      </View>
    </ScreenTemplate>
  );
};

export default MovieCategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    color: Colors.lightText,
    fontSize: 24,
    textAlign: 'center',
  },
  title: {
    color: Colors.lightText,
    fontSize: 24,
    marginHorizontal: 12,
  },
});
