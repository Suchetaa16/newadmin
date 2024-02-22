import React from 'react';
import { Package } from '../../types/package';

import { useState, useEffect } from "react";




const TableThree = () => {

  const [contact, setContact] = useState([]);
  const [conatctdata, setContactdata] = useState("");

  useEffect(() => {
    const getcontact = async () => {
      const rescn = await fetch(
        "http://localhost:3050/admin/get-queries"
      );
      const rescon = await rescn.json();
      setContact(await rescon);
    };
    getcontact();
  }, []);
  const handleconatct = (event) => {
    const getcontactdata = event.target.value;
    setContactdata(getcontactdata);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Contact Us
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-[10px] font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-[10px]  font-medium uppercase xsm:text-base">
              Email Address
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-[10px] font-medium uppercase xsm:text-base">
              Subject
            </h5>
          </div>
          <div className="p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-[10px] font-medium uppercase xsm:text-base">
              Message
            </h5>
          </div>
          
        </div>

        {contact.map((contacts) => (
          <div
            className={`grid grid-cols-3 text-lg sm:grid-cols-4 ${
              contacts._id === contacts.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={contacts._id}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <p className=" text-black dark:text-white sm:block">{contacts.name}</p>
              </div>
              

            <div className="flex  p-2.5 xl:p-5">
              <p className="text-meta-3">{contacts.email}</p>
            </div>

            <div className="flex  p-2.5 xl:p-5">
              <p className="text-meta-3">{contacts.subject}</p>
            </div>
            <div className="flex  p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{contacts.message}</p>
            </div>

            
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableThree;
