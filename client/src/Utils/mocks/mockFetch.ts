import mockGetTrees from "./responses/mockGetTrees.json";
import mockPostTrees from "./responses/mockPostTrees.json";
import mockDeleteTrees from "./responses/mockDeleteTrees.json";
import mockPutTrees from "./responses/mockPutTrees.json";

const api = "https://pzzw3lsaz6.execute-api.eu-west-2.amazonaws.com";

export default async function mockFetch(url: String, body: Request) {
  switch (url) {
    case `${api}/trees`: {
      switch (body.method) {
        case "GET": {
          return {
            ok: true,
            status: 200,
            json: async () => mockGetTrees,
          };
        }
        case "POST": {
          return {
            ok: true,
            status: 200,
            json: async () => mockPostTrees,
          };
        }
        case "PUT": {
          return {
            ok: true,
            status: 200,
            json: async () => mockPutTrees,
          };
        }
        case "DELETE": {
          return {
            ok: true,
            status: 200,
            json: async () => mockDeleteTrees,
          };
        }
        // case '/api/matches/1485449/events': {
        //   return {
        //     ok: true,
        //     status: 200,
        //     json: async () => (mockEvents),
        //   };
        // }
        default: {
          throw new Error(`Unhandled request: ${url}`);
        }
      }
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}
