import postReq from "./postReq";


const authService = {
    login: async ({ username, password }) => {
        try {
            const res =  await postReq('/api/token/', {username, password});

            const { access, refresh } = res.data;

            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);

            res.data;

        } catch (err) {
            // check error is undefined
            if (!err.response) {
                throw new Error("Network error. Please check your connection.")
            }

            throw new Error(Object.values(err.response.data).join(' '));
        }
        
    },

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

    logout: () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
    },

    getAccessToken: () => {
        return localStorage.getItem('access');
    }
}

export default authService;