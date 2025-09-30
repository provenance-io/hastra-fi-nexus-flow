import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Please enter your company name"),
  honeypot: z.string().optional(),
});

const WYLDsTypeformEmbed = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setError("");
    setLoading(true);
    setSuccess(false);
    if (!data.honeypot) {
      const response = await fetch(
        "https://hastra.io/hastra-pulse/notion-contact-form",
        {
          method: "POST",
          body: JSON.stringify({
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            company: data.company,
          }),
        }
      );
      const responseJSON = await response.json();
      if (!response.ok) {
        setError(JSON.stringify(responseJSON));
      } else {
        setSuccess(true);
      }
    } else {
      setSuccess(true);
    }
    setLoading(false);
  };
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col space-y-6"
        >
          <div className="text-center mb-2">
            <p
              className="text-lg md:text-xl lg:text-2xl text-platinum/80 leading-relaxed"
              style={{
                textShadow:
                  "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)",
              }}
            >
              Want to bring PRIME to your platform or chain? Fill out our form
              to get started.
            </p>
          </div>
          {success ? (
            <p className="text-center w-1/2 self-center text-platinum/80">
              Thank you for submitting a request! Our team will review your
              information and reach out to you shortly.
            </p>
          ) : (
            <>
              <input className="hidden" {...register("honeypot")} />
              <div className="space-y-6 lg:flex lg:gap-4 lg:space-y-0">
                <div className="space-y-2 w-full">
                  <Label>First Name</Label>
                  <Input {...register("firstName")} />
                  {errors.firstName && (
                    <p className="text-red-500  text-sm">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>
                <div className="space-y-2 w-full">
                  <Label>Last Name</Label>
                  <Input {...register("lastName")} />
                  {errors.lastName && (
                    <p className="text-red-500  text-sm">
                      {errors.lastName.message as string}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-6 lg:flex lg:gap-4 lg:space-y-0">
                <div className="space-y-2 w-full">
                  <Label>Email</Label>
                  <Input {...register("email")} />
                  {errors.email && (
                    <p className="text-red-500  text-sm">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>
                <div className="space-y-2 w-full">
                  <Label>Company</Label>
                  <Input {...register("company")} />
                  {errors.company && (
                    <p className="text-red-500  text-sm">
                      {errors.company.message as string}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                variant="secondary"
                className="w-full lg:w-1/2 self-center"
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </>
          )}
          {error && (
            <div className="space-y-4 text-sm">
              <p className="">
                There was an error submitting your request. Please try again.
              </p>
              <p className="text-red-500">Error: {error}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default WYLDsTypeformEmbed;
