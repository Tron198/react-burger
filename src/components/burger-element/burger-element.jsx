import styles from './burger-element.module.css';
import PropTypes from 'prop-types';
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { moveIngredient } from "../../services/actions/ingredients-constructor";
import { ingredientType } from '../../utils/components-prop-types';

export function BurgerElement({ element, deleteElement, id, index }) {

    const ref = useRef(null)
    const dispatch = useDispatch()

    const moveCard = (start, end) => {
        dispatch(moveIngredient(start, end))
    }

    const [, drop] = useDrop({
        accept: 'item',

        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const [, drag] = useDrag({
        type: 'item',
        item: () => {
            return { id, index }
        },
    })

    drag(drop(ref))

    return (<div className={styles.listElement} key={element.id} ref={ref}>
        <DragIcon type="primary" />
        <ConstructorElement
            handleClose={() => deleteElement(element)}
            text={element.name}
            price={element.price}
            thumbnail={element.image}
        />
    </div>)
}

BurgerElement.propTypes = {
    deleteElement: PropTypes.func.isRequired,
    element: ingredientType.isRequired,
    id: PropTypes.string,
    index: PropTypes.number.isRequired,
}