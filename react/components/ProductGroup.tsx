import React from 'react';

const ProductGroup = (products: any) => {

  return (
    <div>
      {
        products.products.map((item: any, ndx: number) => {

          return (
            <div key={ndx}>
              <div>
                <img src={item.imageUrls.at1x} alt={item.name} />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.id}</p>
                <p>${item.price / 100}</p>
                <p>Cantidad: {item.quantity}</p>

              </div>

            </div>
          )
        })
      }
    </div>
  );
};

export default ProductGroup;
