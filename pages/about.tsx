import { GetStaticProps } from 'next';
import { withRouter } from "next/router";
import { getConfig } from "@builtjs/theme";
import Page from "../lib/theme/page";
import { pages } from "../lib/theme/constants";

export default withRouter(Page);

export const getStaticProps: GetStaticProps = async () => {
  const config = await getConfig({pageName: pages.ABOUT});
  return {
    props: { config }
  };
};