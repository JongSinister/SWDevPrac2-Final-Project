import {render,screen,waitFor} from "@testing-library/react";
import {useSession} from "next-auth/react";
import {userEvent} from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Banner from "@/components/Banner";

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
})