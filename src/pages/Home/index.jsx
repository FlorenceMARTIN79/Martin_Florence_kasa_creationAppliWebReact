import styles from './home.module.css';
import Banner from '../../components/Banner';
import Card from '../../components/Card';

function Home() {
    return (
        <main className={styles.homeMain}>
            <Banner></Banner>
            <section className={styles.rentals}>
                <Card className={styles.rentalCard} id="logementsTest"></Card>
            </section>
        </main>
    );
}

export default Home;
