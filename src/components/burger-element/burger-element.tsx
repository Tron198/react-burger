import styles from "./burger-element.module.css";
import { FC, useRef } from "react";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "../../services/hooks/hooks";
import { moveIngredient } from "../../services/actions/ingredients-constructor";
import { TBurgerElement } from "../../services/types/types";

export const BurgerElement: FC<TBurgerElement> = ({
  element,
  deleteElement,
  id,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const moveCard = (start: number, end: number) => {
    dispatch(moveIngredient(start, end));
  };

  const [, drop] = useDrop({
    accept: "item",

    hover(item: { index: number }, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex: number = item.index;
      const hoverIndex: number = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const rect: HTMLElement = ref.current;
      const hoverBoundingRect: DOMRect = rect?.getBoundingClientRect();
      const hoverMiddleY: number =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset: XYCoord | null = monitor.getClientOffset();
      const hoverClientY: number = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [, drag] = useDrag({
    type: "item",
    item: () => {
      return { id, index };
    },
  });

  drag(drop(ref));

  return (
    <div className={styles.element} key={element.id} ref={ref}>
      <DragIcon type="primary" />
      <ConstructorElement
        handleClose={() => deleteElement(element)}
        text={element.name}
        price={element.price}
        thumbnail={element.image}
      />
    </div>
  );
};
