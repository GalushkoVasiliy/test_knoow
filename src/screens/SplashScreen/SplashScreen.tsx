import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import styles from './styles';

interface Props {
  onAnimationFinish: () => void;
}

const Splash: React.FunctionComponent<Props> = ({onAnimationFinish}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      onAnimationFinish();
    }, 2000);
  }, [onAnimationFinish]);

  return (
    <View style={styles.splashWrapper}>
      <View style={styles.title}>
        <Text style={styles.titleText}>QUESTION TEST APP</Text>
      </View>
    </View>
  );
};

export default Splash;
