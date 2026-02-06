import Link from 'next/link';
import styles from './dashboard.module.css';

export default function RecruiterDashboard() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Dashboard</h1>
                    <p className={styles.subtitle}>Manage your job postings and applications</p>
                </div>
                <Link href="/dashboard/recruiter/add-job" className={styles.addButton}>
                    + Post New Job
                </Link>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <span className={styles.statNumber}>12</span>
                    <span className={styles.statLabel}>Active Jobs</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statNumber}>48</span>
                    <span className={styles.statLabel}>Total Applications</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statNumber}>5</span>
                    <span className={styles.statLabel}>Interviews Scheduled</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statNumber}>3</span>
                    <span className={styles.statLabel}>Closed Positions</span>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Recent Job Postings</h2>
                    <div className={styles.filters}>
                        <select className={styles.filterSelect}>
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="closed">Closed</option>
                            <option value="draft">Draft</option>
                        </select>
                    </div>
                </div>

                <div className={styles.jobsList}>
                        {/* Job Item 1 */}
                        <div className={styles.jobItem}>
                            <div className={styles.jobInfo}>
                                <div className={styles.jobMain}>
                                    <h3 className={styles.jobTitle}>Senior Frontend Developer</h3>
                                    <div className={styles.jobMeta}>
                                        <span className={styles.jobLocation}>Bangalore, India</span>
                                        <span className={styles.jobDot}>•</span>
                                        <span className={styles.jobType}>Full-time</span>
                                        <span className={styles.jobDot}>•</span>
                                        <span className={styles.jobDate}>Posted 2 days ago</span>
                                    </div>
                                </div>
                                <div className={styles.jobStats}>
                                    <div className={styles.statItem}>
                                        <span className={styles.statValue}>24</span>
                                        <span className={styles.statLabel}>Applications</span>
                                    </div>
                                    <div className={styles.statItem}>
                                        <span className={styles.statValue}>156</span>
                                        <span className={styles.statLabel}>Views</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.jobActions}>
                                <span className={styles.statusBadge}>Active</span>
                                <button className={styles.actionButton}>Edit</button>
                                <button className={styles.actionButton}>View</button>
                            </div>
                        </div>

                        {/* Job Item 2 */}
                        <div className={styles.jobItem}>
                            <div className={styles.jobInfo}>
                                <div className={styles.jobMain}>
                                    <h3 className={styles.jobTitle}>Backend Engineer</h3>
                                    <div className={styles.jobMeta}>
                                        <span className={styles.jobLocation}>Remote</span>
                                        <span className={styles.jobDot}>•</span>
                                        <span className={styles.jobType}>Full-time</span>
                                        <span className={styles.jobDot}>•</span>
                                        <span className={styles.jobDate}>Posted 5 days ago</span>
                                    </div>
                                </div>
                                <div className={styles.jobStats}>
                                    <div className={styles.statItem}>
                                        <span className={styles.statValue}>18</span>
                                        <span className={styles.statLabel}>Applications</span>
                                    </div>
                                    <div className={styles.statItem}>
                                        <span className={styles.statValue}>98</span>
                                        <span className={styles.statLabel}>Views</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.jobActions}>
                                <span className={styles.statusBadge}>Active</span>
                                <button className={styles.actionButton}>Edit</button>
                                <button className={styles.actionButton}>View</button>
                            </div>
                        </div>

                        {/* Job Item 3 */}
                        <div className={styles.jobItem}>
                            <div className={styles.jobInfo}>
                                <div className={styles.jobMain}>
                                    <h3 className={styles.jobTitle}>UI/UX Designer</h3>
                                    <div className={styles.jobMeta}>
                                        <span className={styles.jobLocation}>Mumbai, India</span>
                                        <span className={styles.jobDot}>•</span>
                                        <span className={styles.jobType}>Contract</span>
                                        <span className={styles.jobDot}>•</span>
                                        <span className={styles.jobDate}>Posted 1 week ago</span>
                                    </div>
                                </div>
                                <div className={styles.jobStats}>
                                    <div className={styles.statItem}>
                                        <span className={styles.statValue}>6</span>
                                        <span className={styles.statLabel}>Applications</span>
                                    </div>
                                    <div className={styles.statItem}>
                                        <span className={styles.statValue}>45</span>
                                        <span className={styles.statLabel}>Views</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.jobActions}>
                                <span className={`${styles.statusBadge} ${styles.statusClosed}`}>Closed</span>
                                <button className={styles.actionButton}>Edit</button>
                                <button className={styles.actionButton}>View</button>
                            </div>
                        </div>

                        {/* Job Item 4 */}
                        <div className={styles.jobItem}>
                            <div className={styles.jobInfo}>
                                <div className={styles.jobMain}>
                                    <h3 className={styles.jobTitle}>DevOps Engineer</h3>
                                    <div className={styles.jobMeta}>
                                        <span className={styles.jobLocation}>Hyderabad, India</span>
                                        <span className={styles.jobDot}>•</span>
                                        <span className={styles.jobType}>Full-time</span>
                                        <span className={styles.jobDot}>•</span>
                                        <span className={styles.jobDate}>Draft</span>
                                    </div>
                                </div>
                                <div className={styles.jobStats}>
                                    <div className={styles.statItem}>
                                        <span className={styles.statValue}>0</span>
                                        <span className={styles.statLabel}>Applications</span>
                                    </div>
                                    <div className={styles.statItem}>
                                        <span className={styles.statValue}>0</span>
                                        <span className={styles.statLabel}>Views</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.jobActions}>
                                <span className={`${styles.statusBadge} ${styles.statusDraft}`}>Draft</span>
                                <button className={styles.actionButton}>Edit</button>
                                <button className={styles.actionButtonPrimary}>Publish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
