import React from 'react';
import { Home, Https, EnhancedEncryption } from '@material-ui/icons';
import { ChooseCipherType, EncryptionPage } from '../views';

export const routes = [
  {
    title: 'Home',
    path: '/home',
    component: <ChooseCipherType />,
    icon: <Home />,
  },
  {
    title: 'Caesar encryption',
    path: '/caesar',
    component: <EncryptionPage type={'caesar'} />,
    icon: <Https />,
  },
  {
    title: 'Vigenère encryption',
    path: '/vigenere',
    component: <EncryptionPage type={'vigenere'} />,
    icon: <EnhancedEncryption />,
  },
];

export default routes;
