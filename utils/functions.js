import styles from "../styles/Dock.module.css";

export const handleBounceClick = (
  event,
  toggleFunc,
  bringToFront,
  windowName
) => {
  const imgElement = event.currentTarget;

  imgElement.classList.add(styles.bounce);
  setTimeout(() => {
    imgElement.classList.remove(styles.bounce);
    toggleFunc();
    bringToFront(windowName); // Bring the corresponding window to front
  }, 800); // Match the duration of the bounce animation
};
