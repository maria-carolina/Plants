import { createStackNavigator } from 'react-navigation-stack';

//import List from './pages/list';
import NewPlant from './pages/newPlant';

const Root = createStackNavigator({
    NewPlant,
    
},{
    defaultNavigationOptions: {
       headerShown: false
    },
});

export default Root;
