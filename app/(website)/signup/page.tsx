'use client'
import Link from 'next/link';
import styles from './signup.module.css';
<<<<<<< HEAD
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
type FormData = {
    firstName: string;
    lastName: string;
    email: string,
    role: string,
    password: string,
    confirmPassword: string
}
type FormErrors = {
    firstName?: string;
    lastName?: string;
    email?: string,
    role?: string,
    password?: string,
    confirmPassword?: string
}
export default function SignupPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: ''
    });
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [serverError, setServerError] = useState('');

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const roleChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData((prev) => ({
            ...prev,
            role: e.target.value
        }))
        setFormErrors((prev) => ({
            ...prev,
            role: undefined
        }))
    }
    const validate = () => {
        const newErrors: FormErrors = {};
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required *'
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required *'
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required *'
        }
        if (!formData.role.trim()) {
            newErrors.role = 'Role is required *'
        }
        if (!formData.password.trim()) {
            newErrors.password = 'password is required *'
        }
        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = 'Confirm password is required *'
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm password must match with the password'
        }

        setFormErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;
        console.log('FormData : ', formData);
        try {
            setLoading(true);
=======
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
>>>>>>> dev
            const res = await fetch('http://localhost:4000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
<<<<<<< HEAD
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    role: formData.role,
                    password: formData.password,
                })
            })
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong')
            }
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                role: '',
                password: '',
                confirmPassword: ''
            })
            router.push('/login')
        } catch (err) {
            setServerError(err instanceof Error ? err.message : 'Something went wrong')
        } finally {
            setLoading(false);
=======
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
>>>>>>> dev
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.card}>
<<<<<<< HEAD
                <div className={styles.logo}>
                    <span className={styles.logoText}>IndieHires</span>
                </div>

                <div className={styles.header}>
=======
                        <div className={styles.header}>
>>>>>>> dev
                    <h1 className={styles.title}>Create an account</h1>
                    <p className={styles.subtitle}>Start your journey with IndieHires today</p>
                </div>

<<<<<<< HEAD
                <form className={styles.form} onSubmit={submitHandler}>
=======
                <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
>>>>>>> dev
                    <div className={styles.nameRow}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>First name</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="John"
<<<<<<< HEAD
                                name='firstName'
                                value={formData.firstName}
                                onChange={inputChangeHandler}
                            />
                            {formErrors.firstName && <span className={styles.error}>{formErrors.firstName}</span>}
=======
                                {...register('firstName')}
                            />
                            {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
>>>>>>> dev
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Last name</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Doe"
<<<<<<< HEAD
                                name='lastName'
                                value={formData.lastName}
                                onChange={inputChangeHandler}
                            />
                            {formErrors.lastName && <span className={styles.error}>{formErrors.lastName}</span>}
=======
                                {...register('lastName')}
                            />
                            {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
>>>>>>> dev
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="john@example.com"
<<<<<<< HEAD
                            name='email'
                            value={formData.email}
                            onChange={inputChangeHandler}
                        />
                        {formErrors.email && <span className={styles.error}>{formErrors.email}</span>}
=======
                            {...register('email')}
                        />
                        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
>>>>>>> dev
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>I want to join as</label>
<<<<<<< HEAD
                        <select className={styles.select} value={formData.role} onChange={roleChangeHandler}>
=======
                        <select className={styles.select} {...register('role')}>
>>>>>>> dev
                            <option value="">Select your role</option>
                            <option value="user">User</option>
                            <option value="recruiter">Recruiter</option>
                            <option value="serviceProvider">Service Provider</option>
                        </select>
<<<<<<< HEAD
                        {formErrors.role && <span className={styles.error}>{formErrors.role}</span>}
=======
                        {errors.role && <span className={styles.error}>{errors.role.message}</span>}
>>>>>>> dev
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Create a password"
<<<<<<< HEAD
                            name="password"
                            value={formData.password}
                            onChange={inputChangeHandler}
                        />
                        <span className={styles.passwordHint}>Must be at least 8 characters</span>
                        {formErrors.password && <span className={styles.error}>{formErrors.password}</span>}
=======
                            {...register('password')}
                        />
                        <span className={styles.passwordHint}>Must be at least 8 characters</span>
                        {errors.password && <span className={styles.error}>{errors.password.message}</span>}
>>>>>>> dev
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Confirm your password"
<<<<<<< HEAD
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={inputChangeHandler}
                        />
                        {formErrors.confirmPassword && <span className={styles.error}>{formErrors.confirmPassword}</span>}
                    </div>
                    <button disabled={loading} type="submit" className={styles.submitButton}>
                        {loading ? 'Loading...' : 'Create Account'}
                    </button>
                    {serverError && <div className={styles.serverError}>{serverError}</div>}
=======
                            {...register('confirmPassword')}
                        />
                        {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword.message}</span>}
                    </div>
                    <button disabled={isSubmitting} type="submit" className={styles.submitButton}>
                        {isSubmitting ? 'Loading...' : 'Create Account'}
                    </button>
                    {errors.root && <div className={styles.serverError}>{errors.root.message}</div>}
>>>>>>> dev
                </form>
                <p className={styles.footer}>
                    Already have an account?
                    <Link href="/login" className={styles.footerLink}>Sign in</Link>
                </p>
            </div>
        </div>
    );
}
