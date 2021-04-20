import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {SafeAreaView, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {
  MapTab,
  ListTab,
  AddQuestionButton,
  QuestionModal,
} from '../../components';
import {Question} from '../../interface/interface';
import {DefaultContext} from '../../utils/default-context';

import styles from './styles';

const App = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [array, setArray] = useState([]);
  const [routes] = React.useState([
    {key: 'first', title: 'Map'},
    {key: 'second', title: 'List'},
  ]);

  useEffect(() => {
    console.log(array);
  }, [array]);

  const [isModalVisible, setModalVisible] = useState(false);

  const renderScene = SceneMap({
    first: () => <MapTab list={array} />,
    second: () => <ListTab list={array} />,
  });

  const onAddQuestionButtonPress = useCallback((param = true) => {
    if (typeof param === 'boolean') {
      setModalVisible(param);
    }
  }, []);

  const defaultContext = useMemo(
    () => ({
      saveItem: (data: Question) => setArray([...array, data]),
    }),
    [array],
  );

  return (
    <DefaultContext.Provider value={defaultContext}>
      <SafeAreaView style={styles.pageWrapper}>
        <TabView
          swipeEnabled={false}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
        <AddQuestionButton onPress={onAddQuestionButtonPress} />
        <QuestionModal
          isVisible={isModalVisible}
          onPressed={onAddQuestionButtonPress}
        />
      </SafeAreaView>
    </DefaultContext.Provider>
  );
};

export default App;
