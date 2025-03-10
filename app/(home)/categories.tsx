import { FlatList, View, Text, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Category } from "@/types/Categories";
import Screen from "@/components/Screen";
import { categoriesList } from "@/data/categories";

const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      // const response = await fetch("https://api.escuelajs.co/api/v1/categories");
      // const data = await response.json();

      // setCategories(data);
      setCategories(categoriesList);
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

  // const renderItem = ({ category, index }) => {
  //   return (
  //     <View>
  //       <View
  //         style={{
  //           width: 50,
  //           height: 50,
  //           flexDirection: "row",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           borderRadius: 99999,
  //         }}
  //       >
  //         <Image source={category.image} style={{ width: 30, height: 30, objectFit: "cover" }} />
  //       </View>
  //       <Text style={{ fontSize: 14 }}>{category.name}</Text>
  //     </View>
  //   );
  // };

  const Category = ({ category }: CategoryProps) => (
    <View
      style={{
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          borderRadius: 99999,
        }}
      >
        {category.image && (
          <Image source={category.image} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 99999 }} />
        )}
      </View>
      <View>
        <Text style={{ fontSize: 18, textOverflow: "ellipsis" }}>{category.name}</Text>

        {category.creationAt && (
          <Text style={{ fontSize: 14 }}>{new Date(category.creationAt).toLocaleString().slice(0, 10)}</Text>
        )}
      </View>
    </View>
  );

  return (
    <Screen>
      <View
        style={{
          flexDirection: "column",
          gap: 24,
          padding: 16,
        }}
      >
        <Text style={{ color: "black", fontFamily: "Inter_500Medium", fontSize: 20 }}>Categories List</Text>

        {categories && (
          <FlatList
            data={categories}
            renderItem={({ item }) => <Category category={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </Screen>
  );
};

export default CategoriesList;
