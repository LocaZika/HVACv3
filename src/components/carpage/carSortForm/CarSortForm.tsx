'use client'
import { sortAction } from "@/actions/sort.action";
import { Grid } from "@mui/material";
import SelectSort from "./SelectSort";
import { paginationState, useAppSelector } from "@/redux";

export default function CarSortForm() {
  const handleSubmit = (): void => {console.log('submited')};
  const {page} = useAppSelector(paginationState);
  return (
    <form /*action={sortAction}*/ onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <SelectSort
            name="page"
            label="show on page"
            items={[9, 15]}
            isQuantity
            page={page}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectSort
            name="order"
            label="sort by price"
            items={['ascending', 'descending']}
            page={page}
          />
        </Grid>
      </Grid>
    </form>
  )
}
