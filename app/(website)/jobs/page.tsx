import Link from 'next/link';
import styles from './jobs.module.css';

export default function JobsPage() {
    return (
        <div className={styles.container}>
            {/* Search Banner */}
            <div className={styles.searchBanner}>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Find Your Dream Job</h1>
                    <p className={styles.bannerSubtitle}>Discover opportunities that match your skills and aspirations</p>
                    
                    <div className={styles.searchBox}>
                        <div className={styles.searchInputGroup}>
                            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                            <input 
                                type="text" 
                                className={styles.searchInput} 
                                placeholder="Job title, keywords, or company"
                            />
                        </div>
                        <div className={styles.searchInputGroup}>
                            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <input 
                                type="text" 
                                className={styles.searchInput} 
                                placeholder="City, state, or remote"
                            />
                        </div>
                        <button className={styles.searchButton}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                            Search Jobs
                        </button>
                    </div>

                    <div className={styles.popularSearches}>
                        <span className={styles.popularLabel}>Popular:</span>
                        <Link href="/jobs?q=react" className={styles.popularTag}>React</Link>
                        <Link href="/jobs?q=nodejs" className={styles.popularTag}>Node.js</Link>
                        <Link href="/jobs?q=python" className={styles.popularTag}>Python</Link>
                        <Link href="/jobs?q=remote" className={styles.popularTag}>Remote</Link>
                        <Link href="/jobs?q=frontend" className={styles.popularTag}>Frontend</Link>
                    </div>
                </div>
            </div>

            {/* Recent Jobs Section */}
            <div className={styles.wrapper}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Recent Job Postings</h2>
                    <Link href="/jobs" className={styles.viewAllLink}>View All Jobs →</Link>
                </div>

                <div className={styles.jobsGrid}>
                    {/* Job Card 1 */}
                    <Link href="/jobs/frontend-developer" className={styles.jobCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.companyInfo}>
                                <div className={styles.companyLogoPlaceholder}>T</div>
                                <div className={styles.companyDetails}>
                                    <span className={styles.companyName}>TechCorp</span>
                                    <span className={styles.postedTime}>2d ago</span>
                                </div>
                            </div>
                            <span className={styles.statusBadge}>Active</span>
                        </div>

                        <h2 className={styles.jobTitle}>Senior Frontend Developer</h2>

                        <p className={styles.jobDescription}>
                            We are looking for an experienced frontend developer to join our team and build amazing user interfaces...
                        </p>

                        <div className={styles.badgesRow}>
                            <span className={`${styles.badge} ${styles.badgeFullTime}`}>Full time</span>
                            <span className={`${styles.badge} ${styles.badgeSenior}`}>Senior Level</span>
                        </div>

                        <div className={styles.jobMeta}>
                            <div className={styles.metaItem}>
                                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Bangalore, India</span>
                            </div>
                            <div className={styles.metaItem}>
                                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                                <span>₹15,00,000 - ₹25,00,000</span>
                            </div>
                        </div>

                        <div className={styles.skillsRow}>
                            <span className={styles.skillTag}>React</span>
                            <span className={styles.skillTag}>TypeScript</span>
                            <span className={styles.skillTag}>Next.js</span>
                            <span className={styles.moreSkills}>+2</span>
                        </div>

                        <div className={styles.cardFooter}>
                            <span className={styles.applicationsCount}>24 applicants</span>
                            <span className={styles.viewDetails}>View Details →</span>
                        </div>
                    </Link>

                    {/* Job Card 2 */}
                    <Link href="/jobs/backend-engineer" className={styles.jobCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.companyInfo}>
                                <div className={styles.companyLogoPlaceholder}>S</div>
                                <div className={styles.companyDetails}>
                                    <span className={styles.companyName}>StartupXYZ</span>
                                    <span className={styles.postedTime}>5h ago</span>
                                </div>
                            </div>
                            <span className={styles.statusBadge}>Active</span>
                        </div>

                        <h2 className={styles.jobTitle}>Backend Engineer</h2>

                        <p className={styles.jobDescription}>
                            Join our growing team to build scalable backend services and APIs that power our platform...
                        </p>

                        <div className={styles.badgesRow}>
                            <span className={`${styles.badge} ${styles.badgeFullTime}`}>Full time</span>
                            <span className={`${styles.badge} ${styles.badgeMid}`}>Mid Level</span>
                        </div>

                        <div className={styles.jobMeta}>
                            <div className={styles.metaItem}>
                                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Remote</span>
                            </div>
                            <div className={styles.metaItem}>
                                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                                <span>₹12,00,000 - ₹18,00,000</span>
                            </div>
                        </div>

                        <div className={styles.skillsRow}>
                            <span className={styles.skillTag}>Node.js</span>
                            <span className={styles.skillTag}>MongoDB</span>
                            <span className={styles.skillTag}>AWS</span>
                        </div>

                        <div className={styles.cardFooter}>
                            <span className={styles.applicationsCount}>12 applicants</span>
                            <span className={styles.viewDetails}>View Details →</span>
                        </div>
                    </Link>

                    {/* Job Card 3 */}
                    <Link href="/jobs/ui-ux-designer" className={styles.jobCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.companyInfo}>
                                <div className={styles.companyLogoPlaceholder}>D</div>
                                <div className={styles.companyDetails}>
                                    <span className={styles.companyName}>DesignHub</span>
                                    <span className={styles.postedTime}>1w ago</span>
                                </div>
                            </div>
                            <span className={styles.statusBadge}>Active</span>
                        </div>

                        <h2 className={styles.jobTitle}>UI/UX Designer</h2>

                        <p className={styles.jobDescription}>
                            Create beautiful and intuitive user experiences for our suite of products used by millions...
                        </p>

                        <div className={styles.badgesRow}>
                            <span className={`${styles.badge} ${styles.badgeContract}`}>Contract</span>
                            <span className={`${styles.badge} ${styles.badgeJunior}`}>Junior Level</span>
                        </div>

                        <div className={styles.jobMeta}>
                            <div className={styles.metaItem}>
                                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Mumbai, India</span>
                            </div>
                            <div className={styles.metaItem}>
                                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                                <span>₹6,00,000 - ₹10,00,000</span>
                            </div>
                        </div>

                        <div className={styles.skillsRow}>
                            <span className={styles.skillTag}>Figma</span>
                            <span className={styles.skillTag}>Adobe XD</span>
                            <span className={styles.skillTag}>Prototyping</span>
                        </div>

                        <div className={styles.cardFooter}>
                            <span className={styles.applicationsCount}>8 applicants</span>
                            <span className={styles.viewDetails}>View Details →</span>
                        </div>
                    </Link>

                    {/* Job Card 4 */}
                    <Link href="/jobs/devops-engineer" className={styles.jobCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.companyInfo}>
                                <div className={styles.companyLogoPlaceholder}>C</div>
                                <div className={styles.companyDetails}>
                                    <span className={styles.companyName}>CloudNine</span>
                                    <span className={styles.postedTime}>3d ago</span>
                                </div>
                            </div>
                            <span className={styles.statusBadge}>Active</span>
                        </div>

                        <h2 className={styles.jobTitle}>DevOps Engineer</h2>

                        <p className={styles.jobDescription}>
                            Help us build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes...
                        </p>

                        <div className={styles.badgesRow}>
                            <span className={`${styles.badge} ${styles.badgeFullTime}`}>Full time</span>
                            <span className={`${styles.badge} ${styles.badgeSenior}`}>Senior Level</span>
                        </div>

                        <div className={styles.jobMeta}>
                            <div className={styles.metaItem}>
                                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Hyderabad, India</span>
                            </div>
                            <div className={styles.metaItem}>
                                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                                <span>₹18,00,000 - ₹28,00,000</span>
                            </div>
                        </div>

                        <div className={styles.skillsRow}>
                            <span className={styles.skillTag}>Docker</span>
                            <span className={styles.skillTag}>Kubernetes</span>
                            <span className={styles.skillTag}>AWS</span>
                            <span className={styles.skillTag}>Terraform</span>
                        </div>

                        <div className={styles.cardFooter}>
                            <span className={styles.applicationsCount}>18 applicants</span>
                            <span className={styles.viewDetails}>View Details →</span>
                        </div>
                    </Link>

                    {/* Job Card 5 */}
                    <Link href="/jobs/data-analyst-intern" className={styles.jobCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.companyInfo}>
                                <div className={styles.companyLogoPlaceholder}>A</div>
                                <div className={styles.companyDetails}>
                                    <span className={styles.companyName}>AnalyticsPro</span>
                                    <span className={styles.postedTime}>1d ago</span>
                                </div>
                            </div>
                            <span className={styles.statusBadge}>Active</span>
                        </div>

                        <h2 className={styles.jobTitle}>Data Analyst Intern</h2>

                        <p className={styles.jobDescription}>
                            Great opportunity for freshers to learn data analysis, visualization, and business intelligence...
                        </p>

                        <div className={styles.badgesRow}>
                            <span className={`${styles.badge} ${styles.badgeInternship}`}>Internship</span>
                        </div>

                        <div className={styles.jobMeta}>
                            <div className={styles.metaItem}>
                                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Delhi, India</span>
                            </div>
                            <div className={styles.metaItem}>
                                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                                <span>₹15,000 - ₹25,000/month</span>
                            </div>
                        </div>

                        <div className={styles.skillsRow}>
                            <span className={styles.skillTag}>Python</span>
                            <span className={styles.skillTag}>SQL</span>
                            <span className={styles.skillTag}>Excel</span>
                        </div>

                        <div className={styles.cardFooter}>
                            <span className={styles.applicationsCount}>45 applicants</span>
                            <span className={styles.viewDetails}>View Details →</span>
                        </div>
                    </Link>

                    {/* Job Card 6 */}
                    <Link href="/jobs/mobile-developer" className={styles.jobCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.companyInfo}>
                                <div className={styles.companyLogoPlaceholder}>M</div>
                                <div className={styles.companyDetails}>
                                    <span className={styles.companyName}>MobileFirst</span>
                                    <span className={styles.postedTime}>4d ago</span>
                                </div>
                            </div>
                            <span className={styles.statusBadge}>Active</span>
                        </div>

                        <h2 className={styles.jobTitle}>React Native Developer</h2>

                        <p className={styles.jobDescription}>
                            Build cross-platform mobile applications that delight users and drive business growth...
                        </p>

                        <div className={styles.badgesRow}>
                            <span className={`${styles.badge} ${styles.badgePartTime}`}>Part time</span>
                            <span className={`${styles.badge} ${styles.badgeMid}`}>Mid Level</span>
                        </div>

                        <div className={styles.jobMeta}>
                            <div className={styles.metaItem}>
                                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Remote</span>
                            </div>
                            <div className={styles.metaItem}>
                                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                                <span>₹50,000 - ₹80,000/month</span>
                            </div>
                        </div>

                        <div className={styles.skillsRow}>
                            <span className={styles.skillTag}>React Native</span>
                            <span className={styles.skillTag}>JavaScript</span>
                            <span className={styles.skillTag}>Redux</span>
                        </div>

                        <div className={styles.cardFooter}>
                            <span className={styles.applicationsCount}>15 applicants</span>
                            <span className={styles.viewDetails}>View Details →</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
