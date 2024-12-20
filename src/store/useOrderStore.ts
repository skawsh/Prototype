import { create } from 'zustand';
import type { Order } from '../types/order';

interface OrderStore {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  getOrdersByStatus: (status: Order['status']) => Order[];
}

export const useOrderStore = create<OrderStore>()((set, get) => ({
  orders: [],
  addOrder: (order: Order) => 
    set(state => ({
      orders: [...state.orders, order]
    })),
  updateOrderStatus: (orderId: string, status: Order['status']) =>
    set(state => ({
      orders: state.orders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    })),
  getOrdersByStatus: (status: Order['status']) =>
    get().orders.filter(order => order.status === status),
}));