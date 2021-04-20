import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';
import {PlusIcon} from '..';
import styles from './styles';

interface ButtonProps {
  onPress: (param: boolean) => void;
}

const AddQuestionButton: React.FunctionComponent<ButtonProps> = ({onPress}) => {
  const onButtonPressed = useCallback(() => {
    onPress(true);
  }, [onPress]);

  return (
    <Shadow style={styles.shadow}>
      <TouchableOpacity onPress={onButtonPressed} style={styles.buttonStyle}>
        <PlusIcon color="black" />
      </TouchableOpacity>
    </Shadow>
  );
};

export default React.memo(AddQuestionButton);
