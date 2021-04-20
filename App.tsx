import 'react-native-gesture-handler';

import RootNavigator from './src/navigation/RootNavigator';
import React, {useCallback, useState} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

const App = () => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const onAnimationFinish = useCallback(() => {
    setAnimationFinished(true);
  }, []);

  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <RootNavigator />
      {!animationFinished && (
        <SplashScreen onAnimationFinish={onAnimationFinish} />
      )}
    </>
  );
};

export default App;
