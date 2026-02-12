'use client'
import Link from 'next/link';
import styles from './login.module.css';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = z.infer<typeof loginSchema>;

const loginSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email address'),
    password: z.string().min(1, 'Password is required')
})

export default function LoginPage() {

    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(loginSchema)
    });
    const router = useRouter();

    const submitHandler = async (data: FormData) => {
        try {
            const res = await fetch('http://localhost:4000/api/auth/login', {
                credentials: 'include',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password
                })
            })
            const responseData = await res.json();
            if (!res.ok) {
                throw new Error(responseData.message || 'Something went wrong')
            }
            router.push('/');
        } catch (err) {
            setError('root', {
                type: 'server',
                message: err instanceof Error ? err.message : 'Something went wrong. please try again'
            })
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Welcome back</h1>
                    <p className={styles.subtitle}>Enter your credentials to access your account</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Enter your email"
                            {...register('email')}
                        />
                        {errors.email && <span className={styles.error}>{errors.email.message as string}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            {...register('password')}
                            className={styles.input}
                            placeholder="Enter your password"
                        />
                        {errors.password && <span className={styles.error}>{errors.password.message as string}</span>}
                    </div>

                    <div className={styles.options}>
                        <Link href="/forgot-password" className={styles.forgotPassword}>
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        {isSubmitting ? 'Loading...' : 'Sign In'}
                    </button>
                    {errors.root && <div className={styles.serverError}>{errors.root.message as string}</div>}
                </form>

                <p className={styles.footer}>
                    Don&apos;t have an account?
                    <Link href="/signup" className={styles.footerLink}>Sign up</Link>
                </p>
            </div>
        </div>
    );
}
