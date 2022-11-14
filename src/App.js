// react
import React from 'react';
import {useDispatch} from "react-redux";
import {Route, Routes } from 'react-router-dom';

// chakra
import { Flex } from '@chakra-ui/react';

// common
import axios from "axios";
import './App.css';
import {setData} from "./redux/slices/dataSlice";
import {JobBoard} from "./pages/JobBoard/JobBoard";
import {JobDetails} from "./pages/JobDetails/JobDetails";

function App() {

  const dispatch = useDispatch()
  const token = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

  React.useEffect(()=>{
    axios.get("https://api.json-generator.com/templates/ZM1r0eic3XEy/data", {
      headers: {"Authorization": `Bearer ${token}`}
    }).then(({data}) => {
      dispatch(setData(data))
    });
  },[]);

  return (
      <Flex height="100%" bg="#E6E9F2">
        <Flex width="100%" justifyContent="center">
          <Routes>
            <Route path="/" element={<JobBoard/>}/>
            <Route path="/job-detail" element={<JobDetails/>}/>
          </Routes>
        </Flex>
      </Flex>
  );
}

export default App;
