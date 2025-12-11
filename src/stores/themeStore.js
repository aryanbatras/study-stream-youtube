// src/stores/themeStore.js
import { createStore } from 'solid-js/store';

const [state, setState] = createStore({
    isDark: true
});

export function useThemeStore() {
    return {
        isDark: () => state.isDark,
        toggleTheme:  () => setState('isDark', (prev) => !prev)
    };
}