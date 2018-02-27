import { getAllFiles } from '@/lib/services/file-service';

export default {
  props: {
    file: String,
  },
  created() {
    this._retrieveAllFiles();
  },
  data() {
    return {
      files: [],
    };
  },
  computed: {
    options() {
      return this.files.map(f => ({
        value: `${f.folder}/${f.name}`,
        text: `${f.folder}/${f.name}`,
      }));
    },
    selectedFile() {
      let fileChosen = '';
      if (this.file) {
        fileChosen = this.file;
      }
      return { value: fileChosen, text: fileChosen };
    },
  },
  methods: {
    onFileSelect(file) {
      this.$emit('select-file', file);
    },
    _retrieveAllFiles() {
      getAllFiles()
        .then((response) => {
          this.files = response.data.data.files;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
