<<<<<<< HEAD
'use client';
import Link from 'next/link';
import styles from './login.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
type FormData = {
    email: string,
    password: string
}
type FormErrors = {
    email?: string,
    password?: string
}
export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState('');
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const validate = () => {
        const newErrors: FormErrors = {}
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required *'
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required *'
        }
        setFormErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
        setFormErrors((prev) => ({
            ...prev,
            [name]: undefined
        }))
    }
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;
        try {
            setLoading(true);
            const res = await fetch('http://localhost:4000/api/auth/login', {
=======
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
>>>>>>> dev
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
<<<<<<< HEAD
                    email: formData.email,
                    password: formData.password
                })
            })
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong')
            }
            router.push('/');
        } catch (err) {
            setServerError(err instanceof Error ? err.message : 'Something went wrong. please try again')
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logo}>
                    <span className={styles.logoText}>IndieHires</span>
                </div>

=======
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
>>>>>>> dev
                <div className={styles.header}>
                    <h1 className={styles.title}>Welcome back</h1>
                    <p className={styles.subtitle}>Enter your credentials to access your account</p>
                </div>

<<<<<<< HEAD
                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            value={formData.email}
                            name='email'
                            onChange={changeHandler}
                            type="email"
                            className={styles.input}
                            placeholder="Enter your email"
                        />
                        {formErrors.email && <span className={styles.error}>{formErrors.email}</span>}
=======
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
>>>>>>> dev
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
<<<<<<< HEAD
                            value={formData.password}
                            name='password'
                            onChange={changeHandler}
                            type="password"
                            className={styles.input}
                            placeholder="Enter your password"
                        />
                        {formErrors.password && <span className={styles.error}>{formErrors.password}</span>}
=======
                            type="password"
                            {...register('password')}
                            className={styles.input}
                            placeholder="Enter your password"
                        />
                        {errors.password && <span className={styles.error}>{errors.password.message as string}</span>}
>>>>>>> dev
                    </div>

                    <div className={styles.options}>
                        <Link href="/forgot-password" className={styles.forgotPassword}>
                            Forgot password?
                        </Link>
                    </div>

<<<<<<< HEAD
                    <button type="submit" disabled={loading} className={styles.submitButton}>
                        {loading ? 'Loading...' : 'Sign In'}
                    </button>
                    {serverError && <div className={styles.serverError}>{serverError}</div>}
=======
                    <button type="submit" className={styles.submitButton}>
                        {isSubmitting ? 'Loading...' : 'Sign In'}
                    </button>
                    {errors.root && <div className={styles.serverError}>{errors.root.message as string}</div>}
>>>>>>> dev
                </form>

                <p className={styles.footer}>
                    Don&apos;t have an account?
                    <Link href="/signup" className={styles.footerLink}>Sign up</Link>
                </p>
            </div>
        </div>
    );
}
