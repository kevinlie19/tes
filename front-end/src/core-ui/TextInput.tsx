import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { Input, InputProps } from 'react-native-elements';

type Props = InputProps & {
  newContainerStyle?: StyleProp<ViewStyle>;
  newInputContainerStyle?: StyleProp<ViewStyle>;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function TextInput(props: Props) {
  let {
    newContainerStyle,
    newInputContainerStyle,
    placeholder,
    value,
    onChangeText,
    ...otherProps
  } = props;

  return (
    <Input
      containerStyle={newContainerStyle}
      inputContainerStyle={newInputContainerStyle}
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
