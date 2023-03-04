import clsx from 'clsx';
import { FC, Fragment } from 'react';
import { ComponentApi } from '@/interfaces';

interface ApiTableProps {
  api: ComponentApi[];
}

const ApiTable: FC<ApiTableProps> = ({ api }) => {
  const headers = ['property', 'description', 'required', 'type', 'default'];
  const cellCommonStyle =
    'py-2 px-4 text-neutral-800 border-solid border-neutral-200 text-center';
  const higlightedText = 'text-red-700';

  const cell = (
    text: string | string[],
    style: string = '',
    lastRight = false,
    lastBottom = false
  ) => {
    const isArray = Array.isArray(text);
    return (
      <td
        className={clsx(
          'bg-neutral-50',
          cellCommonStyle,
          !isArray && style,
          !lastRight && 'border-r',
          !lastBottom && 'border-b'
        )}
      >
        {isArray ? (
          <span className="flex items-center justify-center gap-2">
            {text.map((item, i) => (
              <Fragment key={item + i}>
                <span className={style}>{item}</span>
                {i < text.length - 1 && (
                  <span className="text-sm"> {' | '} </span>
                )}
              </Fragment>
            ))}
          </span>
        ) : (
          text
        )}
      </td>
    );
  };

  return (
    <table className="w-full bg-neutral-100 rounded-md shadow-md">
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th
              className={clsx(
                'capitalize  font-semibold border-b',
                cellCommonStyle,
                i < headers.length - 1 && 'border-r'
              )}
              key={header + i}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {api.map((field, i) => (
          <tr key={field.property + field.required + i}>
            {cell(field.property)}
            {cell(field.description)}
            {cell(field.required.toString(), higlightedText)}
            {cell(field.type, higlightedText)}
            {cell(field.default)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApiTable;
