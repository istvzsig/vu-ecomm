import { defineStore } from 'pinia';

export const useCartStore = defineStore('slider', {
  state: function () {
    const store = JSON.parse(window.sessionStorage.getItem('cart'));
    return {
      items: store ? store : [],
      totalAmount: store ? store.length : 0,
      isOpen: false
    }
  },
  actions: {
    addItem(item) {
      this.items.push({ ...item, index: this.items.length });
      this.totalAmount++;
      this.save();
    },
    deleteItem(item) {
      this.items = this.items.filter(_item => _item.index !== item.index);
      this.totalAmount--;
      this.save();
    },
    save() {
      window.sessionStorage.setItem("cart", JSON.stringify(this.items));
    },
  },
})