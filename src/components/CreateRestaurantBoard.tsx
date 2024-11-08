import { TextField } from "@mui/material";

export default function CreateRestaurantBoard() {
  return (
    <div className="flex flex-col w-64 space-y-2 ml-5 mt-2 bg-slate-300 p-2 rounded-md">
      <TextField
        className="bg-white rounded-md"
        id="name"
        label="Name"
        variant="outlined"
        size="small"
        type="text"
      />
      <TextField
        className="bg-white rounded-md"
        id="address"
        label="Address"
        variant="outlined"
        size="small"
      />
      <TextField
        className="bg-white rounded-md"
        id="foodtype"
        label="Food Type"
        variant="outlined"
        size="small"
      />
      <TextField
        className="bg-white rounded-md"
        id="province"
        label="Province"
        variant="outlined"
        size="small"
      />
      <TextField
        className="bg-white rounded-md"
        id="tel"
        label="Telephone Number"
        variant="outlined"
        size="small"
      />
      <TextField
        className="bg-white rounded-md"
        id="picture"
        label="Picture URL"
        variant="outlined"
        size="small"
      />
      <button className="bg-green-400 hover:bg-green-600 rounded-lg w-2/3">
        Create Restaurant
      </button>
    </div>
  );
}
