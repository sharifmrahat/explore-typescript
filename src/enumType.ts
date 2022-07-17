enum RType {
  SUCCESS,
  FAILED,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIResponse2<T> {
  status: number;
  type: RType;
  data: T;
}

const response2: APIResponse2<object> = {
  status: 200,
  type: RType.SUCCESS,
  data: {
    name: "Test",
    something: 4000,
  },
};
