import React from 'react';
import styles from './styles.m.styl';
import { OrdersListItem } from '../../types';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import 'moment/locale/ru';
import { Link } from 'react-router-dom';
import { DeliveryType, OrderStatus } from '~/components';

const ListItem = observer(
  ({ order, index }: { order: OrdersListItem; index: number }): JSX.Element => {
    return (
      <Link
        to={`/orders/${order.id}`}
        className={`${styles.row} ${
          index % 2 === 0 ? styles.row_first : styles.row_second
        }`}
      >
        <div className={styles.orderNumber}>{order.number}</div>
        <div>{moment(order.createdAt).format('DD.MM.YYYY HH:mm')}</div>
        <div title={order.delivery?.code}>
          {order.delivery && <DeliveryType code={order.delivery?.code} />}
        </div>
        <div>{moment().from(order.createdAt, true)}</div>
        <div title={order.status}>
          <OrderStatus code={order.status} />
        </div>
      </Link>
    );
  }
);

export default ListItem;
