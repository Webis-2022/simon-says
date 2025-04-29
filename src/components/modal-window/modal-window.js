export function createModal(message, callback) {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');
  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal-window');

  const modalMessage = document.createElement('p');
  modalMessage.textContent = message;

  const closeButton = document.createElement('button');
  closeButton.textContent = 'OK';
  closeButton.classList.add('modal-close-button');

  closeButton.addEventListener('click', () => {
    modalOverlay.remove();
    if (callback) callback();
  });

  modalWindow.appendChild(modalMessage);
  modalWindow.appendChild(closeButton);
  modalOverlay.appendChild(modalWindow);
  document.body.appendChild(modalOverlay);

  modalOverlay.style.position = 'fixed';
  modalOverlay.style.top = '0';
  modalOverlay.style.left = '0';
  modalOverlay.style.width = '100%';
  modalOverlay.style.height = '100%';
  modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modalOverlay.style.display = 'flex';
  modalOverlay.style.justifyContent = 'center';
  modalOverlay.style.alignItems = 'center';
  modalOverlay.style.zIndex = '9999';

  modalWindow.style.backgroundColor = '#fff';
  modalWindow.style.padding = '20px';
  modalWindow.style.borderRadius = '5px';
  modalWindow.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  modalWindow.style.textAlign = 'center';
  modalWindow.style.width = '300px';
  modalWindow.style.maxWidth = '90%';
  modalWindow.style.display = 'block';

  modalMessage.style.margin = '0 0 15px';
  modalMessage.style.fontSize = '16px';
  modalMessage.style.color = '#333';

  closeButton.style.display = 'inline-block';
  closeButton.style.padding = '10px 20px';
  closeButton.style.fontSize = '14px';
  closeButton.style.color = '#fff';
  closeButton.style.backgroundColor = '#007bff';
  closeButton.style.border = 'none';
  closeButton.style.borderRadius = '5px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.textAlign = 'center';
}