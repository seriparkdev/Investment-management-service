import { AsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';
import { Account } from '../types/account';

export interface State {
  isLoading: boolean;
  data: User[] | Account[] | User | Account;
  error: null | string;
}

export const extraReducerStatus = {
  pending: (state: State) => {
    state.isLoading = true;
  },
  fulfilled: (state: State, action: PayloadAction<User[] | Account[]>) => {
    state.isLoading = false;
    state.data = action.payload;
  },
  rejected: (state: State, action: any) => {
    state.isLoading = false;
    state.error = action.error.message;
  },
};

export const extraReducerUtils = (
  thunk:
    | AsyncThunk<any, object | undefined, {}>
    | AsyncThunk<
        any,
        {
          id: number | null;
          newName: string;
        },
        {}
      >
    | AsyncThunk<any, number | null, {}>
    | AsyncThunk<any, User, {}>,
) => {
  return {
    [thunk.pending.type]: extraReducerStatus.pending,
    [thunk.fulfilled.type]: extraReducerStatus.fulfilled,
    [thunk.rejected.type]: extraReducerStatus.rejected,
  };
};
