import { createWebHistory, createRouter} from "vue-router";
import Counter from "@/views/Counter.vue";
import Todo from "@/views/Todo.vue";

const routes = [
    {
        path: "/",
        name: "Counter",
        component: Counter,
    },
    {
        path: "/todo",
        name: "Todo",
        component: Todo,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;