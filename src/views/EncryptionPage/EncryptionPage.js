import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Typography } from '@material-ui/core';
import { Lock, LockOpen } from '@material-ui/icons';
import style from './EncryptionPage.module.css';

const EncryptionPage = ({ type }) => {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  let history = useHistory();

  // Tests whether the specified character code is an uppercase letter.
  const isUppercase = (val) => 65 <= val && val <= 90; // 65 is character code for 'A'. 90 is 'Z'.

  // Tests whether the specified character code is a lowercase letter.
  const isLowercase = (val) => 97 <= val && val <= 122; // 97 is character code for 'a'. 122 is 'z'.

  // Tests whether the specified character code is a letter.
  const isLetter = (char) => isUppercase(char) || isLowercase(char);

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

  // Handles the input/output for Vigenère cipher encryption/decription.
  const doCrypt = (isDecrypt) => {
    if (key.length === 0) {
      alert('Key is empty');
      return;
    }

    let keyVal = filterKey(key);

    if (keyVal.length === 0) {
      alert('Key has no letters');
      return;
    }

    if (isDecrypt) for (let i = 0; i < keyVal.length; i++) keyVal[i] = (26 - keyVal[i]) % 26;

    setText((state) => crypt(state, keyVal));
  };

  // Returns the result the Vigenère encryption on the given text with the given key.
  const crypt = (textValue, keyValue) => {
    let output = '';
    for (let i = 0, j = 0; i < textValue.length; i++) {
      let char = textValue.charCodeAt(i);
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

  return (
    <>
      {type ? (
        <div className={style.wrpVertical}>
          <Typography variant={'h4'} component={'h2'} color={'secondary'} style={{ marginBottom: 20 }}>
            What do you want to do?
          </Typography>
          <form className={style.wrpVertical} autoComplete={'off'}>
            <div className={style.wrp}>
              <TextField
                label={'Text'}
                placeholder={'Text to be encrypted/decrypted'}
                variant={'outlined'}
                color={'secondary'}
                multiline
                rows={5}
                style={{ width: '100%' }}
                value={text}
                onChange={({ currentTarget }) => setText(currentTarget.value)}
              />
            </div>
            <div className={style.wrp}>
              <TextField
                label={'Key'}
                placeholder={'Encryption key'}
                size={'medium'}
                variant={'outlined'}
                color={'secondary'}
                className={style.half}
                value={key}
                onChange={({ currentTarget }) => setKey(currentTarget.value)}
              />
              <Button
                size={'large'}
                variant={'contained'}
                color={'primary'}
                startIcon={<Lock />}
                className={style.quarter}
                onClick={() => doCrypt(false)}
              >
                Encrypt
              </Button>
              <Button
                size={'large'}
                variant={'contained'}
                color={'primary'}
                startIcon={<LockOpen />}
                className={style.quarter}
                onClick={() => doCrypt(true)}
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
