import SmallHero from "@/components/SmallHero";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import React from "react";
import { Section, SectionHeader } from "./style";
import TextTab from "@/components/TextTab";

const page = () => {
  return (
    <>
      <Header />
      <main>
        <SmallHero />
        <Section>
          <SectionHeader>PRIVACY POLICY</SectionHeader>
          <TextTab
            header={"Information Collection"}
            text={
              "We may collect personal details such as your name, email address, and other information when you voluntarily provide them through contact forms or account registration."
            }
          />
          <TextTab
            header={"Information Usage"}
            text={
              "Your personal information may be used to respond to inquiries, enhance user experience, and deliver relevant content and promotions."
            }
          />
          <TextTab
            header={"Data Sharing"}
            text={
              "We do not sell, trade, or share your personal information with third parties without your consent, except as required by law."
            }
          />
          <TextTab
            header={"Data Security"}
            text={
              "We employ industry-standard security measures to protect your information from unauthorized access or disclosure. However, we cannot ensure the security of any information you transmit to KAIZEN or guarantee that information on the Service may not be accessed, disclosed, altered, or destroyed. Please do your part to help us. You are responsible for maintaining the secrecy of purchasing orders and for controlling access to emails between you and KAIZEN, at all times."
            }
          />
          <TextTab
            header={"Cookies"}
            text={
              "Our website may use cookies to improve your browsing experience. You can manage cookie preferences through your browser settings."
            }
          />
          <TextTab
            header={"Third-Party Links"}
            text={
              "Our website may contain links to external sites. We are not responsible for their privacy practices, so please review their policies separately."
            }
          />
          <TextTab
            header={"Children's Privacy"}
            text={
              "Our services are not intended for children under 13, and we do not knowingly collect personal information from them."
            }
          />
          <TextTab
            header={"Changes to the Policy"}
            text={
              "We may update this Privacy Policy periodically. Any significant changes will be posted on this page. By using our website, you agree to the terms of this Privacy Policy. If you have any questions or concerns, please contact us at kaizenbyyulia@gmail.com"
            }
          />
          <TextTab header={""} text={"Last updated: July 26, 2024"} />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default page;
