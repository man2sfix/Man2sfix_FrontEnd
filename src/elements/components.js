import Vue from 'vue'
import ElementLang from 'element-ui/lib/locale/lang/ko'
import ElementLocale from 'element-ui/lib/locale'

import {
  Button,
  Select,
  Option,
  Loading,
  Radio,
  RadioGroup,
  Input,
  Dialog,
  Form,
  FormItem,
  Collapse,
  CollapseItem,
  Message,
  Upload,
  Checkbox,
  DatePicker,
  Pagination,
  Tabs,
  TabPane
} from 'element-ui'

import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/button.css'
import 'element-ui/lib/theme-chalk/select.css'
import 'element-ui/lib/theme-chalk/option.css'
import 'element-ui/lib/theme-chalk/loading.css'
import 'element-ui/lib/theme-chalk/radio.css'
import 'element-ui/lib/theme-chalk/radio-group.css'
import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/dialog.css'
import 'element-ui/lib/theme-chalk/form.css'
import 'element-ui/lib/theme-chalk/form-item.css'
import 'element-ui/lib/theme-chalk/collapse.css'
import 'element-ui/lib/theme-chalk/collapse-item.css'
import 'element-ui/lib/theme-chalk/message.css'
import 'element-ui/lib/theme-chalk/upload.css'
import 'element-ui/lib/theme-chalk/checkbox.css'
import 'element-ui/lib/theme-chalk/date-picker.css'
import 'element-ui/lib/theme-chalk/pagination.css'
import 'element-ui/lib/theme-chalk/tabs.css'
import 'element-ui/lib/theme-chalk/tab-pane.css'

ElementLocale.use(ElementLang)

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Loading.directive)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Upload)
Vue.use(Checkbox)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.prototype.$message = Message
