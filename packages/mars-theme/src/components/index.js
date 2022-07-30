import React, { useEffect } from "react";
import { Global, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Loading from "./Loading";
import PageError from "./PageError";
import {
  setSwiperCssBundle,
  setFancyAppCssBundle,
  setSimplebarBundle,
  setDatepickerBundle,
} from "./functions/functions";
import Router from "./Router";
import Service from "./Service/Service";
import NewsSingle from "./NewsSingle/NewsSingle";

import { globalStyles } from "./base/globalStyle";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */

const Theme = ({ state, actions }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  console.log("data");
  console.log(data);

  // TODO: When production, replace delete this useEffect
  // and uncomment the <link /> element inside <Head> (below)
  useEffect(() => {
    setSwiperCssBundle();
    setFancyAppCssBundle();
    setSimplebarBundle();
    setDatepickerBundle();

    actions.theme.handleSwiperStylesLoaded();
  }, []);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Head>
        {/* <meta name="description" content={state.frontity.description} /> */}
        {/* Air Datepicker */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/air-datepicker@3.2.0/air-datepicker.css"
        />
        {/* Scrollbar CDN */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/simplebar@latest/dist/simplebar.css"
        />
        {/* Swiper CDN */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
        />
        {/* FancyApp CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/panzoom.css"
        />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Router when={data.isPage} />
          <Service when={data.isPostType && data.isServices} />
          <NewsSingle when={data.isPostType && data.isNews} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      {/* Add the footer of the site */}
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default connect(Theme);

const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
`;

const HeadContainer = styled.header`
  background: var(--white);
`;

const Main = styled.div``;
