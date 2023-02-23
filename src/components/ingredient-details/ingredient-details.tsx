import styles from "./ingredient-details.module.css";
import { useSelector } from "../../services/hooks/hooks";
import { useParams } from "react-router-dom";

export const IngredientDetails = () => {
  const ingredients = useSelector(
    (state) => state.ingredientsList.ingredientsList
  );
  const params = useParams<{ id?: string }>();
  const ingredient = ingredients.find((item) => item._id === params.id);

  if (!ingredient) {
    return null;
  }

  return (
    <div className={styles.details}>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <h3 className="text text_type_main-medium mt-4">{ingredient.name}</h3>
      <ul className={styles.description}>
        <li>
          <p className="text text_type_main-default text_color_inactive mt-8 mb-2">
            Калории,ккал
          </p>
          <p className="text text_type_main-default text_color_inactive mb-15">
            {ingredient.calories}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive mt-8 mb-2">
            Белки, г
          </p>
          <p className="text text_type_main-default text_color_inactive mb-15">
            {ingredient.proteins}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive mt-8 mb-2">
            Жиры, г
          </p>
          <p className="text text_type_main-default text_color_inactive mb-15">
            {ingredient.fat}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive mt-8 mb-2">
            Углеводы, г
          </p>
          <p className="text text_type_main-default text_color_inactive mb-15">
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};
