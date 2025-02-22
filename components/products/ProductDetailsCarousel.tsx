import { useEffect, useState } from "react";
import { View, Dimensions, Image, TouchableOpacity, ImageBackground, ScrollView } from "react-native";

interface Props {
  images: string[];
}

const ProductDetailsCarousel = ({ images }: Props) => {
  const { width } = Dimensions.get("screen");
  const [sliderImages, setSliderImages] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    setSliderImages(images);

    if (images && images.length > 0) {
      setActiveImage(images[0]);
    }
  }, [images]);

  return (
    <View style={{ position: "relative" }}>
      {sliderImages && sliderImages.length > 0 && (
        <ImageBackground
          source={{ uri: activeImage }}
          resizeMode="cover"
          style={{ width: width, height: 350, backgroundSize: "cover" }}
        />
      )}

      {/* <View
        style={{
          maxWidth: width - 32,
          width: "auto",
          flexDirection: "row",
          alignSelf: "center",
          gap: 8,
          backgroundColor: "blue",
          padding: 4,
          borderRadius: 8,
        }}
      >
        {sliderImages.length > 0 &&
          sliderImages.map((image) => (
            <TouchableOpacity key={image} onPress={() => {}}>
              <Image source={{ uri: image }} style={{ width: 40, height: 40, borderRadius: 8 }} />
            </TouchableOpacity>
          ))}
      </View> */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        pagingEnabled
        snapToInterval={40 + 8}
        style={{
          maxWidth: width - 32,
          width: "auto",
          flexDirection: "row",
          alignSelf: "center",
          backgroundColor: "white",
          padding: 6,
          borderRadius: 8,
          marginTop: -85,
        }}
      >
        {sliderImages.length > 0 &&
          sliderImages.map((image, index) => (
            <TouchableOpacity
              key={image}
              onPress={() => {
                setActiveImage(image);
              }}
              style={{ marginRight: index === sliderImages.length - 1 ? 0 : 8 }}
            >
              <Image source={{ uri: image }} style={{ width: 60, height: 60, borderRadius: 8 }} />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default ProductDetailsCarousel;
