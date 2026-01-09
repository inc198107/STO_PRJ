import React, { Fragment, useReducer} from 'react';
import Grid2 from '@mui/material/Grid2';
import MainContainer from '../../Containers/MainContainer/MainContainer';
import Article from '../../components/Article/Article';
import Contacts from '../../Containers/Contacts/Contacts';
import PreviewModal from '../../components/PreviewModal/PreviewModal';
import ScrollTopButton from '../../components/ScrollTopButton/ScrollTopButton';
import Footer from '../../Containers/Footer/Footer';
import { PageContext, initialState, PageReducer } from '../../pageReducers/LandingPageReducer';

import Header from '../../Containers/Header/Header';

import { useStyles } from './style';

import { reykaArr, tuningArr, dpfArr, egrArr, srsArr, odoArr } from '../../Assets/imgArrays';
import { reykaText, tuningText, dpfText, egrText, srsText, odoText } from '../../Assets/articles';



export default function LandingPage({ ...props }) {
  const [state, dispatch] = useReducer(PageReducer, initialState);
  const classes = useStyles();
  return (
    <PageContext.Provider value={{ dispatch, state }}>
      <Fragment>
        <Grid2 container alignItems='center' justifyContent='center'>
          <Grid2 xs={12}>
            <Header />
          </Grid2>
        </Grid2>
        <MainContainer>
          <div className={classes.root}>
            <Grid2 container direction='column' justifyContent='flex-start' spacing={2}>
              <Article
                _id={'steering'}
                name={'Кермовi Системи'}
                slides={reykaArr}
                redirect='https://zahid-chip.com/rulov-rejki'
                text={reykaText}
                articleName={'Ремонт Кермових Рейок'}
              />

              <Article
                _id={'chip_tuning'}
                name={'Chip Tuning'}
                redirect='https://zahid-chip.com/ch-p-tyuning'
                slides={tuningArr}
                text={tuningText}
                articleName={'Чіп Тюнінг, Зроби своє авто таким як ти бажаєш'}
                reverse={true}
              />

              <Article
                _id={'fap_off'}
                name={'Видалення Сажових Фiльтрiв'}
                redirect='https://zahid-chip.com/vidalennya-sazhovih-f-ltr-v'
                slides={dpfArr}
                text={dpfText}
                articleName={'Видалення Сажових Фільтрів'}
                reverse={false}
              />

              <Article
                _id={'egr_off'}
                name={'Видалення EGR'}
                redirect='https://zahid-chip.com/vidalennya-egr'
                slides={egrArr}
                text={egrText}
                articleName={'Видалення EGR'}
                reverse={true}
              />

              <Article
                _id={'airbag'}
                name={'Подушки безпеки'}
                redirect='https://zahid-chip.com/remont-blok-v-airbag'
                slides={srsArr}
                text={srsText}
                articleName={'Подушки безпеки'}
                reverse={false}
              />

              <Article
                _id={'odo'}
                name={'Корегування Одометрiв'}
                redirect='https://zahid-chip.com/koreguvannya-odometr-v'
                slides={odoArr}
                text={odoText}
                articleName={'Корегування одометрів'}
                reverse={true}
              />

              <Contacts />
            </Grid2>
          </div>
          <div className={classes.scroll_top_container_right}>
            <ScrollTopButton />
          </div>
        </MainContainer>
        <Grid2 container alignItems='center' justifyContent='center'>
          <Grid2 xs={12}>
            <Footer />
          </Grid2>
        </Grid2>
        <PreviewModal />
      </Fragment>
    </PageContext.Provider>
  );
}
