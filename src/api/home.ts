import { post, get } from "./../unit/request";

export function testApi(params: any) {
  return get("/entries", params);
}

// export function createOrder(params: any) {
//   return post("/order/create", params);
// }
