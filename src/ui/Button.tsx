import { PropsWithChildren } from 'react';

interface ButtonType {
  type: 'button' | 'submit';
  onClick?: () => void;
}

export default function Button({ type, children, onClick }: PropsWithChildren<ButtonType>) {
  return (
    <button
      type={type}
      className="py-2 px-4 rounded shadow-lg text-lg bg-blue-900 hover:bg-blue-800 transition text-blue-200 cursor-pointer hover:shadow-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
