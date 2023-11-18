import React from 'react';
import { IntlProvider } from 'react-intl';

import theme from '@YaraPlus/themes/ThemeType';
import { ThemeProvider } from '@YaraPlus/themes/styled-components';
import { translations } from '@YaraPlus/translations';

type PropsType = {
  children: React.ReactNode;
};

export const MockAppContainer = ({ children }: PropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider messages={translations['en']} locale={'en'}>
        {children}
      </IntlProvider>
    </ThemeProvider>
  );
};
