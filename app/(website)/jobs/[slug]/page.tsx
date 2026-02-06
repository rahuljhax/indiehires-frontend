import Link from 'next/link';
import styles from './jobDetail.module.css';

export default function JobDetailPage() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.breadcrumb}>
                    <Link href="/" className={styles.breadcrumbLink}>Home</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <Link href="/jobs" className={styles.breadcrumbLink}>Jobs</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <span className={styles.breadcrumbCurrent}>Senior Frontend Developer</span>
                </div>

                <div className={styles.content}>
                    <main className={styles.mainContent}>
                        <div className={styles.card}>
                            <div className={styles.jobHeader}>
                                <div className={styles.companyInfo}>
                                    <div className={styles.companyLogoPlaceholder}>T</div>
                                    <div className={styles.companyDetails}>
                                        <h3 className={styles.companyName}>TechCorp</h3>
                                        <a 
                                            href="https://techcorp.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={styles.companyWebsite}
                                        >
                                            techcorp.com
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.statusBadges}>
                                    <span className={styles.statusActive}>Active</span>
                                </div>
                            </div>

                            <h1 className={styles.jobTitle}>Senior Frontend Developer</h1>

                            <div className={styles.badgesRow}>
                                <span className={`${styles.badge} ${styles.badgeFullTime}`}>Full time</span>
                                <span className={`${styles.badge} ${styles.badgeSenior}`}>Senior Level</span>
                                <span className={styles.badgeRemote}>Remote</span>
                            </div>

                            <div className={styles.metaGrid}>
                                <div className={styles.metaItem}>
                                    <div className={styles.metaIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className={styles.metaLabel}>Location</span>
                                        <span className={styles.metaValue}>Bangalore, India</span>
                                    </div>
                                </div>
                                <div className={styles.metaItem}>
                                    <div className={styles.metaIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="12" y1="1" x2="12" y2="23"></line>
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className={styles.metaLabel}>Salary</span>
                                        <span className={styles.metaValue}>₹15,00,000 - ₹25,00,000</span>
                                    </div>
                                </div>
                                <div className={styles.metaItem}>
                                    <div className={styles.metaIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className={styles.metaLabel}>Posted</span>
                                        <span className={styles.metaValue}>February 4, 2026</span>
                                    </div>
                                </div>
                                <div className={styles.metaItem}>
                                    <div className={styles.metaIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className={styles.metaLabel}>Applicants</span>
                                        <span className={styles.metaValue}>24 applied</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.section}>
                                <h2 className={styles.sectionTitle}>Job Description</h2>
                                <div className={styles.description}>
                                    <p>We are looking for an experienced Senior Frontend Developer to join our dynamic team at TechCorp. You will be responsible for building and maintaining high-quality web applications that serve millions of users worldwide.</p>
                                    <p>As a senior member of the team, you will mentor junior developers, participate in code reviews, and help establish best practices for frontend development. You&apos;ll work closely with designers, product managers, and backend engineers to deliver exceptional user experiences.</p>
                                    <p><strong>Responsibilities:</strong></p>
                                    <p>• Develop new user-facing features using React.js and Next.js</p>
                                    <p>• Build reusable components and front-end libraries for future use</p>
                                    <p>• Translate designs and wireframes into high-quality code</p>
                                    <p>• Optimize components for maximum performance across devices</p>
                                    <p>• Collaborate with other team members and stakeholders</p>
                                    <p><strong>Requirements:</strong></p>
                                    <p>• 5+ years of experience in frontend development</p>
                                    <p>• Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</p>
                                    <p>• Thorough understanding of React.js and its core principles</p>
                                    <p>• Experience with TypeScript is highly preferred</p>
                                    <p>• Familiarity with RESTful APIs and modern authorization mechanisms</p>
                                </div>
                            </div>

                            <div className={styles.section}>
                                <h2 className={styles.sectionTitle}>Required Skills</h2>
                                <div className={styles.skillsGrid}>
                                    <span className={styles.skillTag}>React</span>
                                    <span className={styles.skillTag}>TypeScript</span>
                                    <span className={styles.skillTag}>Next.js</span>
                                    <span className={styles.skillTag}>JavaScript</span>
                                    <span className={styles.skillTag}>CSS/SCSS</span>
                                    <span className={styles.skillTag}>Redux</span>
                                    <span className={styles.skillTag}>Git</span>
                                    <span className={styles.skillTag}>REST APIs</span>
                                </div>
                            </div>

                            <div className={styles.expiryInfo}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.expiryIcon}>
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>Application deadline: March 15, 2026</span>
                            </div>
                        </div>
                    </main>

                    <aside className={styles.sidebar}>
                        <div className={styles.card}>
                            <h3 className={styles.sidebarTitle}>Apply for this job</h3>
                            <p className={styles.sidebarText}>
                                Interested in this position? Submit your application and join TechCorp.
                            </p>
                            <button className={styles.applyButton}>
                                Apply Now
                            </button>
                        </div>

                        <div className={styles.card}>
                            <h3 className={styles.sidebarTitle}>Job Summary</h3>
                            <ul className={styles.summaryList}>
                                <li>
                                    <span className={styles.summaryLabel}>Job Type</span>
                                    <span className={styles.summaryValue}>Full time</span>
                                </li>
                                <li>
                                    <span className={styles.summaryLabel}>Experience</span>
                                    <span className={styles.summaryValue}>Senior Level</span>
                                </li>
                                <li>
                                    <span className={styles.summaryLabel}>Location</span>
                                    <span className={styles.summaryValue}>Bangalore, India</span>
                                </li>
                                <li>
                                    <span className={styles.summaryLabel}>Salary</span>
                                    <span className={styles.summaryValue}>₹15L - ₹25L</span>
                                </li>
                                <li>
                                    <span className={styles.summaryLabel}>Posted</span>
                                    <span className={styles.summaryValue}>February 4, 2026</span>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.shareCard}>
                            <span className={styles.shareLabel}>Share this job</span>
                            <div className={styles.shareButtons}>
                                <button className={styles.shareButton} title="Copy link">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </svg>
                                </button>
                                <button className={styles.shareButton} title="Share on LinkedIn">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </button>
                                <button className={styles.shareButton} title="Share on Twitter">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>

                <div className={styles.backLink}>
                    <Link href="/jobs" className={styles.backButton}>
                        ← Back to all jobs
                    </Link>
                </div>
            </div>
        </div>
    );
}
