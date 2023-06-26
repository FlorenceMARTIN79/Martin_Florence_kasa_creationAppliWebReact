import homeBannerImg from '../../assets/homeBannerImg.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
    return (
        <div>
            <Header></Header>

            <div>
                <h1> Chez Vous, partout et ailleurs </h1>
                <img
                    src={homeBannerImg}
                    alt="falaise au bord de la mer"
                    className="kasaHomeBannerImg"
                />
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;
