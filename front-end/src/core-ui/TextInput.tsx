import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { Input, InputProps } from 'react-native-elements';

type Props = InputProps & {
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
      autoCorrect={false}
      secureTextEntry={
        placeholder === 'Password' || placeholder === 'Repeat Password'
      }
      {...otherProps}
    />
  );
}
