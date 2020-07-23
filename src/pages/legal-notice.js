import React from 'react';
import { Styled } from 'theme-ui';
import Layout from 'gatsby-theme-blog/src/components/layout';
import SEO from 'gatsby-theme-blog/src/components/seo';

const LegalNotice = ({ location, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Legal Notice" />
    <main>
      <Styled.h1>Legal Notice</Styled.h1>
      <Styled.p>Information in accordance with Section 5 TMG</Styled.p>
      <Styled.h2>Contact Information</Styled.h2>
      <Styled.p>
        Sebastian Sebald
        <br />
        E-Mail:{' '}
        <Styled.a href="mailto:sebastian.sebald+hgn@gmail.con">
          sebastian.sebald+hgn@gmail.con
        </Styled.a>
      </Styled.p>
      <Styled.h2>Disclaimer</Styled.h2>
      <Styled.strong>Accountability for content</Styled.strong>
      <Styled.p>
        The contents of our pages have been created with the utmost care.
        However, we cannot guarantee the contents' accuracy, completeness or
        topicality. According to statutory provisions, we are furthermore
        responsible for our own content on these web pages. In this matter,
        please note that we are not obliged to monitor the transmitted or saved
        information of third parties, or investigate circumstances pointing to
        illegal activity. Our obligations to remove or block the use of
        information under generally applicable laws remain unaffected by this as
        per §§ 8 to 10 of the Telemedia Act (TMG).
      </Styled.p>
      <Styled.strong>Accountability for links</Styled.strong>
      <Styled.p>
        Responsibility for the content of external links (to web pages of third
        parties) lies solely with the operators of the linked pages. No
        violations were evident to us at the time of linking. Should any legal
        infringement become known to us, we will remove the respective link
        immediately.
      </Styled.p>
      <Styled.strong>Copyright</Styled.strong>
      <Styled.p>
        Our web pages and their contents are subject to German copyright law.
        Unless expressly permitted by law, every form of utilizing, reproducing
        or processing works subject to copyright protection on our web pages
        requires the prior consent of the respective owner of the rights.
        Individual reproductions of a work are only allowed for private use. The
        materials from these pages are copyrighted and any unauthorized use may
        violate copyright laws.
      </Styled.p>
      <Styled.p>
        <Styled.i>Quelle: </Styled.i>
        <Styled.a
          href="http://www.translate-24h.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Übersetzungsdienst translate-24h.de
        </Styled.a>
      </Styled.p>
    </main>
  </Layout>
);

export default LegalNotice;
