export default {
  props: {
    file: Object,
  },
  beforeCreate() {
    // eslint-disable-next-line global-require
    this.$options.components.FileTree = require('./file-tree.vue').default;
  },
  data() {
    return {
      opened: false,
      openedOnce: false,
    };
  },
  computed: {
    fullFolder() {
      if (this.file.folder) {
        return `${this.file.folder}${this.file.name}`;
      }
      return this.file.name;
    },
  },
  methods: {
    onTreeFileSelected(data) {
      this.$emit('select-file', data);
    },
    clickFolder() {
      this.openedOnce = true;
      this.opened = !this.opened;
    },
  },
};
