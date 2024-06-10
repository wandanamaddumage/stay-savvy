"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Hotel, Room } from "@prisma/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export type HotelWithRooms = Hotel & {
  rooms: Room[];
};

interface AddHotelFormProps {
  hotel: HotelWithRooms | null;
}

const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be atleast 3 characters long" }),
  description: z
    .string()
    .min(10, { message: "Title must be atleast 10 characters long" }),
  image: z.string().min(1, { message: "Image is required" }),
  country: z
    .string()
    .min(1, { message: "Description must be atleast 10 characters long" }),
  state: z.string().optional(),
  city: z.string().optional(),
  locationDescriptionz: z
    .string()
    .min(10, { message: "Description must be atleast 10 characters long" }),
  gym: z.boolean().optional(),
  spa: z.boolean().optional(),
  bar: z.boolean().optional(),
  laundry: z.boolean().optional(),
  restaurant: z.boolean().optional(),
  shopping: z.boolean().optional(),
  freeParking: z.boolean().optional(),
  bikeRental: z.boolean().optional(),
  movieNignts: z.boolean().optional(),
  swimmingPool: z.boolean().optional(),
  coffeeShop: z.boolean().optional(),
});

const AddHotelForm: React.FC<AddHotelFormProps> = ({ hotel }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      country: "",
      state: "",
      city: "",
      locationDescriptionz: "",
      gym: false,
      spa: false,
      bar: false,
      laundry: false,
      restaurant: false,
      shopping: false,
      freeParking: false,
      bikeRental: false,
      movieNignts: false,
      swimmingPool: false,
      coffeeShop: false,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hotel Title</FormLabel>
                <FormControl>
                  <Input placeholder="Beach Hotel" {...field} />
                </FormControl>
                <FormDescription>Provide your hotel name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default AddHotelForm;
