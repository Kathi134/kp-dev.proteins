import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainLayout from './app/global/MainLayout';
import Tracking from './app/pages/track/Tracking'
import UserInfo from './app/pages/user/UserInfo';
import {Foods} from "./app/pages/food/Foods";
import {FoodDetails} from "./app/pages/food/FoodDetails";
import {GroceryEditAdd} from "./app/pages/food/GroceryEditAdd";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Tracking />} />
          <Route path="/user" element={<UserInfo />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/foods/create-grocery" element={<GroceryEditAdd add/>} />
          {/*<Route path="/foods/create-dish" element={<DishEditAdd add/>} />*/}
          <Route path="/foods/:id" element={<FoodDetails />} />
          {/*<Route path="/schedules/:id/create?" element={<WorkoutEditAdd add/>} />*/}
          {/*<Route path="/schedules/:sId/:wId" element={<WorkoutDetail />} />*/}
          {/*<Route path="/exercises" element={<Exercises />} />*/}
          {/*<Route path="/exercises/:id" element={<ExerciseDetail />} />*/}
          {/*<Route path="/exercises/create" element={<ExerciseEditAdd add/>} />*/}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

