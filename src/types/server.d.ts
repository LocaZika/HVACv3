type TImg = {_id: string, path: string};
type TBreadcrumb = string;
/***RESPONSE***/
type TResponse<T> = {
  first: number,
  prev: number | null,
  next: number,
  last: number,
  pages: number,
  items: number,
  data: T,
};
/***RESPONSE***/
/***HEADER***/
type TSchedule = string;
type TContactEmail = string;
type TContactPhone = string;
type TSocials = {
  _id: string,
  facebook: string,
  twitter: string,
  instagram: string,
  skype: string,
  google: string,
};
type TNavbarItem = {
  _id: string,
  name: string,
  path: string,
};
type TContactInfo = {
  email: TContactEmail,
  phone: TContactPhone,
  schedule: TSchedule,
  socials: TSocials,
}
type TNavbar = TNavbarItem[];
type THeader = {
  _id: string,
  navbar: TNavbar,
}
/***HEADER***/
/***FOOTER***/
type TTopCarTypeItem = {
  _id: string,
  type: string,
};
type TTopCarBrandItem = {
  _id: string,
  brand: string,
};
type TFooter = {
  _id: string,
  contactTitle: string,
  aboutContent: string,
  imgs: {bg: string, logo: string},
  topCarTypes: TTopCarTypeItem[],
  topCarBrands: TTopCarBrandItem[],
  contactInfo: TContactInfo,
}
/***FOOTER***/
/***LAYOUT***/
type TLayout = {
  header: THeader,
  footer: TFooter,
  contactInfo: TContactInfo,
};
/***LAYOUT***/
/***HOMEPAGE***/
  /***Hero***/
type THero = {
  _id: string,
  title: string,
  hotRent: {
    _id: string,
    name: string,
    price: number,
    model: number,
    imgs: TImg[],
  },
  filterForm: {
    models: number[],
    brands: string[],
    types: string[],
    transmissions: string[],
  }
};
  /****Services****/
type TServiceItem = {
  _id: string,
  title: string,
  text: string,
  img: string,
};
type TServices = {
  title: string,
  subTitle: string,
  text: string,
  items: TServiceItem[],
};
  /****Features****/
type TFeatureHomepageItem = {
  _id: string,
  text: string,
  img: string,
};
type TFeaturesHomepage = {
  _id: string,
  title: string,
  subTitle: string,
  text: string[],
  items: TFeatureHomepageItem[],
};
  /****Car****/
type TCarItemMinData = {
  _id: string,
  name: string,
  price: number,
  tradeType: string,
  hp: number,
  mileage: number,
  transmission: string,
  model: number,
  imgs: TImg[],
}
type TCarHomepage = {
  _id: string,
  title: string,
  subTitle: string,
  items: TCarItemMinData[],
};
  /****ChooseUs****/
type TChooseUsItem = {
  _id: string,
  text: string,
};
type TChooseUs = {
  _id: string,
  title: string,
  text: string,
  items: TChooseUsItem[],
  videoUrl: string,
};
type TCtaItem = {
  _id: string,
  title: string,
  text: string,
  img: string,
};
type TCta = {
  _id: string,
  items: TCtaItem[],
};
type THomepage = {
  hero: THero,
  services: TServices,
  features: TFeaturesHomepage,
  car: TCarHomepage,
  chooseUs: TChooseUs,
  cta: TCta,
};
/***HOMEPAGE***/
/***CARSPAGE***/
type TCarItem = TCarItemMinData & {
  brand: string,
  fuelType: string,
  type: string,
  detailImgs: TImg[],
};
type TCarFilterFormItem = {
  _id: string,
  name: string,
  label: string,
  options: string[] | number[],
}
type TCarFilterForm = TCarFilterFormItem[];
type TCarspage = {
  _id: string,
  filterForm: TCarFilterForm,
}
/***CARSPAGE***/
/***ABOUTPAGE***/
  /****Features****/
type TFeatureAboutItem = {
  _id: string,
  title: string,
  text: string,
  img: string,
};
  /****About****/
type TAboutItem = {
  _id: string,
  title: string,
  text: string,
};
type TAbout = {
  title: string[];
  text: string;
  img: string;
  features: TFeatureAboutItem[];
  items: TAboutItem[];
};
  /****Team****/
type TTeamItem = {
  _id: string,
  name: string,
  position: string,
  img: string,
};
type TTeams = {
  _id: string,
  title: string,
  subTitle: string,
  items: TTeamItem[],
};
  /****Testimonials****/
type TTestimonialItem = {
  _id: string,
  name: string,
  position: string,
  text: string,
  img: string,
  rate: number,
};
type TTestimonials = {
  _id: string,
  title: string,
  subTitle: string,
  text: string,
  items: TTestimonialItem[],
};
  /****Quantities****/
type TQuantityItem = {
  _id: string,
  name: string,
  value: number,
};
type TQuantities = {
  _id: string,
  items: TQuantityItem[],
};
  /****Clients****/
type TClientItem = {
  _id: string,
  img: string,
  alt?: string,
};
type TClients = {
  _id: string,
  title: string,
  subTitle: string,
  items: TClientItem[],
};
type TAboutpage = TAbout & {
  _id: string,
  teams: TTeam,
  testimonials: TTestimonial,
  quantities: TQuantities,
  clients: TClients,
};
/***ABOUTPAGE***/
/***CONTACTPAGE***/
type TContactSchdule = {
  _id: string,
  weekdays: string,
  saturday: string,
  sunday: string,
};
type TShowroomItem = {
  _id: string,
  name: string,
  address: string,
  phone: string,
  email: string,
}
type TContactpage = {
  _id: string,
  title: string,
  text: string,
  schedule: TContactSchdule,
  showrooms: TShowroomItem[],
}
/***CONTACTPAGE***/