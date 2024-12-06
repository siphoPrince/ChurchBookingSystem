"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

// Add the Datetime to your schema
const FormSchema = z.object({
  Name: z.string().min(2, { message: "Enter your name!" }),
  Surname: z.string().min(2, { message: "Enter your surname!" }),
  Contact: z.string().regex(/^\d+$/, { message: "Enter a valid number!" }),
  reason: z.string().optional(),
  emailAddress: z.string().email("Please enter a valid email address."),
  Datetime: z.string().nonempty("Please select a date and time!"),
});

export default function Home() {
  // Get the current date and time in the correct format (yyyy-MM-ddThh:mm)
  const currentDatetime = new Date().toISOString().slice(0, 16); // 2024-12-06T14:30

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      emailAddress: "",
      Name: "",
      Surname: "",
      Contact: "",
      reason: "",
      Datetime: currentDatetime, // Set default date and time
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log("Form values:", values); // Handle form submission here
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Booking Form</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Surname Field */}
            <FormField
              control={form.control}
              name="Surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Surname</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your surname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Contact Field */}
            <FormField
              control={form.control}
              name="Contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your contact number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Reason Field (Optional) */}
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your reason (optional)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email Field */}
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Date and Time Field */}
            <FormField
              control={form.control}
              name="Datetime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date and Time</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
