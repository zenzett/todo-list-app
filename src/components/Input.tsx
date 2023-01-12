import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export const Input: FC<Props> = ({ id, ...props }) => {
  return (
    <div>
      <input
        id={id}
        className="input input-bordered border-2 border-slate-500 w-full"
        {...props}
      />
    </div>
  );
};

export const TextArea: FC<Props> = ({ id, ...props }) => {
  return (
    <div className="mb-3">
      <input id={id} className="input input-bordered w-full" {...props} />
    </div>
  );
};
