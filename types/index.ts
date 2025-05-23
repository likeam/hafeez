import { z } from "zod";
import { carts, products } from "../db/schema";
import { InferSelectModel } from "drizzle-orm";
import { cartItemSchema } from "../lib/validator";
//Product
export type Product = InferSelectModel<typeof products>;
//Cart
export type CartItem = z.infer<typeof cartItemSchema>;
// CART
export type Cart = InferSelectModel<typeof carts>;
