import { Image, StyleSheet, Platform, Text, View } from 'react-native';


export default function TabTwoScreen() {
  return (
    <View style={styles.titleContainer}>
        <Text>Proposition</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });
  