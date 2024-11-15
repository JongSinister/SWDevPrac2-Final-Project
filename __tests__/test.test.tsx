import {render,screen,waitFor} from "@testing-library/react";
import {useSession} from "next-auth/react";
import {userEvent} from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Banner from "@/components/Banner";
import { get } from "http";
import RestaurantCard from "@/components/RestaurantCard";

//Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    query: {},
    pathname: '/',
  }),
}));

//Mock useSession
jest.mock('next-auth/react',()=>({
  useSession(){
      return {
          data:null,user:{name:'Tester'}
      }
  }
}))

describe("Admin and User views",()=>{

    it("Should exists an admin restaurant console button",async()=>{
      render(<Banner isAdmin={true} />);
      const adminConsoleText = screen.getByText("Admin Restaurant Console");
      expect(adminConsoleText).toBeInTheDocument();
    })

    it("Should exists a delete button for admin",async()=>{
      const mockOnDelete = jest.fn();
      render(<RestaurantCard id={"001"} imgSrc={"/img/mk.png"} 
        restaurantName={"MK"} foodtype={"General"} 
        isAdmin={true} onDelete={mockOnDelete} />);
      expect(screen.getByText("MK")).toBeInTheDocument();
      expect(screen.getByText("General Food")).toBeInTheDocument();
      const deleteButton = screen.getByText("Delete");
      expect(deleteButton).toBeInTheDocument();
    })

    it("Should show restaurant details for users",async()=>{
      const mockOnDelete = jest.fn();
      render(<RestaurantCard id={"001"} imgSrc={"/img/mk.png"} 
        restaurantName={"MK"} foodtype={"General"} 
        isAdmin={false} onDelete={mockOnDelete} />);
      expect(screen.getByText("MK")).toBeInTheDocument();
      expect(screen.getByText("General Food")).toBeInTheDocument();
    })
})