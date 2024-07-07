import { Container, Grid } from '@mui/material';
import breadcrumbStyle from './breadcrumb.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface IBreadcrumb{
  title: string;
}
export default function Breadcrumb({title}: IBreadcrumb) {
  return (
    <div className={`${breadcrumbStyle['container']} set-bg`}>
      <Container>
        <Grid container>
          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <div className={breadcrumbStyle['text']}>
              <h2>{title}</h2>
              <div className={breadcrumbStyle['link']}>
                <Link href={'/'}>
                  <FontAwesomeIcon icon={faHouseChimney} />
                  home
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
                <span>{title}</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
