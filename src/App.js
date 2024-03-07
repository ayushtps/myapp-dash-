import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { GetAllUser } from "./redux/slices/GetallUserSlice";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch()
  const state1 = useSelector(state => state.registerApi.data)
  const state3 = useSelector(state => state.deleteUser.data)
  const state4 = useSelector(state => state.editUser.data)
  useEffect(() => {
    dispatch(GetAllUser())
  }, [state1, state3, state4])
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
