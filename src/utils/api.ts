import users from "../services/users";

const END_POINT = "https://sc0up.herokuapp.com/api";

interface IGet {
  [index: string]: any 
}

interface IAPI {
  [index: string]: any,
  get: IGet,
  post: any,
  mergeWith: (service: any) => void;
}

const API: IAPI = {
  get: {

  },
  post: {},
  mergeWith: function(this: IAPI, service: any) {
    Object.entries(service).forEach(([key, value]) => {
      this[key] = {...value as any, ...service }
    });
  }
};

API.mergeWith( users({END_POINT}) );

export default API;