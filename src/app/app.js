import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import themes from './themes';
import routes from './routes';
import style from './app.module.css';

const App = () => (
  <ThemeProvider theme={themes.GorgeousContrast}>
    <BrowserRouter>
      <div className={style.app}>
        <Switch>
          {routes.map((el, idx) => (
            <Route key={idx} path={el.path} exact>
              <>
                <Header title={el.title} routes={routes} path={el.path} />
                <main>{el.component}</main>
              </>
            </Route>
          ))}
          <Redirect from={'*'} to={'/home'} />
        </Switch>
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
