import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
    <nav className={styles.sidebar}>
      <h3>Dashboard</h3>
      <ul> 
        <li style={{padding:"2px"}}>
      <Link href="/dashboard/metrics">Metrics</Link>
      </li>
      </ul>
    </nav>
    <main className={styles.mainContent}>
      {children}
    </main>
  </div>
  )
}

export default Layout