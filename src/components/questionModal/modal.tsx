import React, {useState, useEffect, useCallback, useContext} from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {BaseInput, Row} from '..';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DefaultContext} from '../../utils/default-context';
import Config from '../../config/config';
import Geocoder from 'react-native-geocoding';
import {PlaceObj, PropsModal, Question} from '../../interface/interface';

Geocoder.init(Config.googleApiKey);

const QuestionModal: React.FunctionComponent<PropsModal> = ({
  isVisible,
  onPressed,
}) => {
  const {saveItem} = useContext(DefaultContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [placeObject, setPlaceObject] = useState<PlaceObj | null>(null);
  const [questionInputValue, setQuestion] = useState<string>('');
  const [date, setDate] = useState('');

  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);

  const place = useCallback((data, details) => {
    Geocoder.from(data.description || details.description)
      .then(json => {
        const location = json.results[0].geometry.location;
        const placeData = {
          latlng: {
            latitude: location.lat,
            longitude: location.lng,
          },
          address: data.description,
        };
        setPlaceObject(placeData);
      })
      .catch(error => console.warn(error));
  }, []);

  const onBackdropPress = useCallback(() => {
    onPressed(false);
  }, [onPressed]);

  const save = useCallback(() => {
    const questionObject: Question = {
      id: `${Math.random() * 10480}`,
      name: questionInputValue,
      question: questionInputValue,
      createdAt: Date.now(),
      expiredAt: Date.now() + Number(date) * 60 * 1000,
      ...placeObject,
    };
    saveItem(questionObject);
    onBackdropPress();
  }, [date, onBackdropPress, placeObject, questionInputValue, saveItem]);

  const cancel = useCallback(() => {
    setQuestion('');
    setDate('');
    setPlaceObject(null);
    onBackdropPress();
  }, [onBackdropPress]);

  return (
    <View>
      <Modal
        animationInTiming={1000}
        animationOutTiming={1000}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        backdropOpacity={0.8}
        style={styles.modal}
        onBackdropPress={cancel}
        isVisible={isModalVisible}>
        <View style={styles.modalContentWrapper}>
          <Text style={styles.title}>Modal</Text>
          <BaseInput
            placeholder="Question..."
            value={questionInputValue}
            onChangeText={setQuestion}
            keyboardType="default"
            maxLength={150}
          />
          <BaseInput
            keyboardType="numeric"
            placeholder="Minutes for answer"
            value={date}
            onChangeText={setDate}
            maxLength={2}
          />
          <View style={[styles.autocompleteContainer]}>
            <GooglePlacesAutocomplete
              minLength={5}
              textInputHide={false}
              styles={{
                container: styles.autocomleteContainerBlock,
                listView: styles.autocompleteList,
                textInputContainer: styles.inputContainer,
                textInput: styles.searchAddressInput,
              }}
              placeholder="Search"
              onPress={place}
              query={{key: Config.googleApiKey}}
            />
          </View>
          <Row style={styles.buttonsRow}>
            <TouchableOpacity style={styles.button} onPress={cancel}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={save}>
              <Text>Save</Text>
            </TouchableOpacity>
          </Row>
        </View>
      </Modal>
    </View>
  );
};

export default React.memo(QuestionModal);
