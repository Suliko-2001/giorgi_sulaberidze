import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// 6.2 ვალიდაციის სქემა
const schema = yup
  .object({
    name: yup.string().required("სახელი სავალდებულოა"),
    email: yup
      .string()
      .email("შეიყვანეთ სწორი ელფოსტა")
      .required("ელფოსტა სავალდებულოა"),
    password: yup
      .string()
      .min(6, "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო")
      .required("პაროლი სავალდებულოა"),
  })
  .required();

function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("ფორმის მონაცემები:", data);
    reset();
  };

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #FF9800",
        margin: "1rem 0",
        maxWidth: "400px",
      }}
    >
      <h3>6. სარეგისტრაციო ფორმა</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block" }}>სახელი:</label>
          <input
            {...register("name")}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.name && (
            <p style={{ color: "red", margin: "0.2rem 0" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block" }}>ელფოსტა:</label>
          <input
            {...register("email")}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.email && (
            <p style={{ color: "red", margin: "0.2rem 0" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block" }}>პაროლი:</label>
          <input
            type="password"
            {...register("password")}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.password && (
            <p style={{ color: "red", margin: "0.2rem 0" }}>
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
        >
          რეგისტრაცია
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
