import { useThemeStore } from '../../stores/themeStore';
import { Motion } from "solid-motionone";
import {createEffect, createSignal} from "solid-js";

function Button(props) {
    const { isDark } = useThemeStore();
    const { className, children, animate = false, ...rest } = props;
    const baseClass = () => `btn ${className || ''}`.trim();
    const [theme, setTheme] = createSignal(isDark() ? 'dark' : 'light');
    createEffect(() => setTheme(isDark() ? 'dark' : 'light'));
    if (animate) {
        return (
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}

            >
                <button class={baseClass()}
                        data-theme={theme()}
                        {...rest}>
                    {children}
                </button>
            </Motion.div>
        );
    }
    return (
        <button
            class={baseClass()}
            data-theme={theme()}
            {...rest}
        >
            {children}
        </button>
    );
}
export default Button;
