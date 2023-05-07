import Link from "next/link";

import { FaInstagram, FaTwitter } from "react-icons/fa";

import Flex from "./Flex";
import Text from "./Text";
import Box from "./Box";
import { useFeatureFlag } from "../contexts/featureFlags";

type LinkProps = {
  href: string;
  label: string;
};

const companyLinks: LinkProps[] = [
  {
    href: "/about",
    label: "About us",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/cook-with-us",
    label: "Cook with us",
  },
];

const legalLinks: LinkProps[] = [
  {
    href: "/terms",
    label: "Terms and Conditions",
  },
  {
    href: "/privacy",
    label: "Privacy Policy",
  },
  {
    href: "/imprint",
    label: "Imprint",
  },
];

const FooterLinks = ({
  title,
  links,
}: {
  links: LinkProps[];
  title: string;
}) => (
  <>
    <Text fontWeight="bold" fontFamily="primary">
      {title}
    </Text>
    {links.map((link) => (
      <Link key={link.href} href={link.href} passHref>
        <Text
          fontSize="sm"
          style={{
            cursor: "pointer",
          }}
        >
          {link.label}
        </Text>
      </Link>
    ))}
  </>
);

const Footer = () => {
  const {
    features: { isBetaV1 },
  } = useFeatureFlag();

  return (
    <Box
      padding="sm"
      backgroundColor="secondary"
      color="white"
      px={["xl", "xxl"]}
      py={["sm", "md", "lg", "xl"]}
    >
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Flex
          flexDirection="column"
          width={["100%", "30%"]}
          pb={["sm", "none"]}
        >
          <Box as="img" src="/logo-alt.svg" width="120" height="60" />
          <Text fontSize="sm">
            Enjoy Authentic, fresh, and delicious meals without the hassle.
          </Text>
          <Flex my="xs">
            <Text>
              <FaInstagram size="24" />
            </Text>
            <Text mx="xs">
              <FaTwitter size="24" />
            </Text>
          </Flex>
        </Flex>
        {isBetaV1 && (
          <Flex flexDirection="column">
            <FooterLinks title="Company" links={companyLinks} />
          </Flex>
        )}
        {isBetaV1 && (
          <Flex flexDirection="column">
            <FooterLinks title="Legal" links={legalLinks} />
          </Flex>
        )}
      </Flex>
      <Box height="1px" width="1" backgroundColor="white" my="sm" />
      <Flex justifyContent="space-between">
        <Text fontSize="sm">
          © {new Date().getFullYear()} Frospices. All Rights Reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
