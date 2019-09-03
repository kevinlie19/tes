import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { Input } from 'react-native-elements';

type Props = {
  newContainerStyle?: StyleProp<ViewStyle>;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function TextInput(props: Props) {
  let {
    newContainerStyle,
    placeholder,
    value,
    onChangeText,
    ...otherProps
  } = props;

  return (
    <Input
      containerStyle={newContainerStyle}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      autoFocus={true}
      autoCapitalize={'none'}
      autoCorrect={false}
      secureTextEntry={
        placeholder === 'Password' || placeholder === 'Repeat Password'
      }
      {...otherProps}
    />
  );
}
