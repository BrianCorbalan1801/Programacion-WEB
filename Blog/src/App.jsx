import { useEffect, useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import './componentes/styles.css';


export default function App() {
 const [user, setUser] = useState(null);


 useEffect(() => {
   const session = supabase.auth.getSession();
   setUser(session?.user);
   const {
     data: { subscription },
   } = supabase.auth.onAuthStateChange((event, session) => {
     switch (event) {
       case "SIGNED_IN":
         setUser(session?.user);
         break;
       case "SIGNED_OUT":
         setUser(null);
         break;
       default:
     }
   });
   return () => {
     subscription.unsubscribe();
   };
 }, []);


 const login = async () => {
   await supabase.auth.signInWithOAuth({
     provider: "github",
   });
 };
 const logout = async () => {
   await supabase.auth.signOut();
 };


 return (
   <div>
    <header>
      <Header />
      {user ? (
        <div>
          <h5>Ya iniciado con Github</h5>
          <button onClick={logout} className="button">Cerrar Sesion</button>
        </div>
      ) : (
        <button onClick={login} className="button">Iniciar Sesion con Github </button>
      )}
    </header>
    <main>
      <Home />
    </main>
    <footer>
      <Footer />
    </footer>
   </div>
 );
}
