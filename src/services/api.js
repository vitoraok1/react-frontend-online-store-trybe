export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await fetch(URL);
    const categories = response.json();
    return categories;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getProductsFromCategoryAndQuery(CATEGORY_ID, QUERY) {
  const URL_CAT = `https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}`;
  const URL_QUERY = `https://api.mercadolibre.com/sites/MLB/search?category=${QUERY}`;
  try {
    const request = await fetch(URL_CAT);
    const response = request.json();
    return response;
  } catch (e) {
    console.log(e.message);
  }

  try {
    const request = await fetch(URL_QUERY);
    const response = request.json();
    return response;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
