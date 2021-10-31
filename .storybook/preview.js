import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/globalCSS/global';
import { theme } from '../src/globalCSS/theme';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
