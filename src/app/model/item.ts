import { Category } from "./category";
import { Creator } from "./creator";

export class Item {
  id: number
  category: Category
  creator: Creator
  code: string
  name: string
  price: number
}
