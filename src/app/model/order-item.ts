import { Order } from "./order";
import { Member } from "./member";
import { Item } from "./item";

export class OrderItem {
  id: number
  order: Order
  member: Member
  item: Item
  quantity: number
}
