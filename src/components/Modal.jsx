import '../css/Modal.css';

const defeatAudio = new Audio('src/assets/LoL-Defeat.mp3');
const victoryAudio = new Audio('src/assets/LoL-Victory.mp3');
victoryAudio.volume = 0.2;
defeatAudio.volume = 0.2;

export function toggleModal(string, action = 'Defeat') {
  const modalElement = document.querySelector(`#${string}`);
  const modalIsOpen = modalElement?.open;
  if (modalElement) {
    if (modalIsOpen) {
      modalElement.close();
    } else if (!modalIsOpen) {
      modalElement.showModal();
      action === 'Defeat' ? defeatAudio.play() : victoryAudio.play();
    }
  }
}

function Modal({ label, info, onRestart }) {
  return (
    <>
      <dialog id={label}>
        <img src={info.imgURL} alt={info.alt} />
        <button onClick={onRestart}>Restart</button>
      </dialog>
    </>
  );
}

export default Modal;
