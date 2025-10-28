import DepartmentCompnent from "@/app/components/department/departmentComponent";
import { getDepartmentsData } from "@/lib/getApiData";

export async function generateMetadata({ params }) {
  const { path } = await params;
  const Departments = await getDepartmentsData();
  const Department = Departments.find((ele) => ele.path === path);
  return {
    title: Department?.title,
    description: Department?.description,
    openGraph: {
      title: Department?.title,
      description: Department?.description,
      url: `sohag-faculty-of-engineering.vercel.app/departments/${path}`,
      images: [
        {
          url: Department?.thumbnail?.formats?.medium?.url,
          width: 1200,
          height: 630,
          alt: Department?.title,
        },
      ],
      locale: "ar_EG",
      type: "website",
    },
    twitter: {
      site: "https://sohag-faculty-of-engineering.vercel.app/",
      creator: "@SohagUnivEng",
      title: Department?.title,
      description: Department?.title,
      images: Department?.thumbnail?.formats?.medium?.url,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": "-1",
      },
    },
    alternates: {
      canonical: `sohag-faculty-of-engineering.vercel.app/departments/${path}`,
      languages: {
        "ar-EG": `sohag-faculty-of-engineering.vercel.app/departments/${path}`,
        "x-default": `sohag-faculty-of-engineering.vercel.app/departments/${path}`,
      },
    },
  };
}

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
      path={path}
    />
  );
}
