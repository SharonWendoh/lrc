"use client"
import Image from "next/image";
import { FilledButton } from "@/app/components/buttons/filled-button";
import OutlinedTextField from "@/app/components/textfields/outlind-text-feld";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Page(){
    const router = useRouter();

    const handleLoginClick = () => {
        router.push('/pages/Dashboard'); // Replace '/details' with the actual path to your details page
      };
    return (
        <main>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                bgcolor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '16px'
                }}
                >
                    <Image
                    src="/safaricom-logo.png"
                    alt="Safaricom Logo"
                    width={359}
                    height={72}
                    style={{ marginBottom: '24px' }}
                />
                </Box>
                <Box sx={{
                    minHeight: '325px',
                    width: '356px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'grey',
                    padding: '16px',
                    borderRadius: '8px',
                    
                }}>
                    <OutlinedTextField />
                    <OutlinedTextField />
                    <FilledButton onClick={handleLoginClick}>
                        Login
                    </FilledButton>
                </Box>
            </Box>
        </main>
    )
}