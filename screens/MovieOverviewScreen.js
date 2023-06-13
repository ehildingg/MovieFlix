import { View, FlatList } from 'react-native';
import AppHeader from '../components/ui/AppHeader';
import { MOVIES } from '../data/MoviesData';
import { useLayoutEffect } from 'react';

import RenderItem from '../components/ui/RenderItem';
import ScreenTemplate from './ScreenTemplate';

const MovieOverviewScreen = ({ route, navigation }) => {
  const category = route.params.category;

  const displayedMovies = MOVIES.filter((movie) => {
    return movie.categoryId === category.id;
  });

  const renderMovie = (movieItem) => {
    return <RenderItem renderItem={movieItem} />;
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: category.title });
  }, [navigation, category]);

  return (
    <ScreenTemplate>
      <View>
        <AppHeader>MovieFlix</AppHeader>
        <View>
          <FlatList
            data={displayedMovies}
            keyExtractor={(item) => item.id}
            renderItem={renderMovie}
          />
        </View>
      </View>
    </ScreenTemplate>
  );
};
export default MovieOverviewScreen;
