import Utils from '../utils/utils';

export default {
  height: (el, binding) => {
    if(binding.value){
      el.style.height = binding.value + "px";
    }
  },
  width: (el, binding) => {
    if(binding.value){
      el.style.width = binding.value + "px";
    }
  },
  color: (el, binding) => {
    if(binding.value){
      el.style.color = binding.value;
    }else if(binding.arg){
      Utils.addClass(el, `${binding.arg}-color`);
    }
  },
  bgColor: (el, binding) => {
    if(binding.value){
      el.style.backgroundColor = binding.value;
    }else if(binding.arg){
      Utils.addClass(el, `bg-${binding.arg}-color`);
    }
  },
}
