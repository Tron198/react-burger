import styles from "./pages.module.css";
import { IngredientDetails } from "../components/ingredient-details/ingredient-details";

export const IngredientPage = () => {
  return (
    <div className={styles.modal}>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
      <IngredientDetails />
    </div>
  );
};
