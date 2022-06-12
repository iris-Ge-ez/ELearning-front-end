import Vuex from "vuex";
import axios from 'axios';
// import Cookie from "js-cookie";


const createStore = () => {
    return new Vuex.Store({ 

        state: {
            user:null,
            token: null,
            username:null,
            user_id:null,
            is_instractor:null,
            error:null,
            isloggin:false,
          },


          mutations: { 

            setToken(state, token) {
                state.token = token;
              },
            setRole(state, role) {
                state.is_instractor = role;
              },
              pushError(state, error) {
                state.error = error;
              },
              setUsername(state, username) {
                state.username = username;
              },
              setUserid(state, user_id) {
                state.user_id = user_id;
              },
              clearToken(state) {
                state.token = null;
                state.user = null;
                state.username = null;
                state.user_id = null;

                
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                localStorage.removeItem("user_id");
                localStorage.removeItem(
                  "tokenExpiration"
                  
                );


            },
              ToggleLoggin(state) {
                state.isloggin = !state.isloggin;
              },


          },

          actions: {

            authenticateUser(vuexContext, authData) {
                vuexContext.commit("ToggleLoggin")
                let authUrl = process.env.Url +"/users-login/";
                console.log(authData)
                return axios.post(authUrl, {
                    email: authData.email,
                    password: authData.password,
                  })
                  .then(result => {
                      console.log(result)
                    vuexContext.commit("setToken", result.data.key);
                    vuexContext.commit("setUsername", result.data.username);
                    vuexContext.commit("setUserid", result.data.user);
                    vuexContext.commit("setRole", result.data.is_instructor);

                    localStorage.setItem("token", result.data.key);
                    localStorage.setItem("username", result.data.username);
                    localStorage.setItem("user_id", result.data.user);
                    localStorage.setItem("is_instructor", result.data.is_instructor);
                    localStorage.setItem(
                      "tokenExpiration",
                      new Date().getTime()* 1000
                    );
                    // Cookie.set("jwt", result.idToken);
                    // Cookie.set(
                    //   "expirationDate",
                    //   new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
                    // );
                    this.$router.push({name:"index"})

                    vuexContext.commit("ToggleLoggin")

                  })
                  .catch(e => console.log(e.response.data.non_field_errors[0],
                    
                    vuexContext.commit("pushError",e.response.data.non_field_errors[0]),
                    vuexContext.commit("ToggleLoggin")

                    ));
              },


              initAuth(vuexContext, req) {
                let token;
                let expirationDate;
                let username;
                let user_id;
                let is_instractor;
                // if (req) {
                //   if (!req.headers.cookie) {
                //     return;
                //   }
                //   const jwtCookie = req.headers.cookie
                //     .split(";")
                //     .find(c => c.trim().startsWith("jwt="));
                //   if (!jwtCookie) {
                //     return;
                //   }
                //   token = jwtCookie.split("=")[1];
                //   expirationDate = req.headers.cookie
                //     .split(";")
                //     .find(c => c.trim().startsWith("expirationDate="))
                //     .split("=")[1];
                // }
                 
                  token = localStorage.getItem("token");
                  expirationDate = localStorage.getItem("tokenExpiration");
                  username = localStorage.getItem("username");
                  user_id = localStorage.getItem("user_id");
                  is_instractor = localStorage.getItem("is_instractor");
                 
                
                if (new Date().getTime() > +expirationDate || !token) {
                  console.log("No token or invalid token");
                  vuexContext.dispatch("logout");
                  return;
                }
                    vuexContext.commit("setToken", token);
                    vuexContext.commit("setUsername", username);
                    vuexContext.commit("setUserid", user_id);
                    vuexContext.commit("setRole",is_instractor);
              },
        
              logout(vuexContext) {
                vuexContext.commit("clearToken");
                // Cookie.remove("jwt");
                // Cookie.remove("expirationDate");
                if (process.client) {
                  localStorage.removeItem("token");
                  localStorage.removeItem("tokenExpiration");
                }
              }
          },
          getters:{
            isAuthenticated(state) {
                return state.token != null;
              }
          },

    })};



export default createStore;
