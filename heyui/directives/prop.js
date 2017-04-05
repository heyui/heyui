export default {
  prop: (el, binding) => {
    if(binding.value){
      el.setAttribute('disabled', 'disabled');
    }else{
      el.removeAttribute('disabled');
    }
  }
}
