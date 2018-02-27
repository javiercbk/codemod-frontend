export default {
  props: {
    file: Object,
  },
  methods: {
    selectFile() {
      this.$emit('select-file', this.file);
    },
  },
};
