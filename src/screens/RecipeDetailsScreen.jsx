import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import RecipeExtraInfo from '../components/RecipeExtraInfo';
import { styles } from './RecipeDetailsScreen.style';

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView style={{ flexDirection: 'row', marginHorizontal: 16 }}>
        <Pressable onPress={() => navigation.goBack()} style={{ flex: 1 }}>
          <FontAwesome name="arrow-circle-left" size={28} color="white" />
        </Pressable>
        <FontAwesome name="heart-o" size={28} color="white" />
      </SafeAreaView>

      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <Image source={item.image} style={styles.img} />
        </View>

        <Text style={styles.title}>{item.name}</Text>

        <View style={{ flex: 1 }}>
          <ScrollView>
            <Text style={styles.descriptionText}>{item.description}</Text>

            <View style={styles.extraInfoContainer}>
              <RecipeExtraInfo
                bgColor="rgba(255,0,0,0.38)"
                icon="⏰"
                label={item.time}
              />
              <RecipeExtraInfo
                bgColor="rgba(135,206,235,0.8)"
                icon="🥣"
                label={item.difficulty}
              />
              <RecipeExtraInfo
                bgColor="rgba(255,165,0,0.48)"
                icon="🔥"
                label={item.calories}
              />
            </View>

            <View style={styles.commonContainer}>
              <Text style={styles.heading}>Ingredients:</Text>

              {item.ingredients.map((ingredient, index) => (
                <View style={styles.ingredientsContainer} key={index}>
                  <View style={styles.ingredientsDot}></View>
                  <Text style={styles.steps}>{ingredient}</Text>
                </View>
              ))}
            </View>

            <View style={styles.commonContainer}>
              <Text style={styles.heading}>Steps:</Text>

              {item.steps.map((step, index) => (
                <Text key={index} style={styles.steps}>
                  {`${index + 1}. ${step}`}
                </Text>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;
