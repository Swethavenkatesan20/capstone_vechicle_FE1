import { instance, protectedInstance } from "./instance";

//define the userservices
const userServices={

login: async (email, password) => {
        // make a POST request to the login endpoint
        return instance.post('/users/login', {
            email: email,
            password: password
        }, { withCredentials: true });
    },
    // define the register method
    register: async (name, email, password, location) => {
        // make a POST request to the register endpoint
        return instance.post('/users/register', {
            name: name,
            email: email,
            password: password,
            location: location
        });
    },
    // define the logout method
    logout: async () => {
        // make a POST request to the logout endpoint
        return protectedInstance.get('/users/logout');
    },
    // define the getCurrentUser method
    getCurrentUser: async () => {
        // make a GET request to the current user endpoint
        return protectedInstance.get('/users/profile');
    }
};

export default userServices;