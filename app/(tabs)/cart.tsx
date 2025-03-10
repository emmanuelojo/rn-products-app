import DragToSlideButton from "@/components/buttons/DragToSlideButton";
import Screen from "@/components/Screen";
import { Dimensions, ScrollView, View, Text } from "react-native";
import { productsList } from "@/data/products";
import { useEffect, useState } from "react";
import { CartProduct } from "@/types/Products";
import IconButton from "@/components/buttons/IconButton";
import { useRouter } from "expo-router";
import CartProductItem from "@/components/cart/CartProductItem";
import HorizontalDivider from "@/components/HorizontalDivider";

const { height } = Dimensions.get("window");

const cart = () => {
  const router = useRouter();

  const [productsInCart, setProductsInCart] = useState<CartProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      // const response = await fetch("https://api.escuelajs.co/api/v1/products");
      // const data = await response.json();

      // setProducts(data);

      const initialCartProducts: CartProduct[] = productsList.slice(0, 5).map((product) => {
        return { ...product, quantity: 1 };
      });

      setProductsInCart(initialCartProducts);
      setIsLoading(false);
    } catch (error) {
      console.log("An error occurred");
      setIsLoading(false);
    }
  };

  const goBack = () => {
    router.push("/");
  };

  const handleDecrease = (id: number, quantity: number) => {
    // const product = productsInCart.find((el) => el.id === id);
    // if (product) {
    //   if (product.quantity > 1) {
    //     // setProductsInCart((prev)=> {...prev, {...product,product["quantity"]:product.quantity -1}})
    //     const modifiedProducts = productsInCart.filter((el) => {
    //       if (el.id === id) {
    //         el.quantity = quantity;
    //       }
    //     });
    //     setProductsInCart(modifiedProducts);
    //   } else {
    //     const remainingProducts = productsInCart.filter((el) => el.id !== id);
    //     setProductsInCart(remainingProducts);
    //   }
    // }
    // return;
  };

  const handleIncrease = (id: number, quantity: number) => {
    // const product = productsInCart.find((el) => el.id === id);
    // if (product) {
    //   // setProductsInCart((prev)=> {...prev, {...product,product["quantity"]:product.quantity -1}})
    //   const modifiedProducts = productsInCart.filter((el) => {
    //     if (el.id === id) {
    //       return {...el,el.quantity: quantity,}
    //     }else{
    //       return
    //     }
    //   });
    //   setProductsInCart(modifiedProducts);
    // }
    // return;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flexDirection: "column",
          gap: 24,
          minHeight: height,
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 200,
        }}
      >
        <View
          style={{
            position: "relative",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <IconButton onPress={goBack} color="#192126" name="chevron-left" />

          <Text style={{ flexDirection: "row", alignSelf: "center", fontSize: 18 }}>My Cart</Text>
        </View>

        <View style={{ marginTop: 20, flexDirection: "column", gap: 8 }}>
          {productsInCart &&
            productsInCart.map((product, index) => (
              <View style={{ flexDirection: "column", gap: 8 }}>
                <CartProductItem
                  key={product.id}
                  product={product}
                  onDecrease={handleDecrease}
                  onIncrease={handleIncrease}
                />

                {index !== productsInCart.length - 1 && <HorizontalDivider />}
              </View>
            ))}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default cart;
