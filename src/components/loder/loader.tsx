import styles from "./loader.module.css";
import cn from "classnames";

const Loader = () => {
  return (
    <div className={cn(styles["mk-spinner-wrap"])}>
      <div className={styles["mk-spinner-bubbles"]}></div>
    </div>
  );
};

export default Loader;
