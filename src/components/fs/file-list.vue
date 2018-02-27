<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <file-select @select-file="fileSelected" :file="file"></file-select>
      </div>
      <div class="col-12">
        <file-tree @select-file="fileSelected" folder="/"></file-tree>
      </div>
    </div>
  </div>
</template>
<script src="./file-list.js"></script>
