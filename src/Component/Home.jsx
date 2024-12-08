import Banner from "./Banner";
import HightRate from "./HightRate";
import Section1 from "./Section1";
import Section2 from "./Section2";


const Home = () => {
    return (
        <div>
            <main>
                <Banner></Banner>
                <section>
                    <HightRate></HightRate>
                </section>
                <section>
                    <Section1></Section1>
                </section>
                <section>
                    <Section2></Section2>
                </section>
            </main>
         
        </div>
    );
};

export default Home;