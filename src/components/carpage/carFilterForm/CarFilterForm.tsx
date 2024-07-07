import { PriceRange, Select } from '@components';
import carFilterStyle from './carfilterForm.module.scss';
import { filterAction } from '@actions';
import { cookies } from 'next/headers';

export default function CarFilterForm({data}: {data: TCarFilterForm}) {
  return (
    <div className={carFilterStyle['container']}>
      <h5>car filter</h5>
      <form action={filterAction}>
        {
          data.map(({_id, label, name, options}) => (
            <Select
              key={_id}
              label={label}
              name={name}
              values={options}
              hideLabel
              className={carFilterStyle['select']}
              classes={{
                select: carFilterStyle['item'],
              }}
            />
          ))
        }
        <div className={carFilterStyle['price-range']}>
          <PriceRange min={0} max={1200} values={[400, 800]} />
        </div>
        <div className={carFilterStyle['btn']}>
          <button type="submit">Filter car</button>
        </div>
      </form>
      <div className={carFilterStyle['btn']}>
        <button type="button">reset filter</button>
      </div>
    </div>
  )
}
