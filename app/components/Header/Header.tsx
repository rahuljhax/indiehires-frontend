import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    IndieHires
                </Link>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/jobs" className={styles.navLink}>Jobs</Link>
                </nav>

                <div className={styles.authButtons}>
                    <Link href="/login" className={styles.loginButton}>Login</Link>
                    <Link href="/signup" className={styles.signupButton}>Sign Up</Link>
                </div>
            </div>
        </header>
    );
}
