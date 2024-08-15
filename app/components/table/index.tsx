// components/Table.tsx
import React from 'react';

type TableProps = {
  headers: string[];
  data: Record<string, any>[];
  headerKeyMap: { [key: string]: string }; // Add headerKeyMap as a prop
};

const headerKeyMap: { [key: string]: string } = {
  'Home ID': 'id',
  Owner: 'owner',
  Coordinates: 'coordinates',
  'Contact No.': 'contact_no',
  Status: 'status',
  'Date Created': 'date_created'
};

const Table: React.FC<TableProps> = ({ headers, data, headerKeyMap }) => {
  const formatValue = (value: any) => {
    if (value instanceof Date) {
      return value.toLocaleDateString(); // Format the date as needed
    } else if (typeof value === 'string' && !isNaN(Date.parse(value))) {
      return new Date(value).toLocaleDateString(); // Format string dates
    }
    return value;
  };

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg border-b text-left text-sm font-normal">
              <tr>
                {headers.map((header, index) => (
                  <th key={index} scope="col" className="px-4 py-5 font-bold sm:pl-6">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="w-fit border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  {headers.map((header, cellIndex) => {
                    const key = headerKeyMap[header];
                    const value = row[key];
                    return (
                      <td key={cellIndex} className="whitespace-nowrap py-3 pl-6 pr-3">
                        {formatValue(value)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
