import Section from "../components/reusable/Section.jsx";
import Text from "../components/reusable/Text.jsx";
import Button from "../components/reusable/Button.jsx";
import { Motion } from "solid-motionone";
import {useThemeStore} from "../stores/themeStore.js";
import ThemeSwitch from "../components/external/ThemeSwitch.jsx";

export default function Footer() {
    const { isDark } = useThemeStore();
    return (
        <Section className="h-5vh py-0 px-5 flex justify-between items-center gap-2">
            <Text animate={true}
            className="font-mono text-xs opacity-80 flex flex-col gap-1 items-center">
                {isDark() ? "Dark" : "Light"}
                <ThemeSwitch className={"pt-0.75  opacity-80"} />
            </Text>

            <Motion.div
                initial={{ opacity: 0, scale: 0 }}
                inView={{
                    opacity: 1,
                    scaleY: 1,
                    transition: { duration: 0.8 }
                }}
                viewport={{ once: true }}>
                    <Text
                    className={"text-xs opacity-80"}>
                        &copy; 2025 Code Companion. All Rights Reserved.
                    </Text>
            </Motion.div>
        </Section>
    );
}