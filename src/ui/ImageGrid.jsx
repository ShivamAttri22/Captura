import { useEffect, useState } from "react";
import styled from "styled-components";
import { useImage } from "../context/ImageContext";
import useGetPosts from "../features/posts/useGetPosts";

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 20px;
`;
const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  margin-bottom: 15px;

  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, black, #00000029);
    border-radius: 20px;
    opacity: 0.7;
    pointer-events: none;
  }
`;
function ImageGrid({ setPost, setIsOpen, post }) {
  const { title, image, post_id } = post;
  console.log(title, image, post_id);
  const { getPosts } = useGetPosts();

  function handleClick(id) {
    setIsOpen((open) => !open);
    getPosts.map((post) => {
      const postId = post.post_id;

      if (id === postId) {
        const modalData = getPosts.filter((item) => item.post_id === postId);
        setPost(modalData);
      }
      return null;
    });
  }

  return (
    <>
      <Overlay key={post_id}>
        <Image onClick={() => handleClick(post_id)} src={image} alt={title} />
      </Overlay>
    </>
  );
}

export default ImageGrid;
