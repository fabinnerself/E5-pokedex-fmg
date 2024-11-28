import { Routes, Route } from "react-router-dom"
import { Home , Pokedex , Details } from "../app/"
import ProtectedRoutes from "./ProtectedRoutes"
import NotFound from "../components/pokedex/NotFound"
import { LanguageProvider } from '../containers/Language';
 
function AppRouter() {

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/pokedex" element={<ProtectedRoutes />}>   
          <Route index element={<Pokedex />} />   
          <Route path="details/:name" element={<Details />} />
        </Route>
        <Route path="*" element={<NotFound  />} />
      </Routes>
    </LanguageProvider>
  )
}

export default AppRouter
