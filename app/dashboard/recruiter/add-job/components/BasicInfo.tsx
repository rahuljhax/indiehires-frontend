import { useFormContext } from 'react-hook-form';
import styles from '../addJob.module.css';
export const BasicInfo = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <>
            {/* Basic Information */}
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>Basic Information</h2>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Job Title <span className={styles.required}>*</span></label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="e.g. Senior Frontend Developer"
                        {...register('title')}
                    />
                    {errors.title && <span className={styles.error}>{errors.title.message as string}</span>}
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Job Description <span className={styles.required}>*</span></label>
                    <textarea
                        className={styles.textarea}
                        placeholder="Describe the role, responsibilities, and requirements..."
                        {...register('description')}
                        rows={8}
                    ></textarea>
                    {errors.description && <span className={styles.error}>{errors.description.message as string}</span>}
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Job Type <span className={styles.required}>*</span></label>
                        <select className={styles.select} {...register('jobType')}>
                            <option value=''>Select job type</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                            <option value="contract">Contract</option>
                            <option value="internship">Internship</option>
                        </select>
                        {errors.jobType && <span className={styles.error}>{errors.jobType.message as string}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Experience Level</label>
                        <select className={styles.select} {...register('experienceLevel')}>
                            <option value="">Select experience level</option>
                            <option value="junior">Junior</option>
                            <option value="mid">Mid Level</option>
                            <option value="senior">Senior</option>
                        </select>
                        {errors.experienceLevel && <span className={styles.error}>{errors.experienceLevel.message as string}</span>}
                    </div>
                    <div className={styles.inputGroup} {...register('expiresAt')}>
                        <label className={styles.label}>Application Deadline</label>
                        <input
                            type="date"
                            className={styles.input}
                        />
                        {errors.expiresAt && <span className={styles.error}>{errors.expiresAt.message as string}</span>}
                    </div>
                </div>
            </div>
        </>
    )
}