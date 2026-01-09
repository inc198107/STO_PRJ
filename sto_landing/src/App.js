import React, { Fragment, Profiler } from 'react';
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import LandingPage from './Pages/LandingPage/LandingPage';
import MainBackground from './components/background/background';
import { defaultTheme } from './Theme/DefaultTheme';

const useStyle = makeStyles((theme) => ({
  main: {
    position: 'relative',
  }
}))

function OnRenderCallback(id, phase, actualDuration, interactions){
  console.group("Profiler:",id);
  console.table({
    "phase": phase,
    "actualDuration": actualDuration,
    "interactions": interactions
  })
  console.groupEnd();
  }

function App() {
  const classes = useStyle();
 
  return (
    <Profiler id="app_profiler" onRender={ OnRenderCallback }>
    <ThemeProvider theme={defaultTheme} >
      <Fragment>
        <MainBackground />
        <div className={`App ${classes.main}`}>
        <Profiler id="Landing_profiler" onRender={ OnRenderCallback }>
          <LandingPage />
        </Profiler>
        </div>
      </Fragment>
    </ThemeProvider>
    </Profiler>
  );
}

export default App;
