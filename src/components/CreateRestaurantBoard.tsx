"use client";
import { TextField } from "@mui/material";
import { useState } from "react";
import createRestaurant from "@/libs/createRestaurant";
import Link from "next/link";

export default function CreateRestaurantBoard() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [foodType, setFoodType] = useState("");
  const [province, setProvince] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [tel, setTel] = useState("");
  const [picture, setPicture] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    address: false,
    foodType: false,
    province: false,
    postalcode: false,
    tel: false,
    picture: false,
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleCreateRestaurant = async () => {
    const isPictureValid =
      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$|^(https:\/\/drive\.google\.com\/.*)$/i.test(
        picture
      );

    const newErrors = {
      name: !name,
      address: !address,
      foodType: !foodType,
      province: !province,
      postalcode: !postalcode,
      tel: !tel,
      picture: !picture || !isPictureValid,
    };
    setErrors(newErrors);

    // If there are any errors, don't proceed with the submission
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

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

    // Show success message and reset form
    setSuccessMessage("Restaurant created successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
    setName("");
    setAddress("");
    setFoodType("");
    setProvince("");
    setPostalcode("");
    setTel("");
    setPicture("");
  };

  return (
    <div className="flex flex-col items-center w-80 space-y-4 mx-auto my-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        Create Restaurant
      </h2>

      {successMessage && (
        <p className="text-green-600 font-medium text-sm">{successMessage}</p>
      )}

      <TextField
        className={`w-full ${errors.name ? "border-red-500" : ""}`}
        label="Name"
        variant="outlined"
        size="small"
        required
        error={errors.name}
        value={name}
        helperText={errors.name ? "Name is required" : ""}
        onChange={(e) => {
          setName(e.target.value);
          setErrors((prev) => ({ ...prev, name: false }));
        }}
      />
      <TextField
        className={`w-full ${errors.address ? "border-red-500" : ""}`}
        label="Address"
        variant="outlined"
        size="small"
        required
        error={errors.address}
        value={address}
        helperText={errors.address ? "Address is required" : ""}
        onChange={(e) => {
          setAddress(e.target.value);
          setErrors((prev) => ({ ...prev, address: false }));
        }}
      />
      <TextField
        className={`w-full ${errors.foodType ? "border-red-500" : ""}`}
        label="Food Type"
        variant="outlined"
        size="small"
        required
        error={errors.foodType}
        value={foodType}
        helperText={errors.foodType ? "Food Type is required" : ""}
        onChange={(e) => {
          setFoodType(e.target.value);
          setErrors((prev) => ({ ...prev, foodType: false }));
        }}
      />
      <TextField
        className={`w-full ${errors.province ? "border-red-500" : ""}`}
        label="Province"
        variant="outlined"
        size="small"
        required
        error={errors.province}
        value={province}
        helperText={errors.province ? "Province is required" : ""}
        onChange={(e) => {
          setProvince(e.target.value);
          setErrors((prev) => ({ ...prev, province: false }));
        }}
      />
      <TextField
        className={`w-full ${errors.postalcode ? "border-red-500" : ""}`}
        label="Postal Code"
        variant="outlined"
        size="small"
        required
        error={errors.postalcode}
        value={postalcode}
        helperText={errors.postalcode ? "Postal Code is required" : ""}
        onChange={(e) => {
          setPostalcode(e.target.value);
          setErrors((prev) => ({ ...prev, postalcode: false }));
        }}
      />
      <TextField
        className={`w-full ${errors.tel ? "border-red-500" : ""}`}
        label="Telephone Number"
        variant="outlined"
        size="small"
        required
        error={errors.tel}
        value={tel}
        helperText={errors.tel ? "Telephone Number is required" : ""}
        onChange={(e) => {
          setTel(e.target.value);
          setErrors((prev) => ({ ...prev, tel: false }));
        }}
      />
      <TextField
        className={`w-full ${errors.picture ? "border-red-500" : ""}`}
        label="Picture URL"
        variant="outlined"
        size="small"
        required
        error={errors.picture}
        value={picture}
        helperText={errors.picture ? "Please enter a valid picture URL" : ""}
        onChange={(e) => {
          setPicture(e.target.value);
          setErrors((prev) => ({ ...prev, picture: false }));
        }}
      />

      <button
        className="bg-green-500 hover:bg-green-600 transition-all text-white font-medium py-2 px-4 rounded-lg mt-4 w-full"
        onClick={handleCreateRestaurant}
      >
        Create Restaurant
      </button>
    </div>
  );
}
