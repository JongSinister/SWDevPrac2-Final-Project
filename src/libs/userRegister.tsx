export default async function Register(userName:string,userPhoneNumber:string,userEmail: string, userPassword: string) {
    
    const response = await fetch("https://restaurant-booking-project-backend.vercel.app/api/v1/auth/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:userName,
            tel:userPhoneNumber,
            email:userEmail,
            password:userPassword,
            role:"user"
        }),
    })
    if(!response.ok){
        throw new Error("Failed to login")
    }
    return await response.json()
}