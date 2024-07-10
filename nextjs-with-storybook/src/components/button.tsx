// type Props = {
//     /** some description*/
//     variant: 'green' | 'yellow' | 'red'
//     onClick: () => void;
// };

// import React from "react";

// /** some comment about my light components*/
// const Light: React.FC<Props> = ({variant,onClick}) => {
//   return (
//     <button
//     onClick={onClick}
//       className={`bg-${variant}-500 text-2xl p-5 w-20 h-20 rounded-full text-center`}
//     >

//     </button>
//   );
// };

// export default Light;




// button.tsx
import { ReactNode } from "react";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  children: ReactNode;
  backgroundColor?: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  children,
  onClick,
  className
}) => {
  const baseClasses =
    "font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
  const primaryClasses = primary
    ? "bg-blue-500 text-white"
    : "bg-gray-500 text-black";
  const sizeClasses =
    size === "small"
      ? "text-sm" 
      : size === "large"
        ? "text-[80px]"
        : "text-base";
  // const customStyles = backgroundColor ? { backgroundColor } : {};

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${primaryClasses} ${className}` }
      // style={customStyles}
    >
      {children}
    </button>
  );
};

export default Button;
