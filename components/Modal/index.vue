<script setup>
const close = () => {};
const open = () => {};
</script>

<template>
  <div class="bg-gray-800 bg-opacity-50 relative z-999 w-full h-full">
    <div class="w-30 h-20 b-1px b-solid b-white shadow relative top-50% left-50% -translate-50%">
      <div class="h-4 w-full">
        <h2>A big title</h2>
        <div btn-square right-0 top-0 absolute data-cursor="block">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4h2Z" />
          </svg>
        </div>
      </div>
      <div class="w-full h-auto min-h-4">
        <slot name="modal-action">
          <button class="btn">做点什么</button>
        </slot>
      </div>
    </div>
  </div>
</template>
