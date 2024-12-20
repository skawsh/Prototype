import React, { useState } from 'react';
import { Download, Eye } from 'lucide-react';
import type { Revenue } from '../types';

const mockWeeklyRevenue: Revenue[] = [
  { date: 'Monday', amount: 2450, orderCount: 12, percentageChange: 15 },
  { date: 'Tuesday', amount: 3100, orderCount: 15, percentageChange: 8 },
  { date: 'Wednesday', amount: 2800, orderCount: 14, percentageChange: -5 },
  { date: 'Thursday', amount: 3500, orderCount: 18, percentageChange: 12 },
  { date: 'Friday', amount: 3750, orderCount: 20, percentageChange: 20 }
];

const Revenue = () => {
  const [weeklyRevenue] = useState<Revenue[]>(mockWeeklyRevenue);
  const todaysEarnings = 2450;
  const weeklyTotal = weeklyRevenue.reduce((sum, day) => sum + day.amount, 0);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Daily Payouts</h2>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <Download className="h-5 w-5" />
              Export
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-600">Today's Earnings</p>
            <p className="text-3xl font-bold">₹ {todaysEarnings}</p>
          </div>

          <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
            View Details
            <Eye className="h-4 w-4" />
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Weekly Payouts</h2>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <Download className="h-5 w-5" />
              Export
            </button>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600">This Week's Earnings</p>
            <p className="text-3xl font-bold">₹ {weeklyTotal}</p>
          </div>

          <div className="space-y-4">
            {weeklyRevenue.map((day) => (
              <div key={day.date} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{day.date}</p>
                  <p className="text-sm text-gray-600">{day.orderCount} orders</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-medium">₹ {day.amount}</p>
                  <span className={`text-sm ${
                    day.percentageChange >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {day.percentageChange >= 0 ? '+' : ''}{day.percentageChange}%
                  </span>
                  <button className="text-blue-600 hover:text-blue-700">
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revenue;