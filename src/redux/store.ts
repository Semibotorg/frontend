"use client"

import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./slices/userSlice"
import { guildsSlice } from "./slices/guildsSlice"
import { loadingSlice } from "./slices/loadingSlice"

export const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        guilds: guildsSlice.reducer,
        loading: loadingSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch