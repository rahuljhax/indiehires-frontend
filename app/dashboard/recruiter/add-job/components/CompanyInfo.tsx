import { useFormContext } from 'react-hook-form';
import styles from '../addJob.module.css';
import { FormData } from '../page';
export const CompanyInfo = () => {
    const { register, formState: { errors } } = useFormContext<FormData>();
    return (
        <>

            {/* Company Information */}
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>Company Information</h2>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Company Name <span className={styles.required}>*</span></label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="e.g. TechCorp Inc."
                        {...register('company.name')}
                    />
                    {errors.company?.name && <span className={styles.error}>{errors.company.name?.message as string}</span>}
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Company Website</label>
                        <input
                            type="url"
                            className={styles.input}
                            placeholder="https://example.com"
                            {...register('company.website')}
                        />
                        {errors.company?.website && <span className={styles.error}>{errors.company.website?.message as string}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Company Logo URL</label>
                        <input
                            type="url"
                            className={styles.input}
                            placeholder="https://example.com/logo.png"
                            {...register('company.logo')}
                        />
                        {errors.company?.logo && <span className={styles.error}>{errors.company.logo?.message as string}</span>}
                    </div>
                </div>
            </div>
        </>
    )
}