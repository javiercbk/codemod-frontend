import FileSelect from './file-select.vue';
import FileTree from './tree/file-tree.vue';

export default {
  components: {
    FileSelect,
    FileTree,
  },
  props: {
    file: String,
  },
  methods: {
    fileSelected(data) {
      this.$emit('select-file', data);
    },
  },
};
