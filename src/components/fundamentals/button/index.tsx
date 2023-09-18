// React Components
import React from 'react';

// Material UI Components
import { Button as FButton } from '@material-ui/core';

// Utilities
import clsx from 'clsx';
import { useStyles } from './styles';

export interface FButtonProps {
   href?: string;
   width?: number;
   label?: string;
   color?: string;
   radius?: number;
   fontSize?: number;
   className?: string;
   marginTop?: number;
   marginLeft?: number;
   background?: string;
   lineHeight?: number;
   hoverColor?: string;
   onClick?: () => void;
   borderColor?: string;
   borderWidth?: number;
   marginRight?: number;
   marginBottom?: number;
   hoverBackgroundColor?: string;
}

const Button: React.FC<FButtonProps> = (props) => {

   const classes = useStyles(props);

   const { children, className, onClick, label, href } = props;

   const buttonClasses = clsx(classes.button, className);

   return (
      <FButton onClick={onClick} className={buttonClasses} href={href}>{label}{children}</FButton>
   );
};

export default Button;