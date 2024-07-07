# Layout Route
=================
> host/layout
>> => {
  header: {
    _id: string,
    navbar: [{_id: string, name: string, path: string}],
  },
  footer: {
    _id: string,
    contactTitle: string,
    aboutContent: string,
    topCarTypes: [{_id: string, name: string}],
    topCarBrands: [{{_id: string, name: string}}],
  },
  contactInfo: {
    _id: string,
    email: string,
    phone: string,
    socials: {
      _id: string,
      facebook: string,
      twitter: string,
      instagram: string,
      google: string,
      skype: string,
    },
  }
}

# Cars Route
=================
> host/cars
>> => [
  {
    _id: string,
    name: string,
    brand: string,
    price: number,
    transmission: string,
    tradeType: string,
    fuelType: string,
    type: string,
    hp: number,
    model : number,
    mileage: number,
    imgs: [
      {_id: string, path: string},
      {_id: string, path: string},
      {_id: string, path: string}
    ],
    detailImgs: [{_id: string, path: string}],
    numberOfResearched: number,
  }
]

# Sales information
=================
> host/saleInfo
>> => [
  {
    _id: string,
    carID: string,
    userID: string,
    price: number,
    paidDate: date,
  }
]

# Rents information
=================
> host/rentInfo
>> => [
  {
    _id: string,
    carID: string,
    userID: string,
    price: number,
    rentalDate: date,
    leaseExpirationDate: date,
  }
]

# research information
=================
> host/researchInfo
>> => [
  {
    _id: string,
    carID: string,
    count: number,
  }
]

# Users Route
=================
> host/users
>> => [
  {
    _id: string,
    email: string,
    password: string,
    displayName: string,
  }
]

# Login Route
=================
> host/login
>> => {
  _id: string,
  email: string,
  displayName: string,
}

# Logout Route
=================
<!-- > host/logout -->

# HomePage Route
=================
> host/homePage
>> => {
  hero: {
    title: string,
    hotRent: {
      // The most of times hired car
      _id: string,
      name: string,
      price: number,
      model: number,
      imgs: [img]
    },
  },
  services:{
    title: string,
    subTitle: string,
    text: string,
    items: [
      {
        _id: string,
        title: string,
        img: string,
        text: string,
      }
    ],
  },
  features: {
    title: string,
    subTitle: string,
    text: [string],
  },
  car: {
    title: string,
    subTitle: string,
    // server get most researched cars information limit: 8
    mostResearched: [car],
    // // server get latest sale cars information limit: 4
    latestOnSales: [car]
  },
  chooseUs: {
    title: string,
    subTitle: string,
    text: string,
    reasons: [string],
    videoUrl: string,
  },
}