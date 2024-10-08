import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './app/global/MainLayout';
import Home from './app/main/Home'
import UserInfo from './app/UserInfo';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserInfo />} />
          {/*<Route path="/schedules" element={<Schedules />} />*/}
          {/*<Route path="/schedules/create" element={<ScheduleEditAdd add/>} />*/}
          {/*<Route path="/schedules/:id" element={<ScheduleDetail />} />*/}
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

