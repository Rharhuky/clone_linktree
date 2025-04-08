import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
      className=" border-0 h-9 bg-white rounded-md outline-none px-2 py-1 mb-3 shadow-2xl"
      {...props}
    />
  );
}
