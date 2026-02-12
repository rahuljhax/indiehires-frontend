import { useFormContext } from 'react-hook-form'
import styles from '../addJob.module.css'
import { FormData } from '../page';
export const Location = () => {
    const { register, formState: { errors } } = useFormContext<FormData>();
    return (
        <>
            {/* Location */}
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>Location</h2>

                <div className={styles.checkboxGroup}>
                    <input type="checkbox" id="remote" className={styles.checkbox} {...register('location.remote')} />
                    <label htmlFor="remote" className={styles.checkboxLabel}>This is a remote position</label>
                </div>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>City</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="e.g. Bangalore"
                            {...register('location.city')}
                        />
                        {errors.location?.city && <span className={styles.error}>{errors.location.city.message as string}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>State</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="e.g. Karnataka"
                            {...register('location.state')}
                        />
                        {errors.location?.state && <span className={styles.error}>{errors.location.state.message as string}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Country</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="e.g. India"
                            {...register('location.country')}
                        />
                        {errors.location?.country && <span className={styles.error}>{errors.location.country.message as string}</span>}
                    </div>
                </div>
            </div>
        </>
    )
}