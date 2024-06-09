"use client";
import { Hotel, Room } from "@prisma/client";

export type HotelWithRooms = Hotel & {
  rooms: Room[];
};

interface AddHotelFormProps {
  hotel: HotelWithRooms | null;
}

const AddHotelForm: React.FC<AddHotelFormProps> = ({ hotel }) => {
  return <div>AddHotelForm</div>;
};

export default AddHotelForm;
