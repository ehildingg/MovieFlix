import { View, StyleSheet, FlatList } from 'react-native';
import AppHeader from '../components/ui/AppHeader';
import Colors from '../utilities/constants/colors';
import { DOCUMENTARY_CATEGORIES } from '../data/CategoriesData';
import CategoryItem from '../components/ui/CategoryItem';

const DocumentaryCategoriesScreen = () => {
  const renderCategoryItem = (category) => {
    return <CategoryItem item={category.item} />;
  };

  return (
    <View style={styles.screen}>
      <AppHeader>MovieFlix</AppHeader>
      <FlatList
        data={DOCUMENTARY_CATEGORIES}
        keyExtractor={(category) => category.id}
        numColumns={3}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

export default DocumentaryCategoriesScreen;

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
