import { createStore } from 'solid-js/store';

const [state, setState] = createStore({
    isDark: localStorage.getItem('theme') ?
        localStorage.getItem('theme') === 'true' :
        true
});

export function useThemeStore() {
    return {
        isDark: () => state.isDark,
        toggleTheme: () => {
            const newTheme = !state.isDark;
            setState('isDark', newTheme);
            localStorage.setItem('theme', String(newTheme));
        }
    };
}