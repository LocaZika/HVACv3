import { Breadcrumb } from '@/components';
import contactStyle from './contact.module.scss';
import { Container, Grid } from '@mui/material';
import { contactAction } from '@/actions';
import { getData, toTel } from '@/utils';

export default async function page() {
  const contactpage: TContactpage = await getData('/contactpage');
  return (
    <>
      <Breadcrumb title='contact us' />
      <section className={`${contactStyle['contact']} spad`}>
        <Container>
          <Grid container>
            <Grid item md={6} lg={6}>
              <div className={contactStyle['text']}>
                <div className='section-title'>
                  <h2>{contactpage.title}</h2>
                  <p>{contactpage.text}</p>
                </div>
                <ul>
                  <li>
                    <span>weekdays:</span>
                    {contactpage.schedule.weekdays}
                  </li>
                  <li>
                    <span>saturday</span>
                    {contactpage.schedule.saturday}
                  </li>
                  <li>
                    <span>sunday</span>
                    {contactpage.schedule.sunday}
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item md={6} lg={6}>
              <form action={contactAction}>
                <div className={contactStyle['input']}>
                  <input type="text" name="name" placeholder='Name' />
                  <input type="text" name="email" placeholder='Email' />
                </div>
                <input type="text" name="subject" placeholder='Subject'/>
                <textarea name="question" placeholder='Your Question'></textarea>
                <button type="submit">submit now</button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </section>
      <div className={contactStyle['address']}>
        <Container>
          <div className={contactStyle['text']}>
            <Grid container>
              {
                contactpage.showrooms.map(({_id, address, email, name, phone}) => (
                  <Grid item key={_id} sm={6} md={6} lg={4}>
                    <div className={contactStyle['item']}>
                      <h4>{name}</h4>
                      <p>{address}</p>
                      <p>{email}</p>
                      <a href={`tel:${toTel(phone)}`}>{phone}</a>
                    </div>
                  </Grid>
                ))
              }
            </Grid>
          </div>
        </Container>
      </div>
    </>
  )
}
