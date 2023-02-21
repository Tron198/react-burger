import styles from './pages.module.css';
import { OrdersHistory } from '../components/orders-history/orders-history';
import { Orders } from '../components/orders/orders';
import { useEffect } from "react";
import { useDispatch } from '../services/hooks/hooks';
import { wsConnectionStart, wsConnectionClosed } from '../services/actions/wsActions';

export const FeedPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart());
        return () => {
            dispatch(wsConnectionClosed());
        };
    }, []);

    return (
        <section className={styles.feed}>
            <h3 className="text text_type_main-large mt-10">Лента заказов
                <OrdersHistory />
            </h3>
            <Orders />
        </section>
    )
}