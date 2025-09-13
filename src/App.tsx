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
          <Modal.Header>
            <h1>This is modal title</h1>
            <Modal.CloseButton />
          </Modal.Header>

          <p>This is modal content</p>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
