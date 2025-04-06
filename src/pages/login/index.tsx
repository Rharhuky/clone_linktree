import { Link } from "react-router";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <Link to={"/"}>
        <h1 className="text-white mt-11 mb-7 font-bold text-5xl">
          Rharh
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
            uky
          </span>
        </h1>
      </Link>
    </div>
  );
}
