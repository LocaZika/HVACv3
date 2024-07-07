import { Breadcrumb, CarFilterForm, CarList, CarSearchForm, CarSortForm, Pagination } from "@components";
import carpageStyle from './cars.module.scss';
import { Container, Grid } from "@mui/material";
import { getData } from "@/utils";
import { StoreProvider } from "@/redux";

export default async function page() {
  const carspage: TCarspage = await getData('/carspage');
  const res: TResponse<TCarItemMinData[]> = await getData('/cars?_page=1&_per_page=9');
  return (
    <>
      <Breadcrumb title="car list"/>
      <StoreProvider data={res}>
        <section className={`${carpageStyle['container']} spad`}>
          <Container>
            <Grid container width={'auto'} marginX={'-1.5rem'}>
              <Grid item xs={12} lg={3} paddingX={'1.5rem'}>
                <div className={carpageStyle['sidebar']}>
                  <CarSearchForm />
                  <CarFilterForm data={carspage.filterForm} />
                </div>
              </Grid>
              <Grid item xs={12} lg={9} paddingX={'1.5rem'}>
                <div className={carpageStyle['sort']}>
                  <CarSortForm />
                </div>
                <div className={carpageStyle['cars']}>
                  <CarList items={res.data} />
                </div>
                <div className={carpageStyle['pagination']}>
                  <Pagination pages={res.pages}/>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </StoreProvider>
    </>
  )
}
