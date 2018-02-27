import { getFile, getCodemod } from '@/lib/services/file-service';
import FileList from './fs/file-list.vue';
import FileSource from './code/file-source.vue';

export default {
  components: {
    FileList,
    FileSource,
  },
  data() {
    return {
      loading: true,
      originalFile: null,
      originalSource: '',
      modifiedSource: '',
    };
  },
  watch: {
    originalFile(newOriginalFile) {
      if (newOriginalFile) {
        this._retrieveFile(newOriginalFile.folder, newOriginalFile.name);
        this._retrieveCodemod(newOriginalFile);
      }
    },
  },
  methods: {
    onFileSelect(selectedFile) {
      this.originalFile = selectedFile;
    },
    _retrieveFile(folder, name) {
      this.loading = true;
      return getFile(folder, name)
        .then((response) => {
          this.loading = false;
          this.originalSource = response.data;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
    _retrieveCodemod(file) {
      this.loadingCodemod = true;
      getCodemod(file.folder, file.name)
        .then((response) => {
          this.loadingCodemod = false;
          this.modifiedSource = response.data;
        })
        .catch((err) => {
          this.loadingCodemod = false;
          console.log(err);
        });
    },
  },
};
