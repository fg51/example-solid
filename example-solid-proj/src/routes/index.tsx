import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

import { createForm, SubmitHandler } from "@modular-forms/solid";
import { email, required } from "@modular-forms/solid";

type LoginForm = {
  email: string;
  password: string;
};

export default function Home() {
  const [LoginForm, { Form, Field }] = createForm<LoginForm>();
  const handleSubmit: SubmitHandler<LoginForm> = (values, event) => {};

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Counter />

      <Form onSubmit={handleSubmit}>
        <Field
          name="email"
          validate={
            (required("Please enter your email"),
            email("The email address is badly formatted."))
          }
        >
          {(field, props) => (
            <>
              <input {...props} type="email" required />
              {field.error && <div>{field.error}</div>}
            </>
          )}
        </Field>
        <Field name="password">
          {(field, props) => <input {...props} type="password" />}
        </Field>
        <button type="submit">Login</button>
      </Form>

      <p class="mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
    </main>
  );
}
