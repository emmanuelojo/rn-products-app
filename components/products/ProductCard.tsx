import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import IconButton from "../buttons/IconButton";
import { Product } from "@/types/Products";
import { useState } from "react";
import Toast from "react-native-toast-message";

interface Props {
  product: Product;
  onPress: (id: number) => void;
}

const ProductCard = ({ product, onPress }: Props) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);

    Toast.show({
      type: "success",
      text1: `Product ${isFavourite ? "removed from" : "added to"} favourites`,
    });
  };

  return (
    <TouchableOpacity onPress={() => onPress(product.id)} style={styles.itemContainer}>
      <View style={styles.likeButton}>
        <IconButton
          onPress={handleFavourite}
          color={isFavourite ? "#192126" : "black"}
          name={isFavourite ? "favorite" : "favorite-outline"}
        />
      </View>
      <Image source={{ uri: product.images[0] }} style={styles.productImage} />
    </TouchableOpacity>
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

export default ProductCard;
