/**
 * Created by nghinv on Wed Feb 17 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import { ViewStyle, TextStyle } from 'react-native';
import { IconType } from '@nghinv/react-native-icons';

export interface ButtonProps extends IconType {
  checked?: Boolean;
  title?: String;
  iconName?: String;
  renderIcon?: React.FC;
  onPress?: () => void;
  minHeight?: Number | String;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  disable?: Boolean;
  iconCheckColor?: String;
  direction: 'left' | 'right';
  testIDButton?: String;
  accessibilityLabelButton?: String;
  testIDTitle?: String;
  accessibilityLabelTitle?: String;
}
