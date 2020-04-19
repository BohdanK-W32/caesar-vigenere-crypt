import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const deepPurplesAndBlues = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#240090',
      },
      secondary: {
        main: '#190061',
      },
      success: {
        main: '#3500d3',
      },
      error: {
        main: '#0c0032',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  })
);

const stylishAndSophisticated = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#557a95',
      },
      secondary: {
        main: '#7395ae',
      },
      success: {
        main: '#b1a296',
      },
      error: {
        main: '#379683',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  })
);

const GorgeousContrast = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#61892f',
      },
      secondary: {
        main: '#86c232',
      },
      success: {
        main: '#6b6970',
      },
      error: {
        main: '#474b4f',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  })
);

// const StrikingAndSimple = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#61892f',
//     },
//     secondary: {
//       main: '#86c232',
//     },
//     success: {
//       main: '#6b6970',
//     },
//     error: {
//       main: '#474b4f',
//     },
//     contrastThreshold: 3,
//     tonalOffset: 0.2,
//   },
// });

export default {
  deepPurplesAndBlues: deepPurplesAndBlues,
  stylishAndSophisticated: stylishAndSophisticated,
  GorgeousContrast: GorgeousContrast,
};
