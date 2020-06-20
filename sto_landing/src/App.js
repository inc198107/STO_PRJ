import React, { Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import LandingPage from './Pages/LandingPage/LandingPage';
import MainBackground from './components/background/background'

const useStyle = makeStyles((theme) => ({
  main: {
    position: 'relative',
  }
}))


function App() {
  const classes = useStyle();
  return (
    <Fragment>
      <MainBackground />
      <div className={`App ${classes.main}`}>
        <LandingPage />
      </div>
    </Fragment>
  );
}

export default App;
