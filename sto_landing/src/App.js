import React, { Fragment } from 'react';
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import LandingPage from './Pages/LandingPage/LandingPage';
import MainBackground from './components/background/background';
import { defaultTheme } from './Theme/DefaultTheme';

const useStyle = makeStyles((theme) => ({
  main: {
    position: 'relative',
  }
}))


function App() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={defaultTheme} >
      <Fragment>
        <MainBackground />
        <div className={`App ${classes.main}`}>
          <LandingPage />
        </div>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
