import { useForm } from "react-hook-form";
import "react-tagsinput/react-tagsinput.css";
import { IoIosAddCircleOutline, IoMdCloudUpload } from "react-icons/io";
import { useEffect, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import Logo from "../ui/Logo";
import {
  StyledAddTagButton,
  StyledContainer,
  StyledCreate,
  StyledDescription,
  StyledDiv,
  StyledErrors,
  StyledErrorWrapper,
  StyledFileInput,
  StyledFileLabel,
  StyledForm,
  StyledFormImage,
  StyledImageName,
  StyledImageWrapper,
  StyledInput,
  StyledLabel,
  StyledSubmitButton,
  StyledTagDeleteButton,
  StyledTags,
  StyledTagsContainer,
  StyledTagWrapper,
  StyledWrapper,
} from "./css/Createcss";

import { useNavigate } from "react-router";
import { useCreatePost } from "../features/posts/useCreatePost";
import { useGetUser } from "../authentication/useGetUser";

function Create() {
  const navigate = useNavigate();
  const [isUploaded, setIsUploaded] = useState(false);
  const { getUser } = useGetUser();

  const [tags, setTags] = useState([]);
  const { createPost } = useCreatePost();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    setValue,
  } = useForm();
  const [imageName, setImageName] = useState("");
  useEffect(() => {
    watch((value) => {
      if (value.image && value.image.length > 0) {
        setIsUploaded(true);
        setImageName(value.image[0].name);
      } else {
        setIsUploaded(false);
      }
    });
  }, [watch]);

  function handleCreateForm({ title, description, image }) {
    if (!getUser) return;

    const createdBy = {
      email: getUser.user_metadata.email,
      username: getUser.user_metadata.username,
      id: getUser?.id,
    };

    createPost({ image: image[0], title, description, tags, createdBy });
  }

  function handleAddTags() {
    const value = getValues("tags").trim();
    if (value && !tags.includes(value)) {
      setTags((prevTags) => [...prevTags, value]);
      setValue("tags", "");
    }
  }
  function handleRemoveTags(tag) {
    setTags(tags.filter((cur) => cur !== tag));
  }

  return (
    <StyledCreate>
      <StyledForm onSubmit={handleSubmit(handleCreateForm)}>
        <StyledFormImage
          src="https://images.unsplash.com/photo-1698217602652-116968212647?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <StyledWrapper>
          <div>
            <Logo size="medium" />
            <h1>Create a Post</h1>
          </div>
          <div>
            <StyledImageWrapper>
              <StyledFileLabel htmlFor="image">
                <div>
                  <IoMdCloudUpload size={30} color="" />
                </div>
                Choose a file
              </StyledFileLabel>
              <StyledImageName>{imageName}</StyledImageName>
            </StyledImageWrapper>
            <StyledFileInput
              id="image"
              type="file"
              accept="image/*"
              {...register("image", {
                required: "This Field is Required",
              })}
            />
            {errors?.image?.message && (
              <StyledErrors>{errors.image.message}</StyledErrors>
            )}
          </div>
          <StyledContainer>
            <StyledDiv>
              <StyledLabel htmlFor="title">Title</StyledLabel>
              <StyledInput
                disabled={!isUploaded}
                id="title"
                type="text"
                placeholder="Add a title"
                {...register("title", {
                  required: "This Field is Required",
                })}
              />
              <StyledErrorWrapper>
                {errors?.title?.message && (
                  <StyledErrors>*{errors.title.message}</StyledErrors>
                )}
              </StyledErrorWrapper>
            </StyledDiv>
            <StyledDiv>
              <StyledLabel htmlFor="description">Description</StyledLabel>
              <StyledDescription
                // styletype="description"
                disabled={!isUploaded}
                id="description"
                type="text"
                placeholder="Add a Description"
                {...register("description", {
                  maxLength: {
                    value: 300,
                    message: "The word limit is 300.",
                  },
                })}
              />
              <StyledErrorWrapper>
                {errors?.description?.message && (
                  <StyledErrors>*{errors.description.message}</StyledErrors>
                )}
              </StyledErrorWrapper>
            </StyledDiv>
            <StyledDiv>
              <StyledLabel htmlFor="tags">Tags</StyledLabel>
              <StyledInput
                disabled={!isUploaded}
                id="tags"
                type="text"
                placeholder="Add Tags"
                {...register("tags", {
                  maxLength: {
                    value: 18,
                    message: "Max word limit of a tag is 18 letters",
                  },
                })}
              />
              <StyledAddTagButton type="button" onClick={handleAddTags}>
                <IoIosAddCircleOutline
                  strokeWidth={10}
                  size={30}
                  color="#80a0a2"
                />
              </StyledAddTagButton>
              <StyledTagWrapper>
                {tags && (
                  <StyledTagsContainer>
                    {tags.map((tag, index) => (
                      <StyledTags key={index}>
                        {tag}
                        <StyledTagDeleteButton
                          onClick={() => handleRemoveTags(tag)}
                        >
                          <RiDeleteBin7Line />
                        </StyledTagDeleteButton>
                      </StyledTags>
                    ))}
                  </StyledTagsContainer>
                )}
                <StyledErrorWrapper>
                  {errors?.tags?.message && (
                    <StyledErrors>*{errors.tags.message}</StyledErrors>
                  )}
                </StyledErrorWrapper>
              </StyledTagWrapper>
            </StyledDiv>
            <StyledSubmitButton disabled={!isUploaded}>
              Publish
            </StyledSubmitButton>
          </StyledContainer>
        </StyledWrapper>
      </StyledForm>
    </StyledCreate>
  );
}

export default Create;
