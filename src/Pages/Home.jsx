
import Category from './Category';
import Heropart from './Heropart';
import Today from './Today';
import BestSellingProducts from './BestSellingProducts';
import AddEnhance from './AddEnhance';
import OurProducts from './OurProducts';
import NewArrival from './NewArrival';
import ServiceDelevary from './ServiceDelevary';

const Home = () => {
    return (
        <div>
            <Heropart/>
            <Today/>
            <Category/>
            <BestSellingProducts/>
            <AddEnhance/>
            <OurProducts/>
            <NewArrival/>
            <ServiceDelevary/>
        </div>
    );
};

export default Home;