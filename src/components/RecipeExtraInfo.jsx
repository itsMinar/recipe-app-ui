import { View, Text } from 'react-native';

const RecipeExtraInfo = ({ bgColor, icon, label }) => {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        paddingVertical: 26,
        borderRadius: 8,
        alignItems: 'center',
        width: 100,
      }}
    >
      <Text style={{ fontSize: 40 }}>{icon}</Text>
      <Text style={{ fontSize: 20, fontWeight: 400 }}>{label}</Text>
    </View>
  );
};

export default RecipeExtraInfo;
