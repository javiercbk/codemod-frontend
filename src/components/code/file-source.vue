<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12" v-if="generatedHTML">
        <pre><code class="language-javascript" v-html="generatedHTML"></code></pre>
      </div>
    </div>
  </div>
</template>
<script src="./file-source.js"></script>
