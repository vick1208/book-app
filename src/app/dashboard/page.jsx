"use client"

import Cookies from "js-cookie";
import Router from "next/router";

export default function Dashboard() {
    const token = Cookies.get('token');
    const [user, setUser] = useState({});
    const fetchData = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch user from Rest API
        await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user`)
            .then((response) => {

                //set response user to state
                setUser(response.data);
            })
    }
    useEffect(() => {

        //check token empty
        if (!token) {

            //redirect login page
            Router.push('/login');
        }

        //call function "fetchData"
        fetchData();
    }, []);

    const logoutHanlder = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch Rest API
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/logout`)
        .then(() => {

            //remove token from cookies
            Cookies.remove("token");

            //redirect halaman login
            Router.push('/login');
        });
    };
    return (

        <div>
            <h1>Halaman Dashboard</h1>
        </div>



    );
}