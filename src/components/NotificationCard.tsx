import React from 'react';
import { Bell, Package, Truck } from 'lucide-react';
import { Notification } from '../types/notification';
import { getTimeAgo } from '../utils/timeUtils';

interface NotificationCardProps {
  notification: Notification;
  onAccept: (id: string) => void;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
  onAccept,
}) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'OrderRequest':
        return <Bell className="h-5 w-5 text-blue-600" />;
      case 'Pickup':
        return <Package className="h-5 w-5 text-green-600" />;
      case 'Delivery':
        return <Truck className="h-5 w-5 text-purple-600" />;
    }
  };

  const getTitle = () => {
    switch (notification.type) {
      case 'OrderRequest':
        return `New Order Request #${notification.orderId}`;
      case 'Pickup':
        return `Pickup Request - Order #${notification.orderId}`;
      case 'Delivery':
        return `New Delivery - Order #${notification.orderId}`;
    }
  };

  const getSubtitle = () => {
    switch (notification.type) {
      case 'OrderRequest':
        return `From ${notification.customerName}`;
      case 'Pickup':
        return `Driver ${notification.driverName} arrived for pickup`;
      case 'Delivery':
        return `Driver ${notification.driverName} arrived with new clothes`;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
      <div className="flex items-center gap-3">
        {getIcon()}
        <div>
          <h3 className="font-medium text-gray-900">{getTitle()}</h3>
          <p className="text-sm text-gray-600">{getSubtitle()}</p>
          <p className="text-xs text-gray-500 mt-1">{getTimeAgo(notification.createdAt)}</p>
        </div>
      </div>
      <button
        onClick={() => onAccept(notification.id)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Accept
      </button>
    </div>
  );
};