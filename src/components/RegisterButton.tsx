'use client'
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import Register from '@/libs/userRegister';
import { signIn } from 'next-auth/react';

export default function RegisterButton({ name, phoneNumber, userEmail, password }:{name:string, phoneNumber:string, userEmail:string, password:string}) {
    
    const router = useRouter();

    const handleRegister = async () => {
        try {
            const response = await Register(name, phoneNumber, userEmail, password);

            //auto login after registration

            if (response.success) {
                const loginResponse = await signIn('credentials', {
                    redirect: false,
                    email: userEmail,
                    password: password,
                });

                if (!loginResponse?.ok) {
                    alert("Auto login failed. Please try logging in manually.");
                }
                console.log(loginResponse);
                router.push('/');
                
            } else {
                alert(response.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            alert(error || "Registration failed. Please try again.");
        }
    };

    return (
        <Button
            className="w-40 bg-gray-800 m-7 p-3 text-white hover:bg-gray-600 hover:shadow-xl text-xl font-sans font-bold"
            onClick={handleRegister}
        >
            Register
        </Button>
    );
}