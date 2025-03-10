import { ImageSourcePropType } from "react-native";

export interface Category {
  id: number;
  name: string;
  image: ImageSourcePropType | undefined | any;
  creationAt?: string | Date;
  updatedAt?: string | Date;
  slug?: string;
}
