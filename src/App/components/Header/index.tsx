import React, { FC, useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

import { Contrast, Language } from 'assets/icons';
import { changeTheme, changeLanguage } from 'store/features';

import { message } from '../../messages';

import './styles.scss';

export const Header: FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const themeClickHandler = useCallback(() => dispatch(changeTheme()), [dispatch]);
  const langClickHandler = useCallback(() => dispatch(changeLanguage()), [dispatch]);

  return (
    <div className="header">
      <h1>{intl.formatMessage(message.theSeasonedDev)}</h1>

      <div className="icons-container">
        <Contrast className="cta theme" onClick={themeClickHandler} />
        <Language className="cta language" onClick={langClickHandler} />
      </div>
    </div>
  );
};
