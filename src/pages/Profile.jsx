// import React from "react";

function Profile() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow-md sm:p-6">
          <h2 className="text-2xl font-semibold text-gray-900">My Profile</h2>

          <div className="flex items-center justify-center mt-4">
            <img
              className="w-20 h-20 rounded-full object-cover shadow-lg"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="Avatar"
            />
          </div>

          <div className="mt-4 flex flex-col items-center">
            <span className="text-xl font-semibold text-gray-900">
              John Doe
            </span>
            <span className="text-sm text-gray-500">johndoe@example.com</span>
          </div>

          <div className="mt-8">
            <ul className="list-none space-y-4">
              <li>
                <span className="text-sm font-medium text-gray-700">
                  Phone Number:
                </span>
                <span className="text-sm text-gray-500">+923001234567</span>
              </li>
              <li>
                <span className="text-sm font-medium text-gray-700">
                  Address:
                </span>
                <span className="text-sm text-gray-500">
                  123 Fake Street, Faisalabad, Punjab, Pakistan
                </span>
              </li>
              <li>
                <span className="text-sm font-medium text-gray-700">
                  Payment Methods:
                </span>
                <ul className="list-disc space-y-2 ml-4">
                  <li>Cash on Delivery</li>
                  <li>Credit Card: **** **** **** 1234</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="flex flex-row justify-between mt-8">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-300">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
