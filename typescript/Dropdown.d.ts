/**
 * Created by nghinv on Wed Feb 17 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import { ViewStyle, ViewProps } from 'react-native';
import { PointStyleType, CardProps } from './Card';
import { ButtonProps } from './Button';
import { SeparatorProps } from './Separator';

type PositionType = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'auto';

type OptionsType = Array<ButtonProps>

export type ContentType = {
  direction: 'left' | 'right';
  pointStyle: PointStyleType;

  // Max height of dropdown content
  maxHeight: Number;

  // Use to dismiss dropdown overlay
  dismiss: () => void;
}

interface DropdownProps {
  renderContent?: React.FC<ContentType>;
  containerStyle?: ViewStyle;
  position?: PositionType;
  space?: Number;
  scaleEnable?: Boolean;
  scaleDefault?: Number;
  options?: OptionsType;
  cardProps?: ViewProps;
  contentAlign?: 'auto' | 'left' | 'right';
  overlayOpacity?: Number;
  overlayColor?: String;
}

interface DropDownType extends React.FC<DropdownProps> {
  Card: React.FC<CardProps>;
  Button: React.FC<ButtonProps>;
  Separator: React.FC<SeparatorProps>;
}

export const Dropdown: DropDownType;
