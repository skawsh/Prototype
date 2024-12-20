import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { useOrderStore } from '../store/useOrderStore';
import { OrderDetailsModal } from '../components/OrderDetailsModal';
import type { Order } from '../types/order';

const Orders = () => {
  const { orders, updateOrderStatus } = useOrderStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
    updateOrderStatus(orderId, newStatus);
  };

  const pendingCount = orders.filter(o => o.status === 'Pending').length;
  const acceptedCount = orders.filter(o => o.status === 'Accepted').length;
  const inProgressCount = orders.filter(o => o.status === 'In Progress').length;
  const completedCount = orders.filter(o => o.status === 'Completed').length;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Orders Management</h1>
          <p className="text-gray-600">Manage and track all laundry orders</p>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="bg-blue-50 px-4 py-2 rounded-lg">
            <span className="text-sm text-gray-600">Pending</span>
            <div className="text-xl font-semibold text-blue-600">{pendingCount}</div>
          </div>
          <div className="bg-yellow-50 px-4 py-2 rounded-lg">
            <span className="text-sm text-gray-600">Accepted</span>
            <div className="text-xl font-semibold text-yellow-600">{acceptedCount}</div>
          </div>
          <div className="bg-purple-50 px-4 py-2 rounded-lg">
            <span className="text-sm text-gray-600">In Progress</span>
            <div className="text-xl font-semibold text-purple-600">{inProgressCount}</div>
          </div>
          <div className="bg-green-50 px-4 py-2 rounded-lg">
            <span className="text-sm text-gray-600">Completed</span>
            <div className="text-xl font-semibold text-green-600">{completedCount}</div>
          </div>
        </div>

        {/* Rest of the table code remains similar, but with updated status options */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.customerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.serviceType}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value as Order['status'])}
                      className="border border-gray-300 rounded-md text-sm"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Accepted">Accepted</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button 
                      onClick={() => setSelectedOrder(order)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedOrder && (
          <OrderDetailsModal
            order={selectedOrder}
            onClose={() => setSelectedOrder(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Orders;