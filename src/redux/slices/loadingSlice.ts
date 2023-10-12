"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialLoadingState: boolean = true

export const loadingSlice = createSlice({
  name: "loading",
  initialState: initialLoadingState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});
