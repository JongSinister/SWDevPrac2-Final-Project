"use client";
import { TextField } from "@mui/material";
import { useState } from "react";
import createRestaurant from "@/libs/createRestaurant";

export default function CreateRestaurantBoard() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [foodType, setFoodType] = useState("");
  const [province, setProvince] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [tel, setTel] = useState("");
  const [picture, setPicture] = useState("");

  const handleCreateRestaurant = async () => {
    const restaurant = {
      name,
      address,
      foodtype: foodType,
      province,
      postalcode,
      tel,
      picture,
    } as RestaurantItem;
    await createRestaurant(restaurant);
  };

  return (
    <div className="flex flex-col w-64 space-y-2 ml-5 mt-2 bg-slate-100 p-2 rounded-md">
      <TextField
        className="bg-white rounded-md"
        id="name"
        label="Name"
        variant="outlined"
        size="small"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        className="bg-white rounded-md"
        id="address"
        label="Address"
        variant="outlined"
        size="small"
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        className="bg-white rounded-md"
        id="foodtype"
        label="Food Type"
        variant="outlined"
        size="small"
        onChange={(e) => setFoodType(e.target.value)}
      />
      <TextField
        className="bg-white rounded-md"
        id="province"
        label="Province"
        variant="outlined"
        size="small"
        onChange={(e) => setProvince(e.target.value)}
      />
      <TextField
        className="bg-white rounded-md"
        id="postalcode"
        label="Postal Code"
        variant="outlined"
        size="small"
        onChange={(e) => setPostalcode(e.target.value)}
      />
      <TextField
        className="bg-white rounded-md"
        id="tel"
        label="Telephone Number"
        variant="outlined"
        size="small"
        onChange={(e) => setTel(e.target.value)}
      />
      <TextField
        className="bg-white rounded-md"
        id="picture"
        label="Picture URL"
        variant="outlined"
        size="small"
        onChange={(e) => setPicture(e.target.value)}
      />
      <button className="bg-green-400 hover:bg-green-600 rounded-lg w-2/3 h-8" onClick={handleCreateRestaurant}>
        Create Restaurant
      </button>
    </div>
  );
}
