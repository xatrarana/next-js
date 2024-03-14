
import Link from "next/link";

const page = () => {
  return (
   <div>
    <p>this is service page</p>
    <Link href={'/admin/page/services/new'} className=" cursor-pointer"> new </Link>
   </div>
  );
};

export default page;


