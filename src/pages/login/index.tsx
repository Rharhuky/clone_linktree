import { Link } from "react-router";
import Input from "../../components/input";
import { FormEvent, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState();

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    console.log({
      email: email,
      password: password,
    });
  }

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

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col px-2"
        action=""
      >
        <Input
          placeholder="Type your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Type your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="h-9 bg-blue-600 rounded-md text-lg font-medium text-white cursor-pointer">
          Entrar
        </button>
      </form>
    </div>
  );
}
