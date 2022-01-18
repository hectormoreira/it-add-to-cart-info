import React from "react"
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ProductGroup from "./ProductGroup";
import Totalizer from "./Totalizer";
import ButtonGroup from "./ButtonGroup";
import { generateBlockClass } from "@vtex/css-handles";
import styles from "./styles.css"

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const containerItem = generateBlockClass(styles.container__item, blockClass)

  const productInfo = useProduct();
  const { orderForm: { items, totalizers } } = useOrderForm();

  console.log("infoproduct", productInfo);
  return (
    <div className={container}>
      <ProductGroup className={containerItem} products={items} />
      <Totalizer
        totalizer={totalizers[0]}
      // items={items.length}
      />
      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo
