import React from 'react';
import { useEffect,useState } from 'react';
import { BRAND } from '../../types/brand';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';

  

const TableOne = () => {

  const [customer, setCustomer] = useState([]);
  const [customerdata, setCustomerdata] = useState("");

  useEffect(() => {
    const getcustomer = async () => {
      const rescs = await fetch(
        "http://localhost:3050/admin/get-users"
      );
      const rescus = await rescs.json();
      setCustomer(await rescus);
    };
    getcustomer();
  }, []);
  const handlecustomer = (event) => {
    const getcustomerdata = event.target.value;
    setCustomerdata(getcustomerdata);
  };
  

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Customers
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 xl:grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-[10px] font-medium uppercase xsm:text-base">
              First Name
            </h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-[10px] font-medium uppercase xsm:text-base">
              Last Name
            </h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-[10px] font-medium uppercase xsm:text-base">
              Email Address
            </h5>
          </div>
          {/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Mobile Number
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Service
            </h5>
          </div> */}
        </div>

        {customer.map((customers) => (
          <div
            className={`grid grid-cols-3 xl:text-lg text-[10px] sm:grid-cols-3 ${
              customers._id === customers.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={customers._id}
          >
            <div className="flex items-center gap-3 p-1.5 xl:p-5">
              <div className="flex-shrink-0">
                <p className=" text-black dark:text-white sm:block">{customers.firstName}</p>
              </div>
              
            </div>

            <div className="flex p-1.5 xl:p-5">
              <p className="text-black dark:text-white">{customers.lastName}</p>
            </div>

            <div className="flex  p-1.5 xl:p-5">
              <p className="text-meta-3">{customers.email}</p>
            </div>
            

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
