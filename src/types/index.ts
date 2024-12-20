export interface Order {
  id: string;
  quantity: number;
  serviceType: string;
  notes: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  createdAt: string;
  customerId: string;
}

export interface Notification {
  id: string;
  type: 'OrderRequest' | 'Pickup' | 'Delivery';
  orderId: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface Revenue {
  date: string;
  amount: number;
  orderCount: number;
  percentageChange: number;
}

export interface Profile {
  shopName: string;
  ownerName: string;
  primaryContact: string;
  secondaryContact: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  business: {
    registrationNumber: string;
    gstNumber: string;
  };
  paymentInfo: {
    methods: string[];
    bankName: string;
  };
}