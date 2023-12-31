import Link from "next/link";

import icons from "@/assets/Icons/index";
import { userProfilePath } from "@/config/pathConfig";

import Filter from "./Filter";

const Table = () => {
  return (
    <div>
      <Filter />
      <table className="w-full my-4 table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 font-medium border-b">
          <tr>
            <th className="py-3 px-6">No.</th>
            <th className="py-3 px-6">Full name</th>
            <th className="py-3 px-6">Age</th>
            <th className="py-3 px-6">Gender</th>
            <th className="py-3 px-6">Address</th>
            <th className="py-3 px-6">Phone</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">0</td>
            <td className="px-6 py-4 whitespace-nowrap">Daniel Nguyen</td>
            <td className="px-6 py-4 whitespace-nowrap">21</td>
            <td className="px-6 py-4 whitespace-nowrap">Male</td>
            <td className="px-6 py-4 whitespace-nowrap">Ho Chi Minh</td>
            <td className="px-6 py-4 whitespace-nowrap">0936720339</td>
            <td className="px-6 py-4 whitespace-nowrap">
              minhkhanh090202@gmail.com
            </td>
            <td>
              <Link
                href={userProfilePath + "/daniel.nguyen"}
                className="flex items-center transition ease-in-out delay-150 hover:-translate-y-1"
              >
                {icons.solidLinkDirect}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
