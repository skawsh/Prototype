import { create } from 'zustand';
import { mockNotifications } from '../data/mockNotifications';
import type { Notification } from '../types/notification';

interface NotificationStore {
  notifications: Notification[];
  removeNotification: (id: string) => void;
  getNotificationCount: () => number;
}

export const useNotificationStore = create<NotificationStore>()((set, get) => ({
  notifications: mockNotifications,
  removeNotification: (id: string) => 
    set(state => ({
      notifications: state.notifications.filter(n => n.id !== id)
    })),
  getNotificationCount: () => get().notifications.length,
}));