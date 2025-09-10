import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="">
          <h1>this is h1</h1>
          <h2>this is h2</h2>
          <h3>this is h3</h3>
        </div>

        <button className="btn">this is a button</button>
        <button className="btn">this is a button</button>
        <Button className="" value="submit" outline={true} />
      </div>
    </Container>
  );
}

export default App;
