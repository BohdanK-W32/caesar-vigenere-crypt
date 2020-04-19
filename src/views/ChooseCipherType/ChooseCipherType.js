import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import style from './ChooseCipherType.module.css';

export const ChooseCipherType = () => {
  let history = useHistory();

  return (
    <div className={'wrapper-vertical'}>
      <Typography variant={'h3'} component={'h1'} color={'secondary'} style={{ marginBottom: 30 }}>
        What type of cipher do you want to use?
      </Typography>
      <div className={'wrapper'}>
        <Button
          size={'large'}
          variant={'contained'}
          color={'primary'}
          className={style.btn}
          onClick={() => history.push('/caesar')}
        >
          &nbsp;&nbsp;Caesar&nbsp;&nbsp;
        </Button>
        <Button
          size={'large'}
          variant={'contained'}
          color={'primary'}
          className={style.btn}
          onClick={() => history.push('/vigenere')}
        >
          Vigenère
        </Button>
      </div>
    </div>
  );
};

export default ChooseCipherType;
