import { createTemplate, getNewComponent, applyCSS } from '../utils';

const css = /*css*/ `
  [data-component="remove-button"] {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

applyCSS(css);

const RemoveButton = ({ targetElement }) => {
  const html = /*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
      <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
    </svg>
  `;
  const template = createTemplate(html);
  const newRemoveButton = getNewComponent(targetElement, template);

  return newRemoveButton;
};

export default RemoveButton;
