import { useContext, type ReactNode } from "react";
import cn from "../../utils/cn";
import { FormElementContext } from "./FormElementProvider";

type TFormSectionProps = {
  children: ReactNode;
};

export const FormSection = ({ children }: TFormSectionProps) => {
  const context = useContext(FormElementContext);

  if (!context) {
    throw new Error("FormSection must be used inside a FormElementProvider");
  }

  const { double } = context;

  return (
    <div
      className={cn(" grid grid-cols-1 justify-items-center gap-5", {
        "md:grid-cols-2": double,
      })}>
      {children}
    </div>
  );
};
