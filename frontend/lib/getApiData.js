export async function getDepartmentsData(
  params = `?populate[specializtion]=*&populate[articles][populate]=*&populate[latest_news][populate]=*&populate[thmbnail][populate]=*`
) {
  const response = await fetch(
    `${process.env.STRAPI_HOST}/api/departments${params}`,
    { cache: "no-store" }
  );
  const jsonData = await response.json();
  return jsonData.data;
}

export async function getNewsData(params = `?populate=*&sort=createdAt:desc`) {
  const response = await fetch(
    `${process.env.STRAPI_HOST}/api/latest-news${params}`,
    { cache: "no-store" }
  );
  const jsonData = await response.json();
  return jsonData.data;
}

export async function getWordpressData(pageId = 1) {
  const response = await fetch(
    `https://eng.sohag-univ.edu.eg/main/wp-json/wp/v2/posts?per_page=12&page=${pageId}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data;
}
