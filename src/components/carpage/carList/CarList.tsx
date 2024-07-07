'use client'
import { searchAction } from "@/actions";
import { changeCars, useAppDispatch, useAppSelector } from "@/redux";
import { CarItem } from "@components";
import { Grid } from "@mui/material";
import { useEffect } from "react";

export default function CarList({items}: {items: TCarItemMinData[]}) {
  const dispatch = useAppDispatch();
  const { cars } = useAppSelector(state => state.cars);
  useEffect((): void => {
    dispatch(changeCars(items));
  }, [items]);
  return (
    <Grid container marginX={'-1.5rem'} width={'auto'}>
      {
        cars.map(car => (
          <Grid key={car._id} item xs={12} md={4} lg={4} paddingX={'1.5rem'} marginBottom={'3rem'}>
            <CarItem data={car} />
          </Grid>
        ))
      }
    </Grid>
  )
}
