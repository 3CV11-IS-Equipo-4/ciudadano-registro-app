import { useTable, useSortBy } from 'react-table';
import { useMemo,useState } from 'react'; 
import { Link } from 'react-router-dom';

export default function Table({cols, datos, aceptar, denegar}) {
  const [cell, setCell] = useState(null);
  const [row, setRow] = useState(null);
  const data = useMemo(
    () => [
        ...datos
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const columns = useMemo(
    () => [...cols],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )



  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)

  const handleActionAceptar = (e) =>{
    e.preventDefault();
    aceptar({"id":e.target.id,...rows.find(r => r.id == e.target.id).original});
  };

  const getCell = (cell, row) =>{
    if(cell.column.id === 'prv_addr'){ 
      return <span className="material-icons" onClick={handleActionAceptar} style={{color: "green"}} id={row.id} > task </span>
    } else {
      return cell.render('Cell')
    }
  };

  return (
    <table {...getTableProps()} className="table table-bordered mx-3 p-1 shadow bg-white">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render('Header')}
                <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {                
                  return (
                    <td
                      {...cell.getCellProps()}
                    >{
                      getCell(cell, row)
                    }</td>
                  )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}