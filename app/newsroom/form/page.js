import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import airplaneIcon from '/public/airplane-icon.png';

export default function Form() {
    return (
        <div className={styles.pageWrapper}>
            <form className={styles.form}>
                <div className={styles.header}>
                    <Image src={airplaneIcon} alt="SkyMap Logo" className={styles.logo} />
                </div>
                <h1>SkyMap <br /> <br />
                Request Data
                </h1>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName" className={styles.label}>First name</label>
                    <input type="text" id="firstName" name="firstName" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName" className={styles.label}>Last name</label>
                    <input type="text" id="lastName" name="lastName" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" id="email" name="email" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="outletName" className={styles.label}>Outlet Name</label>
                    <input type="text" id="outletName" name="outletName" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phoneNumber" className={styles.label}>Phone number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="deadline" className={styles.label}>Deadline</label>
                    <input type="text" id="deadline" name="deadline" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>I am interested in</label>
                    <div className={styles.checkboxGroup}>
                        <label className={styles.checkboxLabel}><input type="checkbox" name="interest" value="Delays & Cancellations" className={styles.checkbox} /> Delays & Cancellations</label>
                        <label className={styles.checkboxLabel}><input type="checkbox" name="interest" value="Worldwide Aviation Traffic Data" className={styles.checkbox} /> Worldwide Aviation Traffic Data</label>
                        <label className={styles.checkboxLabel}><input type="checkbox" name="interest" value="Aircraft Specific Data" className={styles.checkbox} /> Aircraft Specific Data</label>
                        <label className={styles.checkboxLabel}><input type="checkbox" name="interest" value="Airline Specific Data" className={styles.checkbox} /> Airline Specific Data</label>
                        <label className={styles.checkboxLabel}><input type="checkbox" name="interest" value="Airport Specific Data" className={styles.checkbox} /> Airport Specific Data</label>
                        <label className={styles.checkboxLabel}><input type="checkbox" name="interest" value="Other" className={styles.checkbox} /> Other - Please add request to message field</label>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea id="message" name="message" className={styles.textarea} required></textarea>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}><input type="checkbox" name="mediaList" className={styles.checkbox} /> I would like to be added to the SkyMap media list</label>
                </div>
                <button type="submit" className={styles.submitBtn}>Submit</button>
            </form>
        </div>
    );
}
