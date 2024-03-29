import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import icons from "@/assets/Icons/index";
import { useAppDispatch } from "@/lib/redux/store";
import { getCustomersWithPhoneNumber } from "@/services";
import { getAllCustomersSuccess } from "@/lib/redux/features";

import { Customer } from "@/models";

const Filter = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const pageNumber = searchParams?.get("page");
  const archivedCustomerStatus: string = "unarchived";

  const [filterOption, setFilterOption] = useState<string>("-1");
  const [searchCustomerPhone, setSearchCustomerPhone] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      let filter;

      switch (filterOption) {
        case "1":
          filter = "alphabetical";
          break;
        case "2":
          filter = "male";
          break;
        case "3":
          filter = "female";
          break;
        default:
          filter = "all";
          break;
      }

      if (pageNumber !== null && pageNumber !== undefined) {
        const customersData:
          | {
              statusCode: number;
              message: string;
              data?: {
                totalPage: number;
                totalCustomer: number;
                allCustomers: Array<Customer>;
              };
            }
          | undefined = await getCustomersWithPhoneNumber(
          pageNumber,
          searchCustomerPhone,
          filter,
          archivedCustomerStatus
        );

        if (customersData?.data !== undefined) {
          dispatch(getAllCustomersSuccess(customersData));
        }
      }
    };

    fetchData();
  }, [pageNumber, searchCustomerPhone, filterOption, dispatch]);

  const handleSelectFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(event.target.value);
  };

  return (
    <div className="my-4 text-base flex justify-start items-center">
      <div className="p-2 border rounded-xl shadow-lg bg-white cursor-pointer">
        <label htmlFor="filter" className="mx-2 cursor-pointer">
          {icons.filter}
        </label>
        <select
          id="filter"
          name="filter"
          value={filterOption}
          onChange={(event) => handleSelectFilter(event)}
          className="appearance-none outline-none cursor-pointer"
        >
          <option value="0">All</option>
          <option value="1">Alphabetical name</option>
          <option value="2">Male customers</option>
          <option value="3">Female customers</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Search for phone number"
        value={searchCustomerPhone}
        onChange={(event) => {
          setSearchCustomerPhone(event.target.value);
        }}
        className="p-2 mx-2 w-72 border rounded-xl shadow-lg outline-none"
      />
    </div>
  );
};

export default Filter;
