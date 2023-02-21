import React, { useMemo } from 'react';
import styles from './order-info-user.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/hooks/hooks';
import { useParams } from 'react-router-dom';
import { conversionDate } from '../../utils/date';

function inNotUndefined<T>(item: T | undefined): item is T {
    return item !== undefined
}

export const OrderInfoUser = () => {

    const ingredients = useSelector((store) => store.ingredientsList.ingredientsList);
    const orders = useSelector((store) => store.webSocketUser.orders);
    const { id } = useParams<{ id: string }>();
    const order = useMemo(() => {
        return orders.find(order => order._id === id)
    }, [orders, id])

    const orderIngredientsForImage = ingredients.filter((ingredient) => order?.ingredients.includes(ingredient._id))

    const orderIngredients =
        order?.ingredients.map(id => {
            return ingredients.find(item => item._id === id);
        }).filter(inNotUndefined);

    const totalOrderPrice = orderIngredients?.reduce(
        (acc, ingredient) => acc + ingredient.price,
        0
    );

    if (!order) {
        return null
    }

    const getStatus = (status: string) => {
        if (status === 'done') {
            return 'Выполнен'
        } else if (status === 'created') {
            return 'Создан'
        } else if (status === 'pending') {
            return 'Готовится'
        }
        return false;
    }

    const date = conversionDate(order.createdAt);

    return (
        <main className={styles.info}>
            <p className='text text_type_digits-default mb-10'>#{order?.number}</p>
            <h3 className='text text_type_main-medium mb-3'>{order?.name}</h3>
            <p className='text text_type_main-default mb-15' style={order?.status === 'done' ? { color: '#00CCCC' } : { color: '#FFFFFF' }}>{getStatus(order?.status)}</p>
            <p className='text text_type_main-medium mb-6'>Состав:</p>
            <ul className={styles.scroll}>
                {orderIngredientsForImage!
                    .map((element) =>
                        <li className={styles.ingredient} key={element._id}>
                            <img className={styles.image} src={element.image_mobile} alt={element.name} />
                            <p className={`${styles.text} text_type_main-default`}>{element.name}</p>
                            <p className={`${styles.price} text text_type_digits-default`}>
                                {orderIngredients?.filter(i => i._id === element._id).length} x {element.price}
                                <CurrencyIcon type='primary' />
                            </p>
                        </li>
                    )}
            </ul>
            <div className={styles.total}>
                <p className='text text_type_main-default text_color_inactive'>{date}</p>
                <div className={styles.price}>
                    <p className="text text_type_digits-default mr-2">{totalOrderPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </main>
    )
}