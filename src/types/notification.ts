export type NotificationType = 'OrderRequest' | 'Pickup' | 'Delivery';

export interface Notification {
  id: string;
  type: NotificationType;
  orderId: string;
  message: string;
  createdAt: string;
  customerName?: string;
  driverName?: string;
  status?: 'Pending' | 'Accepted' | 'Completed';
}