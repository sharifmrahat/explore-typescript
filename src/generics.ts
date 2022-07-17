//----------------Normal Generics-------------------\\

const addId = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);

  return { ...obj, id };
};

let user = addId({
  name: "Rohim Uddin",
  age: 49,
  country: "Bangladesh",
});

//N.B: We can capture the generic type given by user with <T>
//Now in user, we can capture the all properties:

user.name;
user.age;
user.country;
user.id;

//Also we can set the type of <T> in strict way with <T extends object>

//----------------Interface Generics-------------------\\

interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response1: APIResponse<object> = {
  status: 200,
  type: "OK",
  data: {
    name: "Test",
    something: 4000,
  },
};
