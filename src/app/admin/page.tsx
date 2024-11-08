import CreateRestaurantBoard from "@/components/CreateRestaurantBoard";

export default function adminPage() {
  return (
    <div className="ml-2">
      <h1 className="font-medium text-lg ml-3">Create Restaurant</h1>
      <CreateRestaurantBoard />
    </div>
  );
}
