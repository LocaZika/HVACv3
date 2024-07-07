import { HeaderTop, Navbar } from "./components";

interface IHeader extends THeader{
  contactInfo: TContactInfo,
}
export default function header({data}: {data: IHeader}) {  
  return (
    <header>
      <HeaderTop
        email={data.contactInfo.email}
        phone={data.contactInfo.phone}
        schedule={data.contactInfo.schedule}
        socials={data.contactInfo.socials}
      />
      <Navbar items={data.navbar} contactInfo={data.contactInfo} />
    </header>
  )
}
