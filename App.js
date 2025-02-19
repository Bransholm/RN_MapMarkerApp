import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View>
      <MapView style={styles.map}>

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  },
});
