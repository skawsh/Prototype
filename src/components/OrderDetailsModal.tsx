import React from 'react';
import { X } from 'lucide-react';
import type { Order } from '../types/order';

interface OrderDetailsModalProps {
  order: Order;
  onClose: () => void;
}

export const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Order Details #{order.id}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium mb-2">Customer Information</h3>
            <p className="text-sm text-gray-600">Name: {order.customerName}</p>
            <p className="text-sm text-gray-600">Contact: {order.contactNumber}</p>
            <p className="text-sm text-gray-600">Address: {order.address}</p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Order Information</h3>
            <p className="text-sm text-gray-600">Service: {order.serviceType}</p>
            <p className="text-sm text-gray-600">Quantity: {order.quantity} kg</p>
            <p className="text-sm text-gray-600">Price: ₹{order.price}</p>
            <p className="text-sm text-gray-600">Status: {order.status}</p>
          </div>

          {order.driverName && (
            <div className="col-span-2">
              <h3 className="font-medium mb-2">Delivery Information</h3>
              <p className="text-sm text-gray-600">Driver: {order.driverName}</p>
              <p className="text-sm text-gray-600">Pickup Date: {order.pickupDate}</p>
              <p className="text-sm text-gray-600">Delivery Date: {order.deliveryDate}</p>
            </div>
          )}

          <div className="col-span-2">
            <h3 className="font-medium mb-2">Notes</h3>
            <p className="text-sm text-gray-600">{order.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};