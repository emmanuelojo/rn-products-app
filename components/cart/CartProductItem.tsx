import { Colors } from "@/constants/Colors";
import { CartProduct } from "@/types/Products";
import { Image, View, Text, Button } from "react-native";

interface Props {
  product: CartProduct;
  onDecrease: (id: number, val: number) => void;
  onIncrease: (id: number, val: number) => void;
}

const CartProductItem = ({ product, onDecrease, onIncrease }: Props) => {
  return (
    <View style={{ position: "relative", flexDirection: "row", alignItems: "center", gap: 8 }}>
      {/* <Image /> */}

      <View style={{ width: 100, height: 100, backgroundColor: "#80808050", borderRadius: 8 }}></View>

      <View style={{ flexDirection: "column", gap: 4 }}>
        <Text style={{ fontWeight: 500 }}>Arm Chair</Text>
        <Text style={{ fontSize: 14 }}>Chair</Text>
        <Text style={{ fontSize: 14, fontWeight: 500 }}>$180.00</Text>
      </View>

      <View style={{ position: "absolute", bottom: 20, right: 20, flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Button
          title="-"
          onPress={() => onDecrease(product.id, product.quantity--)}
          color={product.quantity === 1 ? "#80808050" : Colors.greenPrimary}
        />
        <Text>{product.quantity}</Text>
        <Button title="+" onPress={() => onIncrease(product.id, product.quantity++)} color={Colors.greenPrimary} />
      </View>
    </View>
  );
};

export default CartProductItem;
