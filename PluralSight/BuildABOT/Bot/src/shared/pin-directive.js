function applyStyle(el, binding) {
  Object.keys(binding.value).forEach((position) => {
    el.style[position] = binding.value[position];
  });
  el.style.position = 'absolute';
}

export default {
  // bind & update
  bind: (el, binding) => {
    applyStyle(el, binding);
  },
  update: (el, binding) => {
    applyStyle(el, binding);
  },
};
