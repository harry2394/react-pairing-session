import React from "react";

import { BrowserRouter as Router, useParams } from "react-router-dom";
import "../components/index.css";
import { Page } from "../components/page";

export function SingleUser(props) {
  let { id } = useParams();
  const [users, setUsers] = React.useState();
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8000/user/" + id, {}).then((response) =>
      response.json().then(setUsers)
    );
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:8000/user/" + id + "/posts").then((response) =>
      response.json().then(setPosts)
    );
  }, []);

  return (
    <Page>
      <div
        className="card"
        style={{ minWidth: "18rem", margin: "1rem", padding: "1rem" }}
      >
        <h1>ID: {id}</h1>
        <div className="align">
          <div className="align1">
            <h3>Name: </h3>
            <h4>{users && users.name}</h4>
            <h3>Username: </h3>
            <h4>{users && users.username}</h4>
            <h3>Email: </h3>
            <h4>{users && users.email}</h4>
          </div>
        </div>
        <h1> Address </h1>
        <div className="align">
          <div className="align1">
            <h3>Street: </h3>
            <h4>{users && users.address && users.address.street}</h4>
            <h3>Suite: </h3>
            <h4> {users && users.address && users.address.suite}</h4>
            <h3>City: </h3>
            <h4>{users && users.address && users.address.city}</h4>
            <h3>Zipcode: </h3>
            <h4> {users && users.address && users.address.zipcode}</h4>
            <h4>
              lat:{" "}
              {users &&
                users.address &&
                users.address.geo &&
                users.address.geo.lat}
            </h4>
            <h4>
              lng:{" "}
              {users &&
                users.address &&
                users.address.geo &&
                users.address.geo.lng}
            </h4>
          </div>
        </div>
        <div
          id="Main"
          className="card"
          style={{
            minWidth: "18rem",
            maxHeight: "25rem",
            margin: "1rem",
            padding: "1rem",
            overflow: "scroll",
          }}
        >
          <h1>Posts</h1>
          {posts.map((post) => {
            return <SinglePost post={post} key={post.id} />;
          })}
        </div>
        {/* {posts.map(function (post) {
          return <SinglePost post={post} key={post.id} />;
        })} */}

        <a href={`/users/`} className="btn btn-primary">
          <h3>Back</h3>
        </a>
      </div>
    </Page>
  );
  function SinglePost({ post }) {
    return (
      <div
        id="Main"
        className="card"
        style={{
          minWidth: "18rem",
          margin: "1rem",
          padding: "1rem",
        }}
      >
        <h2>{post.id}</h2>
        <h3>Title</h3>
        <h4>{post.title}</h4>
        <h3>Content</h3>
        <h4>{post.body}</h4>
      </div>
    );
  }
}
