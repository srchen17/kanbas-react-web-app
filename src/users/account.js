import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };


  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className="w-50 p-5">
      <h1>Account</h1>
      {account && (
        <div className="">
          <input className="m-2 form-control" value={account.password}
            onChange={(e) => setAccount({
              ...account,
              password: e.target.value
            })} />
          <input className="m-2 form-control" value={account.firstName}
            onChange={(e) => setAccount({
              ...account,
              firstName: e.target.value
            })} />
          <input className="m-2 form-control" value={account.lastName}
            onChange={(e) => setAccount({
              ...account,
              lastName: e.target.value
            })} />
          <input className="m-2 form-control" value={account.dob}
            onChange={(e) => setAccount({
              ...account,
              dob: e.target.value
            })} />
          <input className="m-2 form-control" value={account.email}
            onChange={(e) => setAccount({
              ...account,
              email: e.target.value
            })} />
            <div>
            <select className="w-100 m-2" onChange={(e) => setAccount({
            ...account,
            role: e.target.value
          })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
            </div>
          <button className="btn btn-primary w-100" onClick={save}>
            Save
          </button>
          <button className="btn btn-primary w-100" onClick={signout}>
          Signout
        </button>
          <Link to="/Kanbas/admin/users" className="btn btn-dark w-100">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;

