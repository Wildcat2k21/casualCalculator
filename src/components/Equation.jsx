import katex from "katex";

const equasion = ({ latexText }) => (
  <div
    className="equation-item"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: katex.renderToString(latexText),
    }}
  />
);

export default equasion;
