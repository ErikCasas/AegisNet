import { NavBar } from "./components/NavBar";
import { Router } from "./Router";
import { Layout } from "./components/Layout";
import "./App.css";

export function App() {
  return (
    <Layout>
      <NavBar />
      <Router />
    </Layout>
  );
}
