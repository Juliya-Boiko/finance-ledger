import { BlogSection, BlogImage, BlogContent, BlogText, BlogTitle } from "./Blog.styled";
import { ButtonOutlined } from "../buttons/ButtonOutlined";
import { theme } from "../../styles/theme";

export const Blog = () => {
  return (
    <BlogSection>
      <BlogImage></BlogImage>
      <BlogContent>
        <BlogText>April 16 2020</BlogText>
        <BlogTitle>Blog Post One</BlogTitle>
        <BlogText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</BlogText>
        <ButtonOutlined accent={theme.colors.complementary.blue} >Read More</ButtonOutlined>
      </BlogContent>
    </BlogSection>
  );
};