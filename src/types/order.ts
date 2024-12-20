export type OrderStatus = 'Pending' | 'Accepted' | 'In Progress' | 'Completed';

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  quantity: number;
  serviceType: string;
  notes: string;
  status: OrderStatus;
  createdAt: string;
  price: number;
  contactNumber?: string;
  address?: string;
  pickupDate?: string;
  deliveryDate?: string;
  driverName?: string;
}