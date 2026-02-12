import { useFieldArray, useFormContext } from 'react-hook-form'
import styles from '../addJob.module.css'
import React, { useEffect, useState } from 'react';
import { FormData } from '../page';
export const Skills = () => {
    const { control, formState: { errors } } = useFormContext<FormData>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "skills"
    })
    const [input, setInput] = useState('');
    const addSkill = () => {
        const value = input.trim();
        if (!value) return;
        append({ name: value })
        setInput('');
    }
    return (
        <>
            {/* Skills */}
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>Required Skills</h2>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Skills</label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Type a skill and press Enter (e.g. React, Node.js, TypeScript)"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                addSkill();
                            }
                        }}
                    />
                    {errors.skills && <span className={styles.error}>{errors.skills.message as string}</span>}
                </div>

                <div className={styles.skillTags}>
                    {fields.length > 0 && fields.map((field, index) => {
                        return <span key={field.id} className={styles.skillTag}>
                            {field.name}
                            <button type="button" className={styles.removeSkill} onClick={() => { remove(index) }}>×</button>
                        </span>
                    })}
                </div>
            </div>
        </>
    )
}