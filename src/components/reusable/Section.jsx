import { useThemeStore } from '../../stores/themeStore';
import {createEffect, createSignal} from 'solid-js';

const Section = (props) => {
    const { isDark } = useThemeStore();
    const { className, children, ...rest } = props;
    const [theme, setTheme] = createSignal(isDark() ? 'bg-black' : 'bg-white');
    createEffect(() => setTheme(isDark() ? 'bg-black' : 'bg-white'));
    return (
        <section class={`${theme()} ${className || ''}`} {...rest}>
            {children}
        </section>
    );
};
export default Section;

