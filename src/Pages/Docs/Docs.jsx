import React from "react";
import "./Docs.css";
// import DocsSidebar from "../../Components/DocsSidebar/DocsSidebar";
// import DocsHeader from "../../Components/DocsHeader/DocsHeader";
import { Routes, Route, useParams } from "react-router-dom";


function Docs() {
  
  const MarkdownLoader = () => {
    const { id } = useParams();
    const [markdown, setMarkdown] = useState('');
    
    // Map of routes to markdown file names
    const markdownFiles = {
      '/getting-started': 'getting-started.md',
      '/privacy': 'privacy.md',
      '/why-truxt': 'why-truxt.md',
      '/react': 'react-docs.md',
      '/js-snippet': 'js-snippet.md',
      '/common-snippet': 'common-snippet.md',
      '/pricing': 'pricing.md',
      '/project': 'project.md',
      '/feedback': 'feedback.md',
    };

    useEffect(() => {
      const filePath = markdownFiles[id];
      if (filePath) {
        fetch(`../../MD/${filePath}`) 
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.text();
          })
          .then((text) => setMarkdown(text))
          .catch((error) => console.error('Error fetching markdown:', error));
      } else {
        setMarkdown(''); 
      }
    }, [id]);
  
    console.log(markdown);

  return (    
    <>
    <DocsHeader/>
    <div className="Docs">
      <DocsSidebar />
      <div className="content">
        <Routes>
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/why-truxt" element={<WhyTruxt />} />
          <Route path="/react" element={<ReactDocs />} />
          <Route path="/js-snippet" element={<JSSnippet />} />
          <Route path="/common-snippet" element={<CommonSnippet />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/project" element={<Project />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default Docs;
