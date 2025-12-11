import { useThemeStore } from '../../stores/themeStore';
import { Motion } from "solid-motionone";
import { createMemo } from 'solid-js';

const Text = (props) => {
    const { isDark } = useThemeStore();
    const { className, children, animate = false, ...rest } = props;
    const themeClass = createMemo(() => isDark() ? 'text-white' : 'text-black');
    const baseClasses = () => `${className || ''} ${themeClass()}`;
    if (animate) {
        return (
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                inView={{
                    opacity: 1,
                    scaleY: 1,
                    transition: { duration: 1.2 }
                }}
                viewport={{ once: true }}
            >
                <span
                    class={baseClasses()}
                    {...rest}>
                    {children}
                </span>
            </Motion.div>
        );
    }
    return (
        <span class={baseClasses()} {...rest}>
            {children}
        </span>
    );
};

export default Text;