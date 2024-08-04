// components/Table.tsx
import React from 'react';

type TableProps = {
  headers: string[];
  data: Record<string, any>[];
};

const Table: React.FC<TableProps> = ({ headers, data }) => {
  const formatValue = (value: any) => {
    if (value instanceof Date) {
      return value.toLocaleDateString(); // Format the date as needed
    }
    return value;
  };
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header, cellIndex) => {
                    const key = header.toLowerCase().replace(/\s/g, '_');
                    const value = row[key];
                    return (
                      <td key={cellIndex} className="px-4 py-2">
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
