'use client'
import { useState } from "react";
import { TextField } from "@mui/material";
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Register() {
    
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };      


    return(
        <div className="m-5">
            <div className="text-5xl font-sans font-bold">
                Register
            </div>
      
            <div className="mx-20 flex flex-col font-sans font-bold text-xl w-full my-5">

                Name :
                <TextField name="Name" className="min-w-64 max-w-xl mb-10" variant="standard" placeholder="Name" 
                    value={name} onChange={(e)=>{setName(e.target.value)}}/>

                Telephone Number : 
                <TextField name="PhoneNumber" className="min-w-64 max-w-xl mb-10" 
                  type="tel" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} 
                  placeholder="000-000-0000" variant="standard"/>

                Email : 
                <TextField name="Email" value={userEmail} className="min-w-64 max-w-xl mb-10"
                  onChange={(e)=>{setUserEmail(e.target.value)}}
                  placeholder="user@gmail.com" variant="standard"/>

                Password : 
                <TextField name="Password" value={password} className="min-w-64 max-w-xl mb-10"
                  onChange={(e)=>{setPassword(e.target.value)}} type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="******" variant="standard"/>

            </div>
    </div>
    )
}