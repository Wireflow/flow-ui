import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider, useTheme } from 'flow-ui';

const Content = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text>{theme}</Text>
      <Button title="Sign Up" onPress={toggleTheme} />
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
