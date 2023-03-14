import React from "react";
import Table, { SelectColumnFilter, StatusPill } from "./Table";

const getData = () => {
  const data = [
    {
      name: "Aurora Putri Kumala Bakti",
      email: "aurora@gmail.com",
      status: "Active",
      division: "Admin",
    },
    {
      name: "Dionisius M",
      email: "dion@gmail.com",
      status: "Active",
      division: "Manager",
    },
    {
      name: "Rafi Athahalilintar",
      email: "atha@gmail.com",
      status: "Active",
      division: "Staff",
    },
    {
      name: "David Johan",
      email: "david@gmail.com",
      status: "inactive",
      division: "Admin",
    },
    {
      name: "Raihan Adliputra",
      email: "hantop@gmail.com",
      status: "inactive",
      division: "Staff",
    },
  ]
  return [...data, ...data, ...data]
};

function UserManagement() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Division",
        accessor: "division",
        Filter: SelectColumnFilter,  
        filter: 'includes',
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
        
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="min-h-screen bg-primarywhite text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mt-4">
          <Table columns={columns} data={data} />
        </div>
      </main>
      </div>
    </>
  );
}

export default UserManagement;