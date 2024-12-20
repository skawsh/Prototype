import React, { useState } from 'react';
import { Power } from 'lucide-react';

const Settings = () => {
  const [isServiceEnabled, setIsServiceEnabled] = useState(true);

  const toggleService = () => {
    setIsServiceEnabled(!isServiceEnabled);
    // Here you would also make an API call to update the service status
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Settings</h1>
          <p className="text-gray-600">Manage your laundry studio settings</p>
        </div>

        <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Power className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">Service Status</h3>
              <p className="text-sm text-gray-600">Your services are currently enabled</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isServiceEnabled}
              onChange={toggleService}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Settings;