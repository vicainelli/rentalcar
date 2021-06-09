<template>
  <div
    :id="id"
    :data-test-id="id"
    :class="[sizeClasses[size]]"
    class="animate-spinner ease-linear rounded-full border border-gray-300 border-t-blue-500"
  ></div>
</template>

<script>
export default {
  name: 'loading-spinner',
  props: {
    id: {
      type: String,
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => value.match(/(sm|md|lg)/),
    },
  },
  data: () => ({
    sizeClasses: {
      sm: 'border-2 h-6 w-6',
      md: 'border-4 h-8 w-8',
      lg: 'border-8 h-20 w-20',
    },
  }),
}
</script>
<style>
.border-t-blue-500 {
  border-top-color: #3b82f6 !important;
}
</style>
