import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {BaseInput, Row} from '..';
import {ListProps, Question} from '../../interface/interface';
import styles from './styles';

const ListTabComponent: React.FunctionComponent<ListProps> = ({
  list = null,
}) => {
  const [inputValue, setValue] = useState('');
  const [questionsList, setQuestions] = useState<Question[] | null>(null);
  const [filteredQuestionList, setFilteredList] = useState<Question[]>([]);

  const keyExtractor = useCallback(item => `${item.id}`, []);

  useEffect(() => {
    if (
      !questionsList ||
      (questionsList && questionsList.length !== list?.length)
    ) {
      setQuestions(list);
      setFilteredList(list);
    }
  }, [list, questionsList]);

  const filterList = useCallback(
    (value: string) => {
      if (questionsList) {
        const filterArray = questionsList.filter((item: Question) =>
          item?.address?.includes(value),
        );
        setFilteredList(filterArray);
      }
    },
    [questionsList],
  );

  const onChangeText = useCallback(
    (value: string) => {
      setValue(value);
      filterList(value);
    },
    [filterList],
  );

  const getTimeDiff = useCallback((value: number) => {
    const diff = Date.now() - value;
    if (diff <= 0) {
      return `${Math.round((diff / 1000 / 60) * -1)} minutes`;
    } else {
      return 'Expired';
    }
  }, []);

  const renderItem = useCallback(
    item => {
      return (
        <View style={styles.elementWrapper}>
          <Row style={styles.elementRow}>
            <Text style={styles.elementTitle}>{item.item.name}</Text>
            <Text>{getTimeDiff(item.item.expiredAt)}</Text>
          </Row>
          <Row style={styles.elementRow}>
            <Text>Created at:</Text>
          </Row>
        </View>
      );
    },
    [getTimeDiff],
  );

  return (
    <View style={styles.wrapperTab}>
      <BaseInput
        maxLength={80}
        value={inputValue}
        onChangeText={onChangeText}
      />

      {filteredQuestionList.length > 0 ? (
        <FlatList
          keyExtractor={keyExtractor}
          data={filteredQuestionList}
          extraData={filteredQuestionList}
          renderItem={renderItem}
        />
      ) : (
        <Text>Nothing to show</Text>
      )}
    </View>
  );
};

export default React.memo(ListTabComponent);
