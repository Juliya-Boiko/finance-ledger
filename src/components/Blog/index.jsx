import { BlogSection, BlogImage, BlogContent, BlogText } from "./Blog.styled";
import { SectionTitle } from "../../styles/common/SectionTitle.styled";
import { ButtonOutlined } from "../buttons/ButtonOutlined";
import { theme } from "../../styles/theme";

export const Blog = () => {
  return (
    <BlogSection id="blog">
      <BlogImage></BlogImage>
      <BlogContent>
        <BlogText>April 16 2020</BlogText>
        <SectionTitle maxWidth="auto">Blog Post One</SectionTitle>
        <BlogText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</BlogText>
        <ButtonOutlined accent={theme.colors.complementary.blue} >Read Our Blog</ButtonOutlined>
      </BlogContent>
    </BlogSection>
  );
};