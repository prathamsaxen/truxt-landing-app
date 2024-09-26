# React

## Overview
Truxt.ai transforms your knowledge base into a robust LLM-powered AI assistant that provides instant answers to technical questions and helps identify gaps in your documentation. Teams at Docker, OpenAI, Reddit, and NextJS rely on Truxt to enhance their technical user experience and reduce support needs.

## What is Truxt?
Truxt.ai allows you to create LLM-based chatbots that answer developer questions about your product. Once set up, your Truxt instance will focus solely on your software. This is made possible through Truxt's retrieval augmented generation (RAG) system, designed to optimize technical question answering.

The Truxt.ai platform indexes all your technical knowledge sources and starts answering questions using your content. The most common use case for Truxt is deploying it directly to your developer community, where they can instantly find answers and solve problems faster.

## How does Truxt.AI work?
The Truxt.AI system consists of multiple key components:

### Data Pipelines
A large part of Truxt.ai are specialized data pipelines that ingest your various technical knowledge sources. These pipelines connect to your data sources, pull their content, transform, and index them using embeddings. Once your content has been indexed, it is semantically searchable. These data pipelines also refresh your content periodically so it is always up to date.

### RAG Pipeline
When a developer submits a question, Truxt performs retrieval augmented generation (RAG). In the first step, Truxt searches the index of all your content to find the most relevant pieces of information. In the second step, it uses an LLM to answer the question based on the retrieval result. Truxt sticks closely to your content, putting you in control and minimizing hallucinations. However, it can infer complex answers from multiple pieces of separate information.

### Deployment Integrations
Truxt.ai is an end-to-end solution with integrations to deploy to your community of developers or within your company. Several deployment integrations are available:

- **Website Widget**: An embeddable Truxt.ai widget integrated with one line of code.
- **Slack Bot**: Auto-replies to forum posts or responds when mentioned in Slack.
- **Discord Bot**: Replies to forum posts or answers questions when mentioned.
- **Zendesk Agent App**: Reduces ticket resolution times by offering instant reply drafts.
- **API Integration**: Build on top of Truxt's core infrastructure to answer technical questions in your systems.

## How do I get started with Truxt?
Currently, the Truxt.ai team will help you onboard onto the platform. Want access within 24 hours? Head to Truxt to sign up, and the team will be in touch to set you up with a demo instance.

---