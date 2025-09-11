import {
  forwardRef,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
} from "react";
import cn from "../../utils/cn";

type TRef = HTMLButtonElement;

type TVariant = "outline" | "ghost" | "solid";

type TVariantOptions = {
  variant?: TVariant;
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TVariantOptions;

const Button = forwardRef<TRef, TButton>(
  ({ className, variant = "solid", ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";

        default:
          return "btn-solid";
      }
    };

    return (
      <button
        {...rest}
        ref={ref}
        className={cn(getVariant(variant), className)}>
        Click
      </button>
    );
  }
);

export default Button;
