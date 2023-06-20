import homeBannerImg from '../../assets/homeBannerImg.png';

function Home() {
    return (
        <div>
            <h1> Chez Vous, partout et ailleurs </h1>
            <img
                src={homeBannerImg}
                alt="falaise au bord de la mer"
                className="kasaHomeBannerImg"
            />
        </div>
    );
}

export default Home;
