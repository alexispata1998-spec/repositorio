import { defineStore } from "pinia";
import { ref } from "vue";
import axiosRiksiri from "@/axios/axiosRiksiri";    
import { useContentStore } from "./content";

export const useUserStore = defineStore('user', () => {
    const contentStore = useContentStore();
    const token = ref(localStorage.getItem('token') || null);
    const user = ref(JSON.parse(localStorage.getItem('user') || '{}') || null);
    const login = ref({
        username: null,
        password: null  
    })

    const registro = ref({
        usuario: null,
        email: null,
        password: null,
    })

    function $registro(){
        return axiosRiksiri.post('register', registro.value).then( res => {
            $setLogin(res.data);
            return res.data;
        })
    }
    
    function $login(){
        return axiosRiksiri.post('login', login.value).then( res => {
            $setLogin(res.data);
            return res.data;
        });
    }

    function $setLogin(data: any | null){
        token.value = data?.token || null;
        if(token.value) {
            localStorage.setItem('token', token.value);
            localStorage.setItem('user', JSON.stringify(data.user));
            user.value = data.user;
            contentStore.$setMenu(data.menu);
            contentStore.$setHome(data.home);
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('menu');
            localStorage.removeItem('home');
        }
    }

    return { login, $login, token, $setLogin, registro, $registro, user }
});