import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import SectionHeader from "./SectionHeader";
import { useEffect, useState } from "react";
import { Category } from "@/types/Categories";
import { Link } from "expo-router";

const MiniCategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/categories");
      const data = await response.json();

      setCategories(data);
    } catch (error) {
      console.log("An error occurred");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  type CategoryProps = {
    category: Category;
  };

  const Category = ({ category }: CategoryProps) => (
    <View style={{ width: 120 }}>
      <View
        style={{
          width: 100,
          height: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 99999,
          marginHorizontal: "auto",
        }}
      >
        {category.image && (
          <Image source={category.image} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 99999 }} />
        )}
      </View>
      <Text style={{ fontSize: 14, textAlign: "center", textOverflow: "ellipsis" }}>{category.name}</Text>
    </View>
  );

  return (
    <View
      style={{
        flexDirection: "column",
        gap: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 18,
        }}
      >
        <Text style={{ color: "black", fontSize: 18, fontFamily: "Inter_500Medium" }}>Categories</Text>

        <TouchableOpacity>
          <Link href="/categories">
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter_300Light",
                color: "black",
              }}
            >
              See All
            </Text>
          </Link>
        </TouchableOpacity>
      </View>

      {categories && (
        <FlatList
          data={categories.slice(0, 4)}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Category category={item} />}
        />
      )}
    </View>
  );
};

export default MiniCategoriesList;
