import Screen from "@/components/Screen";
import { ScrollView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import SearchField from "@/components/home/SearchField";
import IconButton from "@/components/buttons/IconButton";
import IndexCarousel from "@/components/home/IndexCarousel";
import MiniCategoriesList from "@/components/home/MiniCategoriesList";
import FlashSales from "@/components/home/FlashSales";

const HomeScreen = () => {
  return (
    <Screen>
      <ScrollView
        style={{
          padding: 16,
          flexDirection: "column",
          gap: 24,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <View style={{ flexDirection: "column", gap: 8 }}>
            <Text style={{ fontSize: 14 }}>Location</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Feather name="map-pin" size={24} />

              <Text style={{ fontSize: 14 }}>New York, USA</Text>
              <Text style={{ fontSize: 14 }}>Location</Text>
            </View>
          </View>

          <View
            style={{
              width: 30,
              height: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Feather name="bell" size={24} />

            <View
              style={{
                width: 8,
                height: 8,
                position: "absolute",
                top: 4,
                right: 4,
                backgroundColor: "red",
                borderRadius: 99999,
              }}
            ></View>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <SearchField />

          <IconButton name="tune" color="black" />
        </View>

        <IndexCarousel />

        <MiniCategoriesList />

        <FlashSales />
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;
