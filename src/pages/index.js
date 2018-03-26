import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <section className="section hero">
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={() => this.handleScriptLoad()}
          />
          <div className="container">
            <div className="content">
              {/*<img className="goose" src="https://theverygreengrocer.co.uk/wp-content/uploads/2016/06/IMG_1137.png" alt=""/>*/}
              <h1 className="has-text-weight-bold is-size-2">You Deserve comfort of mind</h1>
              <div className="large">for both you &amp; you unborn child</div>
              <br/> <br/>

              {<button className="button rounded">explore our services</button>}
            </div>
          </div>
        </section>
        <section className="section callout">
          <div className="container">
            <div className="content">
              <h3>
                Your entire experience from pregnancy to parenthood should be memorable, put you and your partner at ease and leave you feeling wrapped in comfort. Learn how we can support you.
              </h3>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
