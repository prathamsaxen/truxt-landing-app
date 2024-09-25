// src/docsConfig.js
export const docsContent = {
  "getting-started": {
    title: "Getting Started with Truxt",
    sections: [
      {
        heading: "Overview",
        content: [
          "Learn how to transform your content into an AI-driven search and support assistant with Truxt.",
        ],
      },
      {
        heading: "Ingest Your Content",
        content: [
          "Effortlessly onboard all your content sources using Truxt's pre-built connectors and scrapers.",
          {
            subheading: "Supported Content Sources",
            items: [
              {
                text: "Technical Documentation:",
                description:
                  "Truxt supports platforms like Docusaurus, Nextra, Mintlify, Redocly, and more.",
              },
              { text: "Help Centers & FAQs" },
              { text: "Websites & Blogs" },
              {
                text: "Community Threads:",
                description: "Ingest content from Slack, Discord, and Discourse.",
              },
              {
                text: "Developer Resources:",
                description:
                  "GitHub repositories, StackOverflow posts, Open API & GraphQL schemas.",
              },
              {
                text: "File Formats:",
                description: "Easily manage content from PDF, Markdown, CSV, and more.",
              },
              { text: "Video Content:", description: "Ingest YouTube and other video sources." },
              { text: "Support Tickets:", description: "Integrate with Zendesk or Intercom." },
              {
                text: "Internal Documentation:",
                description:
                  "Add content from Notion, Confluence, Google Drive, SharePoint, and more.",
              },
            ],
          },
        ],
      },
      {
        heading: "Add to Slack or Discord",
        content: [
          "Integrate Truxt into your support workflows with an AI-powered assistant. Create a dedicated #ask-truxt channel for your community or utilize it as an auto-reply bot in your internal support channels.",
          {
            items: [
              { text: "Slack:", description: "Add Truxt to your Slack workspace." },
              { text: "Discord:", description: "Add Truxt to your Discord server." },
            ],
          },
        ],
      },
      {
        heading: "Quick Start with Truxt",
        content: [
          "Explore the Showcase for examples of how teams are leveraging Truxt’s AI-powered support. Follow a step-by-step guide to quickly integrate Truxt into your docs, marketing site, help desk, or application.",
          {
            subheading: "Supported Platforms",
            items: [
              "Docusaurus",
              "Next.js",
              "Nextra",
              "ReadMe",
              "Zendesk",
              "Discourse",
              "Webflow",
              "Framer",
              "WordPress",
              "Mintlify",
              "Astro",
              "Gatsby",
              "Remix",
              "VitePress",
              "Redocly",
              "Sphinx",
              "Hugo",
              "Bettermode",
            ],
          },
        ],
      },
    ],
  },
  "why-truxt": {
    title: "Why Truxt?",
    sections: [
      {
        heading: "TL;DR",
        content: [
          "In short: quality. Our #1 goal is to help our customers ship AI self-help experiences to their users with confidence.",
        ],
      },
      {
        heading: "Quality Matters",
        content: [
          "For us, quality means developing our AI solution to:",
          {
            items: [
              "Admit when it doesn’t know and intelligently guide users to support channels.",
              "Consistently find the right content and not hallucinate.",
              "Provide rich citations that help users inspect answers.",
              "Leverage many sources while prioritizing authoritative content.",
            ],
          },
        ],
      },
      {
        heading: "Ingesting Content from Many Sources",
        content: [
          "Knowledge about technical products often lives in many places: documentation, GitHub, forums, Slack and Discord channels, blogs, StackOverflow, support systems, and elsewhere.",
        ],
      },
      {
        heading: "Finding the Most Relevant Content",
        content: [
          "Retrieval augmented generation (RAG) is the best way to use LLMs to answer questions regarding domain-specific content.",
        ],
      },
      {
        heading: "Minimizing Hallucinations",
        content: [
          "Conversational large language models are trained to provide satisfying answers to users. Unfortunately, this makes them prone to providing answers that are unsubstantiated, i.e., 'hallucinating'.",
        ],
      },
      {
        heading: "Incorporating Feedback",
        content: [
          "Even with a best-in-class retrieval and grounded-answer system, feedback loops are the key to continuous improvement of model performance over time.",
        ],
      },
      {
        heading: "Production-Ready Service",
        content: [
          "To launch something confidently to end-users, it’s essential to have high availability, geo-distributed, low latency search and chat services.",
        ],
      },
      {
        heading: "The Team",
        content: [
          "Our team is made up of engineers passionate about machine learning, data engineering, and user experiences.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy",
    sections: [
      {
        heading: "How Truxt Protects Your Data",
        content: [
          "We know that privacy and security is critical for many organizations. Truxt is committed to protecting your organization’s and user’s data and privacy.",
          "We use industry-standard security practices, utilize reputable subprocessors with SOC 2 compliance, and provide the controls needed for organizations to meet their own data protection requirements.",
          "We actively follow security best practices, including undergoing regular external security reviews and penetration tests. Truxt is SOC 2 Type II compliant.",
          "This article is only an overview of Truxt’s approach to data privacy, not a legal agreement. See our privacy policy here, and please reach out to privacy@truxt.com for any other documentation requests or questions.",
        ],
      },
      {
        heading: "Use of LLMs",
        content: [
          "To provide our search and chat services, we use foundational large language models (LLMs) and artificial intelligence (AI) services from the following providers:",
          {
            items: ["Anthropic", "Azure OpenAI", "OpenAI"],
          },
          "Our providers will never use your data to train AI or LLM models. See the links above for details of each provider’s policies. While Truxt may train AI or LLM models for use by your organization, for example, by fine-tuning an LLM model specific to your product, we’ll never expose your or your user’s data to unauthorized third parties.",
        ],
      },
      {
        heading: "Categories of Data Subjects",
        content: [
          "Information we collect can be in relation to the following types of Users:",
          {
            items: ["End Users - Your end users or customers.", "Employees - Your employees."],
          },
        ],
      },
      {
        heading: "Categories of Collected Data",
        content: [
          "Knowledge Base Documents include information provided to Truxt for use in our search and chat service for your organization. These can include:",
          {
            items: [
              "Technical documentation",
              "Websites and blogs",
              "Sources that include end-user generated content like StackOverflow, GitHub, Discourse, Slack, and Discord",
              "Support desk tickets and FAQs",
              "Internal documents",
              "And others",
            ],
          },
          "You can control what content is provided to Truxt for ingestion into your knowledge base. You can view and delete this content at any time.",
        ],
      },
      {
        heading: "Prompts and Responses",
        content: [
          "Prompts - The text or input provided by a user to Truxt’s search or chat service. Prompts may also include context information provided by your organization.",
          "Responses - The text or output provided in response to a prompt by Truxt’s search or chat service.",
          "Prompts and Responses are retained for the purposes of:",
          {
            items: [
              "Usage Analytics - Providing Employees with topical, sentiment, and other analytics of Prompts and Responses.",
              "End User Functionality - Providing functionality to End Users like thumbs-up and thumbs-down feedback, 'Share chat', and conversation history.",
              "Abuse and Misuse Monitoring",
              "Service Improvements - Monitoring and improving the quality of Truxt’s search and chat service.",
            ],
          },
          "Enterprise Customers can customize the below:",
          {
            items: [
              "Retention period of conversations",
              "Enabling or disabling of Usage Analytics or End User Functionality",
            ],
          },
          "Prompts and Response pairs are only associated with User Metadata if that is collected. See the next section.",
        ],
      },
      {
        heading: "User Metadata",
        content: [
          "User Metadata can include identifying information like IP address or browser session information of Users. Your applications can choose to provide user IDs, user segmentation, or other data that you’d like to include in Truxt’s Usage Analytics features.",
          "You can customize and opt-out of the collection of User Metadata to align with your own policies and preferences. See here for information on how to configure this in Truxt’s web widgets. With these settings, you are able to control whether User Metadata is associated with Prompts and Responses or Application Information.",
        ],
      },
      {
        heading: "Application Information",
        content: [
          "Information about your application that can help us improve our services.",
          "You can opt-in or out of this information collection to meet your preferences.",
        ],
      },
      {
        heading: "Deletion Requests",
        content: [
          "You can request deletions of any of the information described above, and we will comply with the deletion requests to the best of our ability.",
        ],
      },
    ],
  },
  "chat-button": {
    title: "Chat Button Component",
    sections: [
      {
        heading: "Overview",
        content: [
          "The Chat Button component is a React component that triggers the Inkeep modal, providing users with a seamless way to initiate a chat.",
          "Use this component to enhance user engagement and support.",
        ],
      },
      {
        heading: "Installation",
        content: [
          "To install the Chat Button component, add it to your project:",
          "```bash",
          "npm install @prathamsaxena/react-ui-component",
          "```",
        ],
      },
      {
        heading: "Usage",
        content: [
          "Import the Chat Button component into your desired file:",
          "```javascript",
          "import ChatButton from '@prathamsaxena/react-ui-component/ChatButton';",
          "```",
          "Then, include it in your component render method:",
          "```javascript",
          "<ChatButton />",
          "```",
        ],
      },
      {
        heading: "Customizing the Button",
        content: [
          "You can customize the Chat Button with props:",
          {
            items: [
              { text: "color:", description: "Specify the button color." },
              { text: "size:", description: "Adjust the button size." },
              { text: "onClick:", description: "Handle click events." },
            ],
          },
        ],
      },
      {
        heading: "Example",
        content: [
          "Here’s a simple example of using the Chat Button component:",
          "```javascript",
          "function App() {",
          "  return (",
          "    <div>",
          "      <h1>Welcome to Truxt!</h1>",
          "      <ChatButton color='blue' size='large' onClick={() => console.log('Chat opened')} />",
          "    </div>",
          "  );",
          "}",
          "```",
        ],
      },
      {
        heading: "Conclusion",
        content: [
          "Integrating the Chat Button component into your application is a great way to enhance user experience and provide immediate support.",
        ],
      },
    ],
  },
  "react-ui-component": {
    title: "Chat Button (React)",
    sections: [
      {
        heading: "Overview",
        content: [
          "Add a chat button React component that triggers the Truxt modal.",
          "The chat button is a great way to add an AI copilot to your landing page, documentation, or app without changing your current search experience.",
          "You can choose from three variants to fit your style:",
        ],
      },
      {
        heading: "Quick Start",
        content: [
          "Install the component library",
          {
            items: [
              { text: "npm", description: "npm install @truxt/uikit" },
              { text: "bun", description: "bun add @truxt/uikit" },
              { text: "pnpm", description: "pnpm add @truxt/uikit" },
              { text: "yarn", description: "yarn add @truxt/uikit" },
            ],
          },
        ],
      },
      {
        heading: "Define the component",
        content: [
          "Import the necessary components and define your settings:",
          {
            code: `
import {
  TruxtChatButton,
  type TruxtChatButtonProps,
  type TruxtBaseSettings,
} from "@truxt/uikit";

const baseSettings: TruxtBaseSettings = {
  apiKey: process.env.TRUXT_API_KEY!,
  integrationId: process.env.TRUXT_INTEGRATION_ID!,
  organizationId: process.env.TRUXT_ORGANIZATION_ID!,
  organizationDisplayName: "Truxt",
  primaryBrandColor: "#26D6FF",
};

const TruxtChatButtonProps: TruxtChatButtonProps = {
  chatButtonType: 'PILL', // default. Alternatives are 'RECTANGLE_SHORTCUT' and 'ICON'
  baseSettings: {
    ...baseSettings,
  },
  modalSettings: {
    // optional typeof TruxtModalSettings
  },
  searchSettings: {
    // optional typeof TruxtSearchSettings
  },
  aiChatSettings: {
    // optional typeof TruxtAIChatSettings
    botAvatarSrcUrl: "/img/truxt-logo.svg", // use your own bot avatar
    botAvatarDarkSrcUrl: "/img/truxt-logo-dark.svg", // for dark mode or more contrast against button bg
    quickQuestions: [
      "Example question 1?",
      "Example question 2?",
      "Example question 3?",
    ],
  },
};

export const ChatButton = () => {
  return <TruxtChatButton {...TruxtChatButtonProps} />;
};
            `,
          },
        ],
      },
      {
        heading: "TruxtChatButtonProps",
        content: [
          "This type represents the available settings for the Truxt Chat Button component.",
        ],
      },
      {
        heading: "Properties",
        content: [
          {
            items: [
              {
                text: "chatButtonType",
                description:
                  "Type of the chat button. Can be RECTANGLE_SHORTCUT, PILL, or ICON. Default value PILL.",
              },
              {
                text: "chatButtonBgColor",
                description: "Background color of the chat button. Defaults to a dark gray.",
              },
              {
                text: "chatButtonBgColorDarkMode",
                description:
                  "Background color of the chat button in dark mode. Defaults to a light gray.",
              },
              {
                text: "chatButtonText",
                description:
                  "Text on the chat button if using the PILL or RECTANGLE_SHORTCUT versions. Default is Ask AI for the PILL version and Ask anything for the RECTANGLE_SHORTCUT version.",
              },
              {
                text: "isPositionFixed",
                description:
                  "Determines whether the position of the chat button is fixed. Default value true.",
              },
              {
                text: "fixedPositionXOffset",
                description:
                  "X offset for the fixed position of the chat button. Default value 1.5rem",
              },
              {
                text: "fixedPositionYOffset",
                description:
                  "Y offset for the fixed position of the chat button. Default value 1.5rem.",
              },
              {
                text: "baseSettings",
                description: "Required. Base settings for any Truxt widget.",
              },
              { text: "modalSettings", description: "Settings for the modal." },
              {
                text: "searchSettings",
                description: "Additional search settings for the Truxt widget.",
              },
              { text: "aiChatSettings", description: "AI chat settings for the Truxt widget." },
            ],
          },
        ],
      },
      {
        heading: "Example",
        content: [
          {
            code: `
import type {
  TruxtChatButtonProps,
  TruxtChatButtonModalSettings,
} from "@truxt/uikit";
import baseSettings from "./baseSettings"; // your base settings typeof TruxtBaseSettings

const TruxtChatButtonProps: TruxtChatButtonProps = {
    chatButtonType: "PILL",
    chatButtonBgColor: "#000",
    chatButtonBgColorDarkMode: "#fff",
    isPositionFixed: true,
    fixedPositionXOffset: "1.5rem",
    fixedPositionYOffset: "1.5rem",
    baseSettings : {
        ...baseSettings
    },
    modalSettings : {
        //... typeof TruxtModalSettings
    },
    searchSettings : {
        //... typeof TruxtSearchSettings
    },
    aiChatSettings : {
        //... typeof TruxtAIChatSettings
    },
};
            `,
          },
        ],
      },
    ],
  },
};
