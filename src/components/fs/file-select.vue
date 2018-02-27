<template>
  <basic-select
    :selected-option="selectedFile"
    @select="onFileSelect"
    placeholder="Choose source file"
    title="File"
    :options="options">
  </basic-select>
</template>
<script src="./file-select.js"></script>
