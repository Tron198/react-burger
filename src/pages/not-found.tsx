import styles from "./pages.module.css";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <main className={styles.container}>
      <h2 className="text text_type_main-large mb-10">
        Ошибка 404: страница не найдена
      </h2>
      <Link
        to="/"
        className={`${styles.linkNotFound} text text_type_main-medium`}
      >
        Вернуться на главную страницу
      </Link>
    </main>
  );
};
