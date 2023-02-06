import create from "zustand";
const useStore = create((set) => ({
  cart: [],
  cartItems: 0,
  total: 0,
  tax: 0,
  addToCart: function (item) {
    set(({cart,cartItems,total,tax}) => ({
      cart: [...cart, item],
      cartItems: cartItems + item.quantity,
      total: total + item.price * item.quantity,
      tax: tax + item.price * item.quantity * 0.2,
    }));
  },
  removeFromCart: function (n) {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== n.id),
      cartItems: state.cartItems - n.quantity,
      total: state.total - n.price * n.quantity,
      tax: state.tax - n.price * n.quantity * 0.2,
    }));
  },
}));
export default useStore;
