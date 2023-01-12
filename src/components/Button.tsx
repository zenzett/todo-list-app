import { RxTrash, RxPencil2 } from "react-icons/rx";
import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="btn w-fit text-xs px-3 lg:tracking-wider lg:text-sm"
      {...props}
    >
      {label}
    </button>
  );
};

export const EditButton: FC<ButtonProps> = () => {
  return (
    <button className="rounded-md p-2 lg:p-3 w-fit tracking-wider m-0 text-2xl duration-200 active:scale-90 bg-yellow-600 text-gray-900 border-transparent">
      <RxPencil2 />
    </button>
  );
};

export const DeleteButton: FC<ButtonProps> = () => {
  return (
    <button className="rounded-md p-2 lg:p-3 w-fit tracking-wider m-0 text-2xl duration-200 active:scale-90 bg-red-600 text-gray-900 border-transparent">
      <RxTrash />
    </button>
  );
};
