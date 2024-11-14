import {render,screen,waitFor} from "@testing-library/react";
import {useSession} from "next-auth/react";
import {userEvent} from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Banner from "@/components/Banner";
import { get } from "http";
import RestaurantCard from "@/components/RestaurantCard";

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    query: {},
    pathname: '/',
  }),
}));

describe("Admin views",()=>{

    it("Should exists an admin restaurant console",async()=>{
      render(<Banner isAdmin={true} />);
      const adminConsoleText = screen.getByText("Admin Restaurant Console");
      expect(adminConsoleText).toBeInTheDocument();
    })

    it("Should exists an admin restaurant console",async()=>{
      const mockOnDelete = jest.fn();
      render(<RestaurantCard id={"672fc12b6291757b2b4ccee0"} imgSrc={"/img/date.png"} 
        restaurantName={"MK"} foodtype={"general"} 
        isAdmin={true} onDelete={mockOnDelete} />);
      expect(screen.getByText("MK")).toBeInTheDocument();
      expect(screen.getByText("general Food")).toBeInTheDocument();
      const deleteButton = screen.getByText("Delete");
      expect(deleteButton).toBeInTheDocument();
    })
})