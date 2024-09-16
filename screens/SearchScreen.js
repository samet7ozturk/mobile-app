import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarkets } from "../store/thunks/marketThunks";

export default function SearchScreen() {
  const dispatch = useDispatch();
  const { markets, status, error } = useSelector((state) => state.market);

  useEffect(() => {
    dispatch(fetchMarkets());
  }, [dispatch]);

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }

  if (status === "failed") {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <SearchBar />
      {markets.map((market) => (
        <Text key={market.id}>{market.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
