import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import leftImage from "@/assets/new/about-page/about-hero-left-side.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const inputClassName =
  "text-[20px] md:text-[25px] bg-[#1F273678] leading-[116%] rounded-[35px] pl-10 flex items-center py-8 border-none w-full";

const formSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Please enter your company name"),
  honeypot: z.string().optional(),
});

export const FillOurForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setError("");
    setLoading(true);
    setSuccess(false);
    console.log("my data", data);
    if (!data.honeypot) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_HASTRA_PULSE_URL}/public/api/v1/contact`,
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
          toast({
            title: "Unable to submit",
            description: `Received an error: ${responseJSON}`,
          });
        } else {
          setSuccess(true);
          toast({
            title: "Submitted!",
            description: `Our team will reach out to you soon. Until then, feel free to continue to explore.`,
          });
        }
      } catch (e) {
        setSuccess(false);
        toast({
          title: "Unable to submit",
          description: `Received an error: ${(e as Error).toString()}`,
        });
      }
    } else {
      setSuccess(true);
      toast({
        title: "Bot detected",
        description: `Please stop spamming us`,
      });
    }
    setLoading(false);
  };
  return (
    <section
      className="relative max-w-[96rem] mx-auto px-4 md:px-10 font-season-sans pt-[100px] pb-[100px] md:pb-[150px]"
      aria-label="Fill out our form"
    >
      <h3 className="text-[35px] md:text-[40px] text-center">
        Want to bring wYLDS to your platform or chain?
        <br className="hidden md:block" />{" "}
        <span className="text-brand-purple">Fill out our form</span> to get
        started.
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-6 flex flex-col space-y-6"
        >
          {success ? (
            <p className="text-center w-1/2 self-center text-platinum/80">
              Thank you for submitting a request! Our team will review your
              information and reach out to you shortly.
            </p>
          ) : (
            <div className="flex flex-col space-y-6">
              <input className="hidden" {...form.register("honeypot")} />
              <div className="space-y-6 lg:flex lg:gap-[64px] lg:space-y-0">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="space-y-8 w-full">
                      <FormLabel className="text-[22px] md:text-[25px] leading-[111%]">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="string"
                          className={inputClassName}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="space-y-8 w-full">
                      <FormLabel className="text-[22px] md:text-[25px] leading-[111%]">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="string"
                          className={inputClassName}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-6 lg:flex lg:gap-[64px] lg:space-y-0">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-8 w-full">
                      <FormLabel className="text-[22px] md:text-[25px] leading-[111%]">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="string"
                          className={inputClassName}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="space-y-8 w-full">
                      <FormLabel className="text-[22px] md:text-[25px] leading-[111%]">
                        Company
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="string"
                          className={inputClassName}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex w-full justify-center pt-10">
                <Button
                  size="custom"
                  disabled={!form.formState.isValid}
                  className="rounded-full text-base leading-[110%] shadow-brand-card text-brand-white py-[20px] px-[26px] hover:bg-brand-background bg-brand-background w-full sm:w-fit sm:min-w-[225px]"
                  variant="noShadow"
                >
                  {form.formState.isSubmitting ? (
                    "Submitting"
                  ) : (
                    <div className="flex items-center gap-4">
                      Submit <ArrowRight className="size-6" />
                    </div>
                  )}
                </Button>
              </div>
            </div>
          )}{" "}
          {error && (
            <div className="space-y-4 text-sm">
              <p className="">
                There was an error submitting your request. Please try again.
              </p>
              <p className="text-red-500">Error: {error}</p>
            </div>
          )}
        </form>
      </Form>
      <img
        src={leftImage}
        alt="right image"
        className="absolute right-0 top-20 hidden md:block h-[735px] rotate-180"
      />
    </section>
  );
};
