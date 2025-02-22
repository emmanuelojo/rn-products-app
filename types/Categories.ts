import { ImageSourcePropType } from "react-native";

export interface Category {
  id: number;
  name: string;
  image: ImageSourcePropType | undefined;
  creationAt?: Date;
  updatedAt?: Date;
}
