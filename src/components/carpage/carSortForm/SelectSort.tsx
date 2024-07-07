'use client'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import selectSortStyle from './selectSort.module.scss';

interface ISelectSort {
  label: string;
  items: string[] | number[];
  name: string;
  isQuantity?: boolean;
  page: number;
}
export default function SelectSort({items, name, label, isQuantity, page}: ISelectSort) {
  const [value, setValue] = useState<string>(items[0].toString());
  const handleChange = (e: SelectChangeEvent): void => {
    setValue(e.target.value as string);
  }
  return (
    <div className={isQuantity ? selectSortStyle['container'] : `${selectSortStyle['container']} ${selectSortStyle['right']}`}>
      <h6>{label}</h6>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        name={name}
        className={selectSortStyle['select-root']}
        SelectDisplayProps={{
          className: selectSortStyle['select-item'],
          style: {height: '3.6rem'}
        }}
      >
        {
          items.map((item) => (
            <MenuItem
              key={item}
              value={isQuantity ? item + '' : item}
              className={selectSortStyle['item']}
            >
              <span>{isQuantity ? `${item} cars` : item}</span>
            </MenuItem>
          ) )
        }
      </Select>
    </div>
  )
}
