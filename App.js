import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { useState } from 'react';


export default function App() {
  /* useState for region with start location */
  const [region, setRegion] = useState({
    latitude: 55.2639,
    longitude: 10.5018,
    latitudeDelta: 6,
    longitudeDelta: 6,
  })
  /* useState for markers on map */
  const [markers, setMarkers] = useState([])

  /* Add markers */
  function addMarker(event) {
    const { latitude, longitude } = event.nativeEvent.coordinate
    const newMarker = {
      coordinate: { latitude, longitude },
      key: Date.now(),
      title: "Visited place"
    }
    setMarkers([...markers, newMarker])
  }

  return (
    <View>
      {/* MapView */}
      <MapView style={styles.map} region={region} onLongPress={addMarker}>
        {markers.map(marker => (
          <Marker coordinate={marker.coordinate} key={marker.key} title={marker.title} />
        ))
        }        
      </MapView>
    </View>
  );
}


/* Styles */
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  },
});
