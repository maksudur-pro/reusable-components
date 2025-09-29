import { useFormContext } from "react-hook-form";

type TInputType = {
  inputValue: string;
  inputType: string;
};

const InputField = ({ inputValue, inputType }: TInputType) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label className="block capitalize" htmlFor={inputValue}>
        {inputValue}
      </label>
      <input
        type={inputType}
        id={inputValue}
        {...register(inputValue, { required: `${inputValue} is required` })}
        className="border p-2 rounded w-full"
      />
      {errors[inputValue] && (
        <span className="text-xs text-red-500">
          {errors[inputValue]?.message as string}
        </span>
      )}
    </>
  );
};

export default InputField;
