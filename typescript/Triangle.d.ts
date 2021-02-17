/**
 * Created by nghinv on Wed Feb 17 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import { ViewStyle } from 'react-native';

interface TriangleProps {
  direction?: 'up' | 'right' | 'down' | 'left' | 'up-right' | 'up-left' | 'down-right' | 'down-left';
  width: Number;
  height: Number;
  color?: String;
  style?: ViewStyle;
}
