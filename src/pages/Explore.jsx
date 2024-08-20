import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageGrid from "../ui/ImageGrid";
import Modal from "../ui/Modal";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { getPosts } from "../services/ApiPosts";
import useGetPosts from "../features/posts/useGetPosts";

const StyledHeart = styled(FaRegHeart)`
  :hover {
    fill: red;
  }
`;
const StyledTags = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  background-color: var(--color-brand-200);
  color: var(--color-brand-50);
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;
const Container = styled.div`
  padding: 20px 12rem;

  margin: 0 auto;
  margin-top: 9.6rem;
`;

const Header = styled.h1`
  text-align: center;

  margin-bottom: 5rem;
`;
const ModalImage = styled.img`
  height: 60rem;
  object-fit: cover;
  width: 100%;
  overflow: hidden;
`;
const ModalContainer = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  > div:nth-child(1) {
    overflow: hidden;
  }
  > div:nth-child(2) {
    padding: 4.4rem 3.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div:nth-child(1) {
      > h1 {
        padding-bottom: 5rem;
        font-family: "Antic Didone", sans-serif;
        color: var(--color-brand-400);
      }
      > p {
        font-family: "Lato", sans-serif;
        margin-bottom: 2rem;
        font-weight: 300;
      }
      > ul {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }
    > div:nth-child(2) {
      > hr {
        margin-bottom: 4rem;
      }
      > div {
        display: flex;
        justify-content: end;
        > span {
          margin-right: 2rem;
          :hover {
          }
        }
      }
    }
  }
`;
const StyledItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  padding: 1rem;
`;
const Explore = () => {
  const [post, setPost] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLiked, setisLiked] = useState(false);
  const { getPosts } = useGetPosts();

  const sortedPosts = getPosts?.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  const groupedPosts = sortedPosts?.reduce((groups, post) => {
    // Format the date (e.g., '2024-08-20')
    const date = new Date(post.created_at).toISOString().split("T")[0];

    // Create a new group if it doesn't exist
    if (!groups[date]) {
      groups[date] = [];
    }

    // Add the post to the relevant group
    groups[date].push(post);

    return groups;
  }, {});

  //     groupedPosts[date]?.forEach((post) => {
  //
  //     });
  //   });
  // }

  function handleLikes() {
    if (!isLiked) {
      setLikes((like) => like + 1);
      setisLiked(true);
    } else {
      setLikes((like) => like - 1);
      setisLiked(false);
    }
  }
  return (
    <Container>
      {groupedPosts && Object.keys(groupedPosts).length > 0
        ? Object?.keys(groupedPosts)?.map((date, index) => (
            <>
              <Header key={index}>{date}</Header>
              <StyledItemGrid>
                {groupedPosts[date].map((post) => (
                  <ImageGrid
                    setIsOpen={setIsOpen}
                    setPost={setPost}
                    post={post}
                  />
                ))}
              </StyledItemGrid>
            </>
          ))
        : ""}

      <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
        <ModalContainer>
          <div>
            <ModalImage src={post[0]?.image} alt="" />
          </div>
          <div>
            <div>
              <h1>{post[0]?.title} </h1>
              <p>- {post[0]?.created_by.username}</p>
              {/* MAX letters for title - 25 */}
              <p>{post[0]?.description}</p>
              <ul>
                {post[0]?.tags.map((tag, index) => (
                  <StyledTags key={index}>#{tag}</StyledTags>
                ))}
              </ul>
            </div>
            <div>
              <hr></hr>
              <div>
                <div>{likes} likes</div>
                <span
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered || isLiked ? (
                    <FaHeart onClick={handleLikes} size={30} color="red" />
                  ) : (
                    <StyledHeart onClick={handleLikes} size={30} />
                  )}
                </span>
              </div>
            </div>
          </div>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Explore;
