import AddEmployees from "../components/AddEmployees";
import ShowEmployees from "../components/ShowEmployees";

export default function Home() {
  return (
    <>
     <h1>Welcome Home Page</h1>
     <AddEmployees/>
     <ShowEmployees/>
     <header>header</header>
      <aside>sidebar</aside>
      <main>content</main>
      <footer>footer</footer>
    </>
  );
}
