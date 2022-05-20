import { useState, useEffect, lazy } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Table from '../components/Table/Table';
import SortSelector from '../components/SortSelector/SortSelector';

const initialState = [
  { id: 1, value: 100 },
  { id: 2, value: 400 },
  { id: 3, value: 200 },
  { id: 4, value: 500 },
  { id: 5, value: 300 },
];

const sortOptions = [
  { value: 'ascending', label: 'По возрастанию' },
  { value: 'descending', label: 'По убыванию' },
];

export default function TableView() {
  const location = useLocation();

  const [expenses, setExpenses] = useState(initialState);
  //   const [sortOrder, setSortOrder] = useState('ascending');

  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get('sortBy' || 'ascending');

  const onSortOrderChange = order => {
    // setSortOrder(order);
    setSearchParams({ sortBy: order });
  };

  useEffect(() => {
    if (location.search !== '') {
      return;
    }

    setSearchParams({ sortBy: 'ascending' });
  }, [location.search, setSearchParams]);

  useEffect(() => {
    setExpenses(prev =>
      [...prev].sort((a, b) => {
        return sort === 'ascending' ? a.value - b.value : b.value - a.value;
      }),
    );
  }, [sort]);

  return (
    <>
      <SortSelector
        options={sortOptions}
        onChange={onSortOrderChange}
        // value={sort}
      />
      <Table items={expenses} />
    </>
  );
}
