import { RouterProvider } from "react-router-dom";
import MaterialDesignPlugin from "./plugins/materialDesignPlugin";

import router from "./router/route";

import '../src/styles/nullStyles.css'
import './styles/global.css'

import { useAlert } from "./hooks/useAlert";
import { useTokenValidation } from "./hooks/useTokenValidation";
import { useGetPosts } from "./hooks/useGetPosts";

function App() {

  useGetPosts()

  useAlert()
  useTokenValidation()

  return (
    <MaterialDesignPlugin>
      <RouterProvider router={router} />
    </MaterialDesignPlugin>
  );
}

export default App;
