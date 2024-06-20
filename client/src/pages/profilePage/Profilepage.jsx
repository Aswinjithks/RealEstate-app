import React, { Suspense, useContext, useEffect } from "react";
import List from "../../components/list/List";
import "./prifilePage.scss";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { Await, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthConext";
import noAavatar from "../../../public/noavatar.jpg";
import { Link } from "react-router-dom";

const Profilepage = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const { updateUser, currentUser } = useContext(AuthContext);
  const handleLogOut = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const aaa = () => {
    console.log("boooo");
  };

  return (
    <div className="profilepage">
      <div className="details">
        <div className="wraper">
          <div className="title">
            <h1>User Information</h1>
            <Link className="updatProfileButton" to="/profile/update">
              Update profile
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar: <img src={currentUser.avatar ?? noAavatar} alt="" />
            </span>
            <span>
              Username: <b>{currentUser?.username}</b>
            </span>
            <span>
              email: <b>{currentUser?.email}</b>
            </span>
            <button onClick={handleLogOut}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/newpost" className="createNewPost">
              Create new post
            </Link>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postPromise}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => (
                <List posts={postResponse.data.profilePosts} />
              )}
            </Await>
          </Suspense>
          <div className="title">
            <h1>Saved list</h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postPromise}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => (
                <List posts={postResponse.data.savedPosts} />
              )}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wraper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
