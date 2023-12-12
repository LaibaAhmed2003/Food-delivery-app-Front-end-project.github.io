import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div class="px-4 pt-8">
            <p class="text-xl font-medium">Order Summary</p>
            <p class="text-gray-400">
              Check your items. And select a suitable shipping method.
            </p>
            {cart.map((item,index)=>(
              <div className="" key={index}>
              
            <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                <img
                  class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={item.image}
                  alt="Food"
                />
                <div class="flex w-full flex-col px-4 py-4">
                  <span class="font-semibold">
                    {item.dec}
                  </span>
                  <span class="float-right text-gray-400">42EU - 8.5US</span>
                  <p class="text-lg font-bold">{item.price}</p>
                </div>
              </div>
              <div class="flex flex-col rounded-lg bg-white sm:flex-row">
               
                <div class="flex w-full flex-col px-4 py-4">
                  <span class="font-semibold">
                    {item.category}
                  </span>
                  <span class="float-right text-gray-400">42EU - 8.5US</span>
                  <p class="mt-auto text-lg font-bold">$238.99</p>
                </div>
              </div>
            </div>
            </div>
            ))}
            <p class="mt-8 text-lg font-medium">Shipping Methods</p>
            
                  <div class="ml-5">
                    <span class="mt-2 font-semibold">Cash on Delivery</span>
                    <p class="text-slate-500 text-sm leading-6">
                      Delivery: 40min
                    </p>
                  </div>
              
              </div>
            
            
          </div>
          <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p class="text-xl font-medium">Payment Details</p>
            <p class="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <div class="">
              <label for="email" class="mt-4 mb-2 block text-sm font-medium">
                Email
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <label
                for="card-holder"
                class="mt-4 mb-2 block text-sm font-medium"
              >
                 
                Card Holder
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <label
                for="card-holder"
                class="mt-4 mb-2 block text-sm font-medium"
              >
                Phone Number
              </label>
              <div class="relative">
                <input
                  type="number"
                  id="number"
                  name="phone number"
                  class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full number here"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <label
                for="billing-address"
                class="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address
              </label>
              <div class="flex flex-col sm:flex-row">
                <div class="relative flex-shrink-0 sm:w-7/12">
                  <input
                    type="text"
                    id="billing-address"
                    name="billing-address"
                    class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Street Address"
                  />
                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img
                      class="h-4 w-4 object-contain"
                      src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                      alt=""
                    />
                  </div>
                </div>
                <select
                  type="text"
                  name="billing-state"
                  class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="State">State</option>
                </select>
                <input
                  type="text"
                  name="billing-zip"
                  class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="ZIP"
                />
              </div>
              Total
              <div class="mt-6 border-t border-b py-2">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-900">Subtotal</p>
                  <p class="font-semibold text-gray-900">$399.00</p>
                </div>
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-900">Shipping</p>
                  <p class="font-semibold text-gray-900">price</p>
                </div>
              </div>
            
              <div class="mt-6 flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Total</p>
                <p class="text-2xl font-semibold text-gray-900">price</p>
              </div>
            </div>
          
            <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
              Place Order
            </button>
          </div>
          
        </div>
        
    </>
  );
};
export default Checkout;
