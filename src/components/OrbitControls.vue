<script>
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


export default {
  name:'iv-orbit-controls',
  inject: ['vglNamespace'],
  props: ['camera'],
  computed: {
    cmr () {
    return this.vglNamespace.cameras.hash[this.camera]
    }
  },
  watch: {
    cmr: {
      handler(cmr) {
        this.$nextTick(function () {
           const controls = new OrbitControls(cmr, this.$parent.$el)
           controls.addEventListener('change', function() {
             this.$parent.requestRender()
           }.bind(this))
        }.bind(this))
      },
      immediate: true,
    }
  },
  render(h) {
    return h('div');
  },
};
</script>