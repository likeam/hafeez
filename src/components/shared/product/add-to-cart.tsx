"use client";

import { Cart, CartItem } from "../../../../types";
import { toast } from "sonner";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../../../lib/actions/cart.actions";
import { Loader, Minus, Plus } from "lucide-react";
import { round2 } from "../../../../lib/utils";

export default function AddToCart({
  cart,
  item,
}: {
  cart?: Cart;
  item: Omit<CartItem, "cartId">;
}) {
  const [isPending, startTransition] = useTransition();
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);
  return existItem ? (
    <div>
      <Button
        type="button"
        variant="outline"
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            await removeItemFromCart(item.productId);
            toast("Add to cart sucessfully");
            return;
          });
        }}
      >
        {isPending ? (
          <Loader className="w-4 h-4  animate-spin" />
        ) : (
          <Minus className="w-4 h-4" />
        )}
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button
        type="button"
        variant="outline"
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            await addItemToCart({
              ...item,
              price: item.price,
            });
            toast("Add to cart sucessfully");
            return;
          });
        }}
      >
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Plus className="w-4 h-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button
      className="w-full"
      type="button"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          const res = await addItemToCart({
            ...item,
            price: round2(item.price),
          });
          if (!res.success) {
            toast("Added");
            return;
          }
          toast("fail to add");
        });
      }}
    >
      {isPending ? <Loader className="animate-spin" /> : <Plus />}
      Add to cart
    </Button>
  );
}
