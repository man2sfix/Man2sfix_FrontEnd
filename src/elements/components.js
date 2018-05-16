import Vue from 'vue'
import ElementLang from 'element-ui/lib/locale/lang/ko'
import ElementLocale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css'

import {
  Button,
  Select,
  Pagination,
  Card,
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
  DatePicker
} from 'element-ui'

ElementLocale.use(ElementLang)

Vue.use(Button)
Vue.use(Select)
Vue.use(Pagination)
Vue.use(Card)
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

Vue.prototype.$message = Message
