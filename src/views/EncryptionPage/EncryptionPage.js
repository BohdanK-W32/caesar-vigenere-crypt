import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Lock, LockOpen, Visibility, VisibilityOff } from '@material-ui/icons';
import style from './EncryptionPage.module.css';
import Alert from '../../components/Alert';

const EncryptionPage = ({ type }) => {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [alert, setAlert] = useState({ isOpen: false });
  let history = useHistory();

  // Tests whether the specified character code is an 'letter/uppercase letter/lowercase letter'.
  const isUppercase = (val) => 65 <= val && val <= 90; // 65 is character code for 'A'. 90 is 'Z'.
  const isLowercase = (val) => 97 <= val && val <= 122; // 97 is character code for 'a'. 122 is 'z'.
  const isLetter = (char) => isUppercase(char) || isLowercase(char); // is a letter

  /*
   * Returns an array of numbers, each in the range [0, 26), representing the given key.
   * The key is case-insensitive, and non-letters are ignored.
   * Examples:
   * - filterKey("AAA") = [0, 0, 0].
   * - filterKey("abc") = [0, 1, 2].
   * - filterKey("the $123# EHT") = [19, 7, 4, 4, 7, 19].
   */
  const filterKey = (key) => {
    const result = [];
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      if (isLetter(char)) result.push((char - 65) % 32);
    }
    return result;
  };

  // Returns the result the Vigenère encryption on the given text with the given key.
  const vigenereCrypt = (textValue, keyValue) => {
    let output = '';
    for (let i = 0, j = 0; i < textValue.length; i++) {
      // Get the character code of each letter
      let char = textValue.charCodeAt(i);

      // Handle 'uppercase letters/lowercase letters/other chars'
      if (isUppercase(char)) {
        output += String.fromCharCode(((char - 65 + keyValue[j % keyValue.length]) % 26) + 65);
        j++;
      } else if (isLowercase(char)) {
        output += String.fromCharCode(((char - 97 + keyValue[j % keyValue.length]) % 26) + 97);
        j++;
      } else {
        output += textValue.charAt(i);
      }
    }

    return output;
  };

  // Returns the result the Caesar encryption on the given text with the given key (only number).
  const caesarCrypt = (textValue, keyValue) => {
    let output = '';
    for (let i = 0; i < textValue.length; i++) {
      // Get the character code of each letter
      let char = textValue.charCodeAt(i);

      // Handle 'uppercase letters/lowercase letters/other chars'
      if (isUppercase(char)) {
        output += String.fromCharCode(((char - 65 + keyValue) % 26) + 65);
      } else if (isLowercase(char)) {
        output += String.fromCharCode(((char - 97 + keyValue) % 26) + 97);
      } else {
        output += textValue.charAt(i);
      }
    }

    return output;
  };

  // Handles the input/output for Vigenère cipher encryption/decription.
  const doCrypt = (isDecrypt, type) => {
    if (key.length === 0) {
      setAlert((state) => ({ ...state, title: 'Key is empty', isOpen: true }));
      return;
    }

    if (type === 'vigenere') {
      let keyVal = filterKey(key);

      if (keyVal.length === 0) {
        setAlert((state) => ({ ...state, title: 'Key has no letters', isOpen: true }));
        return;
      }
      if (isDecrypt) for (let i = 0; i < keyVal.length; i++) keyVal[i] = (26 - keyVal[i]) % 26;

      setText((state) => vigenereCrypt(state, keyVal));
    }

    if (type === 'caesar') {
      if (Number.isNaN(key)) {
        setAlert((state) => ({ ...state, title: 'Key has no numbers', isOpen: true }));
        return;
      }

      let keyVal = Number.parseInt(key);
      if (isDecrypt) keyVal = (26 - keyVal) % 26;

      setText((state) => caesarCrypt(state, keyVal));
    }
  };

  return (
    <>
      <Alert
        title={alert.title}
        isOpen={alert.isOpen}
        onClose={() => setAlert((state) => ({ ...state, isOpen: false }))}
      />
      {type ? (
        <div className={style.wrpVertical}>
          <Typography variant={'h4'} component={'h2'} color={'secondary'} style={{ marginBottom: 20 }}>
            {type === 'vigenere' && 'Vigenère crypt'}
            {type === 'caesar' && 'Caesar crypt'}
          </Typography>
          <form className={style.wrpVertical} autoComplete={'off'}>
            <div className={style.wrp}>
              <TextField
                label={'Text'}
                placeholder={'Text to be encrypted/decrypted'}
                variant={'outlined'}
                color={'primary'}
                multiline
                rows={5}
                style={{ width: '100%' }}
                value={text}
                onChange={({ currentTarget }) => setText(currentTarget.value)}
              />
            </div>
            <div className={style.wrp}>
              {type === 'caesar' ? (
                <TextField
                  type={'number'}
                  label={'Key'}
                  placeholder={'Encryption key (number)'}
                  size={'medium'}
                  variant={'outlined'}
                  color={'secondary'}
                  className={style.half}
                  value={key}
                  onChange={({ currentTarget }) => setKey(currentTarget.value)}
                />
              ) : (
                <FormControl className={style.half} variant={'outlined'}>
                  <InputLabel>Key</InputLabel>
                  <OutlinedInput
                    type={showKey ? 'text' : 'password'}
                    value={key}
                    onChange={({ currentTarget }) => setKey(currentTarget.value)}
                    labelWidth={31}
                    endAdornment={
                      <InputAdornment position={'end'}>
                        <IconButton
                          aria-label={'toggle password visibility'}
                          onClick={() => setShowKey((state) => !state)}
                          onMouseDown={(e) => e.preventDefault()}
                          edge={'end'}
                        >
                          {showKey ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              )}
              <Button
                size={'large'}
                variant={'contained'}
                color={'primary'}
                startIcon={<Lock />}
                className={style.quarter}
                onClick={() => doCrypt(false, type)}
              >
                Encrypt
              </Button>
              <Button
                size={'large'}
                variant={'contained'}
                color={'primary'}
                startIcon={<LockOpen />}
                className={style.quarter}
                onClick={() => doCrypt(true, type)}
              >
                Decrypt
              </Button>
            </div>
          </form>
        </div>
      ) : (
        history.replace('/home')
      )}
    </>
  );
};

export default EncryptionPage;
