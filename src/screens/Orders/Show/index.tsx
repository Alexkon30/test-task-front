import React, { useEffect, useState } from "react";
import OrdersShowStore from "./store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import styles from "./styles.m.styl";
import { map } from "lodash";
import { DeliveryType, OrderStatus } from "~/components";
import Item from "./components/Item";

type ShowParams = {
  id: string;
};

const OrdersShow = observer(
  (): JSX.Element => {
    const [state] = useState(new OrdersShowStore());
    const { id } = useParams<ShowParams>()

    useEffect(() => {
      if (state.initialized) return;
      state.initialize(id)
      // eslint-disable-next-line
    }, [])

    return (
      <div className={styles.screenWrapper}>
        <div className={styles.screen}>
          {state.loading && <span>Loading...</span>}
          {!state.loading && (
            <>
              <div>№: {state.order?.number}</div>
              <div className={styles.status}>
                <span>Статус заказа:</span>
                <div className={styles.statusTag}>
                  <OrderStatus code={state.order?.status || ''}/>
                </div>
              </div>
              <div className={styles.status}>
                <span>Способ доставки:</span>
                <div className={styles.statusTag}>
                  <DeliveryType code={state.order?.delivery.code || ''} />
                </div>
              </div>
              <div className={styles.itemsList}>
                <span>Список товаров:</span>
                <div className={styles.items}>
                  {map(state.order?.items, (item, index) =>
                    <Item key={index} item={item} />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
);

export default OrdersShow;
