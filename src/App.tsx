import Container from "./components/ui/Container";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReusableForm";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const TestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email(),
});

type TTest = z.infer<typeof TestSchema>;

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>({
    resolver: zodResolver(TestSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      <Form double={true} onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <Input
            type="text"
            register={register("name")}
            label="name"
            errors={errors}
          />
          <Input
            type="email"
            register={register("email")}
            label="email"
            errors={errors}
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
}

export default App;
