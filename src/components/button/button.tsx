import React from 'react';
import {
  TouchableOpacity,
  Text,
  type TouchableOpacityProps,
} from 'react-native';
import { styles } from './button.styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  iconLeft,
  iconRight,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {iconLeft && iconLeft}
      <Text style={styles.text}>{title}</Text>
      {iconRight && iconRight}
    </TouchableOpacity>
  );
};
