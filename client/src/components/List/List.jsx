import React from 'react';
import './list.scss';
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const List = ({ cId, maxPrice, sort, selSubCat }) => {
  const subCategoryFilters = selSubCat.map((e) => `&[filters][sub_categories][id][$eq]=${e}`).join('');
  const sortFilters = sort=='pop'?'':`&sort=newPrice:${sort}`;

  const { data, loading, error } = useFetch(
    `http://localhost:1337/api/products?populate=*&[filters][categories][id]=${cId}${subCategoryFilters}&[filters][newPrice][$lte]=${maxPrice}${sortFilters}`
  );

  return (
    <div className='list'>
      {loading ? 'Loading...' : data?.map((e) => <Card item={e} key={e.id} />)}
    </div>
  );
};

export default List;
