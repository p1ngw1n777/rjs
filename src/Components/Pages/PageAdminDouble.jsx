import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Container
} from '@mui/material';
import { adminService } from '../../api/services/admin.services';
import { tableSlice } from '../../Store/reducer/StatesTable';
import { useDispatch, useSelector } from 'react-redux';

const PageAdminDouble = () => {
  const dispatch = useDispatch();
  const { tablesToState1, columnToState } = tableSlice.actions;

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        let nameTable = 'getUsers';
        fetchData(nameTable);
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    };
    fetchData1(); 
  }, [dispatch]); 

  const fetchData = async (nameTable) => {
    try {
      const res = await adminService.getData(nameTable);
      dispatch(tablesToState1(res.users));
      dispatch(columnToState(res.columns));
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  const data = useSelector(state => state.StatesTable.dataOfTable);
  const columns = useSelector(state => state.StatesTable.columnOfTable);

  const handleClick = async (event, id) => {
    let nameTable;
    switch (id) {
      case '1':
        nameTable = 'getUsers';
        break;
      case '2':
        nameTable = 'getOrders';
        break;
      case '3':
        nameTable = 'getRoles';
        break;
      case '4':
        nameTable = 'getTransactions';
        break;
      case '5':
        nameTable = 'getAddresses';
        break;
      case '6':
        nameTable = 'getReviews';
        break;
      case '7':
        nameTable = 'getProducts';
        break;
      case '8':
        nameTable = 'getCategories';
        break;
      default:
        console.log('Invalid id');
        return;
    }
    await fetchData(nameTable);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data});

  const renderCellContent = (cell) => {
    if (typeof cell.value === 'string') {
      try {
        const parsedValue = JSON.parse(cell.value);
        if (Array.isArray(parsedValue)) {
          return (
            <div>
              {parsedValue.map((item, index) => (
                <div key={index}>
                  {item.productName}<br/>
                  {item.quantity}<br/>
                </div>
              ))}
            </div>
          );
        } else if (typeof parsedValue === 'object' && parsedValue !== null) {
          return (
            <div>
              {parsedValue.productName}<br/>
              {parsedValue.quantity}
            </div>
          );
        }
      } catch (e) {
        console.log(`Ошибка при парсинге значения в ячейке: ${cell.value}`);
      }
    }
    return cell.render('Cell');
  };

  return (
    <Container>
      <AppBar position="static">
	  <Toolbar>
          <Typography variant="h6" id='menuUsers' color="inherit" onClick={(event) => handleClick(event, '1')} style={{ marginRight: 30 }}>
            Пользователи
          </Typography>

          <Typography variant="h6" id='menuOrders' color="inherit" onClick={(event) => handleClick(event, '2')} style={{ marginRight: 30 }}>
            Заказы покупателей
          </Typography>

          <Typography variant="h6" id='menuRoles' color="inherit" onClick={(event) => handleClick(event, '3')} style={{ marginRight: 30 }}>
            Роли
          </Typography>

          <Typography variant="h6" id='menuTransaction' color="inherit" onClick={(event) => handleClick(event, '4')} style={{ marginRight: 30 }}>
            Транзакции
          </Typography>

          <Typography variant="h6" id='menuAddresses' color="inherit" onClick={(event) => handleClick(event, '5')} style={{ marginRight: 30 }}>
            Адреса доставки
          </Typography>

          <Typography variant="h6" id='menuReviews' color="inherit" onClick={(event) => handleClick(event, '6')} style={{ marginRight: 30 }}>
            Отзывы
          </Typography>

          <Typography variant="h6" id='menuProducts' color="inherit" onClick={(event) => handleClick(event, '7')} style={{ marginRight: 30 }}>
            Товары
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* Прочие UI элементы можно разместить здесь */}
        </Grid>
        <Grid item xs={12}>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map(headerGroup => (
                <TableRow {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
					                  {headerGroup.headers.map(column => (
                    <TableCell {...column.getHeaderProps()} key={column.id}>
                      {column.render('Header')}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()} key={row.id}>
                    {row.cells.map(cell => (
                      <TableCell {...cell.getCellProps()} key={cell.column.id}>
                        {renderCellContent(cell)}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageAdminDouble;