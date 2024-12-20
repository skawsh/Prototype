import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Support</h1>
          <p className="text-gray-600">Get help and support for your laundry business</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Phone className="h-6 w-6 text-blue-600 mb-4" />
            <h3 className="font-medium mb-2">Phone Support</h3>
            <p className="text-sm text ext-gray-600">Call us directly for immediate assistance</p>
            <p className="text-sm font-medium mt-2">+91 1800 123 4567</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <Mail className="h-6 w-6 text-blue-600 mb-4" />
            <h3 className="font-medium mb-2">Email Support</h3>
            <p className="text-sm text-gray-600">Send us your queries anytime</p>
            <p className="text-sm font-medium mt-2">admin@laundrystudio.com</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <Clock className="h-6 w-6 text-blue-600 mb-4" />
            <h3 className="font-medium mb-2">Working Hours</h3>
            <p className="text-sm text-gray-600">We're available during</p>
            <p className="text-sm font-medium mt-2">08:00 AM - 09:00 PM</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-lg font-medium mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>How do I process a refund?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                To process a refund, go to Orders, find the specific order, click on the view icon, and use the "Refund" button. Make sure to add a reason for the refund.
              </p>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>How can I update my service prices?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                Navigate to Settings, click on "Service Pricing", and you can update the prices for different services. Don't forget to save your changes.
              </p>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>What do I do if I can't complete an order on time?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                Contact the customer immediately through the app, explain the situation, and provide a new estimated completion time. Update the order status accordingly.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;