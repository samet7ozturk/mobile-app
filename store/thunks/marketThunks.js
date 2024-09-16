import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchMarkets = createAsyncThunk(
  "markets/fetchMarkets",
  async () => {
    try {
      const response = await api.get("");
      console.log("Market list response: ", response.data);
      return response.data;
    } catch (error) {
      console.error("API request error(Thunk):", error);
      throw error;
    }
  }
);
