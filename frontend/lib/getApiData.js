export async function getDepartmentsData() {
  const response = await fetch(
    `${process.env.STRAPI_HOST}/api/departments?populate=*`
  );
  const jsonData = await response.json();
  return jsonData.data;
}

export async function getNewsData() {
  const response = await fetch(
    `${process.env.STRAPI_HOST}/api/latest-news?populate=*&sort=createdAt:desc`
  );
  const jsonData = await response.json();
  return jsonData.data;
}
