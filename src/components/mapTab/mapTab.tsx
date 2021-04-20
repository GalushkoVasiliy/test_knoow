import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Config from '../../config/config';
import {ListProps, Question} from '../../interface/interface';
import styles from './styles';

const {height: HEIGHT, width: WIDTH} = Dimensions.get('window');

const MapTabComponent: React.FunctionComponent<ListProps> = ({list = null}) => {
  const [markers, setMarkers] = useState<Question[] | null>(null);

  useEffect(() => {
    if (!markers || (markers && markers.length !== list?.length)) {
      setMarkers(list);
    }
  }, [list, markers]);

  return (
    <View style={styles.mapWrapper}>
      <MapView
        style={{height: HEIGHT, width: WIDTH}}
        initialRegion={Config.initCoordinates}>
        {markers &&
          markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.name}
              description={marker.question}
            />
          ))}
      </MapView>
    </View>
  );
};

export default React.memo(MapTabComponent);
