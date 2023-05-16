import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 bg-black'>
      <Text >Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

