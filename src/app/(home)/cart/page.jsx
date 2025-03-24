"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  CartIncrementService,
  CartDecrementService,
  getCartService,
  DeleteCartService,
} from "@/services/cartService";
import { IMAGES } from "@/components/common/images";
import Image from "next/image";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectCartTotal,
  selectTotalAfterDiscount,
  selectTotalDiscountPercentage,
  selectTotalSavings,
} from "@/reduxToolkit/slices/cartSlice";
import { useRouter } from "next/navigation";

function MyCart() {
  const { carts, items } = useSelector((state) => state.cartData);
  const router = useRouter()
  const totalPrice = useSelector(selectCartTotal);
  const totalAfterDiscount = useSelector(selectTotalAfterDiscount);
  const totalDiscountPercentage = useSelector(selectTotalDiscountPercentage);
  const totalSavings = useSelector(selectTotalSavings);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCartService());
  // }, []);

  const onAuth = items.length > 0 ? items : carts?.carts || [];

  const checkoutClick = async () => {
    const cart = await localStorage.getItem('cart')
    const cartData = JSON.parse(cart)
    console.log(cartData);
    if (cartData === null) {
      router.push('/prescription')
    } else {
      router.push('/login')
    }
  }

  return (
    <section className="px-2 md:px-12 mt-3">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Your Cart: {onAuth.length} Items
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="border rounded-lg p-4 bg-white w-full md:w-3/4">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 font-bold items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <h3>Product Details</h3>
                </div>
                <div className="flex items-center space-x-10">
                  <h3>Quantity</h3>
                </div>
                <div className="flex items-center space-x-10">
                  <h3>Total Price</h3>
                </div>
              </div>

              {onAuth.map((item, i) => (
                <div
                  className="flex flex-wrap gap-4 items-center justify-between border-b pb-4"
                  key={i}
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item?.product_img ? `https://assets1.drugcarts.com/${item?.product_img}` : IMAGES.NO_IMAGE}
                      alt="Product"
                      className="w-16 h-16"
                      width={50}
                      height={50}
                    />
                    <div>
                      <h3 className="font-semibold">{item?.product_name}</h3>
                      <p className="text-gray-500 text-sm">{item?.cat_name}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-10">
                    <div className="flex items-center border rounded-lg">
                      <button
                        className="px-2 py-1 bg-red-500 text-white"
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch(CartDecrementService(item._id, { quantity: item.quantity - 1 }));
                          }
                        }}
                      >
                        −
                      </button>
                      <span className="px-4">{item?.quantity}</span>
                      <button
                        className="px-2 py-1 bg-green-500 text-white"
                        onClick={() => dispatch(CartIncrementService(item._id, { quantity: item.quantity + 1 }))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-10">
                    <p className="text-lg font-bold">₹{(item?.price * item?.quantity).toFixed(2)}</p>
                    <button
                      className="text-red-500"
                      onClick={() => dispatch(DeleteCartService(item?._id))}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-right text-xl font-bold text-pink-700 border-b pb-4">
              Total Cart Value: ₹{totalPrice.toFixed(2)}
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-md md:w-1/4 w-full">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Sub total</span>
                <span>{onAuth.length} items</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Total MRP</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Total Discount</span>
                <span className="text-green-600">-{totalDiscountPercentage.toFixed(0)}%</span>
              </div>
              <div className="border-t pt-2 flex justify-between text-lg font-bold text-red-600">
                <span>Total Amount</span>
                <span>₹{totalSavings.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700" onClick={checkoutClick}>
              Checkout
            </button>

            <div className="mt-2 text-center text-sm text-gray-500 bg-[#EEFEE3] p-[1px] border-2 border-dotted">
              💰 Total Savings: ₹{totalAfterDiscount.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyCart;
