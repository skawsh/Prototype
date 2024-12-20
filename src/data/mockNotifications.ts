import { Notification } from '../types/notification';

const currentTime = new Date();

export const mockNotifications: Notification[] = [
  // Order Requests
  {
    id: '1933',
    type: 'OrderRequest',
    orderId: 'ORD-1933',
    customerName: 'Sarah Wilson',
    message: '3kg Regular Wash & Iron - Standard Service',
    createdAt: new Date(currentTime.getTime() - 5 * 60000).toISOString(), // 5 minutes ago
    status: 'Pending'
  },
  {
    id: '4653',
    type: 'OrderRequest',
    orderId: 'ORD-4653',
    customerName: 'Mike Chen',
    message: '2kg Dry Clean - Premium Service',
    createdAt: new Date(currentTime.getTime() - 15 * 60000).toISOString(), // 15 minutes ago
    status: 'Pending'
  },
  
  // Pickups
  {
    id: 'PIC-001',
    type: 'Pickup',
    orderId: 'ORD-1820',
    customerName: 'James Brown',
    driverName: 'Alex Kumar',
    message: 'Driver arrived for pickup - Order #ORD-1820',
    createdAt: new Date(currentTime.getTime() - 2 * 60000).toISOString(), // 2 minutes ago
    status: 'Pending'
  },
  {
    id: 'PIC-002',
    type: 'Pickup',
    orderId: 'ORD-1815',
    customerName: 'Emma Davis',
    driverName: 'Raj Patel',
    message: 'Driver arrived for pickup - Order #ORD-1815',
    createdAt: new Date(currentTime.getTime() - 8 * 60000).toISOString(), // 8 minutes ago
    status: 'Pending'
  },

  // Deliveries
  {
    id: 'DEL-001',
    type: 'Delivery',
    orderId: 'ORD-1789',
    customerName: 'Lisa Wong',
    driverName: 'Sanjay Mehta',
    message: 'New clothes delivery - Order #ORD-1789',
    createdAt: new Date(currentTime.getTime() - 3 * 60000).toISOString(), // 3 minutes ago
    status: 'Pending'
  },
  {
    id: 'DEL-002',
    type: 'Delivery',
    orderId: 'ORD-1790',
    customerName: 'Tom Harris',
    driverName: 'Priya Singh',
    message: 'New clothes delivery - Order #ORD-1790',
    createdAt: new Date(currentTime.getTime() - 12 * 60000).toISOString(), // 12 minutes ago
    status: 'Pending'
  }
];