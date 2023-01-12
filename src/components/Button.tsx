import { RxTrash, RxPencil2 } from "react-icons/rx";
import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className="btn w-full tracking-wider" {...props}>
      {label}
    </button>
  );
};

export const EditButton: FC<ButtonProps> = () => {
  return (
    <button className="btn w-full tracking-wider text-2xl bg-yellow-600 border-transparent">
      <RxPencil2 />
    </button>
  );
};

export const DeleteButton: FC<ButtonProps> = () => {
  return (
    <button className="btn w-full tracking-wider text-2xl bg-red-600 border-transparent">
      <RxTrash />
    </button>
  );
};
