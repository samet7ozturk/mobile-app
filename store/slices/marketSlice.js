import { createSlice } from "@reduxjs/toolkit";
import { fetchMarkets } from "../thunks/marketThunks";

const marketSlice = createSlice({
  name: "market",
  initialState: {
    markets: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarkets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMarkets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.markets = action.payload;
      })
      .addCase(fetchMarkets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default marketSlice.reducer;
