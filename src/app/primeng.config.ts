import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';

export const Noir = definePreset(Lara, {
  semantic: {
    primary: {
      50: '{amber.50}',
      100: '{amber.100}',
      200: '{amber.200}',
      300: '{amber.300}',
      400: '{amber.400}',
      500: '{amber.500}',
      600: '{amber.600}',
      700: '{amber.700}',
      800: '{amber.800}',
      900: '{amber.900}',
      950: '{amber.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{amber.500}',
          inverseColor: '{zinc.700}',
          hoverColor: '{amber.400}',
          activeColor: '{amber.100}',
        },
        highlight: {
          background: '{amber.950}',
          focusBackground: '{amber.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
        surface: {
          0: '#ffffff',
          50: '#f7fafd',
          100: '#f1f5f9',
          200: '#f5f6ff',
        },
      },
      dark: {
        primary: {
          color: '{zinc.50}',
          inverseColor: '{amber.950}',
          hoverColor: '{amber.100}',
          activeColor: '{amber.200}',
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
        surface: {
          0: '#ffffff',
          50: '#f7fafd',
          100: '#f1f5f9',
          200: '#f5f6ff',
        },
      },
    },
  },
});
