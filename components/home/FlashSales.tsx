import { Product } from "@/types/Products";
import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import ProductCard from "../products/ProductCard";

const FlashSales = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();

      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log("An error occurred");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const viewProductDetails = (id: number) => {
    router.push(`/products/${id}`);
  };

  const skeletonData = [
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
    { id: "4", name: "Item 4" },
  ];

  return (
    <View style={{ flexDirection: "column", gap: 16, marginTop: 24 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 3 }}>
        <Text style={{ fontSize: 18 }}>Flash Sale</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 8 }}>
          <Text>Closing in:</Text>

          <View style={{ flexDirection: "row", gap: 3 }}>
            <View>
              <Text> 02</Text>
            </View>
            <Text>: </Text>
            <View>
              <Text> 12</Text>
            </View>
            <Text> :</Text>
            <View>
              <Text>56 </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 8 }}>
        <View>
          <Text>All </Text>
        </View>
        <View>
          <Text>Newest </Text>
        </View>
        <View>
          <Text> Popular</Text>
        </View>
        <View>
          <Text>Bedroom </Text>
        </View>
      </View>

      <View>
        {products && (
          <FlatList
            data={products}
            renderItem={({ item }) => <ProductCard product={item} onPress={() => viewProductDetails(item.id)} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2} // Set number of columns to 2
            contentContainerStyle={styles.grid}
          />
        )}

        {isLoading && (
          <FlatList
            data={skeletonData}
            renderItem={({ item }) => <View style={styles.itemContainer}></View>}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2} // Set number of columns to 2
            contentContainerStyle={styles.grid}
          />
        )}

        {!isLoading && products.length < 1 && (
          <View>
            <Text>No products found</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    borderRadius: 8,
    position: "relative",
  },
  itemText: {
    fontSize: 18,
  },
  grid: {
    justifyContent: "space-evenly",
  },
  likeButton: {
    width: 40,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: "100%",
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 2,
  },
  productImage: {
    width: "100%",
    height: 250,
    objectFit: "cover",
    borderRadius: 8,
  },
});

export default FlashSales;
