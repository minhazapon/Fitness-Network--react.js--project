import About from "./Home files/About";
import Active from "./Home files/Active";
import Banner from "./Home files/Banner";
import Classes from "./Home files/Classes";
import Contact from "./Home files/Contact";
import FitnessHub from "./Home files/FitnessHub";
import Information from "./Home files/Information";
import Member from "./Home files/Member";
import Review from "./Home files/Review";



const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Active></Active>
            <Classes></Classes>
            <Information></Information>
            <Member></Member>
            <About></About>
            <FitnessHub></FitnessHub>
            <Review></Review>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;