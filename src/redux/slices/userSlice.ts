"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIUser } from "discord-api-types/v10";
import { RootState } from "../store";

const initialUserState: APIUser = null as any;

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    addUser: (state, action: PayloadAction<typeof initialUserState>) => {
      return action.payload;
    },
    clearData: (state, action) => {
      state = {} as APIUser;
    },
  },
});
