(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{185:function(t,e,o){var content=o(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("ebbfd6f6",content,!0,{sourceMap:!1})},193:function(t,e,o){"use strict";o(185)},194:function(t,e,o){(e=o(60)(!1)).push([t.i,".full-height[data-v-127c528d]{height:99vh}",""]),t.exports=e},209:function(t,e,o){"use strict";o.r(e);o(78);var r={middleware:["isGuest"],data:function(){return{email:"johndoe@example.org",password:"12345678",error:""}},methods:{login:function(){var t=this;console.log("logging in"),this.$axios.post("/api/auth/login",{email:this.email,password:this.password}).then((function(e){var data=e.data;console.log(data),t.$store.commit("setAuth",data),"admin"==data.user.role?t.$router.replace("/admin/dashboard"):t.$router.replace("/customer/home")})).catch((function(e){console.log(e),console.log(e.response),e.response.data.error&&(t.error=e.response.data.error)}))}}},n=(o(193),o(20)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-sm-center align-items-center full-height"},[o("div",{staticClass:"col-sm-6 col-md-4"},[o("div",{staticClass:"card border-info text-center"},[o("div",{staticClass:"card-header"},[t._v("\n\t          Sign in to continue\n\t        ")]),t._v(" "),o("div",{staticClass:"card-body"},[o("h4",{staticClass:"text-center"},[t._v("Customer")]),t._v(" "),o("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control mb-2",attrs:{type:"email",placeholder:"Email",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control mb-2",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.error?o("div",{staticClass:"text text-danger py-2"},[o("small",[t._v(t._s(t.error)+" !")])]):t._e(),t._v(" "),o("button",{staticClass:"btn btn-lg btn-primary btn-block mb-1",attrs:{type:"submit"}},[t._v("Sign in")])])])])])])])])}),[],!1,null,"127c528d",null);e.default=component.exports}}]);