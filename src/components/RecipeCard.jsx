import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors, recipeList } from '../../constant/Data';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RecipeCard = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('RecipeDetails', { item: item })}
            style={styles.listContainer}
          >
            <Image source={item.image} style={styles.img} />
            <Text>{item.name}</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text>{item.time}</Text>
              <Text> | </Text>

              <View style={{ flexDirection: 'row', gap: 4 }}>
                <Text>{item.rating}</Text>
                <FontAwesome
                  name="star"
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-around',
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: colors.COLOR_DARK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 26,
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'center',
  },
});
