export interface User {
  address: Address;
  id: number;
  username: string;
  email: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}

interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface Geolocation {
  lat: string;
  long: string;
}

interface Name {
  firstname: string;
  lastname: string;
}

// address -> {
// geolocation -> {
// lat -> string
// long -> string
//}
// city -> string
// street -> string
// number -> number
// zipcode -> string
// }
// id -> integer
// username -> string
// email -> string
// password -> string
// name -> {
// firstname -> string
// lastname -> string
// }
// phone -> string
// __v -> number
