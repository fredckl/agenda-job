import rules from './messages/rules.json';
import page from './messages/page.json';

export default ({
  translation: {
    ...rules,
    ...page
  }
});