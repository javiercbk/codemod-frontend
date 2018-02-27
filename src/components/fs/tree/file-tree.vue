<template>
  <div class="container-fluid">
    <div class="row" v-if="loading">
      <div class="col-12">
        <i class="fas fa-spinner fa-pulse"></i>
      </div>
    </div>
    <div class="row" v-if="!loading" v-for="folderLevel in foldersInLevel" :key="folderLevel.name">
      <div class="col-12">
        <folder-level @select-file="onTreeFileSelected" :file="folderLevel"></folder-level>
      </div>
    </div>
    <div class="row" v-if="!loading" v-for="fileLevel in filesInLevel" :key="fileLevel.name">
        <div class="col-12">
          <file-level @select-file="onTreeFileSelected" :file="fileLevel"></file-level>
        </div>
    </div>
  </div>
</template>
<script src="./file-tree.js"></script>

