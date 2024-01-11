import Link from "next/link";

import { usePathname } from "next/navigation";

function Item({
  title,
  path,
  icon,
}: {
  title: string;
  path: string;
  icon: React.ReactNode;
}) {
  const currentPage = usePathname();

  return (
    <Link
      href={path}
      className={`text-xl text-gray-600 font-medium my-2 p-4 rounded-lg hover:text-gray-800 hover:bg-slate-100 ${
        path === currentPage ? "bg-white shadow-lg" : ""
      }`}
    >
      <span>{icon}</span>
      <span className="mx-2">{title}</span>
    </Link>
  );
}

export default Item;
