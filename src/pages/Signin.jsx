const Sigin = () => {
  return (
    <>
      <div class="flex items-center h-screen w-full">
        <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span class="block w-full text-xl uppercase font-bold mb-4">
            Login
          </span>
          <form class="mb-4" action="/" method="post">
            <div class="mb-4 md:w-full">
              <label for="email" class="block text-xs mb-1">
                Email
              </label>
              <input
                class="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                placeholder=" Email"
              />
            </div>
            <div class="mb-6 md:w-full">
              <label for="password" class="block text-xs mb-1">
                Password
              </label>
              <input
                class="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button class="bg-red-500 hover:bg-red-700 text-white  text-sm font-semibold px-4 py-2 rounded">
              Login
            </button>
          </form>
          <a class="text-blue-700 text-center text-sm" href="/login">
            Forgot password?
          </a>
        </div>
      </div>
    </>
  );
};
export default Sigin;
