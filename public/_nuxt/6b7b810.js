(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{187:function(t,e,r){var content=r(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("668588aa",content,!0,{sourceMap:!1})},197:function(t,e,r){"use strict";r(187)},198:function(t,e,r){(e=r(60)(!1)).push([t.i,".full-height[data-v-d860de92]{height:99vh}",""]),t.exports=e},212:function(t,e,r){"use strict";r.r(e);r(78),r(21);var o={middleware:["isGuest"],data:function(){return{name:"",email:"",password:"",password_confirmation:"",errors:{}}},methods:{login:function(){var t=this;this.$axios.post("/api/auth/register",{name:this.name,email:this.email,password:this.password,password_confirmation:this.password_confirmation}).then((function(e){var data=e.data;t.$store.commit("setAuth",data),t.$router.replace("/admin/auth/login")})).catch((function(e){t.errors=e.response.data.errors,console.log(t.errors)}))}}},n=(r(197),r(20)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-sm-center align-items-center full-height"},[r("div",{staticClass:"col-sm-6 col-md-4"},[r("div",{staticClass:"card border-info text-center"},[r("div",{staticClass:"card-header"},[t._v("\n\t          Register Admin\n\t        ")]),t._v(" "),r("div",{staticClass:"card-body"},[r("h4",{staticClass:"text-center"},[t._v("Admin")]),t._v(" "),r("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control mb-2",class:{"is-invalid":t.errors.name},attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),t.errors.name?r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.name[0]))]):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control mb-2",class:{"is-invalid":t.errors.email},attrs:{type:"email",placeholder:"Email",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.errors.email?r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.email[0]))]):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control mb-2",class:{"is-invalid":t.errors.password},attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.errors.password?r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.password[0]))]):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirmation,expression:"password_confirmation"}],staticClass:"form-control mb-2",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.password_confirmation},on:{input:function(e){e.target.composing||(t.password_confirmation=e.target.value)}}})]),t._v(" "),t.error?r("div",{staticClass:"text text-danger py-2"},[r("small",[t._v(t._s(t.error)+" !")])]):t._e(),t._v(" "),r("button",{staticClass:"btn btn-lg btn-primary btn-block mb-1",attrs:{type:"submit"}},[t._v("Sign in")])]),t._v(" "),r("nuxt-link",{staticClass:"float-right mt-2",attrs:{to:"/admin/auth/login"}},[t._v("Register")])],1)])])])])])}),[],!1,null,"d860de92",null);e.default=component.exports}}]);