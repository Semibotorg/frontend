"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RESTGetAPICurrentUserGuildsResult } from "discord-api-types/v10";

const initialGuildState: {
  included: RESTGetAPICurrentUserGuildsResult;
  excluded: RESTGetAPICurrentUserGuildsResult;
} = {
  included: [],
  excluded: [],
} as any;

export const guildsSlice = createSlice({
  name: "guilds",
  initialState: initialGuildState,
  reducers: {
    addGuilds: (state, action: PayloadAction<typeof initialGuildState>) => {
      return action.payload;
    },
  },
});
