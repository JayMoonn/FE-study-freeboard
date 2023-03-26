import { Modal } from "antd";

const success = () => {
  Modal.success({
    content: "some messages...some messages...",
  });
};

const error = () => {
  Modal.error({
    title: "This is an error message",
    content: "some messages...some messages...",
  });
};

// export default function App
const App: React.FC = () => (
  <>
    <button onClick={success}>Success</button>
    <button onClick={error}>Error</button>
  </>
);

export default App; // 화살표 함수 export 방법
