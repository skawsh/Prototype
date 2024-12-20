import React, { useState } from 'react';
import { NotificationCard } from '../components/NotificationCard';
import { useNotificationStore } from '../store/useNotificationStore';
import { useOrderStore } from '../store/useOrderStore';
import type { NotificationType } from '../types/notification';

const Home = () => {
  const { notifications, removeNotification } = useNotificationStore();
  const { addOrder } = useOrderStore();
  const [activeTab, setActiveTab] = useState<NotificationType>('OrderRequest');

  const handleAccept = (notificationId: string) => {
    const notification = notifications.find(n => n.id === notificationId);
    if (notification) {
      if (notification.type === 'OrderRequest') {
        // Create new order when accepting order request
        addOrder({
          id: notification.orderId,
          customerId: `CUST-${Math.random().toString(36).substr(2, 9)}`,
          customerName: notification.customerName!,
          quantity: 3,
          serviceType: 'Regular Wash & Iron',
          notes: notification.message,
          status: 'Accepted',
          createdAt: new Date().toISOString(),
          price: 450,
        });
      }
      removeNotification(notificationId);
    }
  };

  const filteredNotifications = notifications.filter(n => n.type === activeTab);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Quick Notifications</h1>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {notifications.length} New
          </span>
        </div>

        <div className="flex gap-4 border-b border-gray-200 mb-6">
          <button
            className={`pb-4 px-1 ${
              activeTab === 'OrderRequest'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('OrderRequest')}
          >
            Order Requests
          </button>
          <button
            className={`pb-4 px-1 ${
              activeTab === 'Pickup'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Pickup')}
          >
            Pickups
          </button>
          <button
            className={`pb-4 px-1 ${
              activeTab === 'Delivery'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Delivery')}
          >
            Deliveries
          </button>
        </div>

        <div className="space-y-4">
          {filteredNotifications.map(notification => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onAccept={handleAccept}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;