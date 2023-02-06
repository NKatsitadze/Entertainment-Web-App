import { configureStore } from '@reduxjs/toolkit'
import { contentReducer } from './contentReducer'

export const store = configureStore({
  reducer: {
      content: contentReducer.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch