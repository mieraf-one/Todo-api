import postReq from "./postReq";


const authService = {
        signup: async ({ firstName, lastName, username, email, password }) => {
        try {
            const res = await postReq('/api/signup/', { firstName, lastName, username, email, password });

            return res.data 

        } catch (err) {
            // check error is undefined
            if (!err.response) {
                throw new Error("Network error. check your connection.");
            }

            throw new Error(Object.values(err.response.data).join(' '));
        }
    },

    getAccessToken: () => {
        return localStorage.getItem('access');
    }
}

export default authService;