'use client'
import Link from 'next/link';
import styles from './signup.module.css';
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
            const res = await fetch('http://localhost:4000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
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
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logo}>
                    <span className={styles.logoText}>IndieHires</span>
                </div>

                <div className={styles.header}>
                    <h1 className={styles.title}>Create an account</h1>
                    <p className={styles.subtitle}>Start your journey with IndieHires today</p>
                </div>

                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.nameRow}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>First name</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="John"
                                name='firstName'
                                value={formData.firstName}
                                onChange={inputChangeHandler}
                            />
                            {formErrors.firstName && <span className={styles.error}>{formErrors.firstName}</span>}
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Last name</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Doe"
                                name='lastName'
                                value={formData.lastName}
                                onChange={inputChangeHandler}
                            />
                            {formErrors.lastName && <span className={styles.error}>{formErrors.lastName}</span>}
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="john@example.com"
                            name='email'
                            value={formData.email}
                            onChange={inputChangeHandler}
                        />
                        {formErrors.email && <span className={styles.error}>{formErrors.email}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>I want to join as</label>
                        <select className={styles.select} value={formData.role} onChange={roleChangeHandler}>
                            <option value="">Select your role</option>
                            <option value="user">User</option>
                            <option value="recruiter">Recruiter</option>
                            <option value="serviceProvider">Service Provider</option>
                        </select>
                        {formErrors.role && <span className={styles.error}>{formErrors.role}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Create a password"
                            name="password"
                            value={formData.password}
                            onChange={inputChangeHandler}
                        />
                        <span className={styles.passwordHint}>Must be at least 8 characters</span>
                        {formErrors.password && <span className={styles.error}>{formErrors.password}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Confirm your password"
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
                </form>
                <p className={styles.footer}>
                    Already have an account?
                    <Link href="/login" className={styles.footerLink}>Sign in</Link>
                </p>
            </div>
        </div>
    );
}
