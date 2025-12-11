import { Motion } from "solid-motionone";
import Text from "../components/reusable/Text.jsx";
import Button from "../components/reusable/Button.jsx";
import Section from "../components/reusable/Section.jsx";
import TextRotate from "../components/external/TextRotate.jsx";
import ShinyText from "../components/external/ShinyText.jsx";
import GlassButton from "../components/external/GlassButton.jsx";
import {createSignal} from "solid-js";
import Globe from "../components/external/Globe.jsx";
import {A} from "@solidjs/router";

const Home = () => {

    return (
    <>
        <Section className="h-screen min-w-screen px-2 flex flex-col justify-center items-center">
            <Motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-2 min-w-screen h-24 items-center  justify-center mb-25 text-center"
            >
                <TextRotate>
                    .
                    Welcome
                    Companions
                    Let'sStudy
                    Together


                </TextRotate>

                <Globe />
            </Motion.div>

            <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                class="mb-8"
            >
                <Text animate={true} className="px-8 text-sm font-serif italic underline-offset-1 opacity-80 text-center">
                    <ShinyText> Join a community of learners studying together in real-time </ShinyText>
                </Text>
            </Motion.div>

            <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                class="mb-8 flex gap-4 mx-auto max-w-2xl"
            >
                <GlassButton>
                    <A href="/dashboard">
                        See Others Live
                    </A>
                    </GlassButton>

            </Motion.div>


        </Section>

    </>
    );
};

export default Home;

