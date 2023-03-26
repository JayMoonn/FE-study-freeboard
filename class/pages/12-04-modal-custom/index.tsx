import { Modal } from "antd";
import { useState } from "react";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달 창 열기</button>
      <Modal
        title="모달 제목"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input type="password" placeholder="비밀번호 입력" />
      </Modal>
    </>
  );
};

export default App;
