import React from 'react';
import {
    TextInput as TextInputComponent,
    Text,
    StyleProp,
    View,
    ViewStyle,
    TextStyle
} from 'react-native';

import {
    Input
} from 'react-native-elements';
// import { string } from 'prop-types';

type Props = {
    Text?: string;
    label: string;
    labelStyle?: object;
    labelProps?: Text;
    value?: string;
    onChangeText?: () => void;
    onPress?: () => void;
};

export default function TextInput(props: Props){
    let{
        Text,
        label,
        labelStyle,
        labelProps,
        value,
        onPress,
    } = props;

    return (
        <Input label={label} placeholder='Hello'/>
    );
}