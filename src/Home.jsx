import About from "./Home files/About";
import Active from "./Home files/Active";
import Banner from "./Home files/Banner";
import Classes from "./Home files/Classes";
import FitnessHub from "./Home files/FitnessHub";
import Information from "./Home files/Information";
import Member from "./Home files/Member";



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
            
        </div>
    );
};

export default Home;