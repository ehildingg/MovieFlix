import { View, StyleSheet, FlatList } from 'react-native';
import AppHeader from '../components/ui/AppHeader';
import Colors from '../utilities/constants/colors';
import { SPORT_CATEGORIES } from '../data/CategoriesData';
import CategoryItem from '../components/ui/CategoryItem';

const SeriesCategoriesScreen = () => {
  const renderCategoryItem = (category) => {
    return <CategoryItem item={category.item} />;
  };

  return (
    <View style={styles.screen}>
      <AppHeader>MovieFlix</AppHeader>
      <FlatList
        data={SPORT_CATEGORIES}
        keyExtractor={(category) => category.id}
        numColumns={3}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

export default SeriesCategoriesScreen;

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
