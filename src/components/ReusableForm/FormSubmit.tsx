import { useContext } from "react";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { FormElementContext } from "./FormElementProvider";

export const FormSubmit = () => {
  const context = useContext(FormElementContext);

  if (!context) {
    throw new Error("FormSection must be used inside a FormElementProvider");
  }

  const { double } = context;
  return (
    <div
      className={cn(" grid grid-cols-1 justify-items-center gap-5 my-8", {
        "md:grid-cols-2": double,
      })}>
      <div className="w-full max-w-md flex justify-end col-start-1 md:col-start-2">
        <Button className="w-full md:w-fit">Submit</Button>
      </div>
    </div>
  );
};
