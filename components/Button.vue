<template>
  <div>
    <button
      class="w-full h-[9vh] px-px-[1rem] px-py-[1.5rem] inline-flex justify-center items-center gap-[0.5rem] text-heading-6 text-white text-center font-poppins"
    >
      {{ label }}
    </button>
  </div>
</template>
<script setup>
defineProps({
  label: String,
});
</script>
