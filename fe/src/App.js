import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import getLayout from './service';
import { createJsx } from './util'
import './App.css';



function App() {
  const layout  = getLayout()

  return (
    <React.Fragment>
      <CssBaseline />
        {createJsx(layout)}
    </React.Fragment>)
}

export default App;
