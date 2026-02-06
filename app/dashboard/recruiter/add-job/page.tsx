import styles from './addJob.module.css';

export default function AddJobPage() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Post a New Job</h1>
                    <p className={styles.subtitle}>Fill in the details to create a new job posting</p>
                </div>

                <form className={styles.form}>
                    {/* Basic Information */}
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Basic Information</h2>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Job Title <span className={styles.required}>*</span></label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="e.g. Senior Frontend Developer"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Job Description <span className={styles.required}>*</span></label>
                            <textarea
                                className={styles.textarea}
                                placeholder="Describe the role, responsibilities, and requirements..."
                                rows={8}
                            ></textarea>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Job Type <span className={styles.required}>*</span></label>
                                <select className={styles.select}>
                                    <option value="">Select job type</option>
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="contract">Contract</option>
                                    <option value="internship">Internship</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Experience Level</label>
                                <select className={styles.select}>
                                    <option value="">Select experience level</option>
                                    <option value="junior">Junior</option>
                                    <option value="mid">Mid Level</option>
                                    <option value="senior">Senior</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Status</label>
                                <select className={styles.select}>
                                    <option value="active">Active</option>
                                    <option value="draft">Draft</option>
                                    <option value="closed">Closed</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Application Deadline</label>
                                <input
                                    type="date"
                                    className={styles.input}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Company Information */}
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Company Information</h2>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Company Name <span className={styles.required}>*</span></label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="e.g. TechCorp Inc."
                            />
                        </div>

                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Company Website</label>
                                <input
                                    type="url"
                                    className={styles.input}
                                    placeholder="https://example.com"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Company Logo URL</label>
                                <input
                                    type="url"
                                    className={styles.input}
                                    placeholder="https://example.com/logo.png"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Location</h2>

                        <div className={styles.checkboxGroup}>
                            <input type="checkbox" id="remote" className={styles.checkbox} />
                            <label htmlFor="remote" className={styles.checkboxLabel}>This is a remote position</label>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>City</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="e.g. Bangalore"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>State</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="e.g. Karnataka"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Country</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="e.g. India"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Salary */}
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Salary</h2>

                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Currency</label>
                                <select className={styles.select}>
                                    <option value="₹">₹ (INR)</option>
                                    <option value="$">$ (USD)</option>
                                    <option value="€">€ (EUR)</option>
                                    <option value="£">£ (GBP)</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Minimum Salary</label>
                                <input
                                    type="number"
                                    className={styles.input}
                                    placeholder="e.g. 1000000"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Maximum Salary</label>
                                <input
                                    type="number"
                                    className={styles.input}
                                    placeholder="e.g. 2000000"
                                />
                            </div>
                        </div>

                        <p className={styles.hint}>Leave empty if you don&apos;t want to disclose salary</p>
                    </div>

                    {/* Skills */}
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Required Skills</h2>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Skills</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Type a skill and press Enter (e.g. React, Node.js, TypeScript)"
                            />
                        </div>

                        <div className={styles.skillTags}>
                            <span className={styles.skillTag}>
                                React
                                <button type="button" className={styles.removeSkill}>×</button>
                            </span>
                            <span className={styles.skillTag}>
                                TypeScript
                                <button type="button" className={styles.removeSkill}>×</button>
                            </span>
                            <span className={styles.skillTag}>
                                Next.js
                                <button type="button" className={styles.removeSkill}>×</button>
                            </span>
                            <span className={styles.skillTag}>
                                Node.js
                                <button type="button" className={styles.removeSkill}>×</button>
                            </span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className={styles.actions}>
                        <button type="button" className={styles.cancelButton}>
                            Cancel
                        </button>
                        <button type="button" className={styles.draftButton}>
                            Save as Draft
                        </button>
                        <button type="submit" className={styles.submitButton}>
                            Publish Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
