import Link from 'next/link';
import styles from './jobs.module.css';

export default function AllJobsPage() {
    // Mock data - replace with actual API call
    const mockJobs = [
        { id: 1, title: 'Senior Frontend Developer', location: 'Bangalore, India', type: 'Full-time', status: 'active', applications: 24, views: 156, posted: '2 days ago', salary: '₹15-25 LPA' },
        { id: 2, title: 'Backend Engineer', location: 'Remote', type: 'Full-time', status: 'active', applications: 18, views: 98, posted: '5 days ago', salary: '₹12-18 LPA' },
        { id: 3, title: 'UI/UX Designer', location: 'Mumbai, India', type: 'Contract', status: 'closed', applications: 6, views: 45, posted: '1 week ago', salary: '₹6-10 LPA' },
        { id: 4, title: 'DevOps Engineer', location: 'Hyderabad, India', type: 'Full-time', status: 'draft', applications: 0, views: 0, posted: 'Draft', salary: '₹18-28 LPA' },
        { id: 5, title: 'Product Manager', location: 'Bangalore, India', type: 'Full-time', status: 'active', applications: 32, views: 245, posted: '6 hours ago', salary: '₹25-35 LPA' },
        { id: 6, title: 'Data Analyst Intern', location: 'Delhi, India', type: 'Internship', status: 'active', applications: 45, views: 178, posted: '1 day ago', salary: '₹15-25k/month' },
        { id: 7, title: 'Mobile Developer', location: 'Remote', type: 'Part-time', status: 'active', applications: 15, views: 67, posted: '4 days ago', salary: '₹50-80k/month' },
        { id: 8, title: 'QA Engineer', location: 'Pune, India', type: 'Full-time', status: 'active', applications: 19, views: 89, posted: '2 days ago', salary: '₹10-16 LPA' },
        { id: 9, title: 'Machine Learning Engineer', location: 'Remote', type: 'Full-time', status: 'active', applications: 28, views: 134, posted: '3 days ago', salary: '₹20-32 LPA' },
        { id: 10, title: 'Content Writer', location: 'Remote', type: 'Part-time', status: 'closed', applications: 42, views: 156, posted: '1 day ago', salary: '₹30-50k/month' },
        { id: 11, title: 'Full Stack Developer', location: 'Bangalore, India', type: 'Full-time', status: 'active', applications: 34, views: 201, posted: '1 week ago', salary: '₹15-22 LPA' },
        { id: 12, title: 'Sales Executive', location: 'Mumbai, India', type: 'Full-time', status: 'draft', applications: 0, views: 0, posted: 'Draft', salary: '₹5-8 LPA + incentives' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>All Jobs</h1>
                    <p className={styles.subtitle}>Manage all your job postings in one place</p>
                </div>
                <Link href="/dashboard/recruiter/add-job" className={styles.addButton}>
                    + Post New Job
                </Link>
            </div>

            {/* Stats Cards */}
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ backgroundColor: '#dbeafe' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                    </div>
                    <div className={styles.statInfo}>
                        <span className={styles.statNumber}>8</span>
                        <span className={styles.statLabel}>Active Jobs</span>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ backgroundColor: '#dcfce7' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className={styles.statInfo}>
                        <span className={styles.statNumber}>263</span>
                        <span className={styles.statLabel}>Total Applications</span>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ backgroundColor: '#fef3c7' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </div>
                    <div className={styles.statInfo}>
                        <span className={styles.statNumber}>1,369</span>
                        <span className={styles.statLabel}>Total Views</span>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ backgroundColor: '#f3e8ff' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <div className={styles.statInfo}>
                        <span className={styles.statNumber}>2</span>
                        <span className={styles.statLabel}>Draft</span>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className={styles.section}>
                <div className={styles.toolbar}>
                    <div className={styles.searchBox}>
                        <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Search by job title or location..."
                        />
                    </div>
                    <div className={styles.filters}>
                        <select className={styles.filterSelect}>
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="closed">Closed</option>
                            <option value="draft">Draft</option>
                        </select>
                        <select className={styles.filterSelect}>
                            <option value="all">All Types</option>
                            <option value="fulltime">Full-time</option>
                            <option value="parttime">Part-time</option>
                            <option value="contract">Contract</option>
                            <option value="internship">Internship</option>
                        </select>
                    </div>
                </div>



                {/* Jobs Table */}
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>
                                    <input
                                        type="checkbox"
                                        className={styles.checkbox}
                                    />
                                </th>
                                <th>Job Title</th>
                                <th>Location</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Applications</th>
                                <th>Views</th>
                                <th>Posted</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockJobs.map((job) => (
                                <tr key={job.id}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            className={styles.checkbox}
                                        />
                                    </td>
                                    <td>
                                        <div className={styles.jobTitleCell}>
                                            <span className={styles.jobTitleText}>{job.title}</span>
                                            <span className={styles.jobSalary}>{job.salary}</span>
                                        </div>
                                    </td>
                                    <td>{job.location}</td>
                                    <td>
                                        <span className={styles.typeBadge}>{job.type}</span>
                                    </td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${styles[`status${job.status.charAt(0).toUpperCase() + job.status.slice(1)}`]}`}>
                                            {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={styles.metricValue}>{job.applications}</span>
                                    </td>
                                    <td>
                                        <span className={styles.metricValue}>{job.views}</span>
                                    </td>
                                    <td className={styles.dateCell}>{job.posted}</td>
                                    <td>
                                        <div className={styles.actionButtons}>
                                            <button className={styles.iconButton} title="View">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            </button>
                                            <button className={styles.iconButton} title="Edit">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                                </svg>
                                            </button>
                                            <button className={styles.iconButton} title="Delete">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className={styles.pagination}>
                    <div className={styles.paginationInfo}>
                        Showing {mockJobs.length} of {mockJobs.length} jobs
                    </div>
                    <div className={styles.paginationButtons}>
                        <button className={styles.pageButton} disabled>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                            Previous
                        </button>
                        <div className={styles.pageNumbers}>
                            <button className={`${styles.pageNumber} ${styles.activePage}`}>1</button>
                            <button className={styles.pageNumber}>2</button>
                            <button className={styles.pageNumber}>3</button>
                        </div>
                        <button className={styles.pageButton}>
                            Next
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
