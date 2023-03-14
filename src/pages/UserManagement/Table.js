import React from "react";
import { useTable, useGlobalFilter, useAsyncDebounce, useFilters, useSortBy, usePagination, useRowSelect } from 'react-table'  // new
import { Button, PageButton } from '../shared/Button'
import { classNames } from "../shared/Utils";
import { useRowSelectColumn } from '@lineup-lite/hooks';


function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  
    return (
        <label className="flex gap-x-2 items-baseline">
        <span className="text-gray-700">Search: </span>
        <input
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
        </label>
    )
}

export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id, render },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
      const options = new Set();
      preFilteredRows.forEach((row) => {
        options.add(row.values[id]);
      });
      return [...options.values()];
    }, [id, preFilteredRows]);
  
    // Render a multi-select box
    return (
        <>
        <label className="flex gap-x-2 items-baseline">
        <span className="text-gray-700">{render("Header")}: </span>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          name={id}
          id={id}
          value={filterValue}
          onChange={e => {
            setFilter(e.target.value || undefined)
          }}
        >
          <option value="">All</option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        </label>
        </>
    );
}

export function StatusPill({ value }) {
    const status = value ? value.toLowerCase() : "unknown";
  
    return (
      <span
        className={classNames(
          "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
          status.startsWith("active") ? "bg-green-100 text-green-700" : null,
          status.startsWith("inactive") ? "bg-yellow-100 text-yellow-700" : null,
          status.startsWith("offline") ? "bg-red-100 text-red-700" : null
        )}
      >
        {status}
      </span>
    );
}

function Table({ columns, data }) {

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups,  
    prepareRow, 
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter 
    } = useTable (
        {columns,data},
        useGlobalFilter,
        useFilters,
        useSortBy,
        usePagination,
        useRowSelect, 
        useRowSelectColumn
        );

  return (
    <>
    <div className="flex gap-x-2">
    <GlobalFilter 
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter} />

    {headerGroups.map((headerGroup) =>
        headerGroup.headers.map((column) =>
            column.Filter ? (
            <div key={column.id}>
                {column.render("Filter")}
            </div>
            ) : null
        ))}
    </div>

    <div className="mt-[20px] flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-[25px]">
                <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                <thead className="bg-darkgrey">
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th
                            scope="col"
                            className="px-9 py-3 text-left text-sm font-bold text-black uppercase tracking-wider"
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                        >
                            {column.render('Header')}
                            {column.id === 'selection' && column.render('Summary')}
                            <span>
                                {column.isSorted
                                ? column.isSortedDesc
                                    ? ' ▼'
                                    : ' ▲'
                                : ''}
                            </span>
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody
                    {...getTableBodyProps()}
                    className="bg-white divide-y divide-gray-200"
                    >
                    {page.map((row, i) => { prepareRow(row)
                        return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                            return (
                                <td
                                {...cell.getCellProps()}
                                className="px-9 py-4 whitespace-nowrap"
                                >
                                {cell.render('Cell')}
                                </td>
                            )
                            })}
                        </tr>
                        )
                    })}
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>

    <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
            <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="flex gap-x-2 sm:items-center sm:justify-between" >
                <span className="text-sm text-gray-700"> Page 
                    <span className="font-medium">{state.pageIndex + 1}</span> of 
                    <span className="font-medium">{pageOptions.length}</span>
                </span>
                <label>
                    <select
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={state.pageSize}
                        onChange={(e) => {
                        setPageSize(Number(e.target.value));
                        }}
                    >
                        {[5, 10, 20].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <PageButton
                    className="rounded-l-md"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                >
                    <span className="sr-only">First</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </PageButton>
                <PageButton
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                <span className="sr-only">Previous</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                </PageButton>
                <PageButton
                    onClick={() => nextPage()}
                    disabled={!canNextPage
                    }>
                    <span className="sr-only">Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </PageButton>
                <PageButton
                    className="rounded-r-md"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                <span className="sr-only">Last</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </PageButton>
            </nav>
          </div>
        </div>
      </div>

    <div>
        <pre>
          <code>{JSON.stringify(state, null, 5)}</code>
        </pre>
    </div>
    </>
  );
}

export default Table;