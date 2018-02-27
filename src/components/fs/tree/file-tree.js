import { getFile } from '@/lib/services/file-service';
import FileLevel from './file-level.vue';
import FolderLevel from './folder-level.vue';

export default {
  components: {
    FileLevel,
    FolderLevel,
  },
  props: {
    folder: String,
  },
  created() {
    this._requestFolder();
  },
  data() {
    return {
      loading: true,
      allFilesInLevel: [],
    };
  },
  computed: {
    foldersInLevel() {
      return this.allFilesInLevel.filter(f => f.fileType === 'folder');
    },
    filesInLevel() {
      return this.allFilesInLevel.filter(f => f.fileType === 'file');
    },
  },
  methods: {
    onTreeFileSelected(data) {
      this.$emit('select-file', data);
    },
    _requestFolder() {
      getFile(this.folder)
        .then((response) => {
          this.allFilesInLevel = response.data.data.files;
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  },
};
