// import React, { useState } from "react";
// import Popup from "reactjs-popup";
// import "./LoginPopup.css";
// import { Button } from "react-bootstrap";
// import PropTypes from "prop-types";

// async function loginUser(credentials: { username: string; password: string }) {
//     return fetch("http://localhost:8080/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(credentials)
//     }).then((data) => data.json());
// }

// export default function LoginPopup(
//     setToken: (arg0: unknown) => void
// ): JSX.Element {
//     const [username, setUserName] = useState<string>("");
//     const [password, setPassword] = useState<string>("");
//     const handleSubmit = async (e: { preventDefault: () => void }) => {
//         e.preventDefault();
//         const token = await loginUser({
//             username,
//             password
//         });
//         setToken(token);
//     };
//     return (
//         <Popup className="login-wrapper" trigger={<Button>Login</Button>}>
//             <div style={{ border: "3px solid black" }}>Login</div>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     <p>Email</p>
//                     <input
//                         type="text"
//                         onChange={(e) => setUserName(e.target.value)}
//                     />
//                 </label>
//                 <label>
//                     <p>Password</p>
//                     <input
//                         type="password"
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </label>
//                 <div>
//                     <Button type="submit">Submit</Button>
//                 </div>
//             </form>
//         </Popup>
//     );
// }

// LoginPopup.propTypes = {
//     setToken: PropTypes.func.isRequired
// };
