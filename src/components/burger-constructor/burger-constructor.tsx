import styles from "./burger-constructor.module.css";
import { useDrop } from "react-dnd";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "../../services/hooks/hooks";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  setBun,
  addIngredient,
  deleteIngredient,
} from "../../services/actions/ingredients-constructor";
import { BurgerElement } from "../burger-element/burger-element";
import { TIngredientCard, TIngredientType } from "../../services/types/types";

export const BurgerConstructor = () => {
  const elements = useSelector(
    (state) => state.constructorList.constructorList
  );
  const buns = useSelector((state) => state.constructorList.buns);
  const dispatch = useDispatch();

  const [, dropIngredient] = useDrop(() => ({
    accept: "card",
    drop: (item: TIngredientCard) => addCardElement(item.ingredient),
  }));

  const addCardElement = (element: TIngredientType) => {
    element = { ...element, id: nanoid() };
    if (element.type === "bun") {
      dispatch(setBun(element));
    }
    if (element.type !== "bun") {
      dispatch(addIngredient(element));
    }
  };

  const deleteElement = (element: TIngredientType) => {
    dispatch(deleteIngredient(element));
  };

  return (
    <section className={styles.total} ref={dropIngredient}>
      <ul className={styles.list}>
        {buns.map((element) => {
          if (element.type === "bun")
            return (
              <li className={styles.element} key={element.id}>
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${element.name} (верх)`}
                  price={element.price}
                  thumbnail={element.image}
                />
              </li>
            );
        })}
        <li className={styles.scroll}>
          {elements.map((element, index) => {
            if (element.type !== "bun")
              return (
                <BurgerElement
                  element={element}
                  index={index}
                  id={element.id}
                  key={element.id}
                  deleteElement={deleteElement}
                />
              );
          })}
        </li>
        {buns.map((element) => {
          if (element.type === "bun")
            return (
              <li className={styles.element} key={element.id}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${element.name} (низ)`}
                  price={element.price}
                  thumbnail={element.image}
                />
              </li>
            );
        })}
      </ul>
    </section>
  );
};
