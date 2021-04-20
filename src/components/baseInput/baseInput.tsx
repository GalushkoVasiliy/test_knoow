import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

interface Props {
  label?: string;
  placeholder?: string;
  keyboardType?: 'numeric' | 'email-address' | 'phone-pad' | 'default';
  multiline?: boolean;
  security?: boolean;
  value: string;
  onFocus?: () => void;
  onBlur?: () => void | Promise<any>;
  returnKeyType?: 'go' | 'next' | 'search' | 'send' | 'done';
  onChangeText: (value: string) => void;
  maxLength: number;
}

const BaseInput: React.FunctionComponent<Props> = ({
  placeholder = 'Question...',
  multiline = false,
  security = false,
  value,
  onBlur,
  onChangeText,
  keyboardType = 'default',
  maxLength,
}) => {
  return (
    <TextInput
      keyboardType={keyboardType}
      value={value}
      multiline={multiline}
      allowFontScaling={false}
      underlineColorAndroid="transparent"
      secureTextEntry={security}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="grey"
      onChangeText={onChangeText}
      autoFocus={false}
      maxLength={maxLength}
      onBlur={onBlur}
      returnKeyType="done"
    />
  );
};

export default React.memo(BaseInput);
