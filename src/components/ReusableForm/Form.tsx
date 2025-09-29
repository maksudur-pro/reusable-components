import cn from "../../utils/cn";
import type { TForm } from "../../types";
import { FormElementContext } from "./FormElementProvider";

export const Form = ({ children, onSubmit, double = false }: TForm) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn(
          "border border-gray-300 rounded-lg shadow-sm max-w-md p-5 mx-auto mt-10",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}>
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
