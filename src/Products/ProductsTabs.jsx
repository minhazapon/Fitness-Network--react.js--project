


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Protein from './Protein';
import Work from './Work';
import Amino from './Amino';
import Creatine from './Creatine';



const ProductsTabs = () => {
    return (
        <div className="  mb-10 mt-20 ml-10 mr-10">

            <div className=' flex-col md:flex-row lg:flex-row'>

                <h1 className=' text-5xl font-serif mb-10 text-center bg-yellow-400 p-4  rounded-xl'> Supplements Products</h1>



            </div>

            <div>
                
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
              <TabList>
                <Tab>Protein</Tab>
                <Tab>Workout</Tab>
                <Tab>Amino</Tab>
                <Tab>Creatine</Tab>
              
              
              </TabList>
              <TabPanel>
                <Protein></Protein>
              </TabPanel>
              <TabPanel>
                <Work></Work>
              </TabPanel>
              <TabPanel>
                <Amino></Amino>
              </TabPanel>
              <TabPanel>
                <Creatine></Creatine>
              </TabPanel>
              
              
            </Tabs>

            </div>
            
        </div>
    );
};

export default ProductsTabs;