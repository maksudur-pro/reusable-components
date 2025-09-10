import cn from "../../utils/cn";

type TButton = {
  className: string;
  value: string;
  outline: boolean;
};

// `bg-purple-500 px-3 py-2 rounded-md ${className}  ${
//   variant === "outline" ? "border border-purple-500 bg-opacity-10" : ""
// }`

const Button = ({ className, value, outline }: TButton) => {
  return (
    <button
      className={cn(
        `bg-purple-500 px-3 py-2 rounded-md `,
        {
          "border border-purple-500 bg-opacity-10": outline,
        },
        className
      )}>
      {value}
    </button>
  );
};

export default Button;
