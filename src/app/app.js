import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import theme from './theme';
import routes from './routes';
import style from './app.module.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <HashRouter>
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
    </HashRouter>
  </ThemeProvider>
);

export default App;
