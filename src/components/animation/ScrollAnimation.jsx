import Text from "../reusable/Text.jsx";
import Section from "../reusable/Section.jsx";
import { Motion } from "solid-motionone";

const ScrollAnimation = () => {
    return (
         <Section className={"h-12 py-0"}>
            <Motion.div className="bg-red-300 overflow-hidden whitespace-nowrap">
                <Motion.div
                    viewport={{ once: true }}
                    class="inline-block"
                    animate={{ x: [0, -430] }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 25,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    <Text className="text-4xl opacity-80 font-bold tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        CodeCompanionCodeCompanionCodeCompanionCodeCompanionCodeCompanionCodeCompanion
                    </Text>
                </Motion.div>
            </Motion.div>
        </Section> 
    );
}

export default ScrollAnimation;