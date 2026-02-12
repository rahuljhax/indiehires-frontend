'use client';
import { useForm, FormProvider } from 'react-hook-form';
import styles from './addJob.module.css';
import { BasicInfo } from './components/BasicInfo';
import { CompanyInfo } from './components/CompanyInfo';
import { Location } from './components/Location';
import { Salary } from './components/Salary';
import { Skills } from './components/Skills';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
const jobFormSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    company: z.object({
        name: z.string().min(1, 'Name is required'),
        website: z.string().min(1, 'Website is required'),
        logo: z.string().min(1, 'Logo is required'),
    }),
    location: z.object({
        city: z.string().optional(),
        state: z.string().optional(),
        country: z.string().optional(),
        remote: z.boolean(),
    }),
    salary: z.object({
        min: z.string().optional(),
        max: z.string().optional(),
        currency: z.string().optional(),
    }),
    jobType: z.enum([
        "full-time",
        "part-time",
        "contract",
        "internship",
    ]),
    experienceLevel: z.enum(["junior", "mid", "senior"]),
    skills: z.array(z.object({
        name: z.string()
    })),
    expiresAt: z.string().optional(),
})
export type FormData = z.infer<typeof jobFormSchema>;
export default function AddJobPage() {
    const [action, setAction] = useState<'active' | 'draft' | 'closed'>('active');
    const methods = useForm<FormData>({
        resolver: zodResolver(jobFormSchema),
        defaultValues: {
            skills: []
        }
    })
    const onSubmitHandler = async (data: FormData, status: string) => {
        try {
            const res = await fetch('http://localhost:4000/api/jobs', {
                credentials: 'include',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    status,
                    skills: data.skills.map(s => s.name)
                })
            })
            const responseData = await res.json();
            if (!res.ok) {
                throw new Error(responseData.message)
            }
            alert(responseData.message);
            methods.reset();
        } catch (err) {
            methods.setError('root', {
                type: 'server',
                message: err instanceof Error ? err.message : 'Something went wrong'
            })
        }
    }

    const cancelHandler = () => {
        methods.reset();
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Post a New Job</h1>
                    <p className={styles.subtitle}>Fill in the details to create a new job posting</p>
                </div>

                <FormProvider {...methods}>
                    <form className={styles.form} onSubmit={methods.handleSubmit((data) => { onSubmitHandler(data, action) })}>
                        <BasicInfo />
                        <CompanyInfo />
                        <Location />
                        <Salary />
                        <Skills />
                        {/* Actions */}
                        {methods.formState.errors.root && <div className={styles.serverError}>{methods.formState.errors.root.message}</div>}
                        <div className={styles.actions}>
                            <button type="button" onClick={cancelHandler} disabled={methods.formState.isSubmitting} className={styles.cancelButton}>
                                Cancel
                            </button>
                            <button type="submit" onClick={() => setAction('draft')} disabled={methods.formState.isSubmitting} className={styles.draftButton}>
                                Save as Draft
                            </button>
                            <button type="submit" onClick={() => setAction('active')} disabled={methods.formState.isSubmitting} className={styles.submitButton}>
                                {methods.formState.isSubmitting ? 'Submitting...' : 'Publish Job'}
                            </button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}
