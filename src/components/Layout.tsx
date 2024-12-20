import React from 'react';
import { Bell, Home, ClipboardList, TrendingUp, User, Settings, HelpCircle, Shirt } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useNotificationStore } from '../store/useNotificationStore';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const notificationCount = useNotificationStore(state => state.getNotificationCount());

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 fixed w-full z-30">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shirt className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-semibold">Laundry Studio</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </div>
            <Link to="/profile">
              <User className="h-6 w-6 text-gray-600" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 mt-14 w-64 h-full bg-white border-r border-gray-200">
        <nav className="mt-8">
          <Link
            to="/"
            className={`flex items-center gap-2 px-6 py-3 ${
              isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
            }`}
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/orders"
            className={`flex items-center gap-2 px-6 py-3 ${
              isActive('/orders') ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
            }`}
          >
            <ClipboardList className="h-5 w-5" />
            <span>Orders</span>
          </Link>
          <Link
            to="/revenue"
            className={`flex items-center gap-2 px-6 py-3 ${
              isActive('/revenue') ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
            }`}
          >
            <TrendingUp className="h-5 w-5" />
            <span>Revenue</span>
          </Link>
          <Link
            to="/settings"
            className={`flex items-center gap-2 px-6 py-3 ${
              isActive('/settings') ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
            }`}
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
          <Link
            to="/support"
            className={`flex items-center gap-2 px-6 py-3 ${
              isActive('/support') ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
            }`}
          >
            <HelpCircle className="h-5 w-5" />
            <span>Support</span>
          </Link>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            <p>Admin Support</p>
            <p className="text-xs mt-1">Working Hours: 08:00 AM - 09:00 PM</p>
            <p className="text-xs mt-1">Phone: +91 1800 123 4567</p>
            <p className="text-xs mt-1">Email: admin@laundrystudio.com</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 pt-14">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default Layout;