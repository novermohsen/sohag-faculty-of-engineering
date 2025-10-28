export async function getDepartmentsData() {
  const response = await fetch(
    `${process.env.STRAPI_HOST}/api/departments?populate[specializtion]=*&populate[articles][populate]=*&populate[latest_news][populate]=*&populate[thmbnail][populate]=*`,
    { cache: "no-store" }
  );
  const jsonData = await response.json();
  return jsonData.data;
}

export async function getNewsData() {
  const response = await fetch(
    `${process.env.STRAPI_HOST}/api/latest-news?populate=*&sort=createdAt:desc`,
    { cache: "no-store" }
  );
  const jsonData = await response.json();
  return jsonData.data;
}
