import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import carSearchStyle from './carSearchForm.module.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { searchAction } from '@/actions';
export default function CarSearchForm() {
  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const res  = await fetch('@actions/search.action');
    if(res.ok){
      const data = await res.json();
      console.log(data);
    }
  }
  return (
    <div className={carSearchStyle['container']}>
      <h5>car search</h5>
      <form >
        <input type="text" name="q" placeholder='Search...' />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  )
}
