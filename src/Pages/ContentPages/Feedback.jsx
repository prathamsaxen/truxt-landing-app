import React from "react";

function Feedback() {
  return (
    <div className="content-layout">
      <section>
        <h2>Overview</h2>
        <p>
          Truxt.ai transforms your knowledge base into a robust LLM-powered AI assistant that
          provides instant answers to technical questions and helps identify gaps in your
          documentation. Teams at Docker, OpenAI, Reddit, and NextJS rely on Truxt to enhance their
          technical user experience and reduce support needs.
        </p>
      </section>
      <section>
        <h2>What is Truxt?</h2>
        <p>
          Truxt.ai allows you to create LLM-based chatbots that answer developer questions about
          your product. Once set up, your Truxt instance will focus solely on your software. This is
          made possible through Truxt's retrieval augmented generation (RAG) system, designed to
          optimize technical question answering.
          <br />
          The Truxt.ai platform indexes all your technical knowledge sources and starts answering
          questions using your content. The most common use case for Truxt is deploying it directly
          to your developer community, where they can instantly find answers and solve problems
          faster.
        </p>
      </section>
      <section>
        <h2>How does Truxt.AI work?</h2>
        <p>The Truxt.AI system consists of multiple key components:</p>
        <ul>
          <li>
            <strong>Data Pipelines: </strong>
            <span>
              A large part of kapa.ai are specialized data pipelines that ingest your various
              technical knowledge sources. These pipelines connect to your data sources, pull their
              content, transform and index them using embeddings. Once your content has been indexed
              it is semantically searchable. These data pipelines also refresh your content
              periodically so it is always up to date.
            </span>
          </li>
          <li>
            <strong>RAG Pipeline: </strong>
            <span>
              When a developer submits a question kapa performs retrieval augmented generation
              (RAG). In a first step kapa searches the index of all your content to find the most
              relevant pieces of information. In a second step kapa uses an LLM to answer the
              question based on the retrieval result. When answering questions kapa sticks closely
              to your content which puts you in control and minimizes hallucinations. However, kapa
              can infer a complicated answer from multiple pieces of separate information.
            </span>
          </li>
          <li>
            <strong>Deployment Integrations: </strong>
            <span>
              Kapa.ai is an end-to-end solution that comes with the necessary integrations to
              immediately deploy Kapa to your community of developers or internally within your
              company. Several deployment integrations are available:
              <br /> The first option is the Website Widget, which allows you to create an
              embeddable Kapa.ai widget that can be integrated into any website with just one line
              of code. Additionally, there is the Slack Bot integration, enabling you to create a
              Kapa.ai bot that can either auto-reply to forum posts or respond when mentioned within
              Slack.
              <br /> For Discord, Kapa.ai offers a Discord Bot that provides similar functionality,
              automatically replying to forum posts or answering questions when mentioned. In
              customer support, the Zendesk Agent App integration allows you to use the Kapa Zendesk
              support app to reduce ticket resolution times by offering instant reply drafts.
              <br />
              Lastly, you can build on top of the Kapa.ai core infrastructure using the API to
              automatically answer technical questions, providing flexibility for developers looking
              to integrate it into their own systems.
            </span>
          </li>
        </ul>
      </section>
      <section>
        <h2>How does Truxt.AI work?</h2>
        <p>The Truxt.AI system consists of multiple key components:</p>
        <ul>
          <li>
            <strong>Data Pipelines: </strong>
            <span>
              A large part of kapa.ai are specialized data pipelines that ingest your various
              technical knowledge sources. These pipelines connect to your data sources, pull their
              content, transform and index them using embeddings. Once your content has been indexed
              it is semantically searchable. These data pipelines also refresh your content
              periodically so it is always up to date.
            </span>
          </li>
          <li>
            <strong>RAG Pipeline: </strong>
            <span>
              When a developer submits a question kapa performs retrieval augmented generation
              (RAG). In a first step kapa searches the index of all your content to find the most
              relevant pieces of information. In a second step kapa uses an LLM to answer the
              question based on the retrieval result. When answering questions kapa sticks closely
              to your content which puts you in control and minimizes hallucinations. However, kapa
              can infer a complicated answer from multiple pieces of separate information.
            </span>
          </li>
          <li>
            <strong>Deployment Integrations: </strong>
            <span>
              Kapa.ai is an end-to-end solution that comes with the necessary integrations to
              immediately deploy Kapa to your community of developers or internally within your
              company. Several deployment integrations are available:
              <br /> The first option is the Website Widget, which allows you to create an
              embeddable Kapa.ai widget that can be integrated into any website with just one line
              of code. Additionally, there is the Slack Bot integration, enabling you to create a
              Kapa.ai bot that can either auto-reply to forum posts or respond when mentioned within
              Slack.
              <br /> For Discord, Kapa.ai offers a Discord Bot that provides similar functionality,
              automatically replying to forum posts or answering questions when mentioned. In
              customer support, the Zendesk Agent App integration allows you to use the Kapa Zendesk
              support app to reduce ticket resolution times by offering instant reply drafts.
              <br />
              Lastly, you can build on top of the Kapa.ai core infrastructure using the API to
              automatically answer technical questions, providing flexibility for developers looking
              to integrate it into their own systems.
            </span>
          </li>
        </ul>
      </section>
      <section>
        <h2>How do I get started with Truxt?</h2>
        <p>
          Currently, the Truxt.ai team will help you onboard onto the platform. Want access within
          24 hrs? Head to Truxt to sign up and the team will be in touch shortly to get you set up
          with a demo instance.
        </p>
      </section>
    </div>
  );
}

export default Feedback;
