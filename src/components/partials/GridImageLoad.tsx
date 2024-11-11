import React from "react";
import MyProfile from "../../../public/my-profile.jpg";

const GridImageLoad: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <img
          className="h-36 border rounded-full border-zinc-950"
          src={MyProfile}
          alt="profile pic"
        />
        <img
          className="h-36 border rounded-full border-zinc-950"
          src={MyProfile}
          alt="profile pic"
        />
        <img
          className="h-36 border rounded-full border-zinc-950"
          src={MyProfile}
          alt="profile pic"
        />
        <img
          className="h-36 border rounded-full border-zinc-950"
          src={MyProfile}
          alt="profile pic"
        />
        <img
          className="h-36 border rounded-full border-zinc-950"
          src={MyProfile}
          alt="profile pic"
        />
        <img
          className="h-36 border rounded-full border-zinc-950"
          src={MyProfile}
          alt="profile pic"
        />
        <img
          className="h-36 border rounded-full border-zinc-950"
          src={MyProfile}
          alt="profile pic"
        />
        <img
          className="h-36 border rounded-full border-zinc-950"
          src={MyProfile}
          alt="profile pic"
        />
        <img
          className="h-36 border rounded-full border-zinc-950"
          src={MyProfile}
          alt="profile pic"
        />
      </div>
    </>
  );
};

export default GridImageLoad;
