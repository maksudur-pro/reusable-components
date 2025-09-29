import { createContext } from "react";

export const FormElementContext = createContext<{ double: boolean } | null>(
  null
);
