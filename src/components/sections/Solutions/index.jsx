import { SolutionsSection, SolutionsImage, SolutionsContent, SolutionsText } from "./Solutions.styled";
import { ButtonOutlined } from "../../../components/buttons/ButtonOutlined";
import { theme } from "../../../styles/theme";
import { SectionTitle } from "../../../styles/common/SectionTitle.styled";

export const Solutions = () => {
  return (
    <SolutionsSection id="about">
      <SolutionsImage></SolutionsImage>
      <SolutionsContent>
        <SolutionsText>What you are looking for</SolutionsText>
        <SectionTitle maxWidth="auto">We provide bespoke solutions</SectionTitle>
        <SolutionsText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</SolutionsText>
        <ButtonOutlined accent={theme.colors.complementary.green} >Read More</ButtonOutlined>
      </SolutionsContent>
    </SolutionsSection>
  );
};