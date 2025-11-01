import { getDepartmentsData } from "@/lib/getApiData.js";
import CardDepartment from "../components/cards/departmentCard";



export default async function Departments() {
  const departments = await getDepartmentsData(
    `?fields=id,title,path&populate[thmbnail][fields]=formats`
  );
  return (
    <section className="container px-5 my-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {departments.map((department, id) => {
        return (
          <CardDepartment
            key={id}
            // img={department?.thmbnail?.formats?.small?.url || null}
            img={department?.thmbnail?.formats?.small?.url || null}
            alt={department?.title}
            title={department?.title || "image for card department"}
            href={department?.path || null}
          />
        );
      })}
    </section>
  );
}
