export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await fetch(URL);
    const categories = await response.json();
    return categories;
  } catch (e) {
    console.log(e.message);
  }
}

// Refatoração da URL da requisição, pois estava retornando um arrray vazio.
export async function getProductsFromCategoryAndQuery(CATEGORY_ID, QUERY) {
  const URL_CAT = `https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}`;
  try {
    const request = await fetch(URL_CAT);
    const response = await request.json();
    return response;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getProductById(PRODUCT_ID) {
  const URL_PRODUCT = ` https://api.mercadolibre.com/items/${PRODUCT_ID}`;
  try {
    const request = await fetch(URL_PRODUCT);
    const response = await request.json();
    return response;
  } catch (e) {
    console.log(e.message);
  }
}
