import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

export default ({
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
}) => (
  <NodeViewWrapper className="code-block">
    <pre className="flex flex-row flex-wrap">
      <div className="mr-auto">
        <NodeViewContent as="code" />
      </div>
      <select
        contentEditable={false}
        defaultValue={defaultLanguage}
        onChange={(event) => updateAttributes({ language: event.target.value })}
        className="select select-sm ml-auto"
        tabIndex="-1"
      >
        <option value="null">auto</option>
        <option disabled>—</option>
        {extension.options.lowlight.listLanguages().map((lang, index) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </pre>
  </NodeViewWrapper>
);
