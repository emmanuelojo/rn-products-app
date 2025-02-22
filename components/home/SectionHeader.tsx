import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ExternalPathString, Link, RelativePathString } from "expo-router";

interface Props {
  title?: string;
  link?: RelativePathString | ExternalPathString;
  showSeeAll?: boolean;
}

const SectionHeader = ({ title, link, showSeeAll = true }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 18,
      }}
    >
      <Text style={{ color: "black", fontSize: 18, fontFamily: "Inter_500Medium" }}>{title}</Text>
      {showSeeAll && link && (
        <TouchableOpacity>
          <Link href={link}>
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
      )}
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({});
