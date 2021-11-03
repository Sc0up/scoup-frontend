const createPostProtocol = ({ data }) => ({
  method: "POST",
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: { 'Content-Type': 'application/json'}
})

const users = ({ END_POINT }) => ({
  get: {
    validate: async ({ data }) => {
      const [key, value] = Object.entries(data);
      const response = await fetch(`${END_POINT}/users/validate/${key}?${key}=${value}`);
      return response;
    }
  },
  post: {
    signIn: async ({ data }) => {
      const response = await fetch(`${END_POINT}/sign-in/`, createPostProtocol({ }) );
      return response;
    },
    signUp: async ({ data }) => {
      const response = await fetch(`${END_POINT}/users/`, createPostProtocol({ data }));
      return response;
    }
  } 
});

export default users;