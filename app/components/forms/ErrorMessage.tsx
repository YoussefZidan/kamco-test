import { ReactNode } from "react";

interface ErrorMessageProps {
  children: ReactNode;
}

function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className="mt-2 text-sm text-red-600">{children}</p>;
}

export default ErrorMessage;
