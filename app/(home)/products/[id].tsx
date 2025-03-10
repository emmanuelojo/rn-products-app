import { Text, ScrollView, Dimensions, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import Screen from "@/components/Screen";
import IconButton from "@/components/buttons/IconButton";
import { Product } from "@/types/Products";
import ProductDetailsCarousel from "@/components/products/ProductDetailsCarousel";
import Toast from "react-native-toast-message";
import { MaterialIcons } from "@expo/vector-icons";
import ProductDetailsAddToCart from "@/components/products/ProductDetailsAddToCart";
import HorizontalDivider from "@/components/HorizontalDivider";
import ProductDetailsSize from "@/components/products/ProductDetailsSize";
import { productsList } from "@/data/products";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { height } = Dimensions.get("window");
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const fetchProduct = async () => {
    try {
      // const response = await fetch(`https://api.escuelajs.co/api/v1/products/${Number(id)}`);
      // const data = await response.json();

      // setProduct(data);

      const productData = productsList.filter((product) => product.id === Number(id))[0];
      setProduct(productData);
      setIsLoading(false);
    } catch (error) {
      console.log("An error occurred");
      setIsLoading(false);
      Toast.show({
        type: "error",
        text1: "An error occurred 🥲",
      });
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const goBack = () => {
    router.push("/");
  };

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);

    Toast.show({
      type: "success",
      text1: `Product ${isFavourite ? "removed from" : "added to"} favourites`,
    });
  };

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flexDirection: "column",
          gap: 24,
          position: "relative",
          minHeight: height,
          paddingBottom: 200,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            padding: 16,
            zIndex: 20,
          }}
        >
          <IconButton onPress={goBack} color="#192126" name="chevron-left" />

          <Text style={{ fontSize: 18 }}>Product Details</Text>

          <IconButton
            onPress={handleFavourite}
            color={isFavourite ? "#192126" : "black"}
            name={isFavourite ? "favorite" : "favorite-outline"}
          />
        </View>

        <View style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
          {product && product.images && <ProductDetailsCarousel images={product.images} />}
        </View>

        <View
          style={{
            flexDirection: "column",
            gap: 16,
            padding: 16,
            marginTop: 300,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
            <Text style={{ fontSize: 14, color: "gray", textTransform: "capitalize" }}>{product?.category.name}</Text>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <MaterialIcons name="star" style={{ color: "orange" }} size={24} />
              <Text>4.5</Text>
            </View>
          </View>

          <Text style={{ fontSize: 18, fontWeight: 700 }}>{product?.title}</Text>

          <View style={{ flexDirection: "column", justifyContent: "space-between", gap: 8 }}>
            <Text style={{ fontWeight: 500 }}>Product Details</Text>

            <Text style={{ fontSize: 14, color: "gray" }}>{product?.description}</Text>
          </View>

          <HorizontalDivider />

          <ProductDetailsSize />
        </View>
      </ScrollView>

      {/* {product && (
        <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <ProductDetailsAddToCart price={product.price} />
        </View>
      )} */}
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <ProductDetailsAddToCart price={893} />
      </View>
    </Screen>
  );
};

export default ProductDetails;
