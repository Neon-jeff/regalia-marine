import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  import { LogoWhite } from "../logo";
  
  interface KoalaWelcomeEmailProps {
    userFirstname: any | null;
  }
  
  
  export const KoalaWelcomeEmail = ({
    userFirstname,
  }: KoalaWelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>
          You have successfully subscribed to our newsletter
      </Preview>
      <Body style={main}>
        <Container style={container}>
        <LogoWhite color="#000000"/>
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <Text style={paragraph}>
          Thank you for subscribing to our newsletter. We're delighted to have you with us and look forward to sharing valuable updates, insights, and exclusive content directly to your inbox.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://www.regaliamarine.com/insights">
              View Articles
            </Button>
          </Section>
          <Text style={paragraph}>
            Best Regards,
            <br />
            Regalia Marine
          </Text>
          {/* <Hr style={hr} />
          <Text style={footer}>
            470 Noor Ave STE B #1148, South San Francisco, CA 94080
          </Text> */}
        </Container>
      </Body>
    </Html>
  );
  
  KoalaWelcomeEmail.PreviewProps = {
    userFirstname: "Alan",
  } as KoalaWelcomeEmailProps;
  
  export default KoalaWelcomeEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#215db7",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",

  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  