import { Action, ThunkAction } from '@reduxjs/toolkit';

import { store } from 'store';

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
