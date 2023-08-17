import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './RecipeListScreen.style';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import RecipeCard from '../components/RecipeCard';

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerText="Hi, Minar" headerIcon={'bell-o'} />

      <SearchFilter icon={'search'} placeholder={'Enter Your Fav Recipe'} />

      {/* Categories */}
      <View style={styles.categoryContainer}>
        <Text style={styles.catgoriesText}>Catgories</Text>

        <CategoriesFilter />
      </View>

      {/* Recipes */}
      <View style={[styles.categoryContainer, { flex: 1 }]}>
        <Text style={styles.catgoriesText}>Recipes</Text>

        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;
