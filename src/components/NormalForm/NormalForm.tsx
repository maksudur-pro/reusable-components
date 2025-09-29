import { useForm, type FieldValues } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, type TNormalForm } from "./Validation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "border border-gray-300 rounded-lg shadow-sm max-w-md p-5 mx-auto mt-10",
        {
          "max-w-5xl": double,
          "max-w-md": !double,
        }
      )}>
      <div
        className={cn(" grid grid-cols-1 justify-items-center gap-5", {
          "md:grid-cols-2": double,
        })}>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { minLength: 8 })}
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>
      <div
        className={cn(" grid grid-cols-1 justify-items-center gap-5 my-8", {
          "md:grid-cols-2": double,
        })}>
        <div className="w-full max-w-md flex justify-end col-start-1 md:col-start-2">
          <Button className="w-full md:w-fit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
