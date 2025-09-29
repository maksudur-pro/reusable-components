import type { FormEventHandler, ReactNode } from "react";

export type TForm = {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  double?: boolean;
};
