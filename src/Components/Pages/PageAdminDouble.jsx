import React, { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import {
  AppBar,
  Toolbar,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  Button,
  Container,
  Grid,

} from '@mui/material';
import { adminService } from '../../api/services/admin.services';
import { tableSlice  } from '../../Store/reducer/StatesTable';
import { useDispatch, useSelector } from 'react-redux';

const PageAdminDouble = () => {
  const dispatch = useDispatch();
  const { tablesToState1, columnToState } = tableSlice.actions
  // Определяем столбцы, используя useMemo
//   const columns = useMemo(() => [
//     { Header: '№', accessor: 'id' },
//     { Header: 'Имя пользователя', accessor: 'login' },
//     { Header: 'Пароль', accessor: 'password' },
//     { Header: 'Email', accessor: 'email' },
//     { Header: 'Роль', accessor: 'role.role_name' },
//   ], []);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        let nameTable = 'getUsers'
        fetchData(nameTable)
        //setColumns(columns1)
      } 
      catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    };
    fetchData1(); 
}, []); 

  // Асинхронная функция для получения данных с сервера
  const fetchData = async (nameTable) => {
    try {
      const res = await adminService.getData(nameTable);
      dispatch(tablesToState1(res.users));
      dispatch(columnToState(res.columns));
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

//   const [columns, setColumns ] = useState([
//         { Header: '№', accessor: 'id' },
//         { Header: 'Имя пользователя', accessor: 'login' },
//         { Header: 'Пароль', accessor: 'password' },
//         { Header: 'Email', accessor: 'email' },
//         { Header: 'Роль', accessor: 'role.role_name' },
//       ]) 

  const data = useSelector(state => state.StatesTable.dataOfTable);
  const columns = useSelector(state => state.StatesTable.columnOfTable);
  console.log('получили из', columns)
  let idd;
  // Обработчик событий клика на элементы меню
  const handleClick = async (event, id) => {
    let nameTable;
    switch (id) {
      case '1':
        idd = 1;
        nameTable = 'getUsers';
        break;
      case '2':
        idd = 2;
        nameTable = 'getOrders';
        break;
      case '3':
        idd = 3;
        nameTable = 'getRoles';
        break;
      case '4':
        idd = 4;
        nameTable = 'getTransactions';
        break;
      case '5':
        idd = 5;
        nameTable = 'getAddresses';
        break;
      case '6':
        idd = 6
        nameTable = 'getReviews';
        break;
      case '7':
        idd = 7
        nameTable = 'getProducts';
        break;
      case '8':
        idd = 8;
        nameTable = 'getCategories';
        break;
      default:
        console.log('Invalid id');
        return;
    }
    await fetchData(nameTable); // Обновляем данные при каждом нажатии
  };

  // Используем React Table для настройки таблицы
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  //} = useTable({ columns, !data ? data :  [{ id: '4', login: 'admin1', password: 'adawd', email: 'efwfewf', role: 'wfefw' }]});
  } = useTable({columns, data})

  const [selectedId, setSelectedId] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('');
  const [newValue, setNewValue] = useState('');

  const handleUpdate = () => {
    if (!selectedId || !selectedColumn) {
      alert('Пожалуйста, выберите ID и столбец');
      return;
    }
    
    const updatedData = data.map(row => {
      if (row.id === selectedId) {
        return { ...row, [selectedColumn]: newValue };
      }
      return row;
    });
    dispatch(tablesToState1(updatedData));
  };

  return (
    <>
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
      <Container>
      <Grid container spacing={3} alignItems="center" style={{ marginTop: 20 }}>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Выберите ID</InputLabel>
              <Select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
                {data.map(row => (
                  <MenuItem key={row.id} value={row.id}>{row.id}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Выберите столбец</InputLabel>
              <Select value={selectedColumn} onChange={(e) => setSelectedColumn(e.target.value)}>
                {columns.map(column => (
                  <MenuItem key={column.accessor} value={column.accessor}>{column.Header}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Новое значение"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="contained" color="primary" onClick={handleUpdate}>
              Изменить
            </Button>
          </Grid>
        </Grid>

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
                      {cell.render('Cell')}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </>
  );
};

export default PageAdminDouble;