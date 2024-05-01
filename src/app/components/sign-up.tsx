'use client'
import { useRouter } from 'next/navigation'

export default function SignUp({ size }: { size?: string }) {
    const router = useRouter();

    const handleRedirect = () => {
        router.push('/signup');
    };
    return (
        <button onClick={handleRedirect} type="button" className={`btn btn-primary ${size}`}>Sign-up</button>
    );
}
