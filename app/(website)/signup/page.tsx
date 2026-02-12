'use client'
import Link from 'next/link';
import styles from './signup.module.css';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signUpSchema = z.object({
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    role: z.string().min(1, 'Role is required'),
    password: z.string().min(1, 'Password is required'),
    confirmPassword: z.string().min(1, 'Confirm Password is required')
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ['confirmPassword']
})
type FormData = z.infer<typeof signUpSchema>;
export default function SignupPage() {
    const router = useRouter();
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            role: '',
            password: '',
            confirmPassword: '',
        }
    });
    const submitHandler = async (data: FormData) => {
        try {
            const res = await fetch('http://localhost:4000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const responseData = await res.json();
            if (!res.ok) {
                throw new Error(responseData.message || 'Something went wrong')
            }
            router.push('/login')
        } catch (err) {
            setError('root', {
                type: 'server',
                message: err instanceof Error ? err.message : 'Something went wrong'
            })
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Create an account</h1>
                    <p className={styles.subtitle}>Start your journey with IndieHires today</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
                    <div className={styles.nameRow}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>First name</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="John"
                                {...register('firstName')}
                            />
                            {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Last name</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Doe"
                                {...register('lastName')}
                            />
                            {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="john@example.com"
                            {...register('email')}
                        />
                        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>I want to join as</label>
                        <select className={styles.select} {...register('role')}>
                            <option value="">Select your role</option>
                            <option value="user">User</option>
                            <option value="recruiter">Recruiter</option>
                            <option value="serviceProvider">Service Provider</option>
                        </select>
                        {errors.role && <span className={styles.error}>{errors.role.message}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Create a password"
                            {...register('password')}
                        />
                        <span className={styles.passwordHint}>Must be at least 8 characters</span>
                        {errors.password && <span className={styles.error}>{errors.password.message}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Confirm your password"
                            {...register('confirmPassword')}
                        />
                        {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword.message}</span>}
                    </div>
                    <button disabled={isSubmitting} type="submit" className={styles.submitButton}>
                        {isSubmitting ? 'Loading...' : 'Create Account'}
                    </button>
                    {errors.root && <div className={styles.serverError}>{errors.root.message}</div>}
                </form>
                <p className={styles.footer}>
                    Already have an account?
                    <Link href="/login" className={styles.footerLink}>Sign in</Link>
                </p>
            </div>
        </div>
    );
}
