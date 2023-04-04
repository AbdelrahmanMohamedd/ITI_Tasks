import Header from "./Header";
import Users from "./Components/Pages/Users";
import store from "./Components/redux/store";
import AddUser from "./Components/Pages/AddUser";
import UserDetail from './Components/Pages/UserDetail';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Provider } from "react-redux";




function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/"        element={<Users></Users>}></Route>
          <Route path="users"    element={<Users></Users>}></Route>
          <Route path="users"    element={<AddUser/>}></Route>
          <Route path="user/:id" element={<UserDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
  
}

export default App;
