'use client'
import { Container, Grid, useMediaQuery } from '@mui/material';
import callBackStyle from './requestCallback.module.scss';
import Link from 'next/link';
import { Select } from '@components';

export default function RequestCallback() {
  const mediaQuery = useMediaQuery('(max-width: 576px)');
  return (
    <section className={`${callBackStyle['container']} set-bg spad`}>
      <Container>
        <Grid container>
          <Grid item md={6} lg={5} paddingX={mediaQuery ? 0 : '1.5rem'}>
            <div className={callBackStyle['text']}>
              <div className="section-title">
                <h2>request a call back</h2>
                <p>
                  Posters had been a very beneficial marketing tool because it had paved to deliver an
                  effective message that conveyed customer&lsquo;s
                </p>
              </div>
              <Link href={'/contact'}>contact us</Link>
            </div>
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item md={6} lg={6}>
            <form action="" className={callBackStyle['form']}>
              <Grid container>
                <Grid item xs={12} lg={6} paddingX={mediaQuery ? 0 : '1.5rem'}>
                  <input type="text" name='name' placeholder="Name" />
                </Grid>
                <Grid item xs={12} lg={6} paddingX={mediaQuery ? 0 : '1.5rem'}>
                  <input type="email" name='email' placeholder="Email" />
                </Grid>
                <Grid item xs={12} lg={6} paddingX={mediaQuery ? 0 : '1.5rem'}>
                  <input type="tel" name='phone' placeholder="Phone" />
                </Grid>
                <Grid item xs={12} lg={6} paddingX={mediaQuery ? 0 : '1.5rem'}>
                  <Select
                    values={['buy cars', 'sell cars', 'wash cars']}
                    label='choose our services'
                    name='service'
                    hideLabel={true}
                    className={callBackStyle['select']}
                    selectClass={callBackStyle['select-item']}
                  />
                </Grid>
              </Grid>
              <button type="submit">submit now</button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
