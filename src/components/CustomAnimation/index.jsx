import styles from "./styles.module.css";
import { useInView } from "react-intersection-observer";

const CustomAnimation = ({
  children,
  animation = "fadeIn",
  animationDelay = "0s",
  threshold = 0,
  triggerOnce = true,
  ...props
}) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: triggerOnce,
  });

  return (
    <span
      ref={ref}
      className={`${styles.wrapper} ${inView ? styles[animation] : ""} `}
      style={{ animationDelay: animationDelay }}
    >
      {children}
    </span>
  );
};

export default CustomAnimation;
