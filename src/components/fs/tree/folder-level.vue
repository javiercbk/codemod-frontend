<template>
  <div>
    <span class="app-clickable tree-clickable" @click="clickFolder">
      <i class="fas" :class="{'fa-caret-right': !opened, 'fa-caret-down': opened}"></i>
    </span>
    <span class="app-clickable tree-clickable" @click="clickFolder">{{file.name}}</span>
    <div v-if="openedOnce" v-show="opened">
      <file-tree @select-file="onTreeFileSelected" :folder="fullFolder" ></file-tree>
    </div>
  </div>
</template>
<script src="./folder-level.js"></script>
