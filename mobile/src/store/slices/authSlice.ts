import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

import {User} from '@livedots/shared/types';

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Async thunks for auth operations
export const loginWithEmail = createAsyncThunk(
  'auth/loginWithEmail',
  async (credentials: {email: string; password: string}, {rejectWithValue}) => {
    try {
      // TODO: Implement API call
      throw new Error('Not implemented');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerWithEmail = createAsyncThunk(
  'auth/registerWithEmail',
  async (
    userData: {email: string; password: string; username: string; displayName: string},
    {rejectWithValue}
  ) => {
    try {
      // TODO: Implement API call
      throw new Error('Not implemented');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginWithOAuth = createAsyncThunk(
  'auth/loginWithOAuth',
  async (provider: 'google' | 'facebook' | 'apple', {rejectWithValue}) => {
    try {
      // TODO: Implement OAuth flow
      throw new Error('Not implemented');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshAuthToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, {getState, rejectWithValue}) => {
    try {
      // TODO: Implement token refresh
      throw new Error('Not implemented');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Login with email
    builder
      .addCase(loginWithEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginWithEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      });

    // Register with email
    builder
      .addCase(registerWithEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerWithEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      });

    // OAuth login
    builder
      .addCase(loginWithOAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginWithOAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginWithOAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      });

    // Refresh token
    builder
      .addCase(refreshAuthToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
      });
  },
});

export const {logout, clearError, setUser} = authSlice.actions;
export default authSlice.reducer;