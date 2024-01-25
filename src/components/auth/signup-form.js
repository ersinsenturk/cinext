import Button from "@/src/components/ui/button";
import Link from "next/link";

const SignupForm = () => {
  return (
    <div className="p-4 md:p-5">
      <form className="space-y-4" action="#">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-white border border-color2 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-600 dark:border-color3 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-white border border-color2 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-600 dark:border-color3 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-white border border-color2 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-600 dark:border-color3 dark:text-white"
            required
          />
        </div>
        <div className="flex justify-between">
          {/* <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a> */}
        </div>
        {/* <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button> */}
        <Button>Submit</Button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Have an account?{" "}
          <Link href="/login" replace className="underline" scroll={false}>
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
