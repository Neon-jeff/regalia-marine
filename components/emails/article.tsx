import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
  Button,
} from "@react-email/components";
import * as React from "react";

// Download the asset and use your own base url here
const baseUrl = "https://www.reactemailtemplate.com/";

export const ArticleEmail = ({
  title,
  description,
  image,
  slug,
  author
}: {
  title: string;
  description: string;
  image: string;
  slug: string;
  author:string;
}) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Article Notification Email</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans text-gray-900 antialiased">
          <Container className="mx-auto my-[20px] rounded border  bg-white px-8">
            <Section className="pb-8">
       
              <Text className="mb-3 text-[30px] text-center  font-medium text-black">
                Article From Regalia Marine
              </Text>
              <Text className="mb-3 text-[17px] text-center  font-normal text-gray-500">
                Written by regalia {author}
              </Text>
            </Section>
            <Section className=" pb-5">
              <Link href="#">
                <Img
                  src={image}
                  className="h-[148px] w-full rounded-lg object-cover"
                />
              </Link>
            </Section>
            <Section>
              <Row>
                <Text className="m-0 mt-2 text-[26px] font-semibold text-gray-900">
                  {title}
                </Text>
                <Text className="mt-2 text-[16px] text-gray-500">
                  {description.split(" ").slice(0, 25).join(" ")}...
                </Text>

                <Button
                  className="mt-2 rounded-lg bg-blue-700 px-10 py-3 font-semibold text-white"
                  href={`https://www.regaliamarine.com/insights/${slug}`}
                >
                  Read More
                </Button>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ArticleEmail;
