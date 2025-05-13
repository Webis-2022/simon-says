import { createHtmlElement } from '../html-element/html-element';
import { createSelectTemplateButton } from '../selectTemplateButton/select-template-button';
import { createTimer } from '../timer/timer';
import './header.css';

export function createHeader() {
  const header = createHtmlElement('header', ['header']);

  const headerWrapper = createHtmlElement('div', ['header-wrapper']);

  const headerInner = createHtmlElement('div', ['header-inner']);
  const selectTemplateButton = createSelectTemplateButton();
  const timer = createTimer();

  headerInner.append(selectTemplateButton, timer);
  headerWrapper.append(headerInner);
  header.append(headerWrapper);
  document.body.append(header);
}
