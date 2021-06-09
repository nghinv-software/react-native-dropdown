/**
 * Created by nghinv on Wed Feb 17 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import { ViewStyle, ViewProps } from 'react-native';

export type PointStyleType = {
  direction?: 'up' | 'down';
  alignItems?: 'flex-end' | 'flex-start' | 'center' | undefined;
}

export interface CardProps {
  style?: ViewStyle;
  backgroundColor?: String;
  renderBackground?: React.FC;
  triangleColor?: String;
  width?: Number;
  maxHeight?: Number;
  borderRadius?: Number;
  pointStyle?: PointStyleType;
  cardProps?: ViewProps;
}
