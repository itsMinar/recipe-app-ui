import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories, colors } from '../../constant/Data';

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View
            style={[
              styles.categoryContainer,
              {
                backgroundColor:
                  index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
              },
            ]}
            key={category.id}
          >
            <Text
              style={[
                styles.categoryText,
                { color: index === 0 && colors.COLOR_LIGHT },
              ]}
            >
              {category.category}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({
  categoryContainer: {
    marginRight: 36,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: colors.COLOR_DARK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 16,
  },
  categoryText: {
    fontSize: 18,
  },
});
