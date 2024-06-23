import { defineStore } from 'pinia';

export const useCartStore = defineStore('slider', {
  state: function () {
    const store = JSON.parse(localStorage.getItem('cart'));
    return {
      items: store ? store : [],
      totalAmount: store ? store.length : 0,
    }
  },
  actions: {
    addItem(item) {
      this.items.push(item);
      this.totalAmount++;
      this.save();
    },
    save() {
      window.localStorage.setItem("cart", JSON.stringify(this.items));
    },
  },
})