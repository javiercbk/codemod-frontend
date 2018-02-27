import Prism from 'prismjs';

export default {
  props: {
    source: String,
    language: {
      type: Object,
      default: () => Prism.languages.javascript,
    },
  },
  created() {
    this._setSource(this.source);
  },
  data() {
    return {
      generatedHTML: '',
    };
  },
  watch: {
    source(newSource) {
      this._setSource(newSource);
    },
  },
  methods: {
    _generateHtml(source) {
      return Prism.highlight(source, this.language);
    },
    _setSource(source) {
      this.generatedHTML = this._generateHtml(source);
    },
  },
};
