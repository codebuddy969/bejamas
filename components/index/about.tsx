import Link from 'next/link';
import styles from '@/styles/components/about.module.scss';

const About = () => {
    return (
        <div className={styles.about}>
            <h2>About the Samurai King Resting</h2>
            <Link href="/pets" passHref>
                <a>Pets</a>
            </Link>
            <div>
                <p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.<span>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder</span></p>
                <p>text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</p>
            </div>
            <p></p>
        </div>
    )
}
  
export default About;