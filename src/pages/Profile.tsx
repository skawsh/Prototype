import React, { useState } from 'react';
import { Pencil } from 'lucide-react';
import type { Profile } from '../types';

const mockProfile: Profile = {
  shopName: "Crystal Clear Laundry",
  ownerName: "John Smith",
  primaryContact: "+91 98765 43210",
  secondaryContact: "+91 98765 43211",
  email: "contact@crystalclearlaundry.com",
  address: {
    street: "123 Laundry Lane, Market Complex",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400001"
  },
  business: {
    registrationNumber: "LAUN1234MH2023",
    gstNumber: "27AABCT1234Z1Z5"
  },
  paymentInfo: {
    methods: ["Daily", "Weekly"],
    bankName: "State Bank of India"
  }
};

const Profile = () => {
  const [profile] = useState<Profile>(mockProfile);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Profile Settings</h1>
          <p className="text-gray-600">View and manage your laundry studio profile</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Basic Information</h2>
                <button className="text-blue-600 hover:text-blue-700">
                  <Pencil className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Shop Name</p>
                  <p className="font-medium">{profile.shopName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Owner's Name</p>
                  <p className="font-medium">{profile.ownerName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Primary Contact</p>
                  <p className="font-medium">{profile.primaryContact}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Secondary Contact</p>
                  <p className="font-medium">{profile.secondaryContact}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email Address</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Business Details</h2>
                <button className="text-blue-600 hover:text-blue-700">
                  <Pencil className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Registration Number</p>
                  <p className="font-medium">{profile.business.registrationNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">GST/VAT Number</p>
                  <p className="font-medium">{profile.business.gstNumber}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Address Details</h2>
                <button className="text-blue-600 hover:text-blue-700">
                  <Pencil className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Street Address</p>
                  <p className="font-medium">{profile.address.street}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">City</p>
                  <p className="font-medium">{profile.address.city}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">State/Province</p>
                  <p className="font-medium">{profile.address.state}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Postal Code</p>
                  <p className="font-medium">{profile.address.postalCode}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Payment Information</h2>
                <button className="text-blue-600 hover:text-blue-700">
                  <Pencil className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Payment Methods</p>
                  <p className="font-medium">{profile.paymentInfo.methods.join(', ')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Bank Name</p>
                  <p className="font-medium">{profile.paymentInfo.bankName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;