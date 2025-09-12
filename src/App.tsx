import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  return (
    <Container>
      <div className="flex items-center justify-center h-screen w-full">
        <Button onClick={() => setModal((prev) => !prev)} variant="ghost">
          open modal
        </Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <h1>This is Modal</h1>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
