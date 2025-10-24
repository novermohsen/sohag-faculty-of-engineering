import DepartmentCompnent from "@/app/components/department/departmentComponent";
import { getDepartmentsData } from "@/lib/getApiData";

export default async function Department({ params }) {
  const { path } = await params;
  const Departments = await getDepartmentsData();
  const Department = Departments.find((ele) => ele.path === path);
  return (
    <DepartmentCompnent
      title={Department?.title}
      type={Department?.depratmentType}
      articles={Department?.articles}
      description={Department?.description}
      specializtions={Department?.specializtion}
    />
  );
}
