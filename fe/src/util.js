import { createElement } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Grid version 1
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

const reactComponents = {
  Skeleton, Container, Box, Grid,Typography
}


const getType = (type) => {
  const pascalRegex = /[A-Z][a-z]+(?:[A-Z][a-z]+)*$/gm;
  const isReactComponent = pascalRegex.test(type);
  
  if(isReactComponent) {
    return reactComponents[type]
  }
  return type
}

export function createJsx(layout) {
  const jsx = layout.map(element => {
    return createElement(getType(element.type), {
      ...element?.props,
      children : Array.isArray(element?.props?.children) ? createJsx(element?.props?.children): element?.props?.children
    })
  })
  return jsx
}
