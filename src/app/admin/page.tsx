import { TextField } from "@mui/material";

export default function adminPage() {
  return (
    <div>
      <h1>Create Restaurant</h1>
      <div>
        <TextField id="name" label="Name" variant="outlined" size="small" />
        <TextField id="foodtype" label="Food Type" variant="outlined" size="small" />
      </div>
    </div>
  );
}
