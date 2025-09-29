import type { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

type TInputProps = {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
};

export const Input = ({ label, register, errors, type }: TInputProps) => {
  return (
    <div className="w-full max-w-md">
      <label className="block capitalize" htmlFor={label}>
        {label}
      </label>
      <input type={type} id={label} {...register} />
      {errors[label] && (
        <span className="text-xs text-red-500">
          {String(errors[label].message)}
        </span>
      )}
    </div>
  );
};
