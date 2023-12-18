//Agregar un producto al carrito:

export const addProductToShop = (shopItems, product) => {
  const productAdded = shopItems.find((item) => item.id === product.id);

  if (productAdded) {
    return shopItems.map(
      (item) =>
        item.id === productAdded.id
          ? { ...item, quantity: item.quantity + 1 } // si está, le suma una unidad
          : item // si no está, agrega el producto al carrito
    );
  }

  return [...shopItems, { ...product, quantity: 1 }];
};

//Remover el producto del carrito:

export const removeProductFromShop = (shopItems, id) => {
  const productToRemove = shopItems.find((item) => item.id === id);

  if (productToRemove.quantity > 1) {
    return shopItems.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 } // si está, le resta una unidad
        : item
    );
  }
  return shopItems.filter((item) => item.id !== productToRemove.id);
};

//Resetear el costo:

export const resetShippingCost = (shopItems, shippingCost) => {
  if (shopItems.length === 1 && shopItems[0].quantity === 1) {
    return 0;
  }
  return shippingCost;
};
