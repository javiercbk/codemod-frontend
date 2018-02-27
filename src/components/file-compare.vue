<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 file-list-container">
        <file-list @select-file="onFileSelect"></file-list>
      </div>
    </div>
    <div class="row" v-if="originalSource">
      <div class="col-12 col-md-6 source-file">
        <file-source :source="originalSource"></file-source>
      </div>
      <div class="col-12 col-md-6 source-file">
        <file-source v-if="modifiedSource" :source="modifiedSource"></file-source>
      </div>
    </div>
  </div>
</template>
<script src="./file-compare.js"></script>
<style lang="scss" src="./file-compare.scss" scoped></style>
