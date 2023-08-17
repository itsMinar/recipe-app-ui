import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './WelcomeScreen.style';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/welcome1.png')} />

      <Text style={styles.recipeText}>40k+ Premium Recipes</Text>
      <Text style={styles.tagLine}>Cook Like a Chef</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('RecipeList')}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
