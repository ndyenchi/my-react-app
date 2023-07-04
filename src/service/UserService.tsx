import API from "../components/utility/api";

class UserService {
    login = (user: { password: string; email: string }) => {
        return API("api/auth/signin", "POST", user, "");
    };
}
const userService = new UserService();
export default userService;