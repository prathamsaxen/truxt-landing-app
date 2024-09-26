import privacy from "../MD/overview/privacy.md";
import getting_started from "../MD/overview/getting-started.md";
import why_truxt from "../MD/overview/why-truxt.md";

import feedback from "../MD/truxt/feedback.md";
import pricing from "../MD/truxt/pricing.md";
import project from "../MD/truxt/project.md";

import common_setting from '../MD/ui-component/common-settings.md';
import js_snippet from "../MD/ui-component/js-snippet.md";
import react_snippt from "../MD/ui-component/react-snippet.md";

const getMarkdownContent = async (id) => {
    switch (id) {
      case "privacy":
        return fetch(privacy).then(res => res.text());
      case "getting-started":
        return fetch(getting_started).then(res => res.text());
      case "why-truxt":
        return fetch(why_truxt).then(res => res.text());
      case "feedback":
        return fetch(feedback).then(res => res.text());
      case "pricing":
        return fetch(pricing).then(res => res.text());
      case "project":
        return fetch(project).then(res => res.text());
      case "common-settings":
        return fetch(common_setting).then(res => res.text());
      case "js-snippet":
        return fetch(js_snippet).then(res => res.text());
      case "react-snippet":
        return fetch(react_snippt).then(res => res.text());
      default:
        return "Page not found.";
    }
  };

export default getMarkdownContent;