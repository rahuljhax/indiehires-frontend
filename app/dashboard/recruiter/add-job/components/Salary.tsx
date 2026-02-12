import { useFormContext } from 'react-hook-form'
import styles from '../addJob.module.css'
import { FormData } from '../page';
export const Salary = () => {
    const { register, formState: { errors } } = useFormContext<FormData>();
    return (
        <>
            {/* Salary */}
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>Salary</h2>

                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Currency</label>
                        <select className={styles.select}
                            {...register('salary.currency')}>
                            <option value="₹">₹ (INR)</option>
                            <option value="$">$ (USD)</option>
                            <option value="€">€ (EUR)</option>
                            <option value="£">£ (GBP)</option>
                        </select>
                        {errors.salary?.currency && <span className={styles.error}>{errors.salary.currency.message as string}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Minimum Salary</label>
                        <input
                            type="number"
                            className={styles.input}
                            placeholder="e.g. 1000000"
                            {...register('salary.min')}
                        />
                        {errors.salary?.min && <span className={styles.error}>{errors.salary.min.message as string}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Maximum Salary</label>
                        <input
                            type="number"
                            className={styles.input}
                            placeholder="e.g. 2000000"
                            {...register('salary.max')}
                        />
                        {errors.salary?.max && <span className={styles.error}>{errors.salary.max.message as string}</span>}
                    </div>
                </div>

                <p className={styles.hint}>Leave empty if you don&apos;t want to disclose salary</p>
            </div>
        </>
    )
}