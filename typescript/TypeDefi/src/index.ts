import axios from 'axios';
import _ from 'lodash';

_.sample(undefined)

interface User {
  name: string
  email: string
  phone: string
}

axios
  .get<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    printUser(res.data);
  })
  .catch((e) => {
    console.log("error", e);
  });

function printUser(user: User) {
    console.log(user.name)
    console.log(user.email)
    console.log(user.phone)
  }